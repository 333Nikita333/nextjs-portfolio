import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import {
  AnimatedText,
  Bulb,
  Circles,
  Meta,
  ServiceSlider,
} from '../../components';
import serviceEn from '../../locales/en/services.json';
import serviceUk from '../../locales/uk/services.json';
import { fadeIn } from '../../variants';

const Services = () => {
  const router = useRouter();

  const t = router.locale === 'en' ? serviceEn : serviceUk;

  return (
    <>
      <Meta
        title={t.metaTitle}
        description={t.metaDescription}
        robots="index, nofollow"
      />

      <div className="h-full bg-primary/30 py-36 max-sm:pt-48 flex items-center sm:overflow-y-auto lg:overflow-y-hidden">
        <Circles />
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-x-8">
            {/* text */}
            <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
              {/* title */}
              <AnimatedText
                isTypingAnimate={true}
                tag="h2"
                variants={fadeIn('up', 0.2)}
                sequence={[t.title1, 2500, t.title2, 2500]}
                className="h2 xl:mt-8"
              />
              <AnimatedText
                isTypingAnimate={false}
                tag="p"
                variants={fadeIn('up', 0.4)}
                className="mb-4 max-w-[400px] mx-auto lg:mx-0"
              >
                {t.description}
              </AnimatedText>
            </div>

            {/* slider */}
            <motion.div
              variants={fadeIn('down', 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="w-full xl:max-w-[65%]"
            >
              <ServiceSlider />
            </motion.div>
          </div>
        </div>
        <Bulb />
      </div>
    </>
  );
};

export default Services;
