import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='ja' data-theme="cmyk" >
      <Head>
      <link href="https: //fonts.googleapis.com/css2? family= Noto+Sans+JP:wght@400;700 & display=swap" rel="stylesheet" />
      </Head>
      <body className='font-NotoSans'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}