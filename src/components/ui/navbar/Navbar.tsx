import { Actions, Logo } from "@/components";
import { Menu } from "@/components";
import Link from "next/link";
import styles from './navbar.module.css';
import { font } from "@/config/font";

export const Navbar = () => {
  return (
    <nav className={`
      ${font},
      ${styles.wrapper_navbar}
    `}>
        <Link href="/">
            <Logo />
        </Link>
        <Menu />
        <Actions />
    </nav>
  )
}
