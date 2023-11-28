import { motion } from 'framer-motion';
import { BsArrowRight } from 'react-icons/bs';
import { AnimatedText, Circles, Meta } from '../../components';
import { fadeIn } from '../../variants';

const Contact = () => {
  return (
    <>
      <Meta
        title="Contact"
        description="Connect with Mykyta for web development projects. Fill out the form and let's discuss your ideas and requirements."
        robots="index, nofollow"
      />

      <div className="h-full bg-primary/30">
        <Circles />
        <div
          className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center 
        h-full"
        >
          {/* text & form */}
          <div className="flex flex-col w-full max-w-[700px]">
            {/* text */}
            <AnimatedText
              isTypingAnimate={false}
              tag="h2"
              variants={fadeIn('down', 0.2)}
              className="h2 text-center mb-12 "
            >
              Let&apos;s <span className="text-accent">connect .</span>
            </AnimatedText>
            {/* form */}
            <motion.form
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex-1 flex flex-col items-center gap-6 w-full mx-auto"
            >
              {/* group */}
              <div className="flex gap-x-6 w-full">
                <input
                  type="name"
                  placeholder="What is your name?"
                  className="input"
                />
                <input
                  type="email"
                  placeholder="What is your email?"
                  className="input"
                />
              </div>
              <input type="text" placeholder="subject" className="input" />
              <textarea placeholder="message" className="textarea"></textarea>
              <button
                className="btn rounded-full border border-white/50 max-w-[170px] px-8 
              transition-all duration-300 flex items-center justify-center overflow-hidden 
            hover:border-accent group"
              >
                <span
                  className="group-hover:-translate-y-[120%] group-hover:opacity-0 
                transition-all duration-500"
                >
                  Let&apos;s talk
                </span>
                <BsArrowRight
                  className="-translate-y-120%] opacity-0 group-hover:flex 
                group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 
                absolute text-[22px]"
                />
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
