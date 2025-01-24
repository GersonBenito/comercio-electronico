import { Banner, ProductGrid, Title } from "@/components";
import Button from '@/components/ui/button/Button';
import { font } from "@/config/font";
import styles from './page.module.css';
import { getProductsByLimit } from "@/libs/api/products";

export default async function Home() {
  // obtener productos con limite de 10
  const products = await getProductsByLimit(10);
  
  return (
    <div className={font.className}>
      <Banner />
      <Title title="Nuestros productos" className="align-center mt-2"/>
      <ProductGrid products={products} className={styles.section_product}/>
      <div className="align-center mt-3 mb-3">
        <Button 
          label="Mostrar mas" 
          type="outline-primary" 
          isRedirect={true}
          link="/products"
        />
      </div>
    </div>
  );
}
