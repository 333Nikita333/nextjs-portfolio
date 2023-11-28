import Head from 'next/head';

const Meta = ({ title, description, robots }) => {
  return (
    <Head>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {robots && <meta name="robots" content={robots} />}
    </Head>
  );
};

export default Meta;
