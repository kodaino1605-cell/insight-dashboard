import { NewsArticle } from '@/lib/types/news'

interface NewsCardProps {
  article: NewsArticle
  onClick: () => void
}

export function NewsCard({ article, onClick }: NewsCardProps) {
  return (
    <button
      onClick={onClick}
      className="group h-full w-full overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.04] backdrop-blur-sm text-left transition-[border-color,background-color,box-shadow] duration-200 hover:border-indigo-400/30 hover:bg-white/[0.07] hover:shadow-[0_4px_32px_rgba(79,70,229,0.12)]"
    >
      <div className="flex h-full">
        <div className="w-[3px] flex-shrink-0 bg-indigo-500 opacity-35 transition-opacity duration-200 group-hover:opacity-100" />
        <div className="flex flex-1 flex-col p-6">
          <div className="mb-3 flex items-center gap-2">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-400">
              {article.source_name}
            </span>
            <span className="font-mono text-[11px] text-white/20">·</span>
            <span className="font-mono text-[11px] text-white/25">#{article.rank}</span>
            {article.is_fallback && (
              <span className="ml-1 rounded border border-amber-400/30 bg-amber-400/10 px-1.5 py-0.5 font-mono text-[9px] text-amber-300">
                前日
              </span>
            )}
          </div>
          <h3 className="mb-3 text-[15px] font-semibold leading-[1.5] tracking-tight text-white/90 line-clamp-3">
            {article.title}
          </h3>
          <p className="mt-auto text-[13px] leading-relaxed text-white/60 line-clamp-2">
            {article.summary}
          </p>
        </div>
      </div>
    </button>
  )
}
