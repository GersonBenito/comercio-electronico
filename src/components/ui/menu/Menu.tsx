import { font } from "@/config/font"
import Link from "next/link"
import styles from './menu.module.css';
import { LinkMenu } from "@/interfaces";

interface Props {
  orientation?: string
  links: LinkMenu[]
}

export const Menu = ({orientation = 'horizontal', links}: Props) => {
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
        links.map(link => (
          <Link key={link.label} href={link.url}>{link.label}</Link>
        ))
      }
    </div>
  )
}
