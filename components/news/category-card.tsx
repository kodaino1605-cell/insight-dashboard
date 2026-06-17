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
      <div className="flex overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.04] backdrop-blur-sm transition-all duration-200 hover:border-indigo-400/30 hover:bg-white/[0.07] hover:shadow-[0_4px_32px_rgba(79,70,229,0.12)]">
        <div className="w-[3px] flex-shrink-0 bg-indigo-500" />
        <div className="flex flex-1 flex-col p-6">
          <div className="mb-3 flex items-center justify-between">
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-indigo-400">
              {meta.label}
            </span>
            {isJK && (
              <span className="rounded border border-white/[0.12] px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-white/30">
                Beta
              </span>
            )}
          </div>
          <p className="flex-1 text-[0.8125rem] leading-6 text-white/50">{meta.description}</p>
          <div className="mt-5 flex items-center justify-between">
            <span className="font-mono text-[10px] text-white/25">{dateLabel}</span>
            <span className="font-mono text-[10px] text-white/25 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              3 insights ↗
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
