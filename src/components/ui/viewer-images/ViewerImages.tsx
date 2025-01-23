import { Product } from '@/interfaces';
import styles from './viewer-images.module.css';
import { CardImage } from '../card-image/CardImage';

interface Props {
  product: Product;
}

// data test, debido a que la API o Servicio no cuenta con una lista de images del producto, 
// se usara un arreglo de 4 elementos para simular los diferentes assets del producto 
const counts = [1,2,3,4];

export const ViewerImages = ({product}: Props) => {
  return (
    <div className={styles.wrapper_viewer_images}>
      <div className={`${styles.list_images}`}>
        {
          counts.map(image =>(
            <CardImage key={image} image={product.image} width={50} height={50} title={product.title} />
          ))
        }
      </div>
      <div className={`${styles.view_image}`}>
        <CardImage image={product.image} width={300} height={300} title={product.title} className="mt-4 mb-4" />
      </div>
    </div>
  )
}
