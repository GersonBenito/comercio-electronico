import { Product } from "@/interfaces"
import styles from './product-grid.module.css';
import { font } from "@/config/font";
import { ProductItem } from "@/components";

interface Props {
    products: Product[];
    className?: string;
}

export const ProductGrid = ({products, className}:Props) => {
  return (
    <div className={`${font.className} ${styles.wrapper_grid} ${className}`}>
      {
        products.map(product => (<ProductItem key={product.id} product={product} />))
      }
    </div>
  )
}
