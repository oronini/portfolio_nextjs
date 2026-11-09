// 新しい順。会社名・取引先名は書かない。
// 期間は固定の年月で示し、「現在」などの時間で古くなる書き方は避ける。
// 詳細な担当範囲はスキルシートに任せ、ここは概要とタグだけにする。
export const experienceArray: ExperienceItemType[] = [
  {
    period: '2026年6月〜',
    title: 'AI を活用したシステムの開発',
    text: '営業向け AIOS と介護向け LINE Bot を開発。マーケティングにも参加し、動画の作成も担当。',
    skills: [
      'Python',
      'TypeScript',
      'React',
      'AWS',
      'Claude Code',
      'Claude API',
      'LINE API',
    ],
  },
  {
    period: '2026年4月〜',
    title: 'Windows デスクトップアプリの事業移管',
    text: 'ビルド環境(Jenkins・Gitea)の構築と、C# の補助ツール開発を担当。最大5名程度のチームで、アプリ側のリーダー的な役割。',
    skills: ['C#', 'C++', 'Jenkins', 'Gitea', 'Azure', 'Claude Code'],
  },
  {
    period: '2025年4月〜2026年2月',
    title: 'Web アプリケーションの開発・運用',
    text: '複数案件で、設計から実装、運用まで担当。小規模案件では技術選定を主導。',
    skills: [
      'Next.js',
      'TypeScript',
      'Go',
      'AWS',
      'GraphQL',
      'GitHub Actions',
      'Cursor',
      'Claude Code',
      'Claude API',
      'OpenAI API',
    ],
  },
  {
    period: '2025年4月〜2025年10月',
    title: 'Web サイトの運用ディレクション',
    text: '更新依頼の優先付けと進行管理、定例会の運営、見積・請求書の作成まで担当。',
  },
  {
    period: '2022年11月〜2025年3月',
    title: 'FAQ サイトの制作・進行管理',
    text: '顧客折衝から設計・実装まで担当。テンプレート化で制作の工数を削減し、リーダーも経験。',
    skills: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'PHP'],
  },
  {
    period: '2022年1月〜2022年10月',
    title: 'Web 開発の研修と実務のスタート',
    text: '研修のあと、Web サイトのテストと不具合修正、チャットツールの運用サポートを経験。',
    skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Laravel'],
  },
  {
    period: '2017年7月〜2021年12月',
    title: '通信業のカスタマーサポート(SV)',
    text: 'オペレーターの育成、KPI 管理、業務改善を担当。',
  },
];
