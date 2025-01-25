import { ProductGrid, Title } from "@/components";
import { notFound } from "next/navigation";
import styles from './category.module.css';
import { font } from "@/config/font";
import { replaceCharactersAndNumbers } from "@/helpers";
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

export default async function({params, searchParams}: Props) {
    // Obtener id de la categoria enviado por medio de la url
    const { id } = await params;

    //Obteber los datos de los props
    const search = await searchParams;
    const query = search?.query || '';

    // En caso de contar con paginado se usara esta variable
    const currentPage = Number(search?.page) || 1;

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
            {/* 
                La pasamos la key para que pueda volver a renderizarse al buscar
            */}
            <Suspense key={query + currentPage} fallback={<div><h1>Cargando... </h1></div>} >
                <ProductGrid endpint={`products/category/${id}`} query={query} className="mb-4" />
            </Suspense>
        </div>
    );
}