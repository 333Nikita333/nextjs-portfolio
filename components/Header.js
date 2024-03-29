import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import filesPathEn from '../locales/en/filesPath.json';
import filesPathUk from '../locales/uk/filesPath.json';
import LanguageSwitcher from './LanguageSwitcher';
import Socials from './Socials';

const Header = () => {
  const router = useRouter();
  const t = router.locale === 'en' ? filesPathEn : filesPathUk;

  return (
    <header className="fixed top-0 z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto flex items-center justify-around max-sm:flex-col max-sm:gap-y-6">
        <div className="flex flex-col lg:flex-row lg:w-full justify-between items-center gap-y-6 py-8 max-sm:pb-0">
          {/* logo */}
          <Link href={'/'}>
            <Image
              src={t.logoImage}
              width={220}
              height={45}
              alt="portfolio logo image"
              priority={true}
            />
          </Link>
          {/* socials */}
          <Socials />
        </div>
        {/* language switcher */}
        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default Header;
