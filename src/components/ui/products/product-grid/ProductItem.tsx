// Componente de lado del cliente
'use client';

import { Product } from "@/interfaces"
import styles from './product-grid.module.css';
import Image from "next/image";
import { transformAmount } from "@/helpers/transform-amount";
import { useState } from "react";
import { Button } from "@/components";
import { font } from "@/config/font";
import Link from "next/link";

interface Props {
  product: Product;
}

export const ProductItem = ({product}:Props) => {

  const [hover, setHover] = useState<string>('hidden_hover');

  return (
    <div 
      className={`${font} ${styles.content_product}`}
      onMouseEnter={ ()=> setHover('show_hover') }
      onMouseLeave={ ()=> setHover('hidden_hover') }
    >
      <div className={styles.product_image}>
        <Image 
          src={product.image}
          alt={product.title}
          width={200}
          height={230}
        />
      </div>
      <div className={styles.detail}>
          <h3 className="text-wrap">{product.title}</h3>
          <p className="text-wrap">{product.description}</p>
          <span>{transformAmount(product.price)}</span>
      </div>
      <div className={styles[hover]}>
        <Button label="Agregar al carito" type="secondary" />
        <div className={styles.section_actions}>
          <div className={styles.text_icon}>
            <Link href="/share">
              <Image src="/assets/svg/share.svg" alt="share" width={16} height={16} />
              Compartir
            </Link>
          </div>
          <div className={styles.text_icon}>
            <Link href="/share">
              <Image src="/assets/svg/detail.svg" alt="detail" width={16} height={16} />
              Detalles
            </Link>
          </div>
          <div className={styles.text_icon}>
            <Link href="/share">
              <Image src="/assets/svg/heart-white.svg" alt="heart-white" width={16} height={16} />
              Like
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
