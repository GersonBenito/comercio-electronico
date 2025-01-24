import { ProductGrid, Title } from "@/components";
import { notFound } from "next/navigation";
import styles from './category.module.css';
import { font } from "@/config/font";
import { replaceCharactersAndNumbers } from "@/helpers";
import { getProductsByCategory } from "@/libs/api/products";

interface Props {
    params: {
        id: string;
    }
}

export default async function({params}: Props) {
    // Obtener id de la categoria enviado por medio de la url
    const { id } = await params;

    // Obtener los productos pertenecientes a una categoria
    const products = await getProductsByCategory(id);

    // Reeemplazar caracteres no pemitidos para poder mostrar la categoria como titulo
    const categoryId = replaceCharactersAndNumbers(id);
    
    // Diccionario de catagorias para mostrarlo como titulo de la pantalla
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
            <Title title={`Artículos de ${(label as any)[categoryId]}`} className="align-center mt-2 mb-2"/>
            <ProductGrid products={products} />
        </div>
    );
}