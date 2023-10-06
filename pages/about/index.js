import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from 'react-icons/si';
import { fadeIn } from '../../variants';
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';
//  data
export const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Front-end',
        icons: [
          <FaHtml5 key="html5" />,
          <FaCss3 key="css3" />,
          <FaJs key="js" />,
          <FaReact key="react" />,
          <SiNextdotjs key="nextjs" />,
          // <SiFramer key="framer" />,
          // <FaWordpress key="wordpress" />,
        ],
      },
      {
        title: 'Back-end',
        icons: [
          // <FaFigma key="figma" />,
          // <SiAdobexd key="adobexd" />,
          // <SiAdobephotoshop key="photoshop" />,
        ],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      // {
      //   title: 'Webby Awards - Honoree',
      //   stage: '2011 - 2012',
      // },
      // {
      //   title: 'Adobe Design Achievement Awards - Finalist',
      //   stage: '2009 - 2010',
      // },
    ],
  },
  {
    title: 'experience',
    info: [
      // {
      //   title: 'UX/UI Designer - XYZ Company',
      //   stage: '2012 - 2023',
      // },
      // {
      //   title: 'Web Developer - ABC Agency',
      //   stage: '2010 - 2012',
      // },
      // {
      //   title: 'Intern - DEF Corporation',
      //   stage: '2008 - 2010',
      // },
    ],
  },
  {
    title: 'credentials',
    info: [
      // {
      //   title: 'Web Development - ABC University, LA, CA',
      //   stage: '2011',
      // },
      // {
      //   title: 'Computer Science Diploma - AV Technical Institute',
      //   stage: '2009',
      // },
      // {
      //   title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
      //   stage: '2006',
      // },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full max-sm:overflow-y-auto bg-primary/30 py-45 text-center xl:text-left mt-5">
      <Circles />
      {/* avatar img */}
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden max-w-[342px] max-h-[451px] xl:flex absolute bottom-0 -left-[171px]"
      >
        <div style={{ transform: 'scaleX(-1)' }}>
          <Avatar />
        </div>
      </motion.div>

      <div
        className="container mx-auto h-full flex flex-col items-center xl:flex-row 
      gap-x-6 mt-24"
      >
        {/* text */}
        <div className="flex-1 flex flex-col justify-center xl:ml-12">
          <h2 className="h2">
            Captivating <span className="text-accent">stories</span> birth
            magnificent design.
          </h2>
          <p className="max-w-[500px] mx-auto xl:mx-0 mb-2 xl:mb-3 px-2 xl:px-0">
            {/* 10 years ago, I began freelancing as a developer. Since then,
            I&apos;ve done remote work for agencies, counsulted fro startups,
            and collaborated on digital products for business and consumer use. */}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
            dolores, quae ipsa, necessitatibus, nam ea quam delectus ut
            laboriosam facere praesentium et hic reiciendis voluptates atque
            sunt. Corporis, at veritatis.
          </p>
          {/* counters */}
          <div>
            <div>
              {/* experience */}
              <div
                className="relative mb-1 flex-1 after:w-[1px] after:h-full 
              after:bg-white/10 after:absolute after:top-0 after:right-0"
              >
                <div className="text-2xl xl:text-3xl font-extrabold text-accent">
                  <CountUp start={0} end={1} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of expirience
                </div>
              </div>
              {/* clients */}
              <div
                className="relative mb-1 flex-1 after:w-[1px] after:h-full 
              after:bg-white/10 after:absolute after:top-0 after:right-0"
              >
                <div className="text-2xl xl:text-3xl font-extrabold text-accent">
                  <CountUp start={0} end={0} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied clients
                </div>
              </div>
              {/* projects */}
              <div
                className="relative mb-1 flex-1 after:w-[1px] after:h-full 
              after:bg-white/10 after:absolute after:top-0 after:right-0"
              >
                <div className="text-2xl xl:text-3xl font-extrabold text-accent">
                  <CountUp start={0} end={10} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished projects
                </div>
              </div>
              {/* awards */}
              <div className="relative mb-1 flex-1">
                <div className="text-2xl xl:text-3xl font-extrabold text-accent">
                  <CountUp start={0} end={0} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Winning awards
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* info */}
        <div className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
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
                <div className="flex gap-x-4">
                  {/* icons of skills*/}
                  {item.icons?.map((icon, itemIndex) => (
                    <div className="text-2xl text-white" key={itemIndex}>
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
