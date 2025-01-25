import { notFound } from "next/navigation";
import styles from './product.module.css';
import { font } from "@/config/font";
import { ViewerImages, DetailProduct, Title, ProductGrid, SkeletonProduct } from "@/components";
import Button from '@/components/ui/button/Button';
import { getProductById } from "@/libs/api/products";
import { Suspense } from "react";

interface Props {
    params: {
        id: string;
    },
    searchParams?: Promise<{
        query?: string;
        page?: string;
    }>
}

export default async function ({params, searchParams}: Props) {
    // obtener id enviado por medio de la url
    const { id } = await params;

    //Obteber los datos de los props
    const search = await searchParams;
    const query = search?.query || '';

    // En caso de contar con paginado se usara esta variable
    const currentPage = Number(search?.page) || 1;

    // Obtener los detalles del producto seleccionado
    const product = await getProductById(id);

    // En caso de que no se encuentre el producto se presenta la pagina 404 
    // se corta el flujo de ejecucion
    if(!product){
        notFound();
    }

    return (
        <div className={`${font.className} ${styles.wrapper_product}`}>
            <div className={`${styles.section_detail_product}`}>
                <ViewerImages product={product} />
                <DetailProduct product={product} />
            </div>
            <div className={`${styles.related_products}`}>
                <Title title="Productos relacionados" className="align-center mb-2" />
                <Suspense key={query + currentPage} fallback={<SkeletonProduct />} >
                    <ProductGrid 
                        endpint={`products/category/${product.category}`} 
                        query={query}
                        className="mb-4" 
                        sort={true}
                    />
                </Suspense>
                <div className="align-center mt-3 mb-1">
                    <Button 
                        label="Mostrar mas" 
                        type="outline-primary" 
                        isRedirect={true}
                        link="/products"
                    />
                </div>
            </div>
        </div>
    );
}