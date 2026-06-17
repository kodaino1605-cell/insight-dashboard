# Repository Structure（ディレクトリ構造・命名規則）

> 最終更新日: 2026-06-16
> 関連ファイル: [architecture.md](./architecture.md) / [development-guidelines.md](./development-guidelines.md)

## 1. 本書の目的

実際のディレクトリ構造・命名規則・主要ファイルの配置ルールを定義し、実装時のブレを防ぐ。技術的な意思決定の背景は [architecture.md](./architecture.md) を参照。

---

## 2. ディレクトリ構造案

```
insight-dashboard/
├── CLAUDE.md
├── docs/
│   ├── product-requirements.md
│   ├── functional-design.md
│   ├── architecture.md
│   ├── repository-structure.md
│   ├── development-guidelines.md
│   └── glossary.md
├── app/
│   ├── layout.tsx
│   ├── page.tsx                       # トップページ（9カテゴリのカード一覧）
│   ├── category/
│   │   └── [category]/
│   │       └── page.tsx               # カテゴリ別記事一覧
│   ├── api/
│   │   └── cron/
│   │       └── generate/
│   │           └── route.ts           # バッチ生成エンドポイント（Vercel Cronから呼ばれる）
│   └── globals.css
├── components/
│   ├── ui/                            # 汎用UIパーツ（Card, Badge等）
│   ├── news/                          # NewsCard, NewsDetailModal等
│   └── layout/                        # Header, CategoryNav等
├── lib/
│   ├── supabase/
│   │   ├── client.ts                  # ブラウザ/Server Component用クライアント（anonキー）
│   │   └── server.ts                  # service_role用クライアント（バッチ処理専用）
│   ├── rss/
│   │   ├── sources.ts                 # RSSソース一覧定義
│   │   └── fetch.ts                   # RSS取得・パース処理
│   ├── ai/
│   │   ├── prompts/                   # AIプロンプトテンプレート管理
│   │   │   ├── summarize.ts
│   │   │   ├── classify-generation.ts
│   │   │   └── marketing-insight.ts
│   │   └── analyze.ts                 # OpenAI API呼び出しラッパー
│   ├── batch/
│   │   ├── pipeline.ts                # バッチ全体のオーケストレーション
│   │   ├── ranking.ts                 # 上位3件選定ロジック
│   │   └── fallback.ts                # フォールバック処理
│   └── types/
│       └── news.ts                    # 共通型定義（NewsArticle, Category, GenerationTag等）
├── supabase/
│   └── migrations/
│       └── 0001_init.sql              # 初期スキーマ
├── scripts/
│   └── run-batch-locally.ts           # バッチ処理のローカル手動実行用スクリプト
├── public/
├── .env.local.example
├── vercel.json                        # Cron設定
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

---

## 3. 命名規則

| 対象 | 規則 | 例 |
|---|---|---|
| ファイル/フォルダ | kebab-case | `news-card.tsx` |
| コンポーネント | PascalCase（export名） | `NewsCard` |
| 型定義 | PascalCase | `NewsArticle`, `GenerationTag` |
| DBカラム | snake_case（Supabase/Postgres慣例。フロントでも変換せず直接使用） | `background_emotion` |
| カテゴリ・世代タグの識別子 | Union型で定数化（`lib/types/news.ts`）し文字列リテラルのバラつきを防ぐ | `'gen_z'`, `'big_news'` |

---

## 4. AIプロンプトの管理場所

`lib/ai/prompts/` 配下にユースケース別ファイルで分離する（要約用・世代分類用・マーケティング示唆用など）。プロンプト変更時の影響範囲を限定するため、1ファイル1ユースケースを原則とする。

- 各プロンプトファイルにはバージョン/変更履歴コメントを残す（[development-guidelines.md](./development-guidelines.md) の品質チェック運用と連動）
- プロンプトと出力スキーマ（JSON形式）はセットで定義し、AI出力の構造を型で保証する

---

## 5. バッチ処理コードの配置方針

バッチのオーケストレーション本体は `lib/batch/` に置き、`app/api/cron/generate/route.ts` は薄いハンドラ（Cron Secret検証 + `lib/batch/pipeline.ts` の呼び出しのみ）とする。

Cron経由でしか実行できないと開発効率が落ちるため、`scripts/run-batch-locally.ts` でローカルから手動実行・検証できるようにする。

---

## 6. Supabaseマイグレーション管理

`supabase/migrations/` にSQLファイルを連番管理する。MVPではダッシュボードからの手動適用も許容するが、SQLファイルは必ずリポジトリに残し再現性を確保する。

---

## 7. 未決定事項

- モノレポ化の要否（MVPでは不要。将来管理画面等を追加する場合に再検討）
