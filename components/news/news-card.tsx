import { NewsArticle } from '@/lib/types/news'

interface NewsCardProps {
  article: NewsArticle
  onClick: () => void
}

export function NewsCard({ article, onClick }: NewsCardProps) {
  return (
    <button
      onClick={onClick}
      className="group w-full overflow-hidden rounded-xl border border-gray-100 bg-white text-left transition-all duration-200 hover:border-indigo-200 hover:shadow-[0_4px_24px_rgba(79,70,229,0.07)]"
    >
      <div className="flex h-full">
        <div className="w-[3px] flex-shrink-0 bg-indigo-600 opacity-30 transition-opacity duration-200 group-hover:opacity-100" />
        <div className="flex flex-1 flex-col p-6">
          <div className="mb-3 flex items-center gap-2">
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-indigo-500">
              {article.source_name}
            </span>
            <span className="font-mono text-[10px] text-gray-200">·</span>
            <span className="font-mono text-[10px] text-gray-300">#{article.rank}</span>
            {article.is_fallback && (
              <span className="ml-1 rounded border border-amber-200 bg-amber-50 px-1.5 py-0.5 font-mono text-[9px] text-amber-500">
                前日
              </span>
            )}
          </div>
          <h3 className="mb-3 text-sm font-semibold leading-snug tracking-tight text-gray-900 line-clamp-3">
            {article.title}
          </h3>
          <p className="mt-auto text-xs leading-relaxed text-gray-400 line-clamp-2">
            {article.summary}
          </p>
        </div>
      </div>
    </button>
  )
}
