// 新しい順。会社名・取引先名は書かない。
// 期間は固定の年月で示し、「現在」などの時間で古くなる書き方は避ける。
// 詳細な担当範囲はスキルシートに任せ、ここは概要とタグだけにする。
// 直近の3件だけを載せる(古い経歴は載せない)。
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
];
