import Groq from 'groq-sdk'
import { z } from 'zod'
import { Category, GenerationTag, NewsArticle } from '@/lib/types/news'
import { RawArticle } from '@/lib/rss/fetch'
import { ANALYSIS_SYSTEM_PROMPT, buildAnalysisPrompt } from './prompts/analyze'

const AnalysisResultSchema = z.object({
  summary: z.string(),
  background_emotion: z.string(),
  desire: z.string(),
  trend_direction: z.string(),
  marketing_insight: z.string(),
  generation_tags: z.array(z.string()),
  category: z.string(),
})

const VALID_CATEGORIES = new Set<string>([
  'big_news', 'businessman', 'jk_trend',
  'gen_alpha', 'gen_z', 'gen_millennial', 'gen_x', 'gen_bubble_dankai_jr', 'gen_senior',
])

const VALID_GENERATION_TAGS = new Set<string>([
  'gen_alpha', 'gen_z', 'gen_millennial', 'gen_x', 'gen_bubble_dankai_jr', 'gen_senior',
])

let _client: Groq | null = null

function getClient(): Groq {
  if (!_client) {
    const apiKey = process.env.GROQ_API_KEY
    if (!apiKey) throw new Error('GROQ_API_KEY is not set')
    _client = new Groq({ apiKey })
  }
  return _client
}

async function callGroq(title: string, content: string): Promise<string> {
  const client = getClient()
  const response = await client.chat.completions.create({
    model: 'llama-3.3-70b-versatile',
    messages: [
      { role: 'system', content: ANALYSIS_SYSTEM_PROMPT },
      { role: 'user', content: buildAnalysisPrompt(title, content) },
    ],
    response_format: { type: 'json_object' },
    temperature: 0.3,
  })
  return response.choices[0].message.content ?? ''
}

export async function analyzeArticle(
  raw: RawArticle,
  batchDate: string,
  rank: number
): Promise<NewsArticle | null> {
  try {
    const text = await callGroq(raw.title, raw.content)
    const parsed = AnalysisResultSchema.parse(JSON.parse(text))

    const category = VALID_CATEGORIES.has(parsed.category)
      ? (parsed.category as Category)
      : 'big_news'

    const generation_tags = parsed.generation_tags.filter((t): t is GenerationTag =>
      VALID_GENERATION_TAGS.has(t)
    )

    return {
      id: `${batchDate}-${require('crypto').createHash('sha256').update(raw.url).digest('hex').slice(0, 20)}`,
      title: raw.title,
      summary: parsed.summary,
      background_emotion: parsed.background_emotion,
      desire: parsed.desire,
      trend_direction: parsed.trend_direction,
      marketing_insight: parsed.marketing_insight,
      generation_tags,
      category,
      source_name: raw.sourceName,
      source_url: raw.url,
      published_at: raw.publishedAt,
      analyzed_at: new Date().toISOString(),
      batch_date: batchDate,
      rank,
      is_fallback: false,
      source_type: 'rss',
    }
  } catch (error) {
    console.error('[analyze] failed:', raw.title.slice(0, 40), error instanceof Error ? error.message : error)
    return null
  }
}

// Groq 無料枠: 12,000 TPM。順次処理 + 4s間隔でTPM上限を回避
export async function analyzeArticlesBatch(
  articles: RawArticle[],
  batchDate: string
): Promise<NewsArticle[]> {
  const CONCURRENCY = 1
  const DELAY_MS = 4000

  const results: NewsArticle[] = []

  for (let i = 0; i < articles.length; i += CONCURRENCY) {
    const batch = articles.slice(i, i + CONCURRENCY)
    const settled = await Promise.allSettled(
      batch.map((a, idx) => analyzeArticle(a, batchDate, i + idx + 1))
    )
    for (const r of settled) {
      if (r.status === 'fulfilled' && r.value) results.push(r.value)
    }
    if (i + CONCURRENCY < articles.length) {
      await new Promise((resolve) => setTimeout(resolve, DELAY_MS))
    }
  }

  return results
}
