import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { AnimatedText, Meta, ReviewSlider } from '../../components';
import reviewsEn from '../../locales/en/reviews.json';
import reviewsUk from '../../locales/uk/reviews.json';
import { fadeIn } from '../../variants';

const Reviews = () => {
  const router = useRouter();

  const t = router.locale === 'en' ? reviewsEn : reviewsUk;

  return (
    <>
      <Meta
        title={t.metaTitle}
        description={t.metaDescription}
        robots="index, follow"
      />

      <div className="h-full bg-primary/30 py-32 text-center">
        <div className="container mx-auto h-full flex flex-col justify-center">
          {/* title */}
          <AnimatedText
            isTypingAnimate={false}
            tag="h2"
            variants={fadeIn('down', 0.2)}
            className="h2 mb-8 xl:mb-0"
          >
            {t.title1} <span className="text-accent">{t.title2} .</span>
          </AnimatedText>
          {/* review slider */}
          <motion.div
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <ReviewSlider />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
