'use client';

import { useState, useRef } from 'react';
import styles from "./hamburger-menu.module.css";
import Image from 'next/image';
import Logo from '@/components/ui/logo/Logo';
import { MAIN_MENU } from '@/constants/menus';
import Link from 'next/link';

interface Props {
    className?: string;
}

const HamburgerMenu = ({className}:Props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);


const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
    menuRef?.current?.style?.setProperty('display',menuOpen ? 'none':'block');

};

const handleCloseMenu = () => {
    menuRef?.current?.style?.setProperty('display', 'none');
    setMenuOpen(!menuOpen);
};

return (
    <div className={`${styles.wrapper_hamburger_menu} ${className}`}>
      <button
        ref={buttonRef}
        id="hamburger"
        className={`${styles.hamburger_button} d-flex`}
        onClick={handleMenuToggle}
      >
        <Image src="/assets/svg/hamburger-menu.svg" width={20} height={20} alt="hamburger-menu" />
      </button>
      <nav
        ref={menuRef}
        id="menu"
        className={`${styles.hamburger_menu}`}
        style={{
            display: !menuOpen ? 'none':'block'
        }}
      >
        <div className={`${styles.hamburger_menu_header}`}>
            <button
                id="menuClose"
                className={styles.menu_close_button}
                onClick={handleCloseMenu}
            >
            <Image src="/assets/svg/close.svg" width={20} height={20} alt="close" />
            </button>
            <div className="mr-3">
              <Logo />
            </div>
        </div>
        <ul className={styles.menu_close_button}>
          {MAIN_MENU.map(link => (
            <li key={link.label}>
              <Link  href={link.url} onClick={ handleCloseMenu } className={styles.menu_item}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
