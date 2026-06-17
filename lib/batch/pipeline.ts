import { NewsArticle } from '@/lib/types/news'
import { MOCK_ARTICLES } from '@/lib/mock/data'

export interface PipelineResult {
  success: boolean
  articles: NewsArticle[]
  batchDate: string
  isMock: boolean
  error?: string
}

// バッチ処理のオーケストレーター
// 将来: RSS収集 → 重複排除 → 世代/カテゴリ分類 → AI分析 → 上位3件選定 → Supabase保存
export async function runBatchPipeline(): Promise<PipelineResult> {
  const batchDate = new Date().toISOString().split('T')[0]

  try {
    // 将来のステップ（スタブ）:
    // 1. const rawArticles = await fetchRSSArticles(RSS_SOURCES)
    // 2. const deduplicated = deduplicateArticles(rawArticles)
    // 3. const analyzed = await Promise.all(deduplicated.map(a => analyzeArticle(a, batchDate, 0)))
    // 4. const ranked = rankAllCategories(analyzed.filter(Boolean))
    // 5. await saveToSupabase(ranked, batchDate)

    return {
      success: true,
      articles: MOCK_ARTICLES,
      batchDate,
      isMock: true,
    }
  } catch (error) {
    return {
      success: false,
      articles: [],
      batchDate,
      isMock: true,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}
