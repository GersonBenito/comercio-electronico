import { font } from '@/config/font';
import styles from './footer.module.css';
import { getYear } from '@/helpers';
import { Logo, Menu } from '@/components';
import { LinkMenu } from '@/interfaces';

export const Footer = () => {
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

  const linksHelp: LinkMenu[] = [
      {
        label: 'Opciones de pago',
        url: '/'
      },
      {
        label: 'Reembolsos',
        url: '/'
      },
      {
        label: 'Politicas de privacida',
        url: '/'
      }
  ];
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
            <p>Links</p>
            <Menu orientation="vertical" links={links}/>
          </div>
          <div className={styles.links}>
            <p>Help</p>
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
