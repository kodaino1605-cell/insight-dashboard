export interface RSSSource {
  name: string
  url: string
  weight: number
}

// 将来: このリストからフィードを取得する
export const RSS_SOURCES: RSSSource[] = [
  { name: 'NHK', url: 'https://www.nhk.or.jp/rss/news/cat0.xml', weight: 1.0 },
  { name: '日本経済新聞', url: 'https://www.nikkei.com/rss/news.rdf', weight: 1.0 },
  { name: 'Yahoo!ニュース', url: 'https://news.yahoo.co.jp/rss/topics/top-picks.xml', weight: 0.9 },
  { name: 'ITmedia', url: 'https://rss.itmedia.co.jp/rss/2.0/news_bursts.xml', weight: 0.8 },
  { name: 'TechCrunch Japan', url: 'https://jp.techcrunch.com/feed/', weight: 0.7 },
]
