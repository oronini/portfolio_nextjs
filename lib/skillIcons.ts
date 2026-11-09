import {
  siApple,
  siBootstrap,
  siChakraui,
  siClaude,
  siClaudecode,
  siCplusplus,
  siCss,
  siDaisyui,
  siDocker,
  siDotnet,
  siElevenlabs,
  siFigma,
  siFirebase,
  siGit,
  siGitea,
  siGithub,
  siGithubactions,
  siGnubash,
  siGo,
  siGraphql,
  siHono,
  siHtml5,
  siJavascript,
  siJest,
  siJquery,
  siLaravel,
  siLine,
  siLinux,
  siMui,
  siNeon,
  siNetlify,
  siNextdotjs,
  siNodedotjs,
  siOpensearch,
  siPhp,
  siPino,
  siPython,
  siReact,
  siReactrouter,
  siSass,
  siServerless,
  siShadcnui,
  siSupabase,
  siTailwindcss,
  siThreedotjs,
  siTypescript,
  siVercel,
  siVitest,
  siZod,
} from 'simple-icons';

// path 型: 24x24 の viewBox に収まる SVG パス + # なしのブランドカラー(ホバーで白に切り替わる)
// src 型: 複数色のロゴを画像のまま表示する(ホバーでも色は変わらない)
export type SkillIcon = { path: string; hex: string } | { src: string };

// simple-icons に無い(商標の都合で削除された)ため、4 つの窓だけで簡略に描いたもの
const windowsIcon: SkillIcon = {
  hex: '0078D4',
  path: 'M1 3.5l9-1.3v9H1zM11.5 2.05L23 .4v10.8H11.5zM1 12.8h9v8.9l-9-1.25zM11.5 12.8H23v10.8l-11.5-1.6z',
};

// simple-icons に無いロゴは devicon(MIT)の SVG を public/img/skills に置いて使う
const imageIcon = (name: string): SkillIcon => ({
  src: `/img/skills/${name}.svg`,
});

// キーは小文字。「(学習中)」などの注記は検索時に取り除く。
// アイコンが無いもの(AWS Lambda・Amazon Aurora・Amplify UI・Codex・OpenAI API・HeyGen・Yup・SheetJS・REST API・SharePoint Online API・Panda CSS)は文字だけで表示する。
const skillIconMap: Record<string, SkillIcon> = {
  windows: windowsIcon,
  mac: siApple,
  linux: siLinux,
  html: siHtml5,
  css: siCss,
  javascript: siJavascript,
  typescript: siTypescript,
  python: siPython,
  go: siGo,
  'c#': imageIcon('csharp'),
  'c++': siCplusplus,
  php: siPhp,
  'shell script': siGnubash,
  react: siReact,
  'next.js': siNextdotjs,
  'react router': siReactrouter,
  'node.js': siNodedotjs,
  hono: siHono,
  '.net': siDotnet,
  '.net framework': siDotnet,
  laravel: siLaravel,
  jquery: siJquery,
  'three.js': siThreedotjs,
  zod: siZod,
  pino: siPino,
  sass: siSass,
  bootstrap: siBootstrap,
  'material ui': siMui,
  'tailwind css': siTailwindcss,
  'chakra ui': siChakraui,
  'shadcn/ui': siShadcnui,
  daisyui: siDaisyui,
  jest: siJest,
  vitest: siVitest,
  aws: imageIcon('aws'),
  'microsoft azure': imageIcon('azure'),
  'serverless framework': siServerless,
  docker: siDocker,
  vercel: siVercel,
  netlify: siNetlify,
  firebase: siFirebase,
  supabase: siSupabase,
  neon: siNeon,
  'amazon dynamodb': imageIcon('dynamodb'),
  opensearch: siOpensearch,
  graphql: siGraphql,
  'line api': siLine,
  'claude code': siClaudecode,
  'claude api': siClaude,
  elevenlabs: siElevenlabs,
  git: siGit,
  github: siGithub,
  'github actions': siGithubactions,
  gitea: siGitea,
  figma: siFigma,
};

export const findSkillIcon = (skill: string): SkillIcon | undefined =>
  skillIconMap[
    skill
      .replace(/\(.*?\)/g, '')
      .trim()
      .toLowerCase()
  ];
