import { motion } from 'framer-motion';
import { AnimatedText, Bulb, Circles, ServiceSlider } from '../../components';
import { fadeIn } from '../../variants';

const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center sm:overflow-y-auto lg:overflow-y-hidden">
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
              sequence={['My services', 2500, 'Your ideas, my code', 2500]}
              className="h2 xl:mt-8"
            />
            <AnimatedText
              isTypingAnimate={false}
              tag="p"
              variants={fadeIn('up', 0.4)}
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              Here you can find out more about how I can help you realize your
              ideas into reality. Whether you need a website, web application or
              development from scratch, I offer a wide range of web development
              services to help you achieve your goals and maximize your
              business&apos;s potential.
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
  );
};

export default Services;
