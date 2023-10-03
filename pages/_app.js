import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import '../styles/globals.css';
import { AnimatePresence, motion } from 'framer-motion';
import Transition from '../components/Transition';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Layout>
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
