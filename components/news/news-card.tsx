import { NewsArticle } from '@/lib/types/news'

interface NewsCardProps {
  article: NewsArticle
  onClick: () => void
}

export function NewsCard({ article, onClick }: NewsCardProps) {
  return (
    <button
      onClick={onClick}
      className="w-full rounded-xl border border-gray-200 bg-white p-5 text-left transition-all duration-200 hover:border-gray-300 hover:shadow-md"
    >
      <div className="mb-2 flex items-center gap-2">
        <span className="text-xs text-gray-400">#{article.rank}</span>
        <span className="text-xs text-gray-400">{article.source_name}</span>
        {article.is_fallback && (
          <span className="rounded bg-amber-100 px-1.5 py-0.5 text-xs text-amber-600">
            前日データ
          </span>
        )}
      </div>
      <h3 className="mb-2 text-sm font-semibold leading-snug text-gray-900 line-clamp-2">
        {article.title}
      </h3>
      <p className="text-xs leading-relaxed text-gray-500 line-clamp-3">{article.summary}</p>
      <div className="mt-3 flex items-center justify-end">
        <span className="text-xs font-medium text-blue-600">詳細を見る →</span>
      </div>
    </button>
  )
}
