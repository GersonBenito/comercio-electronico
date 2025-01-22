import { initialData } from "@/dummy/dummy";
import { Product } from "@/interfaces";
import { notFound } from "next/navigation";
import styles from './product.module.css';
import { font } from "@/config/font";
import { ViewerImages, DetailProduct } from "@/components";

interface Props {
    params: {
        id: string;
    }
}

export default function({params}: Props) {
    const id = parseInt(params.id);
    const product = initialData.products.find( product => product.id === id);
    if(!product){
        notFound();
    }
    return (
        <div className={`${font.className} ${styles.wrapper_product}`}>
            <ViewerImages product={product} />
            <DetailProduct product={product} />
        </div>
    );
}