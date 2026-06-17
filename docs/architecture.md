# Architecture（システム構成・技術設計書）

> 最終更新日: 2026-06-16
> 関連ファイル: [product-requirements.md](./product-requirements.md) / [functional-design.md](./functional-design.md) / [repository-structure.md](./repository-structure.md)

## 1. 本書の目的と範囲

本書はシステム構成・データフロー・技術的意思決定を扱う。機能仕様（画面・データ構造・業務ロジック）は [functional-design.md](./functional-design.md) を参照。

確定済みの技術スタック:

| 項目 | 決定内容 |
|---|---|
| Frontend | Next.js / TypeScript / Tailwind CSS |
| Backend | Next.js API Routes |
| AI分析 | OpenAI API |
| ニュース収集 | RSSフィード取得 |
| DB | Supabase（Postgres） |
| スケジューラ | Vercel Cron（毎朝8:00 JST） |
| デプロイ | Vercel |
| 認証/課金 | なし |

優先方針: **実装しやすさ・デプロイしやすさを最優先**する（PRDの「分析精度最重要」という品質要件とのトレードオフは8章で扱う）。

---

## 2. システム構成図

```
[RSSフィード各社（NHK/日経/Yahoo/ITmedia/TechCrunch等）]
      │ 取得
      ▼
[Vercel Cron Job] --08:00 JST起動--> [Batch API Route: app/api/cron/generate/route.ts]
      │
      ├─ 1. RSS Fetch & Parse
      ├─ 2. 重複排除・分類（世代/カテゴリ）
      ├─ 3. OpenAI API 呼び出し（記事ごとに分析）
      ├─ 4. 上位3件選定（カテゴリ毎）
      └─ 5. Supabase へ保存（batch_date付与、上書きしない）
                  │
                  ▼
            [Supabase (Postgres)]
                  │
                  ▼ 読み取りのみ（Server Components）
      [Next.js Frontend]
                  │
                  ▼
            [ユーザーブラウザ]
```

**最重要原則**: ユーザーアクセス時はSupabaseに事前生成済みのデータを読むだけであり、リアルタイムAI分析は一切行わない（[product-requirements.md](./product-requirements.md) §6）。

---

## 3. Vercel Cronによる毎朝8:00バッチのアーキテクチャ

`vercel.json` の `crons` 設定で UTC 23:00（JST 8:00相当）に `app/api/cron/generate/route.ts` を呼び出す。

```json
{
  "crons": [{ "path": "/api/cron/generate", "schedule": "0 23 * * *" }]
}
```

エンドポイントは `CRON_SECRET` をヘッダーで検証し、不正アクセスを防止する。

### 懸念点: 実行時間制約とAI分析量の衝突

Vercelのサーバーレス関数には実行時間上限がある（プランにより10秒〜数百秒）。9カテゴリ分（最低でも候補数十件規模）のRSS収集とOpenAI API呼び出しを直列実行すると、タイムアウトする可能性が高い。

**段階的対策方針**:
1. （第一候補）OpenAI API呼び出しを `Promise.all` 等で並列化し、Vercel Proプラン等で確保できる実行時間上限内に収める
2. 上記で収まらない場合、Vercel Cronは軽量なトリガーのみとし、実処理をQStash等の非同期キューに委譲して分割実行する方式を次の検討事項とする

「実装しやすさ最優先」の方針に従い、まずは①を実装し、実測してタイムアウトする場合のみ②を検討する。

---

## 4. データフロー詳細

### RSS収集

`rss-parser` 等のライブラリでフィードURLリストを取得。**1ソースの障害が全体バッチを止めないよう、ソースごとにtry-catchし、失敗をログに残しつつ他ソースの処理は継続する**（RSSフィードは媒体側の仕様変更・一時ダウン・XMLパースエラーに弱いため）。

### OpenAI分析

記事ごとに分析を実行。プロンプトは `lib/ai/prompts/` で管理（[repository-structure.md](./repository-structure.md) 参照）。

