import { initialData } from "@/dummy/dummy";
import { notFound } from "next/navigation";
import styles from './product.module.css';
import { font } from "@/config/font";
import { ViewerImages, DetailProduct, Title, ProductGrid } from "@/components";
import Button from '@/components/ui/button/Button';
import { shuffleArray } from "@/helpers";

interface Props {
    params: {
        id: string;
    }
}

export default async function ({params}: Props) {
    const { id } = await params;

    // Data dummy
    const product = initialData.products.find( product => product.id === parseInt(id));
    const products = shuffleArray(initialData.products).slice(0,4);
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