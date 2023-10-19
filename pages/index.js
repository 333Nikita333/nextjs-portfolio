import { motion } from 'framer-motion';
import {
  Avatar,
  ParticlesContainer,
  ProjectsBtn,
  HomeTitle,
} from '../components';
import { fadeIn } from '../variants';

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div
        className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30
     to-black/10"
      >
        <div
          className="text-center flex flex-col justify-center xl:pt-40 xl:text-left 
        h-full container mx-auto"
        >
          {/* title */}
          <HomeTitle />
          {/* subtitle */}
          <motion.p
            variants={fadeIn('down', 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-4 xl:mb-10 text-lg leading-relaxed"
          >
            Hello there! My name is <span className="text-accent">Mykyta</span>{' '}
            and I am a{' '}
            <span className="text-accent">Junior Full Stack Developer</span>,
            and welcome to my virtual world of code and creativity. Here, every
            line is part of my story, and every project is an adventure. Ready
            to explore? Let&apos;s start!
          </motion.p>
          {/* btn */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0 pointer-events-none">
        {/* bg img */}
        <div
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right 
        xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
        ></div>
        {/* particles */}
        <ParticlesContainer />
        {/* avatar img */}
        <motion.div
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: 'ease' }}
          className="w-full h-full max-w-[342px] max-h-[451px] absolute -bottom-22
        lg:-bottom-6 lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
