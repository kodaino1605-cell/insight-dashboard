interface HeaderProps {
  batchDate: string
  isFallback?: boolean
}

export function Header({ batchDate, isFallback }: HeaderProps) {
  const formatted = new Date(batchDate).toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-900">
              Generational Insight Dashboard
            </h1>
            <p className="text-sm text-gray-500">世代別インサイト分析ツール</p>
          </div>
          <div className="text-right text-sm">
            {isFallback ? (
              <span className="inline-flex items-center gap-1 rounded-md bg-amber-50 px-2 py-1 text-amber-700 ring-1 ring-amber-600/20">
                前日のデータを表示中
              </span>
            ) : (
              <span className="text-gray-500">{formatted} 8:00 更新</span>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
