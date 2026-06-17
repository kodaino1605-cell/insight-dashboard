import Link from 'next/link'
import { CategoryMeta } from '@/lib/types/news'

interface CategoryCardProps {
  meta: CategoryMeta
  batchDate: string
}

export function CategoryCard({ meta, batchDate }: CategoryCardProps) {
  const [, month, day] = batchDate.split('-')
  const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
  const dateLabel = `${monthNames[parseInt(month) - 1]} ${day}`
  const isJK = meta.id === 'jk_trend'

  return (
    <Link href={`/category/${meta.id}`} className="block group">
      <div className="flex overflow-hidden rounded-xl border border-gray-100 bg-white transition-all duration-200 hover:border-indigo-200 hover:shadow-[0_4px_24px_rgba(79,70,229,0.07)]">
        <div className="w-[3px] flex-shrink-0 bg-indigo-600" />
        <div className="flex flex-1 flex-col p-6">
          <div className="mb-3 flex items-center justify-between">
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-indigo-500">
              {meta.label}
            </span>
            {isJK && (
              <span className="rounded border border-gray-200 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-gray-400">
                Beta
              </span>
            )}
          </div>
          <p className="flex-1 text-[0.8125rem] leading-6 text-gray-500">{meta.description}</p>
          <div className="mt-5 flex items-center justify-between">
            <span className="font-mono text-[10px] text-gray-300">{dateLabel}</span>
            <span className="font-mono text-[10px] text-gray-300 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              3 insights ↗
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
