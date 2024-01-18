import Image from 'next/image';
import { useRouter } from 'next/router';
import { FaServer, FaWrench } from 'react-icons/fa';
import { RxArrowTopRight, RxDesktop, RxMobile } from 'react-icons/rx';
import { Autoplay, FreeMode, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import servicesEn from '../locales/en/services.json';
import servicesUk from '../locales/uk/services.json';

const ServiceSlider = () => {
  const router = useRouter();

  const t = router.locale === 'en' ? servicesEn : servicesUk;
  const serviceData = [
    {
      icon: <RxDesktop />,
      title: t.serviceTitle1,
      description: t.serviceDescription1,
    },
    {
      icon: <FaServer />,
      title: t.serviceTitle2,
      description: t.serviceDescription2,
    },
    {
      icon: <RxMobile />,
      title: t.serviceTitle3,
      description: t.serviceDescription3,
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
      title: t.serviceTitle4,
      description: t.serviceDescription4,
    },
    {
      icon: <FaWrench />,
      title: t.serviceTitle5,
      description: t.serviceDescription5,
    },
  ];

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
      className="h-[250px] sm:h-[330px]"
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
