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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-[4px]"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="relative flex max-h-[88vh] w-full max-w-2xl flex-col overflow-hidden rounded-xl border border-white/[0.10] bg-[#0d1425]/95 shadow-[0_25px_80px_rgba(0,0,0,0.6)] backdrop-blur-2xl">
        <div className="h-[2px] w-full flex-shrink-0 bg-indigo-500" />

        <div className="flex flex-shrink-0 items-start justify-between px-7 py-5">
          <div className="flex-1 pr-4">
            <div className="mb-2 flex items-center gap-2">
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-indigo-400">
                {article.source_name}
              </span>
              <span className="font-mono text-[10px] text-white/20">·</span>
              <span className="font-mono text-[10px] text-white/30">#{article.rank}</span>
            </div>
            <h2 className="text-base font-semibold leading-snug tracking-tight text-white/90">
              {article.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="flex-shrink-0 rounded-lg p-1.5 text-white/30 transition-colors hover:bg-white/[0.06] hover:text-white/60"
            aria-label="閉じる"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="overflow-y-auto">
          <div className="border-t border-white/[0.06] px-7 pb-8">
            <Section label="要約" content={article.summary} first />
            <Section label="背景感情" content={article.background_emotion} />
            <Section label="欲望" content={article.desire} />
            <Section label="時代の流れ" content={article.trend_direction} />
            <Section label="マーケティング示唆" content={article.marketing_insight} />
            <div className="pt-2">
              <a
                href={article.source_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-indigo-400 transition-colors hover:text-indigo-300"
              >
                元記事を読む
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Section({ label, content, first }: { label: string; content: string; first?: boolean }) {
  return (
    <div className={`py-5 ${first ? '' : 'border-t border-white/[0.06]'}`}>
      <span className="mb-2 block font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-white/30">
        {label}
      </span>
      <p className="text-sm leading-7 text-white/70">{content}</p>
    </div>
  )
}
