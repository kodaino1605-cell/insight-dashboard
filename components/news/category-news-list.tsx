'use client'

import { useState } from 'react'
import { NewsArticle } from '@/lib/types/news'
import { NewsCard } from './news-card'
import { NewsDetailModal } from './news-detail-modal'

interface CategoryNewsListProps {
  articles: NewsArticle[]
}

export function CategoryNewsList({ articles }: CategoryNewsListProps) {
  const [selected, setSelected] = useState<NewsArticle | null>(null)

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <NewsCard key={article.id} article={article} onClick={() => setSelected(article)} />
        ))}
        {articles.length === 0 && (
          <p className="col-span-3 py-12 text-center text-sm text-white/30">
            本日の記事はまだ生成されていません
          </p>
        )}
      </div>
      <NewsDetailModal article={selected} onClose={() => setSelected(null)} />
    </>
  )
}
