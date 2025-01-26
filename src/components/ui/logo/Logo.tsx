'use client';

import Image from 'next/image';
import style from './logo.module.css';
import { font } from '@/config/font';
import { useControlSearch } from '@/hooks/use-control-search';

interface Props {
  className?: string;
}

const Logo = ({className}:Props) => {
  const { show } = useControlSearch();
  return (
    <div className={`
      ${style.wrapper_logo}
      ${font.className}
    `}>
      {
        (!show) &&
          <Image 
            src="/assets/images/logo.png" 
            alt="logo" 
            width={50}
            height={32}

          />
      }
      <div 
        className={`${style.name} ${className}`}
      >
        eCommerce
      </div>
    </div>
  )
}

export default Logo;
