import clsx from 'clsx';
import { useState } from 'react';

import styles from './hamburger.module.css';

type HamburgerPropsType = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function Hamburger({ onClick = (f) => f }: HamburgerPropsType) {
  const [active, setActive] = useState(false);

  const clickHandler = () => {
    setActive(!active);
    onClick();
  };

  return (
    <button
      className={clsx(active && styles.active, 'flex h-7 w-7 items-center')}
      onClick={clickHandler}
    >
      <div className={styles.whiteLine} />
    </button>
  );
}
