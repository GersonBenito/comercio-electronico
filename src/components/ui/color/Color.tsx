'use client';

import { font } from '@/config/font';
import styles from './color.module.css';
import { useState } from 'react';

interface Props {
  colors: string[];
}

const Color = ({colors}:Props) => {
  const [selectColor, setSelectColor] = useState<string>('');
  return (
    <div className={`${font.className} ${styles.wrapper_color}`}>
      <p className="mb-3">Color</p>
      <div className={`${styles.list_color} mb-4`}>
        {
          colors.map(color => (
            <button 
              key={color} 
              style={{backgroundColor: color}}
              className={color === selectColor ? styles.selected : ''}
              onClick={ ()=> setSelectColor(color) }
            ></button>
          ))
        }
      </div>
    </div>
  )
}

export default Color;