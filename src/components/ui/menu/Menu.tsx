import { font } from "@/config/font"
import Link from "next/link"
import styles from './menu.module.css';

interface Props {
  orientation?: string
}

export const Menu = ({orientation = 'horizontal'}: Props) => {
  return (
    <div 
      className={`
        ${font.className} 
        ${styles.menu} 
        ${styles[orientation]} 
        regular-body`
      }
    >
      <Link href="/">Inicio</Link>
      <Link href="/">Tienda</Link>
      <Link href="/">Electrónica</Link>
      <Link href="/">Joyería</Link>
      <Link href="/">Ropa de hombre</Link>
      <Link href="/">Ropa de mujer</Link>
    </div>
  )
}
