'use client';

import { font } from '@/config/font';
import styles from './quantity-button.module.css';
import Image from 'next/image';
import { useState } from 'react';
import { useCart } from '@/hooks';
import { Product } from '@/interfaces';

interface Props {
    product: Product;
}

const QuantityButton = ({product}:Props) => {

    const [counter, setCounter] = useState<number>(product.quantity || 1);
    const { increaseQuantity, subtractQuantity } = useCart();

    const handlePlus = () => {
        setCounter(counter + 1);
        increaseQuantity(1);
    } 

    const handleMinus = () => {
        setCounter(counter - 1);
        subtractQuantity(1);
    } 

    return (
        <div className={`${font.className} ${styles.wrapper_quantity_button}`}>
        <button className={styles.plus} disabled={counter >= 2 ? false : true}>
            <Image 
                src="/assets/svg/minus.svg" 
                width={16} 
                height={16} 
                alt="minus" 
                onClick={handleMinus}
            />
        </button>
        <span>{counter}</span>
        <button className={styles.plus}>
            <Image 
                src="/assets/svg/plus.svg" 
                width={16} 
                height={16} 
                alt="plus"
                onClick={handlePlus} 
            />
        </button>
        </div>
    )
}

export default QuantityButton;
