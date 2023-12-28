import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { useEffect, useState } from 'react';

const AnimatedText = ({
  isTypingAnimate,
  tag,
  children,
  variants,
  className,
  sequence,
}) => {
  const Tag = motion[tag];
  const [isEnLocale, setIsEnLocale] = useState(false);

  useEffect(() => {
    setIsEnLocale(prevState => !prevState);
  }, [sequence]);

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
          key={isEnLocale}
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
