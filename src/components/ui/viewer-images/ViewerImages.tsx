import { Product } from '@/interfaces';
import styles from './viewer-images.module.css';
import { CardImage } from '../card-image/CardImage';

interface Props {
  product: Product;
}

export const ViewerImages = ({product}: Props) => {
  return (
    <div className={styles.wrapper_viewer_images}>
      <div className={`${styles.list_images}`}>
        <CardImage image={product.image} width={50} height={50} title={product.title} />
        <CardImage image={product.image} width={50} height={50} title={product.title} />
        <CardImage image={product.image} width={50} height={50} title={product.title} />
        <CardImage image={product.image} width={50} height={50} title={product.title} />
      </div>
      <div className={`${styles.view_image}`}>
        <CardImage image={product.image} width={300} height={300} title={product.title} className="mt-4 mb-4" />
      </div>
    </div>
  )
}
