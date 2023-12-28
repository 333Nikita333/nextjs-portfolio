import { motion } from 'framer-motion';
import {
  AnimatedText,
  Avatar,
  Meta,
  ParticlesContainer,
  ProjectsBtn,
} from '../components';
import { fadeIn } from '../variants';
import { useRouter } from 'next/router';
import homeEn from '../locales/en/home.json';
import homeUk from '../locales/uk/home.json';

const Home = () => {
  const router = useRouter();
  const t = router.locale === 'en' ? homeEn : homeUk;

  return (
    <>
      <Meta
        title="Mykyta Hilis"
        description="Explore Mykyta's web development and design projects. From websites to web applications, each project is a blend of technology and creativity"
        robots="index, follow"
      />

      <div className="bg-primary/60 h-full">
        {/* text */}
        <div
          className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30
      to-black/10"
        >
          <div
            className="text-center flex flex-col justify-center xl:pt-40 xl:text-left 
          h-full container mx-auto xl:ml-28"
          >
            {/* title */}
            <AnimatedText
              isTypingAnimate={true}
              tag="h1"
              variants={fadeIn('down', 0.2)}
              sequence={[
                t.title1,
                500,
                t.title2,
                2500,
                t.title3,
                500,
                t.title4,
                2500,
                t.title5,
                500,
                t.title6,
                2500,
              ]}
              className="h1"
            />
            {/* subtitle */}
            <AnimatedText
              isTypingAnimate={false}
              tag="p"
              variants={fadeIn('down', 0.3)}
              className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-4 xl:mb-10 text-lg leading-relaxed"
            >
              {t.description1}
              <span className="text-accent"> Mykyta </span>and I am a
              <span className="text-accent">Junior Full Stack Developer</span>,
              and welcome to my virtual world of code and creativity. Here,
              every line is part of my story, and every project is an adventure.
              Ready to explore? Let&apos;s start!
            </AnimatedText>
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
            className="w-full h-full max-w-[500px] max-h-[500px] absolute -bottom-22
          lg:-bottom-6 lg:right-0"
          >
            <Avatar />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Home;
