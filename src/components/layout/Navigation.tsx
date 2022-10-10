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
        'hidden gap-4 font-bold text-gray-500 sm:flex'
      )}
    >
      {navigationItems.map(({ href, name }) => (
        <li key={name}>
          <UnstyledLink
            href={href}
            className={clsx(pathname.includes(href) && 'text-gray-200')}
          >
            {name}
          </UnstyledLink>
        </li>
      ))}
    </ul>
  );
}
