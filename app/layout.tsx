import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import './globals.css';
import Header from '@/components/common/header/Header';
import Footer from '@/components/common/footer/Footer';
import RevealObserver from '@/components/common/effects/RevealObserver';
import CustomCursor from '@/components/common/effects/CustomCursor';
const notoSansJp = Noto_Sans_JP({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nekodesk Portfolio',
  description: 'Nekodesk Portfolio',
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
      </body>
    </html>
  );
}
