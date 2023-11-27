import Link from 'next/link';
import { Meta } from '../components';

const NotFound = () => {
  return (
    <>
      <Meta title="404 - Page not found" />

      <div className="h-full bg-primary/30 text-center flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold text-accent mb-4">404</h1>
        <p className="text-3xl mb-4 border border-accent border-dashed rounded-3xl p-4">
          Page not found
        </p>
        <Link
          href="/"
          className="text-xl text-accent hover:scale-110 transition-all duration-300"
        >
          Go to home
        </Link>
      </div>
    </>
  );
};

export default NotFound;
