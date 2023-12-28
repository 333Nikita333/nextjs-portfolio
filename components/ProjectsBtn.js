import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { HiArrowRight } from 'react-icons/hi2';
import filesPathEn from '../locales/en/filesPath.json';
import filesPathUk from '../locales/uk/filesPath.json';

const ProjectsBtn = () => {
  const router = useRouter();
  const t = router.locale === 'en' ? filesPathEn : filesPathUk;

  return (
    <div className="mx-auto xl:mx-0">
      <Link
        href={'/projects'}
        className="relative w-[145px] h-[145px] xl:w-[165px] xl:h-[165px] flex justify-center items-center 
        bg-circleStar bg-cover bg-center bg-no-repeat group"
      >
        <Image
          src={t.projectBtnImage}
          width={148}
          height={148}
          alt="background image for the project button"
          className="animate-spin-slow w-full h-full max-w-[115px] max-h-[115px] xl:max-w-[122px] xl:max-h-[129px]"
        />
        <HiArrowRight
          className="absolute text-4xl group-hover:translate-x-2 group-hover:text-accent group-hover:scale-125 
          transition-all duration-300"
        />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
