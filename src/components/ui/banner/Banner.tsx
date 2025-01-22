import { Discover } from '@/components';
import styles from './banner.module.css';

export const Banner = () => {
  return (
    <div className={styles.wrapper_banner}>
        <img src="/assets/images/banner.png" alt="banner" />
        <Discover />
    </div>
  )
}
