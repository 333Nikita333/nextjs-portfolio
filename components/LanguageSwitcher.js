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
    <div className="relative">
      <div className="cursor-pointer" onClick={handleFlagClick}>
        <Image
          src={t.flagIcon}
          width={30}
          height={30}
          alt={`${router.locale}-flag`}
        />
      </div>

      {isDropdownVisible && (
        <div className="absolute top-full right-0 mt-2 bg-white p-2 border border-gray-300 rounded">
          <div
            className="cursor-pointer"
            onClick={() => handleLanguageChange('en')}
          >
            <Image src="/flag-en.svg" width={30} height={30} alt="en-flag" />
          </div>
          <div
            className="cursor-pointer"
            onClick={() => handleLanguageChange('uk')}
          >
            <Image src="/flag-ua.svg" width={30} height={30} alt="ua-flag" />
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
