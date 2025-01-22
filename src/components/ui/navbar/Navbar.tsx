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
      url: '/'
    },
    {
      label: 'Electrónica',
      url: '/'
    },
    {
      label: 'Joyería',
      url: '/'
    },
    {
      label: 'Ropa de hombre',
      url: '/'
    },
    {
      label: 'Ropa de mujer',
      url: '/'
    },
  ];
  return (
    <nav className={`
      ${font},
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
