import Link from 'next/link';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';

import { MediaMetaDataSchema } from '@/types/types';

export default function NewRelease({
  newReleaseMoviesAndSeries,
}: {
  newReleaseMoviesAndSeries: MediaMetaDataSchema[];
}) {
  return (
    <section>
      <Swiper
        modules={[Autoplay]}
        className='mySwiper'
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
        loop={true}
      >
        {newReleaseMoviesAndSeries.map((movie) => (
          <SwiperSlide key={movie.title}>
            <div className='relative'>
              <picture>
                <source
                  srcSet={`/images/movies/${movie.id}/${movie.poster.large}`}
                  type='image/jpg'
                />
                <img
                  className='h-60 w-full object-cover object-top sm:h-80 md:h-[460px] lg:h-[480px]'
                  src={`/images/movies/${movie.id}/${movie.poster.large}`}
                  alt={movie.title}
                />
              </picture>

              <Link
                href={
                  movie.type === 'movie'
                    ? `/movies/${movie.id}`
                    : `/series/${movie.id}`
                }
              >
                <a
                  className='absolute left-4 bottom-1 text-lg font-bold sm:left-8 sm:text-2xl'
                  style={{ textShadow: '1px 1px rgba(0, 0, 0, .7)' }}
                >
                  {movie.title}
                </a>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
