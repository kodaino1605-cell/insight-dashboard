import { Category, NewsArticle } from '@/lib/types/news'

// 将来: スコアリングロジックを実装してカテゴリ内上位3件を選定する
export function rankArticles(articles: NewsArticle[], _category: Category): NewsArticle[] {
  // stub: 本実装では速報性・ソース信頼度・関連度・インパクトでスコアリング
  return articles.slice(0, 3)
}
