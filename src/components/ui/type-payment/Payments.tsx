'use client';

import { font } from '@/config/font';
import styles from './payments.module.css';
import Image from 'next/image';
import { Payment } from '@/interfaces/type-pyment';
import { obfuscateNumbers } from '@/helpers';
import { useState } from 'react';

interface Props {
  typesPaymentProcessors: Payment[]
}

const Payments = ({typesPaymentProcessors}:Props) => {
  const [select, setSelect] = useState<string>('');
  return (
    <div className={`${font.className} ${styles.wrapper_payment}`}>
      {typesPaymentProcessors.map(payment =>(
        <div  
          key={payment.brand} 
          className={`
            ${styles.payment_content} 
            ${select.toUpperCase() === payment.brand.toUpperCase() ? styles.selected : ''}
          `}
          onClick={() => setSelect(payment.brand) }
        >
          <Image 
            src={`/assets/svg/${payment.brand}.svg`} 
            width={ 
              payment.brand.toUpperCase() === 'PAYPAL' ? 70 : 50
            } 
            height={30} 
            alt={payment.brand} 
          />
          <h3>{obfuscateNumbers(payment.cardNumber)}</h3>
        </div>
      ))}
    </div>
  )
}

export default Payments
