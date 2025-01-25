'use client';

import { font } from "@/config/font";
import styles from "./total.module.css";
import { getTotalPrice, transformAmount } from "@/helpers";
import Button from "@/components/ui/button/Button";
import { useCart } from "@/hooks";
import { searchProducts } from "@/helpers/search";

interface Props {
    query: string;
}

export const Total = ({query}: Props) => {
    const { items } = useCart();
    // La busqueda se realizara de forma local debido a que la API no cuenta con estos endpoints
    const foundProducts = searchProducts(items, query);
    return (
        <div className={`${font.className} ${styles.wrapper_total}`}>
            <h2>Totales del carrito</h2>
            <div className={`${styles.subtotal}`}>
                <h4>Subtotal</h4>
                <p>{transformAmount(getTotalPrice(foundProducts))}</p>
            </div>
            <div className={`${styles.total}`}>
                <h4>Total</h4>
                <p>{transformAmount(getTotalPrice(foundProducts))}</p>
            </div>
            <Button 
                label="Check Out" 
                type="outline-secondary" 
                className={styles.button_transparent}
                isRedirect={true}
                link="/checkout"
                disabled={ items.length >= 1 ? false : true }
            />
    </div>
  )
}
