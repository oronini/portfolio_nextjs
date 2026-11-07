# Next.js Rules

## バージョン・ルーター

- Next.js 14 の App Router を使用する。Pages Router は使用しない。

## Server / Client Component

- Server Component を優先する。
- `'use client'` はイベント処理・フォーム・ブラウザAPI・State管理が必要なコンポーネントのみに付与する。
- ページ（`app/**/page.tsx`）はなるべく Server Component のままとし、操作が必要な部分だけ `components/` の Client Component に切り出す。

## Route Handler

- 外部サービス連携（メール送信など）は `app/api/**/route.ts` に実装する。
- 入力検証・適切なHTTP Status・エラーハンドリングを必ず行う（詳細は `security.md`）。

## Metadata

- 各ページに `title` / `description` を設定する。

## レンダリング

- 不要な Dynamic Rendering は避け、静的生成できるページは静的にする。

## 画像・フォント

- 画像は `next/image`、フォントは `next/font` を優先する。
- SVG は `next.config.js` の `@svgr/webpack` 設定に従う。

## 設定ファイル

- `next.config.js` と `next.config.mjs` が併存している。どちらが有効かを確認してから変更し、勝手に統合・削除しない。

## 環境変数

- `process.env` から取得する。Client Component で使うのは `NEXT_PUBLIC_` のみ。

## Checklist

- [ ] App Router を利用している
- [ ] Client Component を最小限にしている
- [ ] Metadata を確認した
- [ ] `bun run build` が通る
