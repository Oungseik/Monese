import * as React from 'react';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';

import featureData from '@/data/feature.json';

import Layout from '@/components/layout/Layout';
import Modal from '@/components/layout/Modal';
import Seo from '@/components/Seo';

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

export default function HomePage() {
  const movies = featureData.movies;

  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <Swiper
        modules={[Autoplay]}
        className='mySwiper'
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.title}>
            <div className='relative'>
              <picture>
                <source
                  srcSet={`/images/movies/${movie.directory}/${movie.poster.large}`}
                  type='image/jpg'
                />
                <img
                  className='h-60 w-full object-cover object-top sm:h-80 md:h-[460px] lg:h-[480px]'
                  src={`/images/movies/${movie.directory}/${movie.poster.large}`}
                  alt={movie.title}
                />
              </picture>
              <span
                className='absolute bottom-0 text-lg font-bold'
                style={{ textShadow: '1px 1px black' }}
              >
                {movie.title}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Modal />
    </Layout>
  );
}
