import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const AnimatedText = ({
  isTypingAnimate,
  tag,
  children,
  variants,
  className,
  sequence,
}) => {
  const Tag = motion[tag];

  return (
    <Tag
      variants={variants}
      initial="hidden"
      animate="show"
      exit="hidden"
      className={className}
    >
      {isTypingAnimate ? (
        <TypeAnimation
          sequence={sequence}
          speed={50}
          className="type"
          cursor={false}
          omitDeletionAnimation={true}
          repeat={Infinity}
        />
      ) : (
        children
      )}
    </Tag>
  );
};

export default AnimatedText;
