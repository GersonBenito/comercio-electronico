import style from './button.module.css';

interface Props {
  label: string;
  type: string; 
  link?: string
  icon?: string;
  className?: string;
}

export const Button = ({label, type, link, icon, className}: Props) => {
  const typeButton = style[type];
  return (
    <button className={`${style.btn} ${typeButton} ${className}`}>
      {icon && icon}
      {label}
    </button>
  )
}
