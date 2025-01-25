import { ProductGrid, Title } from "@/components";
import styles from './products.module.css';
import { font } from "@/config/font";
import { Suspense } from "react";

interface Props {
    searchParams?: Promise<{
        query?: string;
        page?: string;
    }>
}
export default async function({searchParams}: Props) {

    //Obteber los datos de los props
    const search = await searchParams;
    const query = search?.query || '';

    // En caso de contar con paginado se usara esta variable
    const currentPage = Number(search?.page) || 1;

    return (
        <div className={`${font.className} ${styles.products_wrapper}`}>
            <Title title="Tienda" className="align-center mt-2 mb-4"/>
            <Suspense key={query + currentPage} fallback={<div><h1>Cargando... </h1></div>} >
                <ProductGrid endpint="products" query={query} className="mb-4" />
            </Suspense>
        </div>
    );
}