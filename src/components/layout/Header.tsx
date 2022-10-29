import { FaSearch } from 'react-icons/fa';

import HamburgerMenu from './HamburgerMenu';
import Navigation from './Navigation';
import Logo from '../ui/Logo';

export default function Header() {
  return (
    <header className='flex justify-between bg-gray-800 px-4 py-2 sm:px-8 md:gap-5'>
      <Logo />

      <div className='flex items-center gap-x-8'>
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
