import { AiFillFacebook, AiFillYoutube } from 'react-icons/ai';
import { FaTelegram, FaTiktok } from 'react-icons/fa';

import clsxm from '@/lib/clsxm';

import UnstyledLink from '../links/UnstyledLink';

const socialMedia = [
  {
    icon: <AiFillYoutube />,
    href: 'https://www.youtube.com/',
    className: 'text-[36px] text-red-600',
  },
  {
    icon: <AiFillFacebook />,
    href: 'https://facebook.com/',
    className: 'text-[32px] text-blue-400',
  },
  {
    icon: <FaTiktok />,
    href: 'https://www.tiktok.com/',
    className: 'text-[30px]',
  },
  {
    icon: <FaTelegram />,
    href: '#',
    className: 'text-[30px] text-sky-400',
  },
];

export default function Footer() {
  return (
    <footer className='bg-gray-900 px-4 py-4'>
      <div>
        <div>
          <UnstyledLink
            href='/'
            className='font-secondary text-3xl font-bold sm:text-4xl'
          >
            Monese
          </UnstyledLink>

          <ul className='flex gap-2 pt-2 text-2xl'>
            {socialMedia.map((media) => (
              <li key={media.href}>
                <a
                  href={media.href}
                  className={clsxm(media.className)}
                  target='_blank'
                  rel='noreferrer'
                >
                  {media.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
