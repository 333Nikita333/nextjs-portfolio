import Image from 'next/image';

const Circles = () => {
  return (
    <div
      className="w=[200px] xl:w-[300px] absolute -right-16 -bottom-2 
      mix-blend-color-dodge animate-pulse duration-75 pointer-events-none"
    >
      <Image
        src={'/circles.png'}
        width={260}
        height={200}
        alt="background image with circles"
        className="w-full h-full"
      />
    </div>
  );
};

export default Circles;
