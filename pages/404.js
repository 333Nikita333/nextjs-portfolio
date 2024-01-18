import Link from 'next/link';
import { Meta } from '../components';
import notFoundEn from '../locales/en/404.json';
import notFoundUk from '../locales/uk/404.json';
import { useRouter } from 'next/router';

const NotFound = () => {
  const router = useRouter();

  const t = router.locale === 'en' ? notFoundEn : notFoundUk;

  return (
    <>
      <Meta
        title={t.metaTitle}
        description={t.metaDescription}
        robots="noindex, nofollow"
      />

      <div className="h-full bg-primary/30 text-center flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold text-accent mb-4">404</h1>
        <p className="text-3xl mb-4 border border-accent border-dashed rounded-3xl p-4">
          {t.descriptionText}
        </p>
        <Link
          href="/"
          className="text-xl text-accent hover:scale-110 transition-all duration-300"
        >
          {t.buttonText}
        </Link>
      </div>
    </>
  );
};

export default NotFound;
