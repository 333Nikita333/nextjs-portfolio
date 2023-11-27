import Image from 'next/image';

const Bulb = () => {
  return (
    <div
      className="absolute -left-36 -bottom-12 rotate-12 mix-blend-color-dodge 
      animate-pulse duration-75 z-1 w-[200px] xl:w-[260px]"
    >
      <Image
        src={'/bulb.png'}
        width={260}
        height={200}
        alt="background image with light bulb"
        className="w-full h-full"
      />
    </div>
  );
};

export default Bulb;
