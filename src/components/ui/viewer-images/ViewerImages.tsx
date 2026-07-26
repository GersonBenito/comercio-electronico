import { ProductElement } from '@/interfaces';
import styles from './viewer-images.module.css';
import { CardImage } from '../card-image/CardImage';

interface Props {
  product: ProductElement;
}

export const ViewerImages = ({product}: Props) => {
  return (
    <div className={`
      ${styles.wrapper_viewer_images}
      col-12
      col-sm-12
      col-md-12
      col-lg-12
      col-xl-6
      col-xxl-6
      row
    `}>
      <div className={`
        ${styles.list_images}
         d-sm-none 
         d-md-none 
         d-lg-block 
         d-xl-block 
         d-xxl-block 
         d-none
      `}>
        {
          product.images.map((image, idx) =>(
            <div className="mb-3" key={idx}>
              <CardImage image={image} width={50} height={50} title={product.title} />
            </div>
          ))
        }
      </div>
      <div className={`
        ${styles.view_image}
        col-12
        col-sm-12
        col-md-12
        col-lg-7
        col-xl-7
        col-xxl-
      `}>
        <CardImage image={product.thumbnail} width={300} height={300} title={product.title} className="mt-4 mb-4" />
      </div>
      <div className={`
        d-sm-block 
        d-md-block
        d-lg-none
        d-xl-none 
        d-xxl-none 
        d-block
      `}>
        <div className={`${styles.list_images_movil}`}>
          {
            product.images.map((image, idx) =>(
              <CardImage key={idx} image={image} width={30} height={30} title={product.title} />
            ))
          }
        </div>
      </div>
    </div>
  )
}
