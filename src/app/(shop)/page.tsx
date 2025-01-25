import { Banner, ProductGrid, SkeletonProduct, Title } from "@/components";
import Button from '@/components/ui/button/Button';
import { font } from "@/config/font";
import styles from './page.module.css';
import { Suspense } from "react";

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

  return (
    <div className={font.className}>
      <Banner />
      <Title title="Nuestros productos" className="align-center mt-2 mb-2"/>
      {/* 
        La pasamos la key para que pueda volver a renderizarse al buscar
       */}
      <Suspense key={query + currentPage} fallback={<SkeletonProduct />} >
        <ProductGrid endpint="products/?limit=10" query={query} className="mb-4" />
      </Suspense>
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
