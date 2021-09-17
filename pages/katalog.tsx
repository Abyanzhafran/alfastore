/* eslint-disable @next/next/link-passhref */
/* eslint-disable react/button-has-type */
import type { NextPage } from 'next';
import Link from 'next/link';
import MainLayout from 'components/MainLayout';
import ProductCard from 'components/ProductCard';
import { ChevronDownIcon, SortDescendingIcon, AdjustmentsIcon } from '@heroicons/react/outline';

const btnItem = [
  {
    name: 'Semua',
  },
  {
    name: 'Komputer',
  },
  {
    name: 'Alat tulis',
  },
  {
    name: 'Elektronik',
  },
  {
    name: 'Perabotan',
  },
];

const katalog: NextPage = () => (
  <MainLayout className="">
    <main className="w-full flex items-start justify-center bg-gray-50">
      <div className="flex flex-col items-start lg:items-center justify-center mt-16 mb-20 mx-6">
        <span className="text-lg leading-7 font-bold flex flex-col items-start lg:items-center my-8">
          Katalog dagang
          <hr className="border-black border-2 w-20 mt-3" />
        </span>

        {/* At lg > breakpoint */}
        <div className="w-full hidden lg:block">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm leading-5 font-normal">
                Kategori:
              </span>
              {btnItem.map((item) => (
                <button className="bg-white hover:bg-gray-200 active:bg-gray-400 px-3 py-1.5 text-sm leading-5 font-medium">
                  {item.name}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm leading-5 font-normal">
                Urut berdasarkan
              </span>
              <Link href="#!">
                <span className="text-sm leading-5 font-semibold flex items-center gap-2 hover:underline">
                  Paling laris
                  <ChevronDownIcon className="w-4 h-5 text-gray-500" />
                </span>
              </Link>
              <button className="">
                <SortDescendingIcon className="w-6 h-6 text-gray-500" />
              </button>
            </div>
          </div>
        </div>

        {/* At lg < breakpoint */}
        {/* <div className="container relative lg:hidden"> */}
        <div className="flex flex-col gap-3 w-full lg:hidden">
          <div className="abosolute w-full flex gap-6">
            <button className="">
              <AdjustmentsIcon className="w-6 h-6 text-gray-500" />
            </button>
            <div className="flex gap-2 object-contain w-full overflow-x-auto">
              <div className="">
                {btnItem.map((item) => (
                  <button className="bg-white hover:bg-gray-200 active:bg-gray-400 px-3 py-1.5 text-xs leading-4 font-medium whitespace-nowrap">
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full flex items-center justify-between bg-white">
            <div className="flex gap-4 my-2.5 mx-2">
              <span className="text-sm leading-5 font-normal">
                Urut berdasarkan
              </span>
              <Link href="#!">
                <span className="text-sm leading-5 font-semibold flex items-center gap-2 hover:underline">
                  Paling laris
                  <ChevronDownIcon className="w-4 h-5 text-gray-500" />
                </span>
              </Link>
            </div>
            <button className="">
              <SortDescendingIcon className="w-6 h-6 text-gray-500" />
            </button>
          </div>
        </div>
        {/* </div> */}
        <hr className="w-full border-[1px] border-gray-200 mt-4 mb-[45px] mx-2" />
        <div className="flex flex-wrap justify-center gap-4 mb-11 mx-6">
          {[...Array(8)].map((i) => (
            <ProductCard
              className="w-[232px] h-80"
              key={i}
            />
          ))}
        </div>
      </div>
    </main>
  </MainLayout>
);

export default katalog;
