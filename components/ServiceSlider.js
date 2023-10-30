import { FaServer, FaWrench } from 'react-icons/fa';
import { RxArrowTopRight, RxDesktop, RxMobile } from 'react-icons/rx';
import { FreeMode, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

export const serviceData = [
  {
    icon: <RxDesktop />,
    title: 'Frontend Development',
    description:
      'Development of unique and intuitive interfaces, that improve the user experience.',
  },
  {
    icon: <FaServer />,
    title: 'Backend development',
    description:
      'Creating powerful server solutions that ensure reliability and the security of your web application.',
  },
  {
    icon: <RxMobile />,
    title: 'Mobile Adaptation',
    description:
      'Adapting your website or application for mobile devices so your content is available everywhere.',
  },
  {
    icon: (
      <Image
        src="/service-optimization-icon.svg"
        width={36}
        height={36}
        alt="icon optimization"
      />
    ),
    title: 'Customization and Optimization',
    description:
      'Development of individual solutions and optimization existing projects to improve their productivity.',
  },
  {
    icon: <FaWrench />,
    title: 'Maintenance and Support',
    description:
      'Support and update of existing web projects, guaranteeing their uninterrupted operation.',
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="bg-[#412f7b15] h-max xl:h-[340px] rounded-lg px-5 py-7 flex sm:flex-col gap-x-5 sm:gap-x-0 group cursor-pointer hover:bg-[#5941a915] transition-all duration-300">
            {/* icon */}
            <div className="text-4xl text-accent mb-3">{item.icon}</div>
            {/* title & desc */}
            <div className="max-xl:mb-6">
              <div className="mb-2 text-lg">{item.title}</div>
              <p className="max-w-[350px] leading-normal">{item.description}</p>
            </div>
            {/* arrow */}
            <div className="text-3xl xl:mt-auto">
              <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
