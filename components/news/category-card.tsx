import Link from 'next/link'
import { CategoryMeta } from '@/lib/types/news'

const COLOR_MAP: Record<string, string> = {
  red: 'bg-red-50 border-red-200 hover:border-red-400',
  purple: 'bg-purple-50 border-purple-200 hover:border-purple-400',
  blue: 'bg-blue-50 border-blue-200 hover:border-blue-400',
  teal: 'bg-teal-50 border-teal-200 hover:border-teal-400',
  green: 'bg-green-50 border-green-200 hover:border-green-400',
  orange: 'bg-orange-50 border-orange-200 hover:border-orange-400',
  yellow: 'bg-yellow-50 border-yellow-200 hover:border-yellow-400',
  gray: 'bg-gray-50 border-gray-200 hover:border-gray-400',
  pink: 'bg-pink-50 border-pink-200 hover:border-pink-400',
}

const BADGE_MAP: Record<string, string> = {
  red: 'bg-red-100 text-red-700',
  purple: 'bg-purple-100 text-purple-700',
  blue: 'bg-blue-100 text-blue-700',
  teal: 'bg-teal-100 text-teal-700',
  green: 'bg-green-100 text-green-700',
  orange: 'bg-orange-100 text-orange-700',
  yellow: 'bg-yellow-100 text-yellow-700',
  gray: 'bg-gray-100 text-gray-700',
  pink: 'bg-pink-100 text-pink-700',
}

interface CategoryCardProps {
  meta: CategoryMeta
  batchDate: string
}

export function CategoryCard({ meta, batchDate }: CategoryCardProps) {
  const cardColor = COLOR_MAP[meta.color] ?? COLOR_MAP.gray
  const badgeColor = BADGE_MAP[meta.color] ?? BADGE_MAP.gray
  const isJK = meta.id === 'jk_trend'

  const formatted = new Date(batchDate).toLocaleDateString('ja-JP', {
    month: 'numeric',
    day: 'numeric',
  })

  return (
    <Link href={`/category/${meta.id}`} className="block">
      <div
        className={`rounded-xl border-2 p-5 transition-all duration-200 hover:shadow-md ${cardColor}`}
      >
        <div className="mb-3 flex items-start justify-between gap-2">
          <span className={`inline-block rounded-md px-2 py-1 text-xs font-semibold ${badgeColor}`}>
            {meta.label}
          </span>
          {isJK && (
            <span className="inline-block rounded-md bg-pink-100 px-2 py-0.5 text-xs text-pink-600 ring-1 ring-pink-300">
              実験的機能
            </span>
          )}
        </div>
        <p className="mb-4 text-sm leading-relaxed text-gray-600">{meta.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-400">{formatted} 8:00 更新</span>
          <span className="text-xs font-medium text-gray-500">3件のインサイト →</span>
        </div>
      </div>
    </Link>
  )
}
