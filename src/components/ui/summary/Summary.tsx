'use client';

import { font } from "@/config/font";
import styles from "./summary.module.css";
import { useCart } from "@/hooks";
import { getTotalPrice, transformAmount } from "@/helpers";

export const Summary = () => {
    const { items } = useCart();
    return (
        <div className={`${font.className} ${styles.wrapper_summary}`}>
            <div className={`
                ${styles.titles} 
                ${styles.content_space_between} 
                row
            `}>
                <h3>Productos</h3>
                <h3>Subtotal</h3>
            </div>
            {items.map(product =>(
                <div key={product.id} className={`${styles.product} ${styles.content_space_between} mb-2`}>
                    <p className="col-8 col-sm-8 col-md-8 col-lg-9 col-xl-9 col-xxl-9">
                        {product.title} <span>x {product.quantity}</span>
                    </p>
                    <p className={`${styles.price_product}`}>
                        {transformAmount(product.price * product.quantity)}
                    </p>
                </div>
            ))}
            <div className={`${styles.subtotal} ${styles.content_space_between} mb-2`}>
                <h4>Subtotal</h4>
                <p className={`${styles.amount_subtotal}`}>
                    {transformAmount(getTotalPrice(items))}
                </p>
            </div>
            <div className={`${styles.total} ${styles.content_space_between} mb-2`}>
                <h4>Total</h4>
                <p className={`${styles.amount_total}`}>
                    {transformAmount(getTotalPrice(items))}
                </p>
            </div>
        </div>
    )
}
