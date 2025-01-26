'use client';

import { font } from '@/config/font';
import styles from './size.module.css';
import { useState } from 'react';

interface Props {
    sizes: string[];
    selectedSize: string;
}

const Size = ({sizes, selectedSize}:Props) => {
    const [selectSize, setSelectSize] = useState<string>(selectedSize);
    return (
        <div className={`${font.className} ${styles.wrapper_size}`}>
            <p className="mb-3">Tamaño</p>
            <div className={`${styles.list_size} mb-3`}>
                {
                    sizes.map(size => (
                        <button 
                            key={size} 
                            className={`${size === selectSize ? styles.select : styles.unselect}`}
                            onClick={() => setSelectSize(size)}
                        >{size}</button>
                    ))
                }
            </div>
        </div>
    )
}

export default Size;