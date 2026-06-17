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
    <div className="min-h-screen">
      <Header batchDate={batchDate} />
      <main className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="mb-10">
          <div className="mb-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white/30">
            <Link href="/" className="transition-colors hover:text-indigo-400">
              Dashboard
            </Link>
            <span>·</span>
            <span className="text-white/55">{meta.label}</span>
          </div>
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-semibold tracking-tight text-white/90">{meta.label}</h2>
            {meta.id === 'jk_trend' && (
              <span className="rounded border border-white/[0.12] px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-white/30">
                Beta · データソース拡充予定
              </span>
            )}
          </div>
          <p className="mt-1.5 text-sm text-white/40">{meta.description}</p>
        </div>

        <CategoryNewsList articles={articles} />
      </main>
    </div>
  )
}
