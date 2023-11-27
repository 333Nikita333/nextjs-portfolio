import Image from 'next/image';
import Link from 'next/link';
import { FaHandPointRight } from 'react-icons/fa';
import { Autoplay, FreeMode, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

const projectSlides = {
  slides: [
    {
      images: [
        {
          title: 'Lushwood Haven',
          imagePath: '/lushwood-haven.jpg',
          link: 'lushwood-haven',
        },
        {
          title: 'Phonebook',
          imagePath: '/phonebook.jpg',
          link: 'phonebook',
        },
        {
          title: 'GooseTrack',
          imagePath: '/goose-track.jpg',
          link: 'goose-track',
        },
        {
          title: 'Web Studio',
          imagePath: '/web-studio.jpg',
          link: 'web-studio',
        },
      ],
    },
    {
      images: [
        {
          title: 'Phonebook API',
          imagePath: '/phonebook-api.jpg',
          link: 'phonebook-api',
        },
        {
          title: 'Ice Cream',
          imagePath: '/ice-cream.jpg',
          link: 'ice-cream',
        },
        {
          title: 'Filmoteka',
          imagePath: '/filmoteka.jpg',
          link: 'filmoteka',
        },
        {
          title: 'Image Publish App',
          imagePath: '/image-publish-app.jpg',
          link: 'image-publish-app',
        },
      ],
    },
    {
      images: [
        {
          title: 'Ip Adress Tracker',
          imagePath: '/ip-adress-tracker.jpg',
          link: 'ip-adress-tracker',
        },
      ],
    },
  ],
};

const ProjectsSlider = () => {
  return (
    <Swiper
      spaceBetween={15}
      freeMode={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      pagination={{
        clickable: true,
      }}
      scrollbar={{ draggable: true }}
      navigation
      modules={[Autoplay, FreeMode, Pagination, Navigation]}
      className="h-[380px] sm:h-[530px]"
    >
      {projectSlides.slides.map((slide, index) => (
        <SwiperSlide key={index}>
          {slide.images.length > 1 ? (
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => (
                <Link href={`/projects/${image.link}`} key={index}>
                  <div
                    className="relative rounded-lg overflow-hidden flex items-center 
                    justify-center group"
                  >
                    <div
                      className="flex items-center justify-center relative overflow-hidden 
                      group"
                    >
                      {/* images */}
                      <Image
                        src={image.imagePath}
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
                          <h3 className="text-lg sm:text-xl delay-100">
                            {image.title}
                          </h3>
                          {/* icon */}
                          <div
                            className="text-xl translate-y-[500%] group-hover:translate-y-0 
                            transition-all duration-300 delay-200"
                          >
                            <FaHandPointRight className="text-accent text-4xl" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="flex justify-center cursor-pointer mx-auto mt-10">
              {slide.images.map((image, index) => (
                <Link href={`/projects/${image.link}`} key={index}>
                  <div
                    className="relative rounded-lg overflow-hidden flex items-center 
                    justify-center group"
                  >
                    <div
                      className="flex items-center justify-center relative overflow-hidden 
                      group"
                    >
                      {/* images */}
                      <Image
                        src={image.imagePath}
                        width={600}
                        height={400}
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
                        className="absolute bottom-0 translate-y-full group-hover:-translate-y-32 
                        transition-all duration-300"
                      >
                        <div className="flex items-center gap-x-2">
                          {/* title*/}
                          <h3 className="text-2xl delay-100">{image.title}</h3>
                          {/* icon */}
                          <div
                            className="text-xl translate-y-[500%] group-hover:translate-y-0 
                            transition-all duration-300 delay-200"
                          >
                            <FaHandPointRight className="text-accent text-5xl" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProjectsSlider;
