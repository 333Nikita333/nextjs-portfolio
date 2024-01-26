import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import filesPathEn from '../locales/en/filesPath.json';
import filesPathUk from '../locales/uk/filesPath.json';

const LanguageSwitcher = () => {
  const router = useRouter();
  const t = router.locale === 'en' ? filesPathEn : filesPathUk;
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleFlagClick = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleLanguageChange = locale => {
    router.push(router.pathname, router.asPath, { locale });
    setIsDropdownVisible(false);
  };

  return (
    <div className="relative border border-gray-300 rounded xl:mr-20">
      <div className="cursor-pointer" onClick={handleFlagClick}>
        <Image
          src={t.flagIcon}
          width={40}
          height={30}
          alt={`${router.locale}-flag`}
        />
      </div>

      {isDropdownVisible && (
        <div className="absolute top-full right-0 mt-2 max-sm:left-12 max-sm:top-0 max-sm:mt-0">
          <div
            className="cursor-pointer"
            onClick={() =>
              handleLanguageChange(router.locale === 'en' ? 'uk' : 'en')
            }
          >
            <Image
              src={router.locale === 'en' ? '/flag-ua.svg' : '/flag-en.svg'}
              width={40}
              height={30}
              alt="en-flag"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
