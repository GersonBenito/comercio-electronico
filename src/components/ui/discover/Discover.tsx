import { font } from '@/config/font';
import styles from './discover.module.css';
import Button from '@/components/ui/button/Button';

export const Discover = () => {
  return (
    <div className={`${font.className} ${styles.wrapper_discover}`}>
        <div className={`
          ${styles.discover}
          col-12
          col-sm-7
          col-md-7
          col-lg-5
          col-xl-5
          col-xxl-5
        `}>
          <h4 className={`${styles.label} regular-body`}>Recién llegado</h4>
          <h1>Descubra nuestra nueva colección</h1>
          <p className={`${styles.description} regular-body`}>
            ¡Bienvenido! Descubre nuestra nueva colección 
            con diseños exclusivos que combinan estilo, 
            confort y las últimas tendencias. ¡No te lo pierdas!
          </p>
          <Button 
            type="primary" 
            label="Comprar ahora" 
            isRedirect={true}
            link="/products"
          />
        </div>
    </div>
  )
}
