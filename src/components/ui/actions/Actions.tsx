'use client';

import Link from 'next/link';
import styles from './actions.module.css';
import Image from 'next/image';
import Search from '@/components/ui/search/Search';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useCart } from '@/hooks';
import { PAGE_NO_SEARCH } from '@/constants/menus';

const Actions = () => {
  const [show, setShow] = useState<boolean>(false);
  const pathname = usePathname();
  const { items } = useCart();

  /**
   * Funcion para verificar la ruta actual para poder ocultar el icono de busqueda
   * en pantalla de checkout
   * @returns varlor verdadero o falso
   */
  const verifyPath = (): boolean => {
    const path = pathname.toLowerCase() || '';
    if(path === (PAGE_NO_SEARCH.checkout) || (path === PAGE_NO_SEARCH.address) || (path === PAGE_NO_SEARCH.purchase)){
      return false;
    }
    return true;
  }

  return (
    <div className={styles.wrapper_actions}>
      { show && <Search onClick={() => setShow(false)}/>}
      {(!show && verifyPath()) && 
        <Image 
          src="/assets/svg/search.svg" 
          alt="search" 
          width={20} 
          height={20} 
          onClick={() => setShow(true)} 
        />
      }
      <Link href="/wish">
        <Image src="/assets/svg/wish.svg" alt="wish" width={20} height={20} />
      </Link>
      <Link href="/cart">
        <div className={styles.counter}>
          {(items.length >= 1) && <div className={styles.badge}>{items.length}</div>}
          <Image src="/assets/svg/cart.svg" alt="cart" width={20} height={20} />
        </div>
      </Link>
    </div>
  )
}

export default Actions;