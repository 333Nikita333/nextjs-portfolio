import Link from 'next/link';
import {
  RiGithubFill,
  RiLinkedinBoxFill,
  RiTelegramFill,
  RiInstagramLine,
} from 'react-icons/ri';
import { MdEmail } from 'react-icons/md';

const socials = [
  {
    path: 'https://github.com/333Nikita333',
    icon: <RiGithubFill size={25} />,
  },
  {
    path: 'mailto:mykytahilis@gmail.com',
    icon: <MdEmail size={25} />,
  },
  {
    path: 'https://instagram.com/nik_gilis',
    icon: <RiInstagramLine size={25} />,
  },
  {
    path: 'https://linkedin.com/in/mykyta-hilis',
    icon: <RiLinkedinBoxFill size={25} />,
  },
  {
    path: 'https://t.me/NikitaGilis',
    icon: <RiTelegramFill size={25} />,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socials.map(({ path, icon}, index) => (
        <Link
          key={index}
          href={path}
          target='_blank'
          rel='noreferrer nofollow noopener'
          className="hover:text-accent hover:scale-110 transition-all duration-300"
        >
          {icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
