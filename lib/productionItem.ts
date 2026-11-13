import { BLOG_URL } from '@/lib/blog';

export const productionItemArray: ProductionProps[] = [
  {
    linkHref: BLOG_URL,
    imgPath: 'blogSite.png',
    alt: 'AI 運用ブログのサイトイメージ',
    title: 'AI 運用ブログ',
    skills:
      'Astro / TypeScript / Tailwind CSS / Cloudflare / GitHub Actions / Claude Code / Playwright',
    topText:
      '運用の約 8 割を AI エージェントに任せているブログです。企画・執筆・画像・公開・告知から、分析・改善まで自動化しています。',
    pageText:
      '運用の約 8 割を AI エージェントに任せているブログです。企画・執筆・画像・公開・告知から、分析・改善まで自動化しています。\n人が担当するのは、ネタの提供と、下書きの確認・公開の承認です。\nAstro と Cloudflare で作った静的サイトで、記事は Git 上の Markdown を正とし、PR のマージが公開になります。\n下書きと見出し画像の用意、禁止表現や秘密情報の混入チェックは AI が担当し、公開(ブログ → note → X・Threads)も手順をスキルにして自動化しています。\n公開の前には必ず人の承認を挟み、AI が勝手に公開しない設計にしています。\n文体のルールもスキルとして蓄積し、指摘のたびに記事全体へ反映する仕組みです。',
  },
  {
    linkHref: 'https://typing-games-ts.web.app/',
    imgPath: 'typingGame.png',
    alt: 'typingGameサイトイメージ',
    title: 'タイピングゲーム',
    skills: 'React / TypeScript / Firebase / Sass',
    topText: '英文タイピングと難読漢字のタイピングゲームです。',
    pageText:
      '英文タイピングと難読漢字のタイピングゲームです。\nデータベースとデプロイ先に Firebase を使っています。使ってみたくて選びました。\n接続やデータの取得には苦戦しましたが、ロジックを考えながらコードを書いている時間が、一番楽しいです。',
  },
  {
    linkHref: 'https://nextjs-cat-images.vercel.app/',
    imgPath: 'catImages.png',
    alt: 'catImagesサイトイメージ',
    title: '猫画像切替アプリ',
    skills: 'React / TypeScript / Next.js / Semantic UI',
    topText: '猫の画像をランダムに表示するアプリです。',
    pageText:
      'The Cat API を使って、猫の画像をランダムに表示するアプリです。\nNext.js 14 で構築しました。バージョン 14 のデータ取得は、記述がシンプルで書きやすいと感じました。',
  },
  {
    linkHref: 'https://oronini.github.io/concentration-react-ts/',
    imgPath: 'concentration.png',
    alt: 'concentrationサイトイメージ',
    title: '神経衰弱ゲーム',
    hidden: true,
    skills: 'React / TypeScript / vite',
    topText: '神経衰弱のゲームで26枚と52枚のどちらかを選択ができます。',
    pageText:
      '神経衰弱のゲームで26枚と52枚のどちらかを選択ができます。\n1日2時間×7日の計14時間ほどで作成したものです。\nふと気まぐれに作ろう思い立ちデザイン等も何も考えず、ロジックから作り始めたので、デザインやUIについては行き当たりばったりです。',
  },
  {
    linkHref: 'https://oronini.github.io/redux-todo-list/',
    imgPath: 'reduxToolkitTodo.png',
    alt: 'reduxToolkitTodoサイトイメージ',
    title: 'todoリスト',
    hidden: true,
    skills: 'React / Redux / Sass / vite',
    topText:
      'Reactで作成したおなじみTodoリストです。\n編集や一括操作機能などがあります。',
    pageText:
      'Reactで作成したおなじみTodoリストです。\nReact学習中に作成した、TodoリストをReduxのToolkitを使うために再作成、編集や一括操作機能などを追加。\nuseContextなどで事足りる気がします。Reduxは大型のプロジェクトでは必要になるのか？。',
  },
  {
    linkHref: 'https://oronini.github.io/redux_calculator/',
    imgPath: 'reduxCalculator.png',
    alt: 'reduxCalculatorサイトイメージ',
    title: '電卓アプリ',
    hidden: true,
    skills: 'React / Redux / Sass',
    topText:
      'Reactで作成したiPhone風の電卓です。計算する以外は何もできないシンプルな電卓です。',
    pageText:
      'Reactで作成したiPhone風の電卓です。計算する以外は何もできません。\nReduxでToolkitなしを使用して作成してます。Reduxは仕組みを理解することが大切ですね。',
  },
  {
    linkHref: 'https://oronini.github.io/three3/',
    imgPath: 'three3.png',
    alt: '3D web siteサイトイメージ',
    title: '3D web site',
    skills: 'HTML / CSS / JavaScript / Three.js',
    topText:
      'Three.js を使った 3D 表現の Web サイトです。\nマウスカーソルに合わせて動きます。',
    pageText:
      'Three.js を使ってみようと思い、ドキュメントや YouTube を調べながら作った、3D 表現の Web サイトです。\n3D を動かすには sin・cos・π など多少の数学が必要ですが、慣れれば直感的に扱えそうです。',
  },
  {
    linkHref: 'https://oronini.github.io/parallax-site/',
    imgPath: 'parallax.jpg',
    alt: 'parallaxサイトイメージ',
    title: 'Parallax Design Site',
    hidden: true,
    skills: 'HTML / CSS / JavaScript',
    topText: `学び始めたときにフレームワークなど使わず、制作したパララックスデザインのサイトです。\n今となってはデザインサンプルです。`,
    pageText: `学び始めたときにフレームワークなど使わず、制作したパララックスデザインのサイトです。\n今となってはデザインサンプルです。\n作成時はスクロールに合わせてテキストが動くことが楽しくて、今思うと大したことをしているわけでもないのに動き方をいろいろ試していた記憶があります。`,
  },
  {
    linkHref: 'https://oronini.github.io/responsive-site02',
    imgPath: 'shoppingSiteStyle.jpg',
    alt: 'shoppingSiteStyleサイトイメージ',
    title: 'Shopping Site Style Design',
    hidden: true,
    skills: 'HTML / CSS / JavaScript',
    topText:
      '学び始めに制作したECサイト風のサイトです。\n色々と問題点ばかりですが現在との比較用として修正などせずにそのまま残してます。',
    pageText:
      '学び始めに制作したECサイト風のサイトです。\n色々と問題点ばかりですが現在との比較用として修正などせずにそのまま残してます。\n当時はライブラリーを使うためにドキュメントを読むのが億劫でカルーセルをライブラリーを使わずに自作したのが良い思い出です。',
  },
  {
    linkHref: 'https://oronini.github.io/responsive-site01',
    imgPath: 'responsive.jpg',
    alt: 'shoppingSiteStyleサイトイメージ',
    title: 'Responsive Site',
    hidden: true,
    skills: 'HTML / CSS / JavaScript',
    topText:
      '学び始めに初めて何かを作成したくてLPっぽいものを作成しようとなりフレームワークなど使わず、制作したレスポンシブサイトです。',
    pageText:
      '一通りマークアップをインプットし、JSを触り始めて何かを作成したくてLPっぽいものを作成しようとなり、フレームワークなど使わず制作したレスポンシブサイトです。\n今となってはデザインサンプルです。（サンプルにもならないか…）',
  },
];

// 一覧・ページに表示するもの。公開できる制作物が増えたら、hidden を外す。
export const visibleProductionItems = productionItemArray.filter(
  (item) => !item.hidden
);
