import { font } from '@/config/font';

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
