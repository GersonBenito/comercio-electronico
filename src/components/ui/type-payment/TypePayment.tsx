'use client';

import { font } from "@/config/font";
import styles from "./type-payment.module.css";
import { TypePayment as Payment} from "@/interfaces/type-pyment";
import { useEffect, useState } from "react";
import Payments from "@/components/ui/type-payment/Payments";
import { complementData } from "@/libs/utils/complement-data";
import { useCheckout } from "@/hooks";

interface Props {
  typePayments: Payment[]
}

/**
 * Para los tipos de procesadores de pago se usara data estatico
 * debido a que la API que se esta consumiento no dispone de estos datos,
 * en caso de disponer con una API que cuente con todos los datos 
 * la variable almacenaria los datos obtenidos desde la API
 */
const typesPaymentProcessors = complementData.typesPaymentProcessors;

const TypePyment = ({typePayments}: Props) => {
  const [select, setSelect] = useState<number | string>(1);
  const [showCard, setShowCard] = useState<boolean>(true);
  const { addItemTypePayment, validTypePayment } = useCheckout();

  const type = typePayments.find(payment => payment.id === select);
  
  useEffect(() =>{
    // Obtener el tipo de pago por defecto
    addItemTypePayment(type || typePayments[0]);
    validTypePayment(true);
  },[])

  const handleSelect = (id: number | string) =>{
    setSelect(id);
    setShowCard(select === 2 ? true : false);
    addItemTypePayment(type || typePayments[0]);
    validTypePayment(true);
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