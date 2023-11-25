import { motion } from 'framer-motion';
import { AnimatedTitle, Bulb, Circles, ProjectsSlider } from '../../components';
import { fadeIn } from '../../variants';

const Projects = () => {
  return (
    <div className="h-full bg-primary/30 py-28 flex items-center max-xl:overflow-y-auto">
      <Circles />
      <div className="container mx-auto max-xl:mt-auto xl:mt-12">
        <div className="flex flex-col xl:flex-row gap-x-12">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col xl:text-left mb-4 xl:mb-0">
            <AnimatedTitle
              tag="h2"
              variants={fadeIn('up', 0.2)}
              sequence={[
                'My works',
                2500,
                'My history',
                2500,
                'My web collection',
                2500,
              ]}
              classNames="h2 xl:mt-12"
            />
            <motion.p
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto xl:mx-0"
            >
              I present to you some of my works that reflect my passion for web
              development and design. From websites and web applications to
              custom interfaces and mobile adaptations, each project represents
              a challenge and opportunity for creativity. Every line of code is
              a building block that I use, to build digital worlds.
            </motion.p>
          </div>

          {/* slider */}
          <motion.div
            variants={fadeIn('down', 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <ProjectsSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Projects;
