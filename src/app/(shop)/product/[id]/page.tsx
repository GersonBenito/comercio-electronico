import { notFound } from "next/navigation";
import styles from './product.module.css';
import { font } from "@/config/font";
import { ViewerImages, DetailProduct, Title, ProductGrid } from "@/components";
import Button from '@/components/ui/button/Button';
import { shuffleArray } from "@/helpers";
import { getProductById, getProductsByCategory } from "@/libs/api/products";

interface Props {
    params: {
        id: string;
    }
}

export default async function ({params}: Props) {
    // obtener id enviado por medio de la url
    const { id } = await params;

    // Obtener los detalles del producto seleccionado
    const product = await getProductById(id);

    // En caso de que no se encuentre el producto se presenta la pagina 404 
    // se corta el flujo de ejecucion
    if(!product){
        notFound();
    }

    // Obtener los productos relacionados a la categoria
    // para poder mostrar los productos relacionados
    const productsRaw = await getProductsByCategory(product.category);

    // Desordenar los productos para mostrarloa de forma aleatoria
    const products = shuffleArray(productsRaw).slice(0, 4);

    return (
        <div className={`${font.className} ${styles.wrapper_product}`}>
            <div className={`${styles.section_detail_product}`}>
                <ViewerImages product={product} />
                <DetailProduct product={product} />
            </div>
            <div className={`${styles.related_products}`}>
                <Title title="Productos relacionados" className="align-center mb-2" />
                <ProductGrid products={products} />
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