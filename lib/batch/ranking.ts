import { Category, NewsArticle, CATEGORY_META } from '@/lib/types/news'

// カテゴリ別に上位3件を選定してランクを付与する
export function rankAllCategories(articles: NewsArticle[]): NewsArticle[] {
  const byCategory = new Map<Category, NewsArticle[]>()

  for (const meta of CATEGORY_META) {
    byCategory.set(meta.id, [])
  }

  for (const article of articles) {
    const list = byCategory.get(article.category)
    if (list) list.push(article)
  }

  const ranked: NewsArticle[] = []
  for (const [, list] of byCategory) {
    // 最大3件、ランク番号を付与
    list.slice(0, 3).forEach((a, i) => {
      ranked.push({ ...a, rank: i + 1 })
    })
  }

  return ranked
}
