import Link from 'next/link';
import { Circles, Meta } from '../../components';
import Image from 'next/image';

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
  return (
    <>
      <Meta
        title={project.projectName || 'My Project'}
        description={project.description || "One of Mykyta Hilis' projects"}
        robots="index, follow"
      />

      <div className="h-full bg-primary/30 py-32 flex items-center overflow-y-auto">
        <Circles />
        <div className="container mx-auto mt-auto">
          <Link href={'/projects'}>Go back</Link>
          {/* <div>
            <Image src={project.image} width={300} height={300} alt="project image" />
            <h2>{project.name}</h2>
            <p>{project.description}</p>
          </div> */}
          <div className="max-w-3xl mx-auto">
            {/* Превью проекта */}
            <Image
              src={project.imagePath}
              width={500}
              height={500}
              alt="project image"
            />
            {/* Заголовок проекта */}
            <h1 className="text-4xl font-bold mb-4">{project.projectName}</h1>

            {/* Описание проекта */}
            <p className="text-white-700 mb-8">{project.description}</p>

            {/* Ссылки на проект */}
            <div className="mb-8">
              <p className="font-bold mb-2">Project Links:</p>
              <ul className="flex space-x-4">
                {project.links.map((link, index) => (
                  <li key={index}>
                    {link.github && (
                      <a
                        href={link.github}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-blue-500 hover:underline"
                      >
                        GitHub
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
            </div>

            {/* Технологии */}
            <div className="mb-8">
              <p className="font-bold mb-2">Technologies:</p>
              <div className="flex flex-wrap">
                {project.technologies.frontend.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-300 text-gray-800 rounded-full px-3 py-1 text-sm mr-2 mb-2"
                  >
                    {tech}
                  </span>
                ))}
                {/* Аналогично для backend технологий */}
              </div>
            </div>

            {/* Особенности проекта */}
            <div className="mb-8">
              <p className="font-bold mb-2">Features:</p>
              <ul className="list-disc pl-6">
                {project.features.map((feature, index) => (
                  <li key={index} className="mb-2">
                    <strong>{feature.featureName}:</strong>{' '}
                    {feature.featureDesc}
                  </li>
                ))}
              </ul>
            </div>

            {/* Обязанности (если существуют) */}
            {project.responsibilities && (
              <div className="mb-8">
                <p className="font-bold mb-2">Responsibilities:</p>
                <ul className="list-disc pl-6">
                  {project.responsibilities.map((responsibility, index) => (
                    <li key={index} className="mb-2">
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
