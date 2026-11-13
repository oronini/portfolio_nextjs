import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import './globals.css';
import Header from '@/components/common/header/Header';
import Footer from '@/components/common/footer/Footer';
import RevealObserver from '@/components/common/effects/RevealObserver';
import CustomCursor from '@/components/common/effects/CustomCursor';
import GoogleAnalytics from '@/components/common/analytics/GoogleAnalytics';
const notoSansJp = Noto_Sans_JP({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nekodesk Portfolio',
  description:
    'Nekodesk のポートフォリオサイトです。Next.js・TypeScript・AWS による Web アプリ開発から、Windows デスクトップアプリ関連の開発、ディレクション、設計までの経験とスキルを紹介します。',
  // Search Console の所有権確認(HTML タグ方式)。DNS で確認する場合は不要
  ...(process.env.NEXT_PUBLIC_GSC_VERIFICATION && {
    verification: { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION },
  }),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={notoSansJp.className}>
        <Header />
        <div className="l-layout_inner">{children}</div>
        <Footer />
        <RevealObserver />
        <CustomCursor />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
