import { font } from '@/config/font';
import styles from './footer.module.css';
import { getYear } from '@/helpers';
import { Menu } from '@/components';
import Logo from '@/components/ui/logo/Logo';
import { LinkMenu } from '@/interfaces';
import { MAIN_MENU, MENU_HELP } from '@/constants/menus';

export const Footer = () => {
  const links: LinkMenu[] = MAIN_MENU;
  const linksHelp: LinkMenu[] = MENU_HELP;
  return (
    <footer className={`
      ${font.className}
      ${styles.wrapper_footer}
      pr-md-4
      pr-md-4
      pr-lg-5
      pr-xl-5
      pr-xxl-5
      pr-3
      pl-3
    `}>
      <div className={`
        ${styles.content_footer}
        row
      `}>
        <div className={`
          ${styles.section_information}
          col-12
          col-sm-5
          col-md-6
          col-lg-4
          col-xl-4
          col-xxl-4
          d-flex
          d-sm-block
          d-md-block
          d-lg-block
          d-xl-block
          d-xxl-block
          align-items-center
          align-items-sm-baseline 
          align-items-md-baseline 
          align-items-lg-baseline 
          align-items-xl-baseline 
          gap-3
        `}>
          <Logo />
          <p className="regular-body mt-0 mt-sm-5 mt-md-5 mt-lg-5 mt-xl-5">Santa Tecla, La Libertad, El Salvador</p>
        </div>
        <div className={`
          ${styles.section_links}
          col-12
          col-sm-6
          col-md-4
          col-lg-4
          col-xl-4
          col-xxl-4
        `}>
          <div className={styles.links}>
            <p>Enlaces</p>
            <Menu orientation="vertical" links={links}/>
          </div>
          <div className={styles.links}>
            <p>Ayuda</p>
            <Menu orientation="vertical" links={linksHelp}/>
          </div>
        </div>
        <div className="
          section_newsletter
          col-12
          col-sm-3
          col-md-3
          col-lg-3
          col-xl-3
          col-xxl-3
        ">
          newsletter
        </div>
      </div>
      <div className={`
        ${styles.rights} 
        regular-body
        text-center
        text-sm-center
        text-md-left
        text-lg-left
        text-xl-left
        text-xxl-left
      `}>
        <p>©{getYear()} <span>Gerson Benito</span>. All rights reserved.</p>
      </div>
    </footer>
  )
}
