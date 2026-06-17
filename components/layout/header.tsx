interface HeaderProps {
  batchDate: string
  isFallback?: boolean
}

export function Header({ batchDate, isFallback }: HeaderProps) {
  const [year, month, day] = batchDate.split('-')
  const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
  const formatted = `${monthNames[parseInt(month) - 1]} ${day}, ${year} · 08:00 JST`

  return (
    <header className="sticky top-0 z-40 bg-[#080d1a]/80 backdrop-blur-md">
      <div className="h-[2px] bg-indigo-500" />
      <div className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] font-bold tracking-[0.2em] text-indigo-400">
                GID
              </span>
              <div className="h-4 w-px bg-white/[0.12]" />
              <h1 className="text-sm font-semibold tracking-tight text-white/90">
                Generational Insight Dashboard
              </h1>
            </div>
            <div>
              {isFallback ? (
                <span className="inline-flex items-center rounded border border-amber-400/30 bg-amber-400/10 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-amber-300">
                  前日のデータを表示中
                </span>
              ) : (
                <span className="font-mono text-[11px] text-white/35">{formatted}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
