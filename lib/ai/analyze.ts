import { z } from 'zod'
import { Category, GenerationTag, NewsArticle } from '@/lib/types/news'
import { RawArticle } from '@/lib/rss/fetch'

const AnalysisResultSchema = z.object({
  summary: z.string(),
  background_emotion: z.string(),
  desire: z.string(),
  trend_direction: z.string(),
  marketing_insight: z.string(),
  generation_tags: z.array(z.string()),
  category: z.string(),
})

export type AnalysisResult = z.infer<typeof AnalysisResultSchema>

// 将来: OpenAI API を呼び出す
export async function analyzeArticle(
  raw: RawArticle,
  _batchDate: string,
  rank: number
): Promise<NewsArticle | null> {
  // stub: 本実装では buildAnalysisPrompt で OpenAI を呼び出しスキーマ検証する
  void raw
  void rank
  return null
}
