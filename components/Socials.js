import Link from 'next/link';
import {
  RiBehanceLine,
  RiDribbbleLine,
  RiFacebookBoxLine,
  RiInstagramLine,
  RiPinterestLine,
  RiYoutubeLine,
} from 'react-icons/ri';

const socials = [
  {
    path: '',
    icon: <RiYoutubeLine size={25} />,
    styles: 'hover:text-accent transition-all duration-300',
  },
  {
    path: '',
    icon: <RiFacebookBoxLine size={25} />,
    styles: 'hover:text-accent transition-all duration-300',
  },
  {
    path: '',
    icon: <RiInstagramLine size={25} />,
    styles: 'hover:text-accent transition-all duration-300',
  },
  {
    path: '',
    icon: <RiDribbbleLine size={25} />,
    styles: 'hover:text-accent transition-all duration-300',
  },
  {
    path: '',
    icon: <RiBehanceLine size={25} />,
    styles: 'hover:text-accent transition-all duration-300',
  },
  {
    path: '',
    icon: <RiPinterestLine size={25} />,
    styles: 'hover:text-accent transition-all duration-300',
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socials.map(({ path, icon, styles }, index) => (
        <Link key={index} href={path} className={styles}>
          {icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
