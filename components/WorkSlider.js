import Image from 'next/image';
import { FaHandPointRight } from 'react-icons/fa';
import { Autoplay, FreeMode, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'Lushwood Haven',
          path: '/lushwood-haven.jpg',
        },
        {
          title: 'Phonebook',
          path: '/lushwood-haven.jpg',
        },
        {
          title: 'GooseTrack',
          path: '/goose-track.jpg',
        },
        {
          title: 'Web Studio',
          path: '/web-studio.jpg',
        },
      ],
    },
    {
      images: [
        {
          title: 'Phonebook API',
          path: '/phonebook-api.jpg',
        },
        {
          title: 'Ice Cream',
          path: '/ice-cream.jpg',
        },
        {
          title: 'Filmoteka',
          path: '/filmoteka.jpg',
        },
        {
          title: 'Image Publish App',
          path: '/lushwood-haven.jpg',
        },
      ],
    },
    // {
    //   images: [
    //     {
    //       title: 'Ip Adress Tracker',
    //       path: '/lushwood-haven.jpg',
    //     },
    //     {
    //       title: 'Image Gallery',
    //       path: '/lushwood-haven.jpg',
    //     },
    //     {
    //       title: 'Movie Search',
    //       path: '/lushwood-haven.jpg',
    //     },
    //     {
    //       title: 'Image Search',
    //       path: '/lushwood-haven.jpg',
    //     },
    //   ],
    // },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={15}
      freeMode={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, FreeMode, Pagination]}
      className="h-[380px] sm:h-[530px]"
    >
      {workSlides.slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
            {slide.images.map((image, index) => (
              <div
                className="relative rounded-lg overflow-hidden flex items-center 
                justify-center group"
                key={index}
              >
                <div
                  className="flex items-center justify-center relative overflow-hidden 
                group"
                >
                  {/* images */}
                  <Image
                    src={image.path}
                    width={500}
                    height={300}
                    alt={image.title}
                  />
                  {/* overlay gradient */}
                  <div
                    className="absolute inset-0 bg-gradient-to-l from-transparent 
                  via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 
                  transition-all duration-700"
                  ></div>
                  {/* info description*/}
                  <div
                    className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 
                  group-hover:xl:-translate-y-20 transition-all duration-300"
                  >
                    <div className="flex items-center gap-x-2">
                      {/* title*/}
                      <h3 className="text-xl delay-100">{image.title}</h3>
                      {/* icon */}
                      <div
                        className="text-xl translate-y-[500%] group-hover:translate-y-0 
                      transition-all duration-300 delay-200"
                      >
                        <FaHandPointRight size={40} className="text-accent" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
