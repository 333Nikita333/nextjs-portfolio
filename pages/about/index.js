import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import CountUp from 'react-countup';
import { FaCss3, FaDocker, FaHtml5, FaReact, FaSass } from 'react-icons/fa';
import {
  SiAxios,
  SiExpress,
  SiGit,
  SiJavascript,
  SiJsonwebtokens,
  SiMongodb,
  SiMongoose,
  SiNextdotjs,
  SiPostman,
  SiReactquery,
  SiSwagger,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiWebpack,
} from 'react-icons/si';
import { TbBrandReactNative, TbBrandVscode } from 'react-icons/tb';
import {
  AnimatedText,
  Avatar,
  Circles,
  Meta,
  TooltipContainer,
} from '../../components';
import { fadeIn } from '../../variants';

export const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Front-end',
        icons: [
          <FaHtml5 title="HTML5" key="HTML5" />,
          <FaCss3 title="CSS3" key="CSS3" />,
          <FaSass title="SASS" key="SASS" />,
          <SiJavascript title="JavaScript" key="JavaScript" />,
          <SiTypescript title="TypeScript" key="TypeScript" />,
          <FaReact title="React" key="React" />,
          <TbBrandReactNative title="React Native" key="React Native" />,
          <SiTailwindcss title="TailwindCSS" key="TailwindCSS" />,
          <SiNextdotjs title="Next" key="Next" />,
          <SiAxios title="Axios" key="Axios" />,
          <SiReactquery title="React Query" key="React Query" />,
        ],
      },
      {
        title: 'Back-end',
        icons: [
          <Image
            title="Node"
            src={'/nodejs-icon.svg'}
            height={24}
            width={24}
            key="Node"
            alt="icon node.js"
          />,
          <SiExpress title="Express" key="Express" />,
          <SiMongodb title="MongoDB" key="MongoDB" />,
          <SiMongoose title="Mongoose" key="Mongoose" />,
          <SiSwagger title="Swagger" key="Swagger" />,
          <SiJsonwebtokens title="JWT" key="JWT" />,
          <Image
            title="Cloudinary"
            src={'/cloudinary-icon.svg'}
            height={24}
            width={24}
            alt="icon cloudinary"
            key="Cloudinary"
          />,
          <FaDocker title="Docker" key="Docker" />,
        ],
      },
      {
        title: 'Common Tools',
        icons: [
          <TbBrandVscode title="VSCode" key="VSCode" />,
          <SiGit title="Git" key="Git" />,
          <SiWebpack title="Webpack" key="Webpack" />,
          <SiVite title="Vite" key="Vite" />,
          <SiPostman title="Postman" key="Postman" />,
        ],
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title:
          "Master's degree, Industrial and Сivil engineerin - Kyiv National University of Construction and Architecture, Kyiv, Ukraine",
        stage: '2012-2016',
      },
    ],
  },
  {
    title: 'certificates',
    info: [
      {
        title: 'Full Stack Developer - GoIT Global, Ukraine',
        stage: '2022-2023',
      },
    ],
  },
];
export const counters = [
  {
    end: 1,
    text: 'Years of expirience',
  },
  {
    end: 830,
    text: 'Hours of coding',
  },
  {
    end: 6,
    text: 'Solo projects',
  },
  {
    end: 3,
    text: 'Team projects',
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <>
      <Meta
        title="About"
        description="Learn about Mykyta's journey in web development. Skills in front-end and back-end technologies. Education, experience, and certifications."
        robots="index, follow"
      />

      <div className="h-full bg-primary/30 text-center xl:text-left">
        <Circles />
        {/* avatar img */}
        <motion.div
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="hidden max-w-[415px] max-h-[415px] xl:flex absolute bottom-0 -left-[171px]"
        >
          <div style={{ transform: 'scaleX(-1)' }}>
            <Avatar />
          </div>
        </motion.div>
        <div
          className="container mx-auto h-full flex flex-col items-center xl:flex-row 
          gap-x-6 max-sm:overflow-y-auto"
        >
          {/* text */}
          <div className="flex-1 flex flex-col xl:ml-12 max-xl:mb-3 mt-28 md:mt-24 lg:mt-20 xl:mt-0">
            <AnimatedText
              isTypingAnimate={true}
              tag="h2"
              variants={fadeIn('right', 0.2)}
              sequence={[
                'Designing the future with every line',
                2500,
                'From Passion to Profession',
                2500,
                'The story of my web journey',
                2500,
              ]}
              className="h2"
            />
            <AnimatedText
              isTypingAnimate={false}
              tag="p"
              variants={fadeIn('right', 0.4)}
              className="max-w-[500px] mx-auto xl:mx-0 mb-2 xl:mb-3 px-2 xl:px-0"
            >
              My journey began with a dream of creating something amazing in the
              digital world. And since then I have not stopped drawing this
              dream, adding new colors and shapes to every project I create. My
              work experience and my achievements are part of this story, but
              the most important thing for me is the constant desire to learn
              and grow.
            </AnimatedText>
            {/* counters */}
            <motion.div
              variants={fadeIn('right', 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
            >
              <div className="flex flex-1 xl:gap-x-6">
                {counters.map(({ end, text }, index) => (
                  <div
                    key={index}
                    className={`relative mb-1 flex-1 ${
                      index !== counters.length - 1 &&
                      'after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'
                    }`}
                  >
                    <div className="text-2xl xl:text-4xl font-extrabold text-accent">
                      <CountUp start={0} end={end} duration={5} /> +
                    </div>
                    <div className="text-xs uppercase tracking-[1px] leading-[1.4] xl:max-w-[100px]">
                      {text}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          {/* info */}
          <motion.div
            variants={fadeIn('left', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col w-full xl:max-w-[48%] h-[480px] max-sm:mb-20 xl:mt-6"
          >
            {/* skills, awards, expirience, credentials */}
            <div className="flex gap-x-4 xl:gap-x-8 mx-auto mb-4">
              {aboutData.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex ? 'text-accent' : ''
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:absolute after:-bottom-1 after:left-0 ${
                    index === itemIndex
                      ? 'after:bg-accent after:w-[100%] after:transition-all after:duration-300'
                      : 'after:bg-white'
                  }`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              ))}
            </div>
            {/* subparagraphs of skills, awards, expirience and credentials */}
            <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
              {aboutData[index].info.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col sm:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  {/* title of subparagraphs */}
                  <div>{item.title}</div>
                  <div className="hidden sm:flex sm:justify-center xl:justify-start">
                    -
                  </div>
                  <div>{item.stage}</div>
                  <div className="flex gap-4 flex-wrap max-sm:justify-center xl:mr-14">
                    {/* icons of skills*/}
                    {item.icons?.map((icon, itemIndex) => (
                      <div
                        className="relative flex items-center group text-2xl text-white transition-all duration-300"
                        key={itemIndex}
                      >
                        <TooltipContainer
                          position={'right-[150%]'}
                          content={icon.key}
                        />
                        {icon}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
