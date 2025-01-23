import { font } from '@/config/font';
import styles from './detail-produc.module.css';
import { Product } from '@/interfaces';
import { replaceCharactersAndNumbers, transformAmount } from '@/helpers';
import { Button } from '@/components';
import Size from '@/components/ui/size/Size';
import Color from '@/components/ui/color/Color';
import QuantityButton from '@/components/ui/quantity-button/QuantityButton';
import Rating from '@/components/ui/rating/Rating';

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

  // Para efectos de prueba los sizes y colors unicamente estaran maquedados, en caso de contar con una API
  // donde devuelva toda esta data se puede incluir la funcionalidad
  const sizes = ['L', 'XL', 'XS'];
  const colors = ['#9F9F9F', '#000000', '#B88E2F'];

  return (
    <div className={`${font.className} ${styles.wrapper_details}`}>
      <h1 className="mb-1">{product.title}</h1>
      <h2 className="mb-1">{transformAmount(product.price)}</h2>
      <div className={`${styles.rating} mb-1`}>
        <div className={`${styles.stars}`}>
          <Rating count={product.rating.rate} />
        </div> | 
        <p className={`${styles.counter}`}>{product.rating.count} Opinión de cliente</p>
      </div>
      <p className="regular-body mb-2">{product.description}</p>
      {/* size */}
      <Size sizes={sizes} selectedSize={sizes[0]} />
      {/* colors */}
      <Color colors={colors} />
      {/* actions */}
      <div className={`${styles.product_actions}`}>
        {/* Button counter */}
        <QuantityButton />
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
