# CLAUDE.md

このファイルはClaude Codeが本プロジェクトで作業する際のガイドである。

## プロジェクト概要

**Generational Insight Dashboard（世代別インサイトダッシュボード）**

毎朝AIがニュースを分析し、世代ごとの価値観・感情・欲望・トレンドを可視化するダッシュボード。「ニュースアプリ」ではなく「世代インサイト分析ツール」として、経営者・マーケター・商品企画担当者が毎朝10分で時代の流れを把握できることを目指す。

詳細な要求仕様は [docs/product-requirements.md](./docs/product-requirements.md) を正典として参照すること。

---

## スペック駆動開発の運用ルール

本プロジェクトは `docs/` 配下の仕様書を起点に開発する。

| ファイル | 役割 |
|---|---|
| [docs/product-requirements.md](./docs/product-requirements.md) | プロダクト要求仕様（Why/What）。原典 |
| [docs/functional-design.md](./docs/functional-design.md) | 機能仕様（画面・データ構造・業務ロジック） |
| [docs/architecture.md](./docs/architecture.md) | システム構成・技術的意思決定 |
| [docs/repository-structure.md](./docs/repository-structure.md) | ディレクトリ構造・命名規則 |
| [docs/development-guidelines.md](./docs/development-guidelines.md) | コーディング規約・開発フロー・品質チェック運用 |
| [docs/glossary.md](./docs/glossary.md) | 世代区分・プロダクト固有用語の定義 |

**実装前ルール**: 新機能・変更を行う前に、該当する仕様書を必ず確認する。内容が古い/不足している場合は、実装前に仕様書を更新してから着手する。

**実装後ルール**: 実装時に仕様と異なる判断をした場合、コード修正と同じ変更（PR/コミット）で仕様書も更新し、仕様とコードの不一致を残さない。

**PRDの扱い**: `docs/product-requirements.md` は原典であり原則書き換えない。仕様変更が必要な場合は変更履歴を別途残す方針とする。

---

## 技術スタック概要

| 項目 | 決定内容 |
|---|---|
| Frontend | Next.js / TypeScript / Tailwind CSS |
| Backend | Next.js API Routes |
| AI分析 | OpenAI API |
| ニュース収集 | RSSフィード取得 |
| DB | Supabase |
| スケジューラ | Vercel Cron（毎朝8:00 JST） |
| デプロイ | Vercel |
| 認証/課金 | なし |

優先方針: 実装しやすさ・デプロイしやすさを最優先する。詳細・設計上の懸念点は [docs/architecture.md](./docs/architecture.md) を参照。

---

## 重要な制約

- 認証機能は実装しない（全ユーザー共通の単一データセットを閲覧する設計）
- データは毎朝8:00のバッチ生成のみ。ユーザーアクセス時にリアルタイムAI分析を行ってはならない
- AI分析品質はこのプロダクトの核となる価値である。実装の簡便さを理由にプロンプト・分析の質を落とさない（[docs/development-guidelines.md](./docs/development-guidelines.md) の品質チェック運用に従う）
- JKトレンドはMVPでは簡易プレースホルダー実装である（[docs/functional-design.md](./docs/functional-design.md) §6）。過剰実装しない。将来データソース差し替えが容易な構造を保つ
- MVPスコープ外機能（ログイン、ユーザー管理、お気に入り保存、検索機能、SNS連携、通知機能、課金機能）は実装しない

---

## ディレクトリ構成の概要

詳細は [docs/repository-structure.md](./docs/repository-structure.md) を参照。

```
app/        # Next.js App Router（画面・APIルート）
components/ # UIコンポーネント
lib/        # RSS収集・AI分析・バッチ処理・Supabaseクライアント等
supabase/   # マイグレーション
scripts/    # ローカル検証用スクリプト
docs/       # スペックドキュメント
```

---

## 開発コマンド一覧

> 実装フェーズで確定後、本セクションを更新すること（現時点ではプレースホルダー）。

- `npm run dev` — ローカル開発サーバー起動
- `npm run build` — 本番ビルド
- `npm run lint` — Lint実行
- `npm run typecheck` — 型チェック
- バッチ処理のローカル手動実行コマンド（`scripts/run-batch-locally.ts` 経由、詳細は [docs/development-guidelines.md](./docs/development-guidelines.md)）

---

## コーディング規約・用語

コーディング規約・コミット規約・テスト方針は [docs/development-guidelines.md](./docs/development-guidelines.md) を参照。

世代区分やプロダクト固有用語（背景感情・欲望・時代の流れ等）はコード内で独自解釈せず、必ず [docs/glossary.md](./docs/glossary.md) の定義に従うこと。
