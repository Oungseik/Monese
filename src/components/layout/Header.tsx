import { FaSearch } from 'react-icons/fa';

import UnstyledLink from '@/components/links/UnstyledLink';

import HamburgerMenu from './HamburgerMenu';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header className='flex items-center justify-between bg-gray-800 px-4 py-2 sm:px-8'>
      <UnstyledLink
        href='/'
        className='font-secondary text-3xl font-bold sm:text-4xl'
      >
        Monese
      </UnstyledLink>

      <div className='flex gap-x-8'>
        <Navigation />
        <div className='relative flex items-center'>
          <FaSearch className='absolute top-1/2 left-2 -translate-y-1/2 text-gray-500' />
          <input
            placeholder='Search'
            className='h-8 w-32 rounded-lg border  border-gray-500 bg-gray-800 pl-8 sm:w-48 md:w-64'
          />
        </div>
        <HamburgerMenu />
      </div>
    </header>
  );
}
