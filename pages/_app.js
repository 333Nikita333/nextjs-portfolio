import { AnimatePresence, motion } from 'framer-motion';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import Transition from '../components/Transition';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Layout>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="UTF-8" />
        <link type="image/x-icon" rel="shortcut icon" href="/favicon.ico" />
        <link
          type="image/png"
          sizes="16x16"
          rel="icon"
          href="/favicon-16x16.png"
        />
        <link
          type="image/png"
          sizes="32x32"
          rel="icon"
          href="/favicon-32x32.png"
        />
        <link
          type="image/png"
          sizes="96x96"
          rel="icon"
          href="/favicon-96x96.png"
        />
        <link
          type="image/png"
          sizes="120x120"
          rel="icon"
          href="/favicon-120x120.png"
        />
        <link
          type="image/png"
          sizes="192x192"
          rel="icon"
          href="/favicon-android-192x192.png"
        />
        <link
          sizes="120x120"
          rel="apple-touch-icon"
          href="/favicon-120x120.png"
        />
        <link color="#ff5ff5" rel="mask-icon" href="/safari-pinned-tab.svg" />
        <meta name="theme-color" content="#2e2257"></meta>
      </Head>

      <AnimatePresence mode="wait">
        <motion.div key={router.route} className="h-full">
          <Transition />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
