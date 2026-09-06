import { font } from "@/config/font"
import Link from "next/link"
import styles from './menu.module.css';
import { LinkMenu } from "@/interfaces";
import { Dropdown } from "@/components/ui/dropdown/Dropdown";
import { flattenMenuLinks } from "@/constants/menus";

interface Props {
  orientation?: string
  links: LinkMenu[]
}

export const Menu = ({orientation = 'horizontal', links}: Props) => {
  const isVertical = orientation === 'vertical';
  const items = isVertical ? flattenMenuLinks(links) : links;

  return (
    <div 
      className={`
        ${font.className} 
        ${styles.menu} 
        ${styles[orientation]} 
        regular-body`
      }
    >
      {
        items.map(link => (
          !isVertical && link.children?.length ? (
            <Dropdown
              key={link.label}
              label={link.label}
              items={link.children}
            />
          ) : (
            <Link key={link.label} href={link.url}>{link.label}</Link>
          )
        ))
      }
    </div>
  )
}
