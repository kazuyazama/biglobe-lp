import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='ja' data-theme="cmyk" >
      <Head>
      {/* Google Tag Manager */}
      <script dangerouslySetInnerHTML={{__html:`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-5ZHLDQX')`}} />
      {/* google Font */}
      <link href="https: //fonts.googleapis.com/css2? family= Noto+Sans+JP:wght@400;700 & display=swap" rel="stylesheet" />
      {/* faviconたち */}
      <link rel="apple-touch-icon" sizes="180x180" href="/logo/favicons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/logo/favicons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/logo/favicons/favicon-16x16.png" />
      <link rel="manifest" href="/logo/favicons/site.webmanifest" />
      <link rel="mask-icon" href="/logo/favicons/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#2d89ef" />
      <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <body className='font-NotoSans'>
      {/* Google Tag Manager */}
      <noscript dangerouslySetInnerHTML={{__html:`
      <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5ZHLDQX"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>`}} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}