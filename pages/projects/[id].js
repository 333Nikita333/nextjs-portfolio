import Link from 'next/link';
import { Circles } from '../../components';

export async function getStaticPaths() {
  const response = await fetch(`${process.env.NEXT_BASE_URL}/api/projects`);

  if (!response.ok) {
    console.error('Failed to fetch projects:', response.status, response.statusText);
    return {
      paths: [],
      fallback: false,
    };
  }

  const projects = await response.json();

  const paths = projects.map((project) => ({
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
    console.error(`Failed to fetch project with id ${id}:`, response.status, response.statusText);
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
    <div className="h-full bg-primary/30 py-32 flex items-center max-xl:overflow-y-auto">
      <Circles />
      <div className="container mx-auto max-xl:mt-auto xl:mt-12">
        <Link href={'/projects'}>Go back</Link>
        <h2>{project.name}</h2>
        <p>{project.description}</p>
      </div>
    </div>
  );
}
