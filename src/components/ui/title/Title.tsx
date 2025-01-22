import { font } from '@/config/font';
import styles from './title.module.css';

interface Props {
    title: string;
    className?: string;
}

export const Title = ({title, className}: Props) => {
  return (
    <div className={`${font.className} ${className}`}>
      <h1 >{title}</h1>
    </div>
  )
}
