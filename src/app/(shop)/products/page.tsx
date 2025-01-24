import { ProductGrid, Title } from "@/components";
import styles from './products.module.css';
import { font } from "@/config/font";
import { getAllProducts } from "@/libs/api/products";

export default async function() {

    // Obtener todos los productos
    const products = await getAllProducts();

    return (
        <div className={`${font.className} ${styles.products_wrapper}`}>
            <Title title="Tienda" className="align-center mt-2 mb-4"/>
            <ProductGrid products={products} className="mb-4" />
        </div>
    );
}