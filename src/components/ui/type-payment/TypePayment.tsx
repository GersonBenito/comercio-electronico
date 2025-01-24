'use client';

import { font } from "@/config/font";
import styles from "./type-payment.module.css";
import { TypePayment as Payment} from "@/interfaces/type-pyment";
import { useState } from "react";
import Payments from "@/components/ui/type-payment/Payments";

interface Props {
  typePayments: Payment[]
}

// Data dummy, debido a que no se cuenta con una API que retorne 
// los tipos de procesadores de pago se usara data dummy a modo de prueba
const typesPaymentProcessors = [
  {
    brand: 'VISA',
    icon: 'visa',
    cardNumber: '577551756017'
  },
  {
    brand: 'PayPal',
    icon: 'paypal',
    cardNumber: '323976338104'
  }
];

const TypePyment = ({typePayments}: Props) => {
  const [select, setSelect] = useState<number | string>(1);
  const [showCard, setShowCard] = useState<boolean>(true);

  const handleSelect = (id: number | string) =>{
    setSelect(id);
    setShowCard(select === 2 ? true : false);
  }

  return (
    <div className={`${font.className} ${styles.wrapper_type_payment}`}>
      <div className={`${styles.type_payment}`}>
        {typePayments.map((payment, idx) => (
          <div className={`${styles.payment} mb-3`} key={payment.id}>
            <div className={`${styles.select_payment}`}>
              <div 
                className={`
                  ${styles.bullet}
                  ${ payment.id === select ? styles.selected : '' }
                `} 
                onClick={() => handleSelect(payment.id)}
              />
              <h3>{payment.type}</h3>
            </div>
            <p>{payment.description}</p>
            {
              (showCard && idx === 0) && 
                <>
                  <div className={`${styles.divider}`} />
                  <Payments typesPaymentProcessors={typesPaymentProcessors} />
                </>
            }
          </div>
        ))}
      </div>
    </div>
  )
}

export default TypePyment;