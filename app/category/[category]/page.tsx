import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Header } from '@/components/layout/header'
import { CategoryNewsList } from '@/components/news/category-news-list'
import { getArticlesByCategory, getLatestBatchDate } from '@/lib/data/articles'
import { CATEGORY_META, Category } from '@/lib/types/news'

interface PageProps {
  params: Promise<{ category: string }>
}

export async function generateStaticParams() {
  return CATEGORY_META.map((meta) => ({ category: meta.id }))
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params
  const meta = CATEGORY_META.find((m) => m.id === category)
  if (!meta) notFound()

  const [articles, batchDate] = await Promise.all([
    getArticlesByCategory(category as Category),
    getLatestBatchDate(),
  ])

  return (
    <div className="min-h-screen bg-gray-50">
      <Header batchDate={batchDate} />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link
            href="/"
            className="mb-4 inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700"
          >
            ← ダッシュボードに戻る
          </Link>
          <div className="mt-2 flex items-center gap-3">
            <h2 className="text-2xl font-bold text-gray-900">{meta.label}</h2>
            {meta.id === 'jk_trend' && (
              <span className="rounded-md bg-pink-100 px-2 py-0.5 text-xs text-pink-600 ring-1 ring-pink-300">
                実験的機能・データソース拡充予定
              </span>
            )}
          </div>
          <p className="mt-1 text-sm text-gray-500">{meta.description}</p>
        </div>

        <CategoryNewsList articles={articles} />
      </main>
    </div>
  )
}
