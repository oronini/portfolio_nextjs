# Git Rules

## Branch

- 実装開始前に新しいブランチを作成する。mainへ直接コミットしない。
- 作業内容ごとにブランチを分け、内容が分かる名前にする。
  - 例: `feature/add-skills-section` / `fix/contact-form-validation` / `chore/update-deps`

## Commit

- 論理的な単位で行い、1コミットに複数の目的を含めない。
- メッセージは「何をしたか」が分かる簡潔な文にする。
- コミット・pushはユーザーから依頼があった場合のみ行う。

## Pull Request

実装完了後に作成する。説明は日本語で、以下を記載する。

- 概要
- 実装内容
- 動作確認内容
- 影響範囲

## Conflict

内容を確認してから解消する。推測で解消しない。

## 禁止事項

- `.env` などの秘密情報をコミットしない。
- `--force` push、履歴の書き換えはユーザーの明示的な許可なしに行わない。

## Before Push Checklist

- [ ] `bun run build` が通る
- [ ] `bun run lint` が通る
- [ ] 不要なファイルが含まれていない
- [ ] `console.log` / デバッグコードを削除した
- [ ] ドキュメント更新要否を確認した
