import { Banner, ProductGrid, Title } from "@/components";
import Button from '@/components/ui/button/Button';
import { font } from "@/config/font";
import { initialData } from "@/dummy/dummy";
import styles from './page.module.css';

// Data dummy
const products = initialData.products.slice(0, 10);


export default function Home() {
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
