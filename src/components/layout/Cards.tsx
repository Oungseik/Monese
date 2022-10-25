import clsx from 'clsx';

import UnstyledLink from '../links/UnstyledLink';

import { MediaMetaDataSchema } from '@/types/types';

export default function Cards({
  cardProps,
}: {
  cardProps: MediaMetaDataSchema[];
}) {
  return (
    <>
      <div className='mx-auto grid max-w-5xl grid-cols-2 justify-between gap-4 px-4 pb-4 text-center sm:grid-cols-3 sm:px-0 sm:pb-8 md:grid-cols-4'>
        {cardProps.map((prop) => (
          <Card {...prop} key={prop.id} />
        ))}
      </div>
    </>
  );
}

const getImage = (postType: 'movie' | 'series', id: string, fileName: string) =>
  postType === 'movie'
    ? `/images/movies/${id}/${fileName}`
    : `/images/series/${id}/${fileName}`;

function Card({
  imdbRating,
  poster,
  title,
  className,
  id,
  type,
}: MediaMetaDataSchema & { className?: string }) {
  return (
    <UnstyledLink href={`/movies/${id}`}>
      <div className={clsx('relative mx-auto ', className)}>
        <picture>
          <source srcSet={getImage(type, id, poster.small)} type='image/jpg' />
          <img
            className='max-h-[340px] w-full'
            src={getImage(type, id, poster.small)}
            alt={title}
          />
        </picture>
        <span className='absolute top-2 left-2 z-10 rounded-lg bg-yellow-300 px-2 py-1 text-xs font-bold text-gray-800'>
          IMDB - {imdbRating}
        </span>
        <p className='pt-2'>{title}</p>
      </div>
    </UnstyledLink>
  );
}
