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
          counts.map(image =>(
            <div className="mb-3" key={image}>
              <CardImage image={product.image} width={50} height={50} title={product.title} />
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
        <CardImage image={product.image} width={300} height={300} title={product.title} className="mt-4 mb-4" />
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
            counts.map(image =>(
              <CardImage key={image} image={product.image} width={30} height={30} title={product.title} />
            ))
          }
        </div>
      </div>
    </div>
  )
}
