import { ProductGrid, Title } from "@/components";
import styles from './products.module.css';
import { font } from "@/config/font";
import { getAllProducts } from "@/libs/api/products";
import { searchProducts } from "@/helpers/search";

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

    // Obtener todos los productos
    const products = await getAllProducts();

    // La busqueda se realizara de forma local debido a que la API no cuenta con estos endpoints
    const foundProducts = searchProducts(products, query);

    return (
        <div className={`${font.className} ${styles.products_wrapper}`}>
            <Title title="Tienda" className="align-center mt-2 mb-4"/>
            <ProductGrid products={foundProducts} className="mb-4" />
        </div>
    );
}