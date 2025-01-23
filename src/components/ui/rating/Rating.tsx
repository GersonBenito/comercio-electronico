'use client';
import { truncateToFixed } from '@/helpers';
import { Rating as ReactRating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

interface Props {
  count: number;
}

const Rating = ({count}:Props) => {
  const value = truncateToFixed(count);
  return (
    <>
      <ReactRating style={{ maxWidth: 100 }} value={value} />
    </>
  )
}

export default Rating;
