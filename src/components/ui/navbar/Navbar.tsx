import { Actions, Logo } from "@/components";
import { Menu } from "@/components";
import Link from "next/link";
import styles from './navbar.module.css';
import { font } from "@/config/font";
import { LinkMenu } from "@/interfaces";

export const Navbar = () => {
  const links: LinkMenu[] = [
    {
      label: 'Inicio',
      url: '/'
    },
    {
      label: 'Tienda',
      url: '/products'
    },
    {
      label: 'Electrónica',
      url: '/category/electronics'
    },
    {
      label: 'Joyería',
      url: '/category/jewelery'
    },
    {
      label: 'Ropa de hombre',
      url: '/category/men\'s clothing'
    },
    {
      label: 'Ropa de mujer',
      url: '/category/women\'s clothing'
    },
  ];
  return (
    <nav className={`
      ${font.className},
      ${styles.wrapper_navbar}
    `}>
        <Link href="/">
            <Logo />
        </Link>
        <Menu links={links}/>
        <Actions />
    </nav>
  )
}
