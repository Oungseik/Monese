import UnstyledLink from '../links/UnstyledLink';

export default function Logo() {
  return (
    <UnstyledLink
      href='/'
      className='bg-gradient-to-r from-red-200 via-green-200 to-blue-200 bg-clip-text font-secondary text-3xl font-bold text-transparent sm:text-4xl'
    >
      Monese
    </UnstyledLink>
  );
}
