'use client'

import { useEffect } from 'react'
import { NewsArticle } from '@/lib/types/news'

interface NewsDetailModalProps {
  article: NewsArticle | null
  onClose: () => void
}

export function NewsDetailModal({ article, onClose }: NewsDetailModalProps) {
  useEffect(() => {
    if (!article) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [article, onClose])

  if (!article) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
        <div className="sticky top-0 flex items-start justify-between border-b border-gray-100 bg-white px-6 py-4">
          <div className="flex-1">
            <div className="mb-1 flex items-center gap-2 text-xs text-gray-400">
              <span>{article.source_name}</span>
              <span>·</span>
              <span>#{article.rank}</span>
            </div>
            <h2 className="text-base font-bold leading-snug text-gray-900">{article.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="ml-4 flex-shrink-0 rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
            aria-label="閉じる"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="space-y-5 px-6 py-5">
          <Section label="要約" emoji="📰" content={article.summary} />
          <Section label="背景感情" emoji="💭" content={article.background_emotion} />
          <Section label="欲望" emoji="✨" content={article.desire} />
          <Section label="時代の流れ" emoji="🌊" content={article.trend_direction} />
          <Section label="マーケティング示唆" emoji="💡" content={article.marketing_insight} />

          <div className="border-t border-gray-100 pt-4">
            <a
              href={article.source_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-blue-600 hover:underline"
            >
              元記事を読む
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

function Section({ label, emoji, content }: { label: string; emoji: string; content: string }) {
  return (
    <div>
      <h3 className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-gray-400">
        <span>{emoji}</span>
        {label}
      </h3>
      <p className="text-sm leading-relaxed text-gray-700">{content}</p>
    </div>
  )
}
