import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="antialiased bg-gray-200">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
