import { motion } from 'framer-motion';
import {
  AnimatedText,
  Bulb,
  Circles,
  Meta,
  ProjectsSlider,
} from '../../components';
import { fadeIn } from '../../variants';
import projectsEn from '../../locales/en/projects.json';
import projectsUk from '../../locales/uk/projects.json';
import { useRouter } from 'next/router';

const Projects = () => {
  const router = useRouter();

  const t = router.locale === 'en' ? projectsEn : projectsUk;

  return (
    <>
      <Meta
        title={t.metaTitle}
        description={t.metaDescription}
        robots="index, follow"
      />

      <div className="h-full bg-primary/30 py-28 flex items-center max-xl:overflow-y-auto">
        <Circles />
        <div className="container mx-auto max-xl:mt-auto xl:mt-12">
          <div className="flex flex-col xl:flex-row gap-x-12">
            {/* text */}
            <div className="text-center flex xl:w-[30vw] flex-col xl:text-left mb-4 xl:mb-0">
              <AnimatedText
                isTypingAnimate={true}
                tag="h2"
                variants={fadeIn('up', 0.2)}
                sequence={[t.title1, 2500, t.title2, 2500, t.title3, 2500]}
                className="h2 xl:mt-12"
              />
              <AnimatedText
                isTypingAnimate={false}
                tag="p"
                variants={fadeIn('up', 0.4)}
                className="mb-4 max-w-[400px] mx-auto xl:mx-0"
              >
                {t.description}
              </AnimatedText>
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
    </>
  );
};

export default Projects;