**懸念点: コスト・API呼び出し数**。9カテゴリ×候補記事数（3件選定には数十件の候補が必要）分の分析を毎朝実行すると、日次のAPI呼び出し数が数十〜100件規模になる可能性がある。候補の絞り込みは軽量なルールベース処理で行い、詳細なAI分析は絞り込み後の記事のみに適用する二段階処理でコール数を抑制することを推奨する。

### Supabase保存

バッチ単位（`batch_date`）でレコードをinsertする。既存データは上書きせず、過去データ参照・障害時ロールバックのために履歴として保持する。

---

## 5. Next.js API設計方針

- App Router構成。バッチ処理は `app/api/cron/generate/route.ts` でPOSTのみ受け付け、Cron Secret検証を必須とする
- フロントエンド表示はSupabaseクライアントを使ったServer Components中心の直接データ取得を基本方針とし、独立したREST API Route（例: `app/api/news/route.ts`）は必要になった場合のみ追加する（実装しやすさ優先）
- 認証機能がないため、閲覧系エンドポイントはすべて公開前提。保護が必要なのはCronエンドポイントのみ

---

## 6. Supabaseデータモデル概要

- **`news_articles`**: [functional-design.md](./functional-design.md) §3 のフィールド構造に対応するメインテーブル
- **`generation_tags` の持ち方**: MVPでは実装簡易性を優先し配列カラム（Postgres `text[]`）方式を採用。将来、世代別の集計分析が必要になった場合は中間テーブル（`article_generations`）への移行を検討する
- **`rss_sources`**（任意）: ソース管理用マスタテーブル。将来コード変更なしでソース追加できるようにする際に導入を検討
- **`batch_runs`**（推奨）: バッチ実行履歴（成功/失敗、実行時刻、フォールバック発生有無）を記録し運用監視に利用
- インデックス方針: `category` + `batch_date` の複合インデックスで表示クエリを高速化

---

## 7. 環境変数・シークレット管理方針

| 変数名 | 用途 | 公開範囲 |
|---|---|---|
| `OPENAI_API_KEY` | OpenAI API呼び出し | サーバー専用 |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase接続先 | 公開可 |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | フロント読み取り用 | 公開可 |
| `SUPABASE_SERVICE_ROLE_KEY` | バッチ処理（書き込み）用 | サーバー専用・クライアントに絶対露出させない |
| `CRON_SECRET` | Cronエンドポイント保護 | サーバー専用 |

ローカルは `.env.local`、本番はVercel Environment Variablesで管理する。

**RLS方針**: 認証機能がないため、`news_articles` 等の読み取りは匿名キーで全許可、書き込みはservice_roleキー（バッチ処理）のみに限定するRLSポリシーを設定する。

> **未決定事項**: RLSポリシーの具体的なSQL定義は実装時に確定する。

---

## 8. コスト・レート制限に関する考慮

- **モデル選定のトレードオフ**: PRD §10「分析精度を最重要視する」という品質目標と、確定方針「実装しやすさ・デプロイしやすさ最優先」は緊張関係にある。高品質モデルほどコスト・レイテンシが増す。実装時にモデル名を確定する際は、まずサンプル記事での品質検証（[development-guidelines.md](./development-guidelines.md) の品質チェック運用）を行い、品質基準を満たす範囲で最もコスト効率の良いモデルを選定する
- レート制限対策として、並列呼び出し数の上限設定とリトライ・バックオフ処理を実装する

> **未決定事項**: 採用するOpenAIモデル名は実装時に確定する。

---

## 9. 将来の拡張性に対する設計上の配慮

- **ニュースソース追加**: `rss_sources` をデータ管理化しておけばコード変更なしでソース追加可能になる
- **認証追加**: 現在は単一データセット閲覧のみだが、将来ユーザー別機能（お気に入り等）を追加する場合に備え、現時点ではユーザーIDに依存したカラムを持たず、疎結合な構成を維持する
- **JKトレンドのデータソース差し替え**: `source_type` フィールド（[functional-design.md](./functional-design.md) §3）により、将来SNS APIへの切り替えが容易な構造にする

---

## 10. 未決定事項・要検討事項

- 非同期キュー（QStash等）導入の要否（Vercel実行時間の実測次第）
- 採用するOpenAIモデル名（コストと品質のバランス）
- RLSポリシーの具体的なSQL定義
