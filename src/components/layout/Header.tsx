import UnstyledLink from '@/components/links/UnstyledLink';

import HamburgerMenu from './HamburgerMenu';

export default function Header() {
  return (
    <header className='flex items-center justify-between bg-gray-800 px-4 py-2'>
      <UnstyledLink href='/' className='font-secondary text-3xl font-bold'>
        Monese
      </UnstyledLink>

      <HamburgerMenu />
    </header>
  );
}
