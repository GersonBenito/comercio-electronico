import { CardImage } from "@/components";
import { transformAmount } from "@/helpers";
import Image from "next/image";
import { Product } from "@/interfaces"
import styles from "./table.module.css";

interface Props {
    titles: string[]
    products: Product[];
}

export const Table = ({ titles, products }: Props) => {
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
                    {products.map(product => (
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
                                        <Image src="/assets/svg/trash.svg" width={20} height={20} alt="trash" />
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
