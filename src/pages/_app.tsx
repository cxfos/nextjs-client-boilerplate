import {AppProps} from 'next/app';
import Head from 'next/head';

import GlobalStyles from 'styles/global';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NextJS Client - Boilerplate</title>
        <link href="/img/favicon/next-apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180"></link>
        <link href="/img/favicon/next-favicon-32x32.png" rel="icon" sizes="32x32" type="image/png"></link>
        <link href="/img/favicon/next-favicon-16x16.png" rel="icon" sizes="16x16" type="image/png"></link>
        <link href="/img/favicon/site.webmanifest" rel="manifest"></link>
        <link href="/img/favicon/next-favicon.ico" rel="shortcut icon"></link>
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, ReactJS, NextJS and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
