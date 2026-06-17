import { RSSSource } from './sources'

export interface RawArticle {
  title: string
  url: string
  sourceName: string
  publishedAt: string
}

// 将来: rss-parser を使ってフィードを取得する
export async function fetchRSSArticles(_sources: RSSSource[]): Promise<RawArticle[]> {
  // stub: 本実装では各ソースをtry-catchしながら並列取得
  return []
}
