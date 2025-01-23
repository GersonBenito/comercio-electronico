'use client';

import { font } from "@/config/font";
import styles from "./type-pyment.module.css";
import { TypePyment as Pyment} from "@/interfaces/type-pyment";
import { useState } from "react";

interface Props {
  typePyments: Pyment[]
}

const TypePyment = ({typePyments}: Props) => {
  const [select, setSelect] = useState<number | string>(1);
  return (
    <div className={`${font.className} ${styles.wrapper_type_payment}`}>
      <div className={`${styles.type_payment}`}>
        {typePyments.map(pyment => (
          <div className={`${styles.payment} mb-3`} key={pyment.id}>
            <div className={`${styles.select_payment}`}>
              <div 
                className={`
                  ${styles.bullet}
                  ${ pyment.id === select ? styles.selected : '' }
                `} 
                onClick={() => setSelect(pyment.id)}
              />
              <h3>{pyment.type}</h3>
            </div>
            <p>{pyment.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TypePyment;