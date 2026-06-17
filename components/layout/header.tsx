interface HeaderProps {
  batchDate: string
  isFallback?: boolean
}

export function Header({ batchDate, isFallback }: HeaderProps) {
  const [year, month, day] = batchDate.split('-')
  const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
  const formatted = `${monthNames[parseInt(month) - 1]} ${day}, ${year} · 08:00 JST`

  return (
    <header className="bg-white">
      <div className="h-[2px] bg-indigo-600" />
      <div className="border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] font-bold tracking-[0.2em] text-indigo-600">
                GID
              </span>
              <div className="h-4 w-px bg-gray-200" />
              <h1 className="text-sm font-semibold tracking-tight text-gray-900">
                Generational Insight Dashboard
              </h1>
            </div>
            <div>
              {isFallback ? (
                <span className="inline-flex items-center rounded border border-amber-200 bg-amber-50 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-amber-600">
                  前日のデータを表示中
                </span>
              ) : (
                <span className="font-mono text-[11px] text-gray-400">{formatted}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
