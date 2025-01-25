import styles from './product-grid.module.css';
import { font } from "@/config/font";
import { ProductItem } from "@/components";
import { getProducts } from "@/libs/api/products";
import { searchProducts } from "@/helpers/search";
import { shuffleArray } from '@/helpers';

interface Props {
    className?: string;
    endpint: string;
    query?: string;
    sort?: boolean;
}

export const ProductGrid = async ({endpint, query, className, sort}:Props) => {
  // Obtener los productos en base al endpoint
  let products = await getProducts(endpint);
  if(sort){
    // Desordenar los productos para mostrarlos de forma aleatoria
    const productsRaw = products;
    products = shuffleArray(productsRaw).slice(0, 4); 
  }
  // La busqueda se realizara de forma local debido a que la API no cuenta con estos endpoints
  const foundProducts = searchProducts(products, query);
  return (
    <div className={`${font.className} ${styles.wrapper_grid} ${className}`}>
      {
        foundProducts.map(product => (<ProductItem key={product.id} product={product} />))
      }
    </div>
  )
}
