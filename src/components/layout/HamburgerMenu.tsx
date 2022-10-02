import clsx from 'clsx';
import { useState } from 'react';

import HamburgerButton from '../buttons/HamburgerButton';
import UnstyledLink from '../links/UnstyledLink';

const menu = [
  { href: '/movies', name: 'Movies' },
  { href: '/series', name: 'series' },
  { href: '/shorts', name: 'shorts' },
  { href: '/how-to-download', name: 'How to Download' },
];

export default function HamburgerMenu() {
  const [isActive, setIsActive] = useState(false);

  const onClickHandler = () => {
    setIsActive(!isActive);
  };

  return (
    <div className='relative'>
      <HamburgerButton isActive={isActive} onClick={onClickHandler} />

      <div
        className={clsx(
          'absolute right-0 mt-1 flex w-44 flex-col gap-y-4 rounded-lg bg-gray-600 px-4 py-4 font-semibold',
          !isActive && 'hidden'
        )}
      >
        {menu.map((item) => (
          <UnstyledLink href={item.href} key={item.href}>
            {item.name}
          </UnstyledLink>
        ))}
      </div>
    </div>
  );
}