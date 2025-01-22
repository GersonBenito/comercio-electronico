import { font } from '@/config/font';
import styles from './detail-produc.module.css';
import { Product } from '@/interfaces';
import { replaceCharactersAndNumbers, transformAmount } from '@/helpers';
import { Button } from '@/components';

interface Props {
  product: Product;
}
export const DetailProduct = ({product}: Props) => {

  const label = {
    'electronics': 'Electrónica',
    'jewelery': 'Joyería',
    'mensclothing': 'Ropa de hombre',
    'womensclothing': 'Ropa de mujer',
  }

  return (
    <div className={`${font.className} ${styles.wrapper_details}`}>
      <h1 className="mb-1">{product.title}</h1>
      <h2 className="mb-1">{transformAmount(product.price)}</h2>
      <div className={`${styles.rating} mb-1`}>
        <div className={`${styles.stars}`}>
          ✨✨✨✨✨
        </div> | 
        <p className={`${styles.counter}`}>{product.rating.count} Customer Review</p>
      </div>
      <p className="regular-body mb-2">{product.description}</p>
      {/* size */}
      {/* colors */}
      {/* actions */}
      <div className={`${styles.product_actions}`}>
        {/* Button counter */}
        <Button label="Agregar al carito" type="outline-secondary" />
        <Button label="Agregar a favorito" type="outline-secondary" />
      </div>
      <div className={`${styles.aditional_info}`}>
        <div className="title_info">
          <h2>SKU</h2>
          <h2>Categoria</h2>
          <h2>Tags</h2>
          <h2>Compartir</h2>
        </div>
        <div className="info_divider">
          <h2>:</h2>
          <h2>:</h2>
          <h2>:</h2>
          <h2>:</h2>
        </div>
        <div className="info_data">
          <h2>SS001</h2>
          <h2>{(label as any)[replaceCharactersAndNumbers(product.category)]}</h2>
          <h2>Ropa, Tecnología, Ofertas</h2>
          <h2>Social media</h2>
        </div>
      </div>
    </div>
  )
}
