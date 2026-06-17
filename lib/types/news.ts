export type GenerationTag =
  | 'gen_alpha'
  | 'gen_z'
  | 'gen_millennial'
  | 'gen_x'
  | 'gen_bubble_dankai_jr'
  | 'gen_senior'

export type Category = 'big_news' | 'businessman' | 'jk_trend' | GenerationTag

export interface NewsArticle {
  id: string
  title: string
  summary: string
  background_emotion: string
  desire: string
  trend_direction: string
  marketing_insight: string
  generation_tags: GenerationTag[]
  category: Category
  source_name: string
  source_url: string
  published_at: string
  analyzed_at: string
  batch_date: string
  rank: number
  is_fallback: boolean
  source_type: 'rss' | 'manual' | 'sns'
}

export interface CategoryMeta {
  id: Category
  label: string
  description: string
  color: string
}

export const CATEGORY_META: CategoryMeta[] = [
  {
    id: 'big_news',
    label: 'ビッグニュース',
    description: '全世代が注目する社会的重要度の高いニュース',
    color: 'red',
  },
  {
    id: 'gen_alpha',
    label: 'α世代',
    description: '2010年頃〜2024年生まれ（2〜16歳）のトレンドと価値観',
    color: 'purple',
  },
  {
    id: 'gen_z',
    label: 'Z世代',
    description: '1995〜2009年生まれ（17〜31歳）の関心と欲望',
    color: 'blue',
  },
  {
    id: 'gen_millennial',
    label: 'ミレニアル世代',
    description: '1980〜1994年生まれ（32〜46歳）のライフスタイルと消費',
    color: 'teal',
  },
  {
    id: 'gen_x',
    label: 'X世代',
    description: '1965〜1979年生まれ（47〜61歳）の価値観と行動変化',
    color: 'green',
  },
  {
    id: 'gen_bubble_dankai_jr',
    label: 'バブル・団塊Jr世代',
    description: '1960〜1971年生まれ（55〜66歳）の経験と現在の関心',
    color: 'orange',
  },
  {
    id: 'gen_senior',
    label: 'シニア世代',
    description: '1959年以前生まれ（67歳以上）の生活と社会参加',
    color: 'yellow',
  },
  {
    id: 'businessman',
    label: 'ビジネスマン向け',
    description: '経営者・マーケター・ビジネスパーソンへの示唆',
    color: 'gray',
  },
  {
    id: 'jk_trend',
    label: 'JKトレンド',
    description: '女子高生を起点とした流行・関心事（実験的機能）',
    color: 'pink',
  },
]
