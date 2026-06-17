import Parser from 'rss-parser'
import { RSSSource } from './sources'

export interface RawArticle {
  title: string
  url: string
  content: string
  sourceName: string
  publishedAt: string
}

const parser = new Parser({
  timeout: 10000,
  headers: { 'User-Agent': 'InsightDashboard/1.0' },
})

const MAX_PER_SOURCE = 5

async function fetchSingleSource(source: RSSSource): Promise<RawArticle[]> {
  const feed = await parser.parseURL(source.url)
  return (feed.items ?? [])
    .filter((item) => item.title && item.link)
    .slice(0, MAX_PER_SOURCE)
    .map((item) => ({
      title: item.title!.trim(),
      url: item.link!,
      content: (item.contentSnippet ?? item.content ?? item.summary ?? '').slice(0, 500),
      sourceName: source.name,
      publishedAt: item.isoDate ?? item.pubDate ?? new Date().toISOString(),
    }))
}

export async function fetchRSSArticles(sources: RSSSource[]): Promise<RawArticle[]> {
  const results = await Promise.allSettled(sources.map((s) => fetchSingleSource(s)))

  const articles: RawArticle[] = []
  for (const result of results) {
    if (result.status === 'fulfilled') {
      articles.push(...result.value)
    }
  }

  // URL単位で重複排除
  const seen = new Set<string>()
  return articles.filter((a) => {
    if (seen.has(a.url)) return false
    seen.add(a.url)
    return true
  })
}
