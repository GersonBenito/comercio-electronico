import { font } from "@/config/font";
import styles from "./cart.module.css";
import { initialData } from "@/dummy/dummy";
import { Table, Title } from "@/components";
import Button from '@/components/ui/button/Button';
import { getTotalPrice, transformAmount } from "@/helpers";
import { searchProducts } from "@/helpers/search";

// Data dummy, a un no se modificara debido a que estos datos pertenecen al carrito
const cart = initialData.products.slice(0, 3);

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

    // La busqueda se realizara de forma local debido a que la API no cuenta con estos endpoints
    const foundProducts = searchProducts(cart, query);

    const tableTitles = ['Producto', 'Precio', 'Cantidad', 'Subtotal'];
    return (
        <div className={`${font.className} ${styles.wrapper_cart}`}>
            <Title title="Carrito" className="align-center mb-3"/>
            <div className={`${styles.cart_products} mb-2`}>
                <Table titles={tableTitles} products={foundProducts} />
                <div className={`${styles.check_out}`}>
                    <h2>Totales del carrito</h2>
                    <div className={`${styles.subtotal}`}>
                        <h4>Subtotal</h4>
                        <p>{transformAmount(getTotalPrice(cart))}</p>
                    </div>
                    <div className={`${styles.total}`}>
                        <h4>Total</h4>
                        <p>{transformAmount(getTotalPrice(cart))}</p>
                    </div>
                    <Button 
                        label="Check Out" 
                        type="outline-secondary" 
                        className={styles.button_transparent}
                        isRedirect={true}
                        link="/checkout"
                    />
                </div>
            </div>
        </div>
    );
}