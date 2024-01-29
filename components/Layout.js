import { Sora, Unbounded } from 'next/font/google';
import Header from './Header';
import Nav from './Nav';
import TopLeftImg from './TopLeftImg';
import { useRouter } from 'next/router';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

const comic_neue = Unbounded({
  subsets: ['latin'],
  variable: '--font-unbounded',
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});

const Layout = ({ children }) => {
  const router = useRouter();

  const getFont = locale => {
    if (locale === 'uk') {
      return comic_neue;
    } else {
      return sora;
    }
  };
  const selectedFont = getFont(router.locale);

  return (
    <div
      className={`page bg-site text-white bg-cover bg-no-repeat ${
        selectedFont.variable
      } ${router.locale === 'en' ? 'font-sora' : 'font-unbounded'} relative`}
    >
      <TopLeftImg />
      <Nav />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
