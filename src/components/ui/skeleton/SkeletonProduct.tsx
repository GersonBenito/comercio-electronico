import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const SkeletonProduct = () => {
  return (
    <div className="mt-2 pl-3 pr-3 mb-4">
      <SkeletonTheme>
        <Skeleton height={25} count={5} />
      </SkeletonTheme>
    </div>
  )
}
