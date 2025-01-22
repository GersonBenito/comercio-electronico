import Image from 'next/image';
import style from './logo.module.css';
import { font } from '@/config/font';

export const Logo = () => {
  return (
    <div className={`
      ${style.wrapper_logo}
      ${font.className}
    `}>
      <Image 
        src="/assets/images/logo.png" 
        alt="logo" 
        width={50}
        height={32}
      />
      <div className={style.name}>eCommerce</div>
    </div>
  )
}
