import { Category, CategoryMeta, CATEGORY_META, NewsArticle } from '@/lib/types/news'
import { MOCK_ARTICLES } from '@/lib/mock/data'

// 将来: Supabase クエリに差し替える
export async function getArticlesByCategory(category: Category): Promise<NewsArticle[]> {
  return MOCK_ARTICLES.filter((a) => a.category === category).sort((a, b) => a.rank - b.rank)
}

// 将来: Supabase から最新 batch_date を取得する
export async function getLatestBatchDate(): Promise<string> {
  return new Date().toISOString().split('T')[0]
}

export async function getAllCategoryMeta(): Promise<CategoryMeta[]> {
  return CATEGORY_META
}
