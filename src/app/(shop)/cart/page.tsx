import { font } from "@/config/font";
import styles from "./cart.module.css";
import { Table, Title, Total } from "@/components";

interface Props {
    searchParams?: Promise<{
        query?: string;
        page?: string;
    }>
}

export default async function({searchParams}:Props) {
    //Obteber los datos de los props
    const search = await searchParams;
    const query = search?.query || '';

    // En caso de contar con paginado se usara esta variable
    const currentPage = Number(search?.page) || 1;

    const tableTitles = ['Producto', 'Precio', 'Cantidad', 'Subtotal'];
    return (
        <div className={`
            ${font.className} 
            ${styles.wrapper_cart} 
            pr-3
            pl-3
            pt-4
            pb-4
            pr-sm-4
            pr-md-4
            pr-lg-4
            pr-xl-6
            pr-xxl-6
            pr-sm-4
            pl-md-4
            pl-lg-4
            pl-xl-6
            pl-xxl-6
        `}>
            <Title title="Carrito" className="align-center mb-3"/>
            <div className={`
                ${styles.cart_products} 
                mb-3
                row
                gap-4
                d-flex
                justify-content-center
            `}>
                <Table 
                    titles={tableTitles} 
                    query={query}
                    className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-8 col-xxl-8"
                />
                <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-3 col-xxl-3">
                    <Total 
                        query={query} 
                    />
                </div>
            </div>
        </div>
    );
}