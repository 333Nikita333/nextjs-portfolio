import Link from 'next/link';
import { useRouter } from 'next/router';
import { Circles } from '../../components';

export async function getStaticPaths() {
  const response = await fetch(`${process.env.BASE_URL}/api/projects`);

  const projects = await response.json();

  const paths = projects.map(({ id }) => ({
    params: { id: id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  console.log('context =>', context);
  const { id } = context.params;

  const response = await fetch(`${process.env.BASE_URL}/api/projects/${id}`);
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
