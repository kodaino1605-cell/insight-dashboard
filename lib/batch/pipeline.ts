import { NewsArticle } from '@/lib/types/news'
import { MOCK_ARTICLES } from '@/lib/mock/data'
import { RSS_SOURCES } from '@/lib/rss/sources'
import { fetchRSSArticles } from '@/lib/rss/fetch'
import { analyzeArticlesBatch } from '@/lib/ai/analyze'
import { rankAllCategories } from './ranking'
import { getServiceClient } from '@/lib/supabase/client'

export interface PipelineResult {
  success: boolean
  articles: NewsArticle[]
  batchDate: string
  isMock: boolean
  error?: string
}

const isProduction = !!(
  process.env.GEMINI_API_KEY &&
  process.env.NEXT_PUBLIC_SUPABASE_URL &&
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

export async function runBatchPipeline(): Promise<PipelineResult> {
  const batchDate = new Date().toISOString().split('T')[0]

  if (!isProduction) {
    return { success: true, articles: MOCK_ARTICLES, batchDate, isMock: true }
  }

  const startedAt = new Date().toISOString()
  console.log('[pipeline] start', { batchDate })
  const db = getServiceClient()

  try {
    // 1. RSS収集
    const rawArticles = await fetchRSSArticles(RSS_SOURCES)
    console.log('[pipeline] rss fetched', { count: rawArticles.length })
    if (rawArticles.length === 0) throw new Error('RSS収集結果が0件')

    // 2. Gemini分析（レートリミット考慮のバッチ処理）
    const analyzed = await analyzeArticlesBatch(rawArticles, batchDate)
    console.log('[pipeline] analyzed', { count: analyzed.length })
    if (analyzed.length === 0) throw new Error('AI分析結果が0件')

    // 3. カテゴリ別上位3件を選定
    const ranked = rankAllCategories(analyzed)
    console.log('[pipeline] ranked', { count: ranked.length })

    // 4. Supabaseへ保存（当日分を先に削除して冪等化）
    await db.from('news_articles').delete().eq('batch_date', batchDate)
    const { error: insertError } = await db.from('news_articles').insert(ranked)
    if (insertError) throw new Error(`DB保存エラー: ${insertError.message}`)
    console.log('[pipeline] saved to supabase')

    // 5. バッチ実行ログを記録
    await db.from('batch_runs').upsert({
      batch_date: batchDate,
      status: 'success',
      article_count: ranked.length,
      started_at: startedAt,
      finished_at: new Date().toISOString(),
    })

    return { success: true, articles: ranked, batchDate, isMock: false }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    console.error('[pipeline] error:', errorMessage, error)

    try {
      await db.from('batch_runs').upsert({
        batch_date: batchDate,
        status: 'failed',
        article_count: 0,
        error_message: errorMessage,
        started_at: startedAt,
        finished_at: new Date().toISOString(),
      })
    } catch (logError) {
      console.error('[pipeline] failed to write batch_runs:', logError)
    }

    return { success: false, articles: [], batchDate, isMock: false, error: errorMessage }
  }
}
