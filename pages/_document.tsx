import React from 'react';
import Script from 'next/script';
import { Html, Head, Main, NextScript } from 'next/document';

/**
 * Document
 */
export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://www.riveanimation.cards/v1/static/css/main.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script src="/js/theme.min.js" strategy="beforeInteractive" />
        <script
          async
          defer
          src="https://www.riveanimation.cards/v1/static/js/main.js"
        ></script>
      </body>
    </Html>
  );
}
