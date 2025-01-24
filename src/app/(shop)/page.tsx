import { Banner, ProductGrid, Title } from "@/components";
import Button from '@/components/ui/button/Button';
import { font } from "@/config/font";
import styles from './page.module.css';
import { getProductsByLimit } from "@/libs/api/products";
import { searchProducts } from "@/helpers/search";

interface Props {
  searchParams?: Promise<{
      query?: string;
      page?: string;
  }>
}

export default async function Home({searchParams}: Props) {
  //Obteber los datos de los props
  const search = await searchParams;
  const query = search?.query || '';

  // En caso de contar con paginado se usara esta variable
  const currentPage = Number(search?.page) || 1;

  // obtener productos con limite de 10
  const products = await getProductsByLimit(10);

  // La busqueda se realizara de forma local debido a que la API no cuenta con estos endpoints
  const foundProducts = searchProducts(products, query);
  
  return (
    <div className={font.className}>
      <Banner />
      <Title title="Nuestros productos" className="align-center mt-2"/>
      <ProductGrid products={foundProducts} className={styles.section_product}/>
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
