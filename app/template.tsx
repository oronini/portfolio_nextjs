// template は遷移のたびに作り直されるため、ページ表示のたびにアニメーションが走る
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page_enter">{children}</div>;
}
