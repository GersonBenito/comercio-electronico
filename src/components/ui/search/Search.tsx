'use client';

import { font } from "@/config/font";
import styles from "./search.module.css";
import Image from "next/image";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

interface Props {
  onClick: () => void;
}

const Search = ({onClick}:Props) => {

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  // Uso de Debounced para poder esperar un tiempo al escribir
  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    if(term){
      params.set('query', term);
    }else{
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className={`${font.className} ${styles.wrapper_search}`}>
      <div className={`${styles.search}`}>
        <Image src="/assets/svg/search.svg" alt="search" width={20} height={20} />
        <input 
          type="text" 
          placeholder="Buscar" 
          onChange={ (event) => handleSearch(event.target.value) }
          defaultValue={searchParams.get('query')?.toString()}
        />
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

export default Search;