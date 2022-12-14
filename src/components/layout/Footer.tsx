import { AiFillFacebook, AiFillYoutube } from 'react-icons/ai';
import { FaTelegram, FaTiktok } from 'react-icons/fa';

import clsxm from '@/lib/clsxm';

import Logo from '../ui/Logo';

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
    <footer className='bg-gray-900 py-4 sm:py-8'>
      <div className='mx-4 flex max-w-5xl justify-between gap-x-8 sm:gap-12 lg:mx-auto'>
        <div>
          <Logo />

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

        <div className='flex max-w-xs flex-col gap-y-3'>
          <h2>Donate Us</h2>
          <p>
            Donate us to help support this <strong>Monese</strong> website &amp;
            our Mon community.
          </p>
          <a
            href='https://www.google.com'
            className='max-w-[140px] rounded-lg bg-indigo-700 px-3 py-2 text-gray-200'
            target='_blank'
            rel='noreferrer'
          >
            &#36; DONATE NOW
          </a>
        </div>
      </div>
    </footer>
  );
}
