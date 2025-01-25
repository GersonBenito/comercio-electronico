'use client';

import { useRouter } from 'next/navigation';
import style from './button.module.css';

interface Props {
  label: string;
  type: string; 
  isRedirect?: boolean
  link?: string;
  icon?: string;
  className?: string;
  onClick?: () => void;
}

const Button = ({label, type, isRedirect = false, link = '', icon, className, onClick}: Props) => {
  const router = useRouter();
  const handleRedirect = () => {
    if(isRedirect){
      router.push(link);
    }
  }

  const typeButton = style[type];
  return (
    <button 
      className={`${style.btn} ${typeButton} ${className}`}
      onClick={(e) =>{
        onClick ? onClick() : handleRedirect()
      }}
    >
      {icon && icon}
      {label}
    </button>
  )
}

export default Button;