import Logo from '@/components/ui/logo/Logo';
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
      pl-md-4
      pl-lg-4
      pl-xl-5
      pl-xxl-5
      pr-md-4
      pr-lg-4
      pr-xl-5
      pr-xxl-5
      pr-3
      pl-3
      pt-4
      pb-4
    `}>
        <Link href="/">
            <Logo className="d-md-none d-lg-none d-xl-block d-xxl-block d-none"/>
        </Link>
        <div className={`${styles.menu_navbar} d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block d-none`}>
          <Menu links={links} />
        </div>
        <div className={`${styles.actions_navbar}`}>
          <Actions />
        </div>
    </nav>
  )
}
