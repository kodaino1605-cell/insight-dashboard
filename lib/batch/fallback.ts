import { Category, NewsArticle } from '@/lib/types/news'

// 将来: Supabase から前日の batch_date データを取得してフォールバックする
export async function getFallbackArticles(_category: Category): Promise<NewsArticle[]> {
  // stub: 本実装では前日の batch_date でクエリし is_fallback=true を付与して返す
  return []
}
