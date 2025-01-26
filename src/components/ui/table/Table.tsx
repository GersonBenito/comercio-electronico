'use client';

import { CardImage } from "@/components";
import { transformAmount } from "@/helpers";
import Image from "next/image";
import styles from "./table.module.css";
import { useCart } from "@/hooks";
import { searchProducts } from "@/helpers/search";
import Link from "next/link";
import { Product } from "@/interfaces";

interface Props {
    titles: string[]
    query: string;
    className?: string;
}

export const Table = ({ titles, query, className }: Props) => {
    const { items, removeItem, addOnlyItem } = useCart();
    // La busqueda se realizara de forma local debido a que la API no cuenta con estos endpoints
    const foundProducts = searchProducts(items, query);
    
    /**
   *  Verificar si este producto ya se encuentra en el carrito
      para poder incrementarle la cantidad en el control
   */
    const handleAction = (product: Product) => {
        const onlyProduct = {
        ...product,
        quantity: items.find(item => item.id === product.id)?.quantity || 1
        }
        addOnlyItem(onlyProduct);
    }

    return (
        <div className={`${styles.wrapper_table} ${className}`}>
            <table>
                <thead>
                    <tr>
                        {titles.map((title, idx) => (
                            <th
                                key={title}
                                className={
                                    idx !== 0 ? 'align-start' : ''
                                }
                            >{title}</th>

                        ))}
                    </tr>
                </thead>
                <tbody>
                    {foundProducts.map(product => (
                        <tr key={product.id}>
                            <td style={{ width: '45%' }}>
                                <Link href={`/product/${product.id}`} onClick={ () => handleAction(product) }>
                                    <div className={`${styles.custom_content}`}>
                                        <CardImage
                                            image={product.image}
                                            title={product.title}
                                            width={50}
                                            height={50}
                                        />
                                        <p className={`${styles.title}`} style={{width:'250px'}}>
                                            {product.title}
                                        </p>
                                    </div>
                                </Link>
                            </td>
                            <td style={{ width: '15%' }} className="pl-1">
                                <div className={`${styles.custom_content}`}>
                                    {transformAmount(product.price)}
                                </div>
                            </td>
                            <td style={{ width: '15%' }} className="align-start pl-1">
                                <div className={`${styles.custom_content}`} style={{ color: '#000' }}>
                                    {product.quantity}
                                </div>
                            </td>
                            <td style={{ width: '25%' }} className="align-start pl-1">
                                <div 
                                    className={`${styles.custom_content}`} 
                                    style={{ 
                                        color: '#000', 
                                        justifyContent: 'space-between'
                                    }}
                                >
                                    {transformAmount(product.price * product.quantity)}
                                    <span className="pr-1" style={{cursor: 'pointer'}}>
                                        <Image 
                                            src="/assets/svg/trash.svg" 
                                            width={20} 
                                            height={20} 
                                            alt="trash" 
                                            onClick={ () => removeItem(product.id) }
                                        />
                                    </span>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
