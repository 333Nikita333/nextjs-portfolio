import Image from 'next/image';

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src="/my-image.png"
        width={1000}
        height={1000}
        alt=""
        className="translate-z-0 w-full h-full"
      />
    </div>
  );
};

export default Avatar;
