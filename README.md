# portfolio_nextjs

Next.js 製のポートフォリオサイトです。パッケージマネージャーには [Bun](https://bun.sh) を使用しています。

## セットアップ

```bash
bun install
```

## 環境変数

問い合わせフォーム(`/api/postMail`)で使用します。変数名は `.env.example` にあります。

| 変数 | 内容 | 必須 |
| --- | --- | --- |
| `MAIL_USER` | 問い合わせの送信元 兼 受信先の Gmail アドレス | 必須 |
| `MAIL_PASS` | 上記アカウントの Google アプリパスワード(16 文字、スペースなし) | 必須 |
| `SLACK_WEBHOOK_URL` | 問い合わせ通知を投稿する Slack の Incoming Webhook URL | 任意(未設定なら通知しない) |

### ローカル

```bash
cp .env.example .env   # 値を入れる(.env は Git 管理外)
```

### 本番(Vercel)

`.env` はリポジトリに含まれないため、Vercel の Settings → Environment Variables に登録します。
`MAIL_PASS` と `SLACK_WEBHOOK_URL` は秘密情報なので、タイプは secret にします。環境は Production に加え、Preview でも送信する場合は Preview にもチェックを入れます。
環境変数は、登録・変更のあとに再デプロイしないと反映されません。

秘密情報は Git・PR・チャットに貼らないでください。

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
