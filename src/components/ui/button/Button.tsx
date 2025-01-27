'use client';

import { useRouter } from 'next/navigation';
import style from './button.module.css';

interface Props {
  label?: string;
  type?: string; 
  isRedirect?: boolean
  link?: string;
  icon?: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  callToAction?: boolean;
  typeActionButton?: 'button' | 'submit'; 
}

const Button = ({
  label = '', 
  type = 'primary', 
  isRedirect = false, 
  link = '', 
  icon, 
  className, 
  onClick,
  disabled = false,
  callToAction = false,
  typeActionButton='button'
}: Props) => {

  const router = useRouter();
  const handleRedirect = () => {
    if(isRedirect){
      router.push(link);
    }
  }

  const typeButton = style[type];
  return (
    <button 
      type={typeActionButton}
      className={`${style.btn} ${typeButton} ${className}`}
      onClick={() =>{
        if (onClick) {
          onClick();
          if(callToAction){
            handleRedirect();
          }
        } else {
          handleRedirect();
        }
      }}
      disabled={disabled}
    >
      {icon && icon}
      {label}
    </button>
  )
}

export default Button;