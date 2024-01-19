import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaGithub, FaLinkedin, FaQuoteLeft, FaTelegram } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import reviewsEn from '../locales/en/reviews.json';
import reviewsUk from '../locales/uk/reviews.json';

const ReviewSlider = () => {
  const router = useRouter();

  const t = router.locale === 'en' ? reviewsEn : reviewsUk;
  // testimonial data
  const reviewData = [
    {
      image: '/review-Ihor-Leonov.png',
      name: t.reviewerName1,
      position: t.reviwerPosition1,
      links: [
        {
          icon: <FaGithub />,
          path: 'https://github.com/IhorLeonov',
        },
        {
          icon: <FaLinkedin />,
          path: 'https://linkedin.com/in/ihor-leonov',
        },
        {
          icon: <FaTelegram />,
          path: 'https://t.me/ihor_leonov',
        },
        {
          icon: <MdMail />,
          path: 'mailto:Ihorleonow@gmail.com',
        },
      ],
      message: t.reviewerMessage1,
    },
    {
      image: '/review-Julia-Babiychuk.png',
      name: t.reviewerName2,
      position: t.reviwerPosition2,
      links: [
        {
          icon: <FaGithub />,
          path: 'https://github.com/BabiychukYuliya',
        },
        {
          icon: <FaLinkedin />,
          path: 'https://www.linkedin.com/in/yulia-babiychuk',
        },
        {
          icon: <FaTelegram />,
          path: 'https://t.me/BabiychukYuliya',
        },
        {
          icon: <MdMail />,
          path: 'mailto:julia4233097@gmail.com',
        },
      ],
      message: t.reviewerMessage2,
    },
    {
      image: '/review-Maxsym-Svyrydov.png',
      name: t.reviewerName3,
      position: t.reviwerPosition1,
      links: [
        {
          icon: <FaGithub />,
          path: 'https://github.com/Maksym-Svyrydov',
        },
        {
          icon: <FaLinkedin />,
          path: 'https://www.linkedin.com/in/maksym-svyrydov',
        },
        {
          icon: <FaTelegram />,
          path: 'https://t.me/MaksymSvyrydov',
        },
        {
          icon: <MdMail />,
          path: 'mailto:msvhts@gmail.com',
        },
      ],
      message: t.reviewerMessage3,
    },
    {
      image: '/review-Mykola-Zanko.png',
      name: t.reviewerName4,
      position: t.reviwerPosition1,
      links: [
        {
          icon: <FaGithub />,
          path: 'https://github.com/Pumpon4yk',
        },
        {
          icon: <FaLinkedin />,
          path: 'https://www.linkedin.com/in/mykola-zanko',
        },
        {
          icon: <FaTelegram />,
          path: 'https://t.me/pumpon4yk',
        },
        {
          icon: <MdMail />,
          path: 'mailto:tt10392@gmail.com',
        },
      ],
      message: t.reviewerMessage4,
    },
  ];

  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      loop={true}
      modules={[Navigation, Pagination]}
      className="h-[430px]"
    >
      {reviewData.map((review, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-9 max-sm:overflow-y-auto">
            {/* avatar, name, position */}
            <div
              className="w-full max-w-[300px] flex flex-col xl:justify-center items-center 
              relative mx-auto xl:mx-0"
            >
              <div className="flex flex-col justify-center text-center">
                {/* avatar */}
                <div className="mb-2 mx-auto">
                  <Image
                    src={review.image}
                    width={100}
                    height={100}
                    alt="avatar of the reviewer"
                  />
                </div>
                {/* name */}
                <div className="text-lg">{review.name}</div>
                {/* position */}
                <div className="text-[12px] uppercase font-extralight tracking-widest">
                  {review.position}
                </div>
                {/* social links */}
                <div className="flex justify-center gap-x-5 mt-2 max-md:mb-2">
                  {review.links.map((link, index) => (
                    <Link
                      key={index}
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="hover:text-accent hover:scale-110 transition-all duration-300"
                    >
                      <span className="text-2xl">{link.icon}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            {/* quote & message */}
            <div
              className="flex-1 flex-col justify-center before:w-[1px] xl:before:bg-white/20 
              xl:before:absolute xl:before:left-0 xl:before:min-h-[200px] xl:before:h-full relative xl:pl-20"
            >
              {/* quote icon */}
              <div className="mb-2">
                <FaQuoteLeft className="text-3xl xl:text-6xl text-white/20 mx-auto md:mx-0" />
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
