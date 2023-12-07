import Link from 'next/link';
import { Circles, Meta } from '../../components';
import Image from 'next/image';
import { useState } from 'react';

export async function getStaticPaths() {
  const response = await fetch(`${process.env.NEXT_BASE_URL}/api/projects`);

  if (!response.ok) {
    console.error(
      'Failed to fetch projects:',
      response.status,
      response.statusText,
    );
    return {
      paths: [],
      fallback: false,
    };
  }

  const projects = await response.json();

  const paths = projects.map(project => ({
    params: { id: project.id },
  }));

  return { paths, fallback: false };
}
export async function getStaticProps(context) {
  const { id } = context.params;

  const response = await fetch(
    `${process.env.NEXT_BASE_URL}/api/projects/${id}`,
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
      content: <p className="text-white-700 mb-8">{project.description}</p>,
    },
    // links
    {
      title: 'Links',
      content: (
        <ul className="flex gap-5 flex-wrap">
          {project.links.map((link, index) => (
            <li key={index}>
              {link.github && (
                <a
                  href={link.github}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-blue-500 hover:underline"
                >
                  Frontend GitHub
                </a>
              )}
              {link.web && (
                <a
                  href={link.web}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-blue-500 hover:underline"
                >
                  Website
                </a>
              )}
              {link.backendGithub && (
                <a
                  href={link.backendGithub}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-blue-500 hover:underline"
                >
                  Backend GitHub
                </a>
              )}
              {link.documentation && (
                <a
                  href={link.documentation}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-blue-500 hover:underline"
                >
                  Documentation
                </a>
              )}
              {link.figma && (
                <a
                  href={link.figma}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-blue-500 hover:underline"
                >
                  Figma
                </a>
              )}
            </li>
          ))}
        </ul>
      ),
    },
    // technologies
    {
      title: 'Technologies',
      content: (
        <div className="flex flex-wrap gap-10">
          {['frontend', 'backend'].map(techType => (
            <div key={techType}>
              <p>{techType[0].toUpperCase() + techType.slice(1)}</p>
              <ul className="flex flex-wrap gap-y-2 gap-x-1">
                {project.technologies[techType] &&
                  project.technologies[techType].length > 0 &&
                  project.technologies[techType].sort().map((tech, index) => (
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
            </div>
          ))}
        </div>
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
      content: (
        <div>
          {project.responsiblities && (
            <>
              <p className="text-white-700">{project.responsibilities.role}</p>
              <ul className="list-disc">
                {project.responsibilities.list.map((responsibility, index) => (
                  <li key={index} className="mb-2">
                    {responsibility}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      ),
    },
  ];

  return (
    <>
      <Meta
        title={project.projectName || 'My Project'}
        description={project.description || "One of Mykyta Hilis' projects"}
        robots="index, follow"
      />

      <div className="h-full bg-primary/30 py-32 flex items-center overflow-y-auto">
        <Circles />

        {/* all project content */}
        <div className="flex mb-auto gap-10 mx-24 w-full">
          {/* left content */}
          <div className="flex flex-col gap-3">
            <Link href={'/projects'}>Go back</Link>

            {/* project image */}
            <Image
              src={project.imagePath}
              width={500}
              height={500}
              alt="project image"
              className="max-w-none"
            />
            {/* project title */}
            <h2 className="text-4xl font-bold mb-4">{project.projectName}</h2>

            {/* project type */}
            <p className="text-xl text-white mb-4">Type: {project.type}</p>
          </div>

          {/* right content */}
          {/* project tabs content */}
          <div className="mt-7">
            {/* project tabs title */}
            <ul className="flex flex-wrap gap-x-4 xl:gap-x-8 mb-4">
              {tabs.map(
                (tab, tabIndex) =>
                  project[tab.title.toLowerCase()] && (
                    <li
                      key={tabIndex}
                      className={`${
                        index === tabIndex
                          ? 'text-accent font-bold'
                          : 'text-white'
                      } cursor-pointer capitalize`}
                      onClick={() => setIndex(tabIndex)}
                    >
                      {tab.title}
                    </li>
                  ),
              )}
            </ul>

            {tabs[index].content}
          </div>
        </div>
      </div>
    </>
  );
}
