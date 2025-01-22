import { ProductGrid, Title } from "@/components";
import { initialData } from "@/dummy/dummy";
import styles from './products.module.css';
import { font } from "@/config/font";

// Data dummy
const products = initialData.products;

export default function() {
    return (
        <div className={`${font.className} ${styles.products_wrapper}`}>
            <Title title="Tienda" className="align-center mt-2 mb-4"/>
            <ProductGrid products={products} className="mb-4" />
        </div>
    );
}