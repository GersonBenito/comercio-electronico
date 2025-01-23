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
}

const Button = ({label, type, isRedirect = false, link = '', icon, className}: Props) => {
  const router = useRouter();
  const handleAction = () => {
    if(isRedirect){
      router.push(link);
    }else{
      // ejecutar accion recibido desde props
    }
  }
  const typeButton = style[type];
  return (
    <button 
      className={`${style.btn} ${typeButton} ${className}`}
      onClick={handleAction}
    >
      {icon && icon}
      {label}
    </button>
  )
}

export default Button;