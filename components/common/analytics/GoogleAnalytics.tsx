import Script from 'next/script';

// 計測 ID(G-XXXXXXXXXX)は公開されるため NEXT_PUBLIC_ で持つ。
// 本番以外(開発・ビルド確認)の閲覧を計測に混ぜないよう、本番のみ出力する。
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const GoogleAnalytics = () => {
  if (!GA_ID || process.env.NODE_ENV !== 'production') return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
