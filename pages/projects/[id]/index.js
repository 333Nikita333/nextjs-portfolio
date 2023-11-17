import { useRouter } from 'next/router';
import { Circles } from '../../../components';
import Link from 'next/link';

export async function getStaticPaths() {
  const projects = await fetch(`${process.env.BASE_URL}/api/projects`).then(
    res => res.json(),
  );

  const paths = projects.map(project => ({
    params: { id: project.id },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const { id } = params;

  const response = await fetch(`${process.env.BASE_URL}/api/projects/${id}`);
  const project = await response.json();

  return {
    props: {
      project,
    },
  };
}

export default function Project({ project }) {
  console.log('Страница одного проекта, данные проекта =>', project);
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-full bg-primary/30 py-32 flex items-center max-xl:overflow-y-auto">
      <Circles />
      <div className="container mx-auto max-xl:mt-auto xl:mt-12">
        <Link href={'/work'}>Go back</Link>
        <h2>{project.name}</h2>
        <p>{project.description}</p>
      </div>
    </div>
  );
}
