import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

import { getDirectory, getFileNames, getId, getPost } from '@/lib/post';
import { compose } from '@/lib/utils';

import Layout from '@/components/layout/Layout';
import PostMainView from '@/components/layout/PostMainView';

export default function Movie({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <div className='p-4'>
        <div className='mx-auto max-w-5xl'>
          <PostMainView {...post} />
        </div>
      </div>
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
