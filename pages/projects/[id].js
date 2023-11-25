import Link from 'next/link';
import { Circles } from '../../components';
import { projectData } from './projectData';

export async function getStaticPaths() {
  const paths = projectData.map(project => ({
    params: { id: project.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const { id } = context.params;
  // console.log('getStaticProps, id =>', id);

  const project = projectData.find(project => project.id === id);

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
  // console.log('project =>', project);
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
