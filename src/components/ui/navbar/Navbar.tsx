import { Logo } from "@/components";
import Actions from '@/components/ui/actions/Actions';
import { Menu } from "@/components";
import Link from "next/link";
import styles from './navbar.module.css';
import { font } from "@/config/font";
import { LinkMenu } from "@/interfaces";
import { MAIN_MENU } from "@/constants/menus";

export const Navbar = () => {
  const links: LinkMenu[] = MAIN_MENU;
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
