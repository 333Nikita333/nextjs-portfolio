import Image from 'next/image';
// import { useState } from 'react';
import { FaServer, FaWrench } from 'react-icons/fa';
import { RxArrowTopRight, RxDesktop, RxMobile } from 'react-icons/rx';
import { Autoplay, FreeMode, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { motion, useAnimation } from 'framer-motion';

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
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      modules={[Autoplay, FreeMode, Pagination]}
      className="h-[240px] sm:h-[330px]"
    >
      {serviceData.map((item, index) => (
        <SwiperSlide key={index}>
          <div
            className="overflow-hidden bg-[#412f7b15] h-max sm:h-[300px] 
            sm:overflow-y-auto md:overflow-y-hidden rounded-lg px-5 py-7 flex sm:flex-col gap-x-5 sm:gap-x-0 group 
            cursor-pointer hover:bg-[#5941a915] transition-all duration-300"
          >
            {/* icon */}
            <div className="text-4xl text-accent mb-3">{item.icon}</div>
            {/* title & desc */}
            <div className="max-sm:mb-6 sm:relative">
              <h3
                className="mb-2 text-2xl sm:absolute sm:top-0 sm:group-hover:-translate-x-72 sm:group-focus:-translate-x-72 
                sm:transition-all sm:duration-300"
              >
                {item.title}
              </h3>
              <p
                className="max-w-[350px] leading-normal sm:absolute sm:top-0 sm:translate-x-72 sm:group-hover:translate-x-0 
                sm:group-focus:translate-x-0 sm:transition-all sm:duration-300"
              >
                {item.description}
              </p>
            </div>
            {/* arrow */}
            <div className="text-3xl sm:mt-auto">
              <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
// {serviceData.map((item, index) => (
//   <SwiperSlide key={index}>
//     <div
//       onMouseEnter={() => handleMouseEnter(index)}
//       onMouseLeave={handleMouseLeave}
//       className="bg-[#412f7b15] h-max sm:h-[340px] sm:overflow-y-auto md:overflow-y-hidden rounded-lg px-5
//       py-7 flex sm:flex-col gap-x-5 sm:gap-x-0 group cursor-pointer hover:bg-[#5941a915] transition-all duration-300"
//     >
//       {/* icon */}
//       <div className="text-4xl text-accent mb-3">{item.icon}</div>
//       {/* title & desc */}
//       <div className="max-sm:mb-6 relative">
//         <motion.div
//           initial={{ x: 0, opacity: 1 }}
//           animate={{
//             x: hoveredIndex === index ? -50 : 0,
//             opacity: hoveredIndex === index ? 0 : 1,
//           }}
//           transition={{ duration: 0.3 }}
//           className="mb-2 text-lg absolute top-0"
//         >
//           {item.title}
//         </motion.div>
//         <motion.p
//           initial={{ x: 50, opacity: 0 }}
//           animate={{
//             x: hoveredIndex === index ? 0 : 50,
//             opacity: hoveredIndex === index ? 1 : 0,
//           }}
//           transition={{ duration: 0.3 }}
//           className="max-w-[350px] leading-normal absolute top-0"
//         >
//           {item.description}
//         </motion.p>
//       </div>
//       {/* arrow */}
//       <div className="text-3xl sm:mt-auto">
//         <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
//       </div>
//     </div>
//   </SwiperSlide>
// ))}
