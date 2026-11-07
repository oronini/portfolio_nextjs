# React Rules

## コンポーネント

- 関数コンポーネントのみ使用する。
- 1ファイル1コンポーネントを基本とする。
- Props は型定義する。`any` は使用しない。共通型は `types/` に置く。
- 配置は既存に従う: `components/<ページ名>/<コンポーネント名>/`（例: `components/home/about/About.tsx`）。

## スタイル

- 既存の方式（CSS Modules / Tailwind CSS / `cn`（`lib/utils.ts`））に合わせる。新しいスタイル方式を持ち込まない。
- CSS Modules は同階層に `<名前>.module.css` として置く。

## フォーム

- `react-hook-form` + `yup`（`@hookform/resolvers`）を使用する。
- バリデーションスキーマはフォームと同じ責務の近くにまとめる。

## Hooks

- 依存配列を正しく指定する。
- 不要な `useEffect` を避ける。導出できる値は State にしない。

## リスト・アクセシビリティ

- `key` には安定した一意の値を使う（index は並び替えのない場合のみ）。
- 画像には `alt`、操作要素には適切な role / label を付ける。

## データ

- 静的な表示データは `lib/` に集約する（例: `lib/information.ts`）。コンポーネント内に直書きしない。

## Checklist

- [ ] Props を型定義した
- [ ] 不要な `use client` がない
- [ ] 既存のスタイル方式に合わせた
- [ ] alt / key を確認した
