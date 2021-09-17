/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
// import Image from 'next/image';
import { StarIcon } from '@heroicons/react/solid';
import { HTMLAttributes } from 'react';

const ProductCard = ({ ...props }: HTMLAttributes<HTMLElement>) => (
  <div {...props}>
    {/* <Image
      src="/alfa.png"
      className="object-fill"
      width="232"
      height="240"
    /> */}
    <img
      src="/alfa.png"
      className="w-[232px] h-60 object-cover"
    />
    <div className="flex flex-col items-center justify-center bg-white">
      <div className="my-4 text-center">
        <span className="text-base leading-6 font-medium capitalize">
          meja ergonomis
        </span>
        <div className="flex items-center justify-center gap-1.5">
          <div className="flex gap-1">
            {[...Array(5)].map((i) => (
              <StarIcon
                className="w-6 h-6 text-yellow-400"
                values={i}
              />
            ))}
          </div>
          <span className="text-xs leading-4 font-normal">
            (167)
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default ProductCard;
