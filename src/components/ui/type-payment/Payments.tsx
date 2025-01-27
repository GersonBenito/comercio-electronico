'use client';

import { font } from '@/config/font';
import styles from './payments.module.css';
import Image from 'next/image';
import { Payment } from '@/interfaces/type-pyment';
import { obfuscateNumbers } from '@/helpers';
import { useState } from 'react';
import { useCheckout } from '@/hooks';

interface Props {
  typesPaymentProcessors: Payment[]
}

const Payments = ({typesPaymentProcessors}:Props) => {
  const [select, setSelect] = useState<string>('');
  const { addItemPayment, validPayment } = useCheckout();
  
  const handleSelectProcessors = (processor: Payment) => {
    setSelect(processor.brand);
    addItemPayment(processor);
    validPayment(true);
  }
  return (
    <div className={`${font.className} ${styles.wrapper_payment}`}>
      {typesPaymentProcessors.map(payment =>(
        <div  
          key={payment.brand} 
          className={`
            ${styles.payment_content} 
            ${select.toUpperCase() === payment.brand.toUpperCase() ? styles.selected : ''}
          `}
          onClick={() => handleSelectProcessors(payment) }
        >
          <Image 
            src={`/assets/svg/${payment.icon}.svg`} 
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
