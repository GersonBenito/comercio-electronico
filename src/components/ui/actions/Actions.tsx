'use client';

import Link from 'next/link';
import styles from './actions.module.css';
import Image from 'next/image';
import Search from '@/components/ui/search/Search';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useCart, useDeviceDetection } from '@/hooks';
import { PAGE_NO_SEARCH } from '@/constants/menus';
import HamburgerMenu from '@/components/ui/hamburger-menu/HamburgerMenu';
import { useControlSearch } from '@/hooks/use-control-search';

const Actions = () => {
  const [show, setShow] = useState<boolean>(false);
  const pathname = usePathname();
  const { items } = useCart();
  const { addState } = useControlSearch();
  const isMovil = useDeviceDetection();

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

  const handleShowControl = () => {
    setShow(true);
    // Aignar el estado unicamente si es movil, en caso contrario no realizar el cambio de estado
    if(isMovil){
      addState(true);
    }
  }

  const handleCloseControl = () => {
    setShow(false);
    if(isMovil){
      addState(false);
    }
  }

  return (
    <div className={styles.wrapper_actions}>
      { show && <Search onClick={ handleCloseControl }/>}
      {(!show && verifyPath()) && 
        <Image 
          src="/assets/svg/search.svg" 
          alt="search" 
          width={20} 
          height={20} 
          onClick={ handleShowControl } 
        />
      }
      {
        !show &&
          <>
            <Link href="/wish">
              <Image src="/assets/svg/wish.svg" alt="wish" width={20} height={20} />
            </Link>
            <Link href="/cart">
              <div className={styles.counter}>
                {(items.length >= 1) && <div className={styles.badge}>{items.length}</div>}
                <Image src="/assets/svg/cart.svg" alt="cart" width={20} height={20} />
              </div>
            </Link>
            <HamburgerMenu className="d-sm-block d-md-block d-lg-none d-xl-none d-xxl-none d-block" />
          </>
      }
    </div>
  )
}

export default Actions;