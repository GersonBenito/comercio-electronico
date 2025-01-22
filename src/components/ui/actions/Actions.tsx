import Link from 'next/link';
import styles from './actions.module.css';
import Image from 'next/image';

export const Actions = () => {
  const counter = 3;
  return (
    <div className={styles.wrapper_actions}>
      <Link href="/search">
        <Image src="/assets/svg/search.svg" alt="search" width={20} height={20} />
      </Link>
      <Link href="/wish">
        <Image src="/assets/svg/wish.svg" alt="wish" width={20} height={20} />
      </Link>
      <Link href="/cart">
        <div className={styles.counter}>
          {
            (counter >= 1) && <div className={styles.badge}>{counter}</div>
          }
          <Image src="/assets/svg/cart.svg" alt="cart" width={20} height={20} />
        </div>
      </Link>
    </div>
  )
}