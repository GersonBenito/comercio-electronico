import Image from "next/image";
import styles from "./card-image.module.css";

interface Props {
    image: string;
    title: string;
    width: number;
    height: number;
    className?: string;
}

export const CardImage = ({image, title, width, height, className}: Props) => {
  
  return (
    <div className={`${styles.wrapper_card_image}`}>
        <Image src={image} width={width} height={height} alt={title} className={className} />
    </div>
  )
}
