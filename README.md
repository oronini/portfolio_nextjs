# portfolio_nextjs

Next.js 製のポートフォリオサイトです。パッケージマネージャーには [Bun](https://bun.sh) を使用しています。

## セットアップ

```bash
bun install
```

## コマンド

| コマンド | 内容 |
| --- | --- |
| `bun run dev` | 開発サーバーを起動 (http://localhost:3000) |
| `bun run build` | 本番用ビルド |
| `bun run start` | ビルド済みアプリを起動 |
| `bun run lint` | ESLint を実行 |

## パッケージの追加・削除

```bash
bun add <package>        # 依存を追加
bun add -d <package>     # devDependencies に追加
bun remove <package>     # 削除
```

ロックファイルは `bun.lock` です。`yarn.lock` や `package-lock.json` は使用しません。
