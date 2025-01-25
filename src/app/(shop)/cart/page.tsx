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
        <div className={`${font.className} ${styles.wrapper_cart}`}>
            <Title title="Carrito" className="align-center mb-3"/>
            <div className={`${styles.cart_products} mb-2`}>
                <Table titles={tableTitles} query={query}/>
                <Total query={query} />
            </div>
        </div>
    );
}