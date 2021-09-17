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
      className="w-[232px] h-[184px] md:h-60 object-cover"
    />
    <div className="flex flex-col items-center justify-center bg-white">
      <div className="my-2 md:my-4 text-center gap-[7.94px] md:gap-[10.59px]">
        <span className="text-sm leading-5 font-medium md:text-base md:leading-6 md:font-medium capitalize">
          meja ergonomis
        </span>
        <div className="flex items-center justify-center gap-[5.54px] md:gap-[6.05px]">
          <div className="flex gap-[3.08px] md:gap-[4.1px]">
            {[...Array(5)].map((i) => (
              <StarIcon
                className="w-4 h-4 md:w-6 md:h-6 text-yellow-400"
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
