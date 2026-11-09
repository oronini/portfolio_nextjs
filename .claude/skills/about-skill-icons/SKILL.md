---
name: about-skill-icons
description: /about の「開発スキル / 環境」にスキル(言語・FW・ツール)を追加・削除・修正する、またはそのアイコンを変更するときに使う。lib/information.ts と lib/skillIcons.ts の更新手順と確認方法をまとめている。
---

# /about の開発スキル / 環境の更新

## 構成

| 役割 | ファイル |
| --- | --- |
| 表示するスキルの一覧(カテゴリ別) | `lib/information.ts` の `skillArray` |
| スキル名 → アイコンの対応 | `lib/skillIcons.ts` の `skillIconMap` |
| アイコンの描画(SVG) | `components/about/information/SkillIcon.tsx` |
| タグ・アイコンの見た目 | `components/about/information/Information.module.css`(`.skill_item` / `.skill_icon`) |

アイコンは `simple-icons`(npm)のパスをインライン SVG で描画する。通常時はブランドカラー(`icon.hex`)で、ホバーでタグが暗い背景に反転する間は文字色(白)にする(黒系のアイコンが沈まないように)。外部画像・外部 CDN は使わない。

## スキルを追加する

1. `lib/information.ts` の該当カテゴリの `skills` に名前を追加する。
   - 学習中のものは `名前(学習中)` と書く。アイコンの検索時に `(...)` は取り除かれる。
   - 表記は公式の表記に合わせる(例: `Vercel`、`GitHub`)。
2. `lib/skillIcons.ts` にアイコンを対応させる。
   - `simple-icons` から `siXxx` を import し、`skillIconMap` に **小文字の名前** をキーにして追加する(例: `'next.js': siNextdotjs`)。
   - import は一覧をアルファベット順に保つ。
3. アイコンの名前(`siXxx`)は推測せずに確認する。

   ```bash
   node -e "const s=require('simple-icons');console.log(Object.keys(s).filter(k=>/キーワード/i.test(k)).join(' '))"
   ```

4. `simple-icons` に無いもの(商標の都合での削除など)は、次のどちらかにする。
   - 文字だけで表示する(`skillIconMap` に追加しない)。`Panda CSS`・`AWS Lambda`・`Amazon Aurora`・`Codex`・`OpenAI API`・`HeyGen`・`Yup`・`SheetJS`・`REST API`・`SharePoint Online API` などが該当する。
   - `devicon`(MIT)に同じロゴがあれば、SVG を `public/img/skills/` に置き、`imageIcon('ファイル名')` で対応させる(複数色のまま画像で表示。ホバーで白に切り替わらない)。AWS・Azure・C#・DynamoDB が該当する。
   - 自作の簡略 SVG を `skillIcons.ts` に定義する(24x24 の viewBox のパス `path` と、# なしのブランドカラー `hex` が必要。`Windows` が該当)。ブランドを模す場合は、公式のロゴをそのまま写さず、簡略化する。

## スキルを削除・名前を変更する

- `skillArray` から消す(または名前を変える)。名前を変えたら、`skillIconMap` のキーも合わせる。
- 使わなくなったアイコンの import と対応は消す(未使用の import を残さない)。

## 確認

1. `bun run lint`
2. `bun run build`
3. `bun run dev` で `/about` を開き、アイコンとタグの表示を目で確認する。
   - スクロール表示の演出で、要素が透明のままのことがある。確認時は、ブラウザのコンソールで `document.querySelectorAll('[data-reveal],[data-scatter]').forEach(e => e.setAttribute('data-inview','true'))` を実行すると表示される。
   - PC とスマホ幅(375px 前後)の両方で、タグが崩れていないかを見る。
4. 実行していない確認は「未確認」と報告する。

## 守ること

- 追加するライブラリは `simple-icons` のみ。他のアイコンライブラリ(react-icons など)は、理由を説明してユーザーに確認してから入れる。
- スタイルは既存の CSS Modules に合わせる。新しい方式は持ち込まない。
- コミット・push はユーザーの依頼があったときだけ行う(`.claude/rules/git.md`)。ブランチを切ってから作業する。
