import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="apple-mobile-web-app-capable" content="yes" />

        <meta property="og:url" content="https://metastack.ml/" />
        <meta property="og:title" content="Azat Hafizov" />
        <meta
          property="og:image"
          content="/static/favicons/favicon-194x194.png"
        />
        <meta property="og:site_name" content="Azat Hafizov" />
        <meta property="og:description" content="Azat Hafizov personal blog" />

        <meta itemProp="name" content="Azat Hafizov" />
        <meta itemProp="description" content="Azat Hafizov personal blog" />
        <meta itemProp="image" content="/static/favicons/favicon-194x194.png" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Azat Hafizov" />
        <meta name="twitter:description" content="Azat Hafizov personal blog" />
        <meta
          name="twitter:image"
          content="/static/favicons/favicon-194x194.png"
        />

        <meta name="description" content="Azat Hafizov personal blog" />
        <meta
          name="keywords"
          content="Capital, Startups, Technology Innovation, Internet business, Information Technology"
        />
        <link rel="canonical" href="https://metastack.ml/" />

        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/static/favicons/apple-touch-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/static/favicons/apple-touch-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/static/favicons/apple-touch-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/static/favicons/apple-touch-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/static/favicons/apple-touch-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/static/favicons/apple-touch-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/static/favicons/apple-touch-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/static/favicons/apple-touch-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/static/favicons/apple-touch-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/static/favicons/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/static/favicons/favicon-194x194.png"
          sizes="194x194"
        />
        <link
          rel="icon"
          type="image/png"
          href="/static/favicons/favicon-96x96.png"
          sizes="96x96"
        />
        <link
          rel="icon"
          type="image/png"
          href="/static/favicons/android-chrome-192x192.png"
          sizes="192x192"
        />
        <link
          rel="icon"
          type="image/png"
          href="/static/favicons/favicon-16x16.png"
          sizes="16x16"
        />

        <meta name="msapplication-TileColor" content="#ed1c24" />
        <meta name="msapplication-TileImage" content="mstile-144x144.png" />
        <meta name="theme-color" content="#ffffff" />

        <link href="/static/favicons/site.webmanifest" rel="manifest" />
        <meta
          content="/static/favicons/browserconfig.xml"
          name="msapplication-config"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
