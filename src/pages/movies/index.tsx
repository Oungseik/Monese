import { GetStaticProps, InferGetStaticPropsType } from 'next';

import { getDirectory, getFileNames, getPostData } from '@/lib/post';
import { compose } from '@/lib/utils';

import Cards from '@/components/layout/Cards';
import Layout from '@/components/layout/Layout';

import { MediaMetaDataSchema } from '@/types/types';

export default function Movies({
  moviesData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <Cards cardProps={moviesData} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const fileNames = compose(getDirectory, getFileNames)('movies');
  const moviesData: MediaMetaDataSchema[] = fileNames.map(
    getPostData('movies')
  );
  const sortedMoviesData = moviesData.sort((a, b) =>
    a.date > b.date ? -1 : 0
  );

  return {
    props: {
      moviesData: sortedMoviesData,
    },
  };
};
