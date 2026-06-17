-- news_articles: AI分析済み記事
create table if not exists news_articles (
  id text primary key,
  title text not null,
  summary text not null,
  background_emotion text not null,
  desire text not null,
  trend_direction text not null,
  marketing_insight text not null,
  generation_tags text[] not null default '{}',
  category text not null,
  source_name text not null,
  source_url text not null,
  published_at timestamptz not null,
  analyzed_at timestamptz not null,
  batch_date date not null,
  rank integer not null,
  is_fallback boolean not null default false,
  source_type text not null default 'rss',
  created_at timestamptz not null default now()
);

-- カテゴリ + バッチ日付の複合インデックス（読み取りクエリ最適化）
create index if not exists idx_news_articles_category_batch_date
  on news_articles (category, batch_date desc);

-- batch_runs: バッチ実行ログ
create table if not exists batch_runs (
  id uuid primary key default gen_random_uuid(),
  batch_date date not null unique,
  status text not null, -- 'success' | 'partial' | 'failed'
  article_count integer not null default 0,
  error_message text,
  started_at timestamptz not null,
  finished_at timestamptz not null,
  created_at timestamptz not null default now()
);

-- RLS: 匿名ユーザーは読み取りのみ
alter table news_articles enable row level security;
alter table batch_runs enable row level security;

create policy "anon can read news_articles"
  on news_articles for select
  to anon
  using (true);

create policy "anon can read batch_runs"
  on batch_runs for select
  to anon
  using (true);

-- service_role は RLS をバイパスするため書き込みポリシー不要
