import clsx from 'clsx';
import { useState } from 'react';

export default function Modal() {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div
        className={clsx(
          'fixed top-0 z-50 h-full w-full text-center',
          !isOpen && 'hidden'
        )}
      >
        <div
          className='absolute top-0 left-0 h-full w-full bg-gray-700/80 blur-sm'
          onClick={closeModal}
        />

        <div className='absolute top-1/2 left-1/2 grid w-full max-w-[300px] -translate-y-1/2 -translate-x-1/2 gap-y-3 rounded-lg bg-zinc-300 px-3 py-4 text-gray-700 sm:max-w-[500px] sm:px-6 sm:py-8'>
          <h2 className='font-secondary text-4xl'>Monese</h2>

          <p>
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat
            reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
            ex esse exercitation amet. Voluptate laboris sint cupidatat ullamco.
          </p>

          <div className='flex justify-center gap-x-8 text-xs font-semibold sm:gap-12'>
            <a
              href='https://www.google.com'
              className='rounded-lg bg-indigo-700 px-3 py-2 text-gray-200'
              target='_blank'
              rel='noreferrer'
            >
              DONATE NOW
            </a>
            <button
              className='rounded-lg border border-indigo-700 px-3 py-2 text-indigo-700'
              onClick={closeModal}
            >
              NO THANK
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
