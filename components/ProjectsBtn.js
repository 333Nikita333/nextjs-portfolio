import Image from 'next/image';
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi2';

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link
        href={'/work'}
        className="relative w-[145px] h-[145px] xl:w-[165px] xl:h-[165px] flex justify-center items-center 
        bg-circleStar bg-cover bg-center bg-no-repeat group"
      >
        <Image
          src={'/rounded-text.png'}
          width={141}
          height={148}
          alt=""
          className="animate-spin-slow w-full h-full max-w-[101px] max-h-[108px] xl:max-w-[121px] xl:max-h-[128px]"
        />
        <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300" />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
