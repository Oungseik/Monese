import clsx from 'clsx';
import Image from 'next/image';

import UnstyledLink from '../links/UnstyledLink';

import { MediaMetaDataSchema } from '@/types/types';

export default function Cards({
  cardProps,
}: {
  cardProps: MediaMetaDataSchema[];
}) {
  return (
    <>
      <div className='mx-auto grid grid-cols-2 justify-between gap-4 px-4 text-center'>
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
      <div className={clsx('relative mx-auto max-w-[200px]', className)}>
        <Image
          src={getImage(type, id, poster.small)}
          width={200}
          height={275}
          alt={title}
        />
        <span className='absolute top-2 left-2 z-10 rounded-lg bg-yellow-300 px-2 py-1 text-xs font-bold text-gray-800'>
          IMDB - {imdbRating}
        </span>
        <p>{title}</p>
      </div>
    </UnstyledLink>
  );
}
