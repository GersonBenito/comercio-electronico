'use client';

import { CardImage } from "@/components";
import { transformAmount } from "@/helpers";
import Image from "next/image";
import styles from "./table.module.css";
import { useCart } from "@/hooks";
import { searchProducts } from "@/helpers/search";

interface Props {
    titles: string[]
    query: string;
}

export const Table = ({ titles, query }: Props) => {
    const { items, removeItem } = useCart();
    // La busqueda se realizara de forma local debido a que la API no cuenta con estos endpoints
    const foundProducts = searchProducts(items, query);
    return (
        <div className={`${styles.wrapper_table}`}>
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
                                <div className={`${styles.custom_content}`}>
                                    <CardImage
                                        image={product.image}
                                        title={product.title}
                                        width={50}
                                        height={50}
                                    />
                                    <p style={{width:'250px'}}>{product.title}</p>
                                </div>
                            </td>
                            <td style={{ width: '15%' }} className="pl-1">
                                <div className={`${styles.custom_content}`}>
                                    {transformAmount(product.price)}
                                </div>
                            </td>
                            <td style={{ width: '15%' }} className="align-start pl-1">
                                <div className={`${styles.custom_content}`} style={{ color: '#000' }}>
                                    2
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
                                    {transformAmount(product.price)}
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
