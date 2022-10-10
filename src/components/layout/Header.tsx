import { FaSearch } from 'react-icons/fa';

import UnstyledLink from '@/components/links/UnstyledLink';

import HamburgerMenu from './HamburgerMenu';

export default function Header() {
  return (
    <header className='flex items-center justify-between bg-gray-800 px-4 py-2'>
      <UnstyledLink href='/' className='font-secondary text-3xl font-bold'>
        Monese
      </UnstyledLink>

      <div className='relative flex gap-x-4'>
        <FaSearch className='absolute top-1/2 left-2 -translate-y-1/2 text-gray-500' />
        <input
          placeholder='Search'
          className='w-32 rounded-lg border  border-gray-500 bg-gray-800 pl-8 sm:w-64'
        />
        <HamburgerMenu />
      </div>
    </header>
  );
}
