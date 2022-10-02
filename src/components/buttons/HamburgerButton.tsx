import clsx from 'clsx';

import styles from './hamburger.module.css';

type HamburgerButtonPropsType = {
  isActive: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

export default function HamburgerButton({
  isActive,
  className,
  onClick = (f) => f,
}: HamburgerButtonPropsType) {
  return (
    <button
      className={clsx(
        isActive && styles.active,
        'flex h-7 w-7 items-center',
        className
      )}
      onClick={onClick}
    >
      <div className={styles.whiteLine} />
    </button>
  );
}
