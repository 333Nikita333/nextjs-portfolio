import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const AnimatedTitle = ({ tag, variants, sequence, classNames }) => {
  const Tag = motion[tag];

  return (
    <Tag
      variants={variants}
      initial="hidden"
      animate="show"
      exit="hidden"
      className={classNames}
    >
      <TypeAnimation
        sequence={sequence}
        speed={50}
        className="type"
        cursor={false}
        omitDeletionAnimation={true}
        repeat={Infinity}
      />
    </Tag>
  );
};

export default AnimatedTitle;
