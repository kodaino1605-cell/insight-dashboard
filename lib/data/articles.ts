import { Category, CategoryMeta, CATEGORY_META, NewsArticle } from '@/lib/types/news'
import { MOCK_ARTICLES } from '@/lib/mock/data'
import { getAnonClient } from '@/lib/supabase/client'

const useSupabase = !!(
  process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export async function getLatestBatchDate(): Promise<string> {
  if (!useSupabase) return new Date().toISOString().split('T')[0]

  const db = getAnonClient()
  const { data } = await db
    .from('batch_runs')
    .select('batch_date')
    .eq('status', 'success')
    .order('batch_date', { ascending: false })
    .limit(1)
    .single()

  return data?.batch_date ?? new Date().toISOString().split('T')[0]
}

export async function getArticlesByCategory(category: Category): Promise<NewsArticle[]> {
  if (!useSupabase) {
    return MOCK_ARTICLES.filter((a) => a.category === category).sort((a, b) => a.rank - b.rank)
  }

  const db = getAnonClient()
  const batchDate = await getLatestBatchDate()

  const { data, error } = await db
    .from('news_articles')
    .select('*')
    .eq('category', category)
    .eq('batch_date', batchDate)
    .order('rank', { ascending: true })
    .limit(3)

  if (error || !data || data.length === 0) {
    // 当日データなし → 前日フォールバック
    const { data: fallbackData } = await db
      .from('news_articles')
      .select('*')
      .eq('category', category)
      .order('batch_date', { ascending: false })
      .order('rank', { ascending: true })
      .limit(3)

    return (fallbackData ?? []).map((a) => ({
      ...a,
      is_fallback: true,
      generation_tags: a.generation_tags ?? [],
    })) as NewsArticle[]
  }

  return data as NewsArticle[]
}

export async function getAllCategoryMeta(): Promise<CategoryMeta[]> {
  return CATEGORY_META
}
