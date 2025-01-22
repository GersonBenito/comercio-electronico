import { ProductGrid, Title } from "@/components";
import { initialData } from "@/dummy/dummy";
import { notFound } from "next/navigation";
import styles from './category.module.css';
import { font } from "@/config/font";
import { replaceCharactersAndNumbers } from "@/helpers";

const dummyProducts = initialData.products;

interface Props {
    params: {
        id: string;
    }
}

export default function({params}: Props) {
    const id = replaceCharactersAndNumbers(params.id);
    const products = dummyProducts.filter(product => replaceCharactersAndNumbers(product.category) === id);

    const label = {
        'electronics': 'Electrónica',
        'jewelery': 'Joyería',
        'mensclothing': 'Ropa de hombre',
        'womensclothing': 'Ropa de mujer',
    }

    // TODO: agregar 
    // if(id === 'test'){
    //     notFound();
    // }
    return (
        <div className={`${font.className} ${styles.wrapper_category} mb-4`}>
            <Title title={`Artículos de ${(label as any)[id]}`} className="align-center mt-2 mb-2"/>
            <ProductGrid products={products} />
        </div>
    );
}