import { font } from '@/config/font';
import styles from './footer.module.css';
import { getYear } from '@/helpers';
import { Logo, Menu } from '@/components';
import { LinkMenu } from '@/interfaces';
import { MAIN_MENU, MENU_HELP } from '@/constants/menus';

export const Footer = () => {
  const links: LinkMenu[] = MAIN_MENU;
  const linksHelp: LinkMenu[] = MENU_HELP;
  return (
    <footer className={`
      ${font.className}
      ${styles.wrapper_footer}
    `}>
      <div className={styles.content_footer}>
        <div className={styles.section_information}>
          <Logo />
          <p className="regular-body">Santa Tecla, La Libertad, El Salvador</p>
        </div>
        <div className={styles.section_links}>
          <div className={styles.links}>
            <p>Enlaces</p>
            <Menu orientation="vertical" links={links}/>
          </div>
          <div className={styles.links}>
            <p>Ayuda</p>
            <Menu orientation="vertical" links={linksHelp}/>
          </div>
        </div>
        <div className="section_newsletter">
          newsletter
        </div>
      </div>
      <div className={`${styles.rights} regular-body`}>
        <p>©{getYear()} <span>Gerson Benito</span>. All rights reserved.</p>
      </div>
    </footer>
  )
}
