import clsx from 'clsx';
import { useRouter } from 'next/router';

import navigationItems from '@/data/navigations-items.json';

import UnstyledLink from '../links/UnstyledLink';

export default function Navigation({ className }: { className?: string }) {
  const { pathname } = useRouter();

  return (
    <ul
      className={clsx(
        className,
        'hidden items-center justify-center gap-4 font-bold text-gray-500 md:flex'
      )}
    >
      {navigationItems.map(({ href, name }) => (
        <li key={name} className='h-fit'>
          <UnstyledLink
            href={href}
            className={clsx(
              'transition hover:text-gray-200',
              pathname.includes(href) && 'text-gray-200'
            )}
          >
            {name}
          </UnstyledLink>
        </li>
      ))}
    </ul>
  );
}
