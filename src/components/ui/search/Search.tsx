import { font } from "@/config/font";
import styles from "./search.module.css";
import Image from "next/image";

interface Props {
  onClick: () => void;
}

export const Search = ({onClick}:Props) => {
  return (
    <div className={`${font.className} ${styles.wrapper_search}`}>
      <div className={`${styles.search}`}>
        <Image src="/assets/svg/search.svg" alt="search" width={20} height={20} />
        <input type="text" placeholder="Buscar" />
      </div>
        <div className={`${styles.icon_close}`}>
          <Image 
            src="/assets/svg/close.svg" 
            alt="close" width={12} 
            height={12} 
            className={`${styles.close_action}`} 
            onClick={onClick}
          />
        </div>
    </div>
  )
}