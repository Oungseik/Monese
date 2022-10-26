import { BsPlayCircleFill } from 'react-icons/bs';
import { HiOutlineShare } from 'react-icons/hi';

import { getImage } from '@/lib/utils';

import TagButton from '../buttons/TagButton';

import { MediaMetaDataSchema } from '@/types/types';

export default function PostMainView({
  type,
  id,
  poster,
  title,
  imdbRating,
  duration,
  genres,
}: MediaMetaDataSchema) {
  return (
    <div className='grid grid-cols-3 gap-x-4 sm:grid-cols-4 sm:gap-x-6 md:grid-cols-5 md:gap-x-8'>
      <picture>
        <source srcSet={getImage(type, id, poster.small)} type='image/jpg' />
        <img
          className='max-h-[340px] w-full'
          src={getImage(type, id, poster.small)}
          alt={title}
        />
      </picture>
      <div className='col-span-2 sm:col-span-3 md:col-span-4'>
        <h2 className='pb-4'>{title}</h2>

        <div className='flex gap-x-6 pb-3 text-gray-400'>
          <strong>IMDB: {imdbRating}</strong>
          <strong>Duration: {duration.toUpperCase()} </strong>
        </div>

        <ul className='flex flex-wrap gap-4'>
          {genres?.map((genre) => (
            <li key={genre}>
              <TagButton
                text={genre}
                className='rounded-full border border-gray-400 px-3 py-1 text-xs'
              />
            </li>
          ))}
        </ul>

        <div className='mt-4 flex gap-x-4'>
          <div
            className='flex w-fit rounded-full  bg-red-600 px-3 py-2'
            role='button'
          >
            <BsPlayCircleFill className='mr-2 text-lg' /> WATCH TRAILER
          </div>

          <div
            role='button'
            className='flex h-9 w-9 items-center justify-center rounded-full border border-gray-400 text-xl text-gray-400'
          >
            <HiOutlineShare />
          </div>
        </div>
      </div>
    </div>
  );
}
