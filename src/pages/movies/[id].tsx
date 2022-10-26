import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

import styles from './movies.module.css';

import { getDirectory, getFileNames, getId, getPost } from '@/lib/post';
import { compose } from '@/lib/utils';

import Ads from '@/components/layout/Ads';
import Downloads from '@/components/layout/Downloads';
import Layout from '@/components/layout/Layout';
import PostMainView from '@/components/layout/PostMainView';

export default function Movie({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <section className='p-4'>
        <div className='mx-auto max-w-5xl'>
          <PostMainView {...post} />
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: post.contentHTML }}
          />
        </div>
      </section>

      <Ads />
      <Downloads links={post.downloadLinks} />
      <Ads />
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const fileNames = compose(getDirectory, getFileNames)('movies');
  const ids: string[] = fileNames.map(getId);
  const paths = ids.map((id) => ({ params: { id } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const fileName = params?.id + '.mdx';
  const post = await getPost('movies', fileName);

  return {
    props: {
      post,
    },
  };
};
