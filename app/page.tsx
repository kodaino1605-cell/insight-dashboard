import { Header } from '@/components/layout/header'
import { CategoryCard } from '@/components/news/category-card'
import { getAllCategoryMeta, getLatestBatchDate } from '@/lib/data/articles'

export default async function HomePage() {
  const [categories, batchDate] = await Promise.all([
    getAllCategoryMeta(),
    getLatestBatchDate(),
  ])

  return (
    <div className="min-h-screen">
      <Header batchDate={batchDate} />
      <main className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="mb-10">
          <h2 className="text-xl font-semibold tracking-tight text-white/90">本日のインサイト</h2>
          <p className="mt-1.5 text-sm text-white/40">
            カテゴリを選択して、世代ごとの価値観・感情・欲望・マーケティング示唆を確認してください
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((meta) => (
            <CategoryCard key={meta.id} meta={meta} batchDate={batchDate} />
          ))}
        </div>
      </main>
    </div>
  )
}
