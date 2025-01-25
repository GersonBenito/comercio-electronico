import { Discover } from '@/components';
import styles from './banner.module.css';

export const Banner = () => {
  return (
    <div className={styles.wrapper_banner}>
        {/* 
          Debido que no se adapta de forma adecuada la imagen usando Image de next, 
          se esta usando una etiqueta nativa de HTML optimizando el formato de la imagen a .webp 
        */}
        <img src="/assets/images/banner.webp" alt="banner" />
        <Discover />
    </div>
  )
}
