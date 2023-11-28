import { motion } from 'framer-motion';
import { AnimatedText, Meta, ReviewSlider } from '../../components';
import { fadeIn } from '../../variants';

const Reviews = () => {
  return (
    <>
      <Meta
        title="Reviews"
        description="Read what people are saying about Mykyta Hilis' web development services. Discover the experiences of clients and partners."
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
            What people <span className="text-accent">say .</span>
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
