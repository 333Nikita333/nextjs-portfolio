import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BsArrowLeftSquare } from 'react-icons/bs';
import { FaFigma, FaGithub, FaLink, FaQrcode } from 'react-icons/fa';
import { SiExpo, SiSwagger } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { Circles, Meta } from '../../components';

const links = [
  {
    name: 'github',
    icon: <FaGithub size={25} />,
  },
  {
    name: 'backendGithub',
    icon: <FaGithub size={25} />,
  },
  {
    name: 'web',
    icon: <FaLink size={25} />,
  },
  {
    name: 'documentation',
    icon: <SiSwagger size={25} />,
  },
  {
    name: 'qrCode',
    icon: <FaQrcode size={25} />,
  },
  {
    name: 'expoAppLink',
    icon: <SiExpo size={25} />,
  },
  {
    name: 'figma',
    icon: <FaFigma size={25} />,
  },
  {
    name: 'geolocateAPI',
    icon: <TbApi className="border border-blue-500 rounded-full" size={25} />,
  },
];

export async function getStaticPaths({ locales }) {
  const response = await fetch(`${process.env.NEXT_BASE_URL}/api/projects`);

  if (!response.ok) {
    console.error(
      'Failed to fetch projects:',
      response.status,
      response.statusText,
    );
    return {
      paths: [],
      fallback: true,
    };
  }

  const projects = await response.json();

  const paths = projects.reduce((acc, project) => {
    const localizedPaths = locales.map((locale) => ({
      params: { id: project.id },
      locale,
    }));

    return acc.concat(localizedPaths);
  }, []);

  return { paths, fallback: true };
}

export async function getStaticProps({ params, locale }) {
  const { id } = params;

  const response = await fetch(
    `${process.env.NEXT_BASE_URL}/api/projects/${id}?locale=${locale}`,
  );

  if (!response.ok) {
    console.error(
      `Failed to fetch project with id ${id}:`,
      'Status =>',
      response.status,
      'Status Text =>',
      response.statusText,
    );
    return {
      notFound: true,
    };
  }

  const project = await response.json();

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      project,
    },
  };
}

export default function Project({ project }) {
  
  console.log('project =>', project);

  const [index, setIndex] = useState(0);
  
  const tabs = [
    // description
    {
      title: 'Description',
      content: <p className="text-white-700">{project?.description}</p>,
    },
    // links
    {
      title: 'Links',
      content: (
        <ul className="flex gap-5 flex-wrap">
          {project.links.map((link, index) => (
            <li key={index}>
              {Object.keys(link).map((key, subIndex) => {
                const linkIcon = links.find(l => l.name === key)?.icon;
                const linkName = key.charAt(0).toUpperCase() + key.slice(1);

                return (
                  <a
                    key={subIndex}
                    href={link[key]}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className=" flex items-center gap-1 text-blue-500 hover:underline hover:scale-110 transition-all duration-300"
                  >
                    {linkIcon}
                    {linkName}
                  </a>
                );
              })}
            </li>
          ))}
        </ul>
      ),
    },
    // technologies
    {
      title: 'Technologies',
      content: (
        <ul className="flex flex-wrap gap-10">
          {['frontend', 'backend'].map(techType => (
            <li key={techType}>
              {project.technologies &&
              project.technologies[techType] &&
              Array.isArray(project.technologies[techType]) &&
              project.technologies[techType].length > 0 ? (
                <>
                  <p>{techType[0].toUpperCase() + techType.slice(1)}:</p>
                  <ul className="flex flex-wrap gap-y-2 gap-x-1">
                    {project.technologies[techType]
                      .sort()
                      .map((tech, index) => (
                        <li key={index}>
                          <span
                            key={index}
                            className="bg-gray-300 text-gray-800 rounded-full px-3 py-1 text-sm mr-2 mb-2"
                          >
                            {tech}
                          </span>
                        </li>
                      ))}
                  </ul>
                </>
              ) : null}
            </li>
          ))}
        </ul>
      ),
    },
    // features
    {
      title: 'Features',
      content: (
        <ul className="list-disc">
          {project.features.map((feature, index) => (
            <li key={index} className="mb-2">
              <strong>{feature.featureName}:</strong> {feature.featureDesc}
            </li>
          ))}
        </ul>
      ),
    },
    // responsibilities
    {
      title: 'Responsibilities',
      content: project.responsibilities ? (
        <div>
          {project.responsibilities.role && (
            <p className="text-white-700">{project.responsibilities.role}</p>
          )}
          {project.responsibilities.list &&
            project.responsibilities.list.length > 0 && (
              <ul className="list-disc">
                {project.responsibilities.list.map((responsibility, index) => (
                  <li key={index} className="mb-2">
                    {responsibility}
                  </li>
                ))}
              </ul>
            )}
        </div>
      ) : null,
    },
  ].filter(tab => {
    return (
      tab.title !== 'Responsibilities' ||
      (project.responsibilities && project.responsibilities.list)
    );
  });

  return (
    <>
      <Meta
        title={project?.projectName || 'My Project'}
        description={project?.description || "One of Mykyta Hilis' projects"}
        robots="index, follow"
      />

      <div className="h-full bg-primary/30 py-32 flex items-center overflow-y-auto">
        <Circles />

        {/* all project content */}
        <div className="flex max-lg:flex-col mb-auto lg:gap-10 mx-5 lg:mx-24 w-full">
          <Link
            className="z-31 fixed top-[130px] lg:top-[12vh] left-1/2 translate-x-[-50%] lg:left-[15%]  flex justify-center items-center gap-2 uppercase 
              border-none rounded-lg hover:text-accent hover:scale-110 transition-all duration-300"
            href={'/projects'}
          >
            <BsArrowLeftSquare size={25} /> Go back
          </Link>
          {/* left content */}
          <div className="flex flex-col max-lg:mt-10 max-lg:items-center gap-3">
            {/* project image */}
            <Image
              src={project.imagePath}
              width={500}
              height={500}
              alt="project image"
              className="rounded-3xl sm:max-w-none"
            />
            {/* project title */}
            <h2 className="text-4xl font-bold">{project?.projectName}</h2>

            {/* project type */}
            <p className="text-xl text-white">Type: {project.type}</p>
          </div>

          {/* right content */}
          <div className="mt-3 lg:mt-7">
            {/* project tabs title */}
            <ul className="flex flex-wrap gap-x-5 gap-y-3 mb-4">
              {tabs.map((tab, tabIndex) => (
                <li
                  key={tabIndex}
                  className={`${
                    index === tabIndex ? 'text-accent' : ''
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:absolute after:-bottom-1 after:left-0 ${
                    index === tabIndex
                      ? 'after:bg-accent after:w-[100%] after:transition-all after:duration-300'
                      : 'after:bg-white'
                  }`}
                  onClick={() => setIndex(tabIndex)}
                >
                  {tab.title}
                </li>
              ))}
            </ul>

            {/* project tabs content */}
            <div className="border-2 border-white rounded-2xl p-5">
              {tabs[index]?.content}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
