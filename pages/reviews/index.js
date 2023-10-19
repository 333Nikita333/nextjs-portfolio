import { motion } from 'framer-motion';
import { ReviewSlider } from '../../components';
import { fadeIn } from '../../variants';

const Reviews = () => {
  return (
    <div className="h-full bg-primary/30 py-32 text-center">
      <div className="container mx-auto h-full flex flex-col justify-center">
        {/* title */}
        <motion.h2
          variants={fadeIn('down', 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 mb-8 xl:mb-0"
        >
          What clients <span className="text-accent">say .</span>
        </motion.h2>
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
  );
};

export default Reviews;
