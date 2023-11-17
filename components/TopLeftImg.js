import Image from 'next/image';

const TopLeftImg = () => {
  return (
    <div
      className="absolute pointer-events-none left-0 top-0 mix-blend-color-dodge w-[200px] 
      xl:w-[400px] opacity-50"
    >
      <Image
        src="/top-left-img.png"
        width={400}
        height={400}
        alt="decorative image"
      />
    </div>
  );
};

export default TopLeftImg;
