import { GetStaticProps, InferGetStaticPropsType } from 'next';
import * as React from 'react';

import { getDirectory, getFileNames, getPostData } from '@/lib/post';
import { compose } from '@/lib/utils';

import Ads from '@/components/layout/Ads';
import Cards from '@/components/layout/Cards';
import Layout from '@/components/layout/Layout';
import Modal from '@/components/layout/Modal';
import NewRelease from '@/components/layout/NewRelease';
import Seo from '@/components/Seo';

import { MediaMetaDataSchema } from '@/types/types';

/**
 * SVGR Support
 * Caveat: No React Props Type
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage({
  moviesData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <Seo templateTitle='Home' />
      <NewRelease newReleaseMoviesAndSeries={moviesData.slice(0, 2)} />
      <Modal />
      <Ads />
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
