import { font } from "@/config/font";
import styles from "./cart.module.css";
import { initialData } from "@/dummy/dummy";
import { Table, Title } from "@/components";
import Button from '@/components/ui/button/Button';
import { getTotalPrice, transformAmount } from "@/helpers";

// Data dummy
const cart = initialData.products.slice(0, 3);

export default function() {
    const tableTitles = ['Producto', 'Precio', 'Cantidad', 'Subtotal'];
    return (
        <div className={`${font.className} ${styles.wrapper_cart}`}>
            <Title title="Carrito" className="align-center mb-3"/>
            <div className={`${styles.cart_products} mb-2`}>
                <Table titles={tableTitles} products={cart} />
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