import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { TypeAnimation } from 'react-type-animation';

const HomeTitle = () => {
  return (
    <motion.h1
      variants={fadeIn('down', 0.2)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="h1"
    >
      <TypeAnimation
        sequence={[
          // title 1
          'Every line of code -',
          500,
          'small step into the future',
          2500,
          // title 2
          'Innovation through',
          500,
          'technology and creativity',
          2500,
          // title 3
          'Ideas turn into code,',
          500,
          'and code into reality',
          2500,
        ]}
        speed={50}
        className="type"
        cursor={false}
        omitDeletionAnimation={true}
        repeat={Infinity}
      />
    </motion.h1>
  );
};

export default HomeTitle;
