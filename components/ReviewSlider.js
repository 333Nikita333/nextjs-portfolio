import Image from 'next/image';
import { FaQuoteLeft } from 'react-icons/fa';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

// testimonial data
const reviewData = [
  {
    image: '/review-Ihor-Leonov.png',
    name: 'Ihor Leonov',
    position: 'Front-end developer',
    message:
      'We worked together on a few projects and Mykyta showed himself as a persistent, purposeful, and diligent developer. He is working quickly and writing clear code. Also, Mykyta held the position of scrum master, and he did his work perfectly. And last but not least, Mykyta is sociable and a good team player, he is always coming to friend with a help!',
  },
  {
    image: '/review-Julia-Babiychuk.png',
    name: 'Julia Babiychuk',
    position: 'Front-end developer',
    message:
      'Nikita creates very cool projects. It is always easy to work with him and you will always get the maximum result from your work. I highly recommend!',
  },
  {
    image: '/t-avt-1.png',
    name: 'Anne Smith',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-2.png',
    name: 'Jane Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-3.png',
    name: 'Eric Johnson',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
];

const ReviewSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[480px]"
    >
      {reviewData.map((review, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-8">
            {/* avatar, name, position */}
            <div
              className="w-full max-w-[300px] flex flex-col xl:justify-center items-center 
              relative mx-auto xl:mx-0"
            >
              <div className="flex flex-col justify-center text-center">
                {/* avatar */}
                <div className="mb-2 mx-auto">
                  <Image src={review.image} width={100} height={100} alt="" />
                </div>
                {/* name */}
                <div className="text-lg">{review.name}</div>
                {/* position */}
                <div className="text-[12px] uppercase font-extralight tracking-widest">
                  {review.position}
                </div>
              </div>
            </div>
            {/* quote & message */}
            <div
              className="flex-1 flex-col justify-center before:w-[1px] xl:before:bg-white/20 
              xl:before:absolute xl:before:left-0 xl:before:min-h-[200px] xl:before:h-full relative xl:pl-20"
            >
              {/* quote icon */}
              <div className="mb-4">
                <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" />
              </div>
              {/* message */}
              <div className="xl:text-lg text-center md:text-left italic">
                {review.message}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ReviewSlider;
