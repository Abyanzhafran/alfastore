/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/alt-text */
import type { NextPage } from 'next';
import MainLayout from 'components/MainLayout';
import { ChevronRightIcon, ChevronLeftIcon, ArrowSmRightIcon } from '@heroicons/react/outline';
import ProductCard from 'components/ProductCard';

const homepage: NextPage = () => (
  <MainLayout className="">
    <header className="relative w-full h-[567px] flex">
      <img
        src="/alfa.png"
        className="w-full h-full object-cover"
      />

      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, rgba(196, 196, 196, 0) 20.51%, rgba(39, 39, 42, 0.7) 64.84%, #171717 100%)' }}
      />

      <div className="absolute bottom-[49px] left-[54.47px] flex flex-col">
        <span className="text-xl leading-7 font-bold z-10 text-white uppercase mb-3">General Supplier</span>
        <hr className="text-white border-2 w-20 mb-4" />
        <span className="text-base leading-6 font-normal text-white mb-6 max-w-[454px]">
          Melayani berbagai kebutuhan pasokan barang untuk kebutuhan kantor anda maupun kebutuhan lainnya
        </span>
        <div className="flex gap-5 items-center">
          <button className="bg-white hover:bg-gray-500 px-3 py-1.5 text-sm leading-5 font-medium">
            Kontak Kami
          </button>
          <button className="text-sm leading-5 font-medium text-white flex">
            Lihat produk
            <ArrowSmRightIcon className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
      <div className="absolute bottom-[47.67px] right-[34.67px] flex">
        <button>
          <ChevronLeftIcon className="w-6 h-6 text-gray-500" />
        </button>
        <button>
          <ChevronRightIcon className="w-6 h-6 text-white" />
        </button>
      </div>
    </header>

    <main className="w-full">
      <section className="flex flex-col items-center justify-center">
        <span className="text-lg leading-7 font-bold flex flex-col items-center mt-8">
          klien kami
          <hr className="border-black border-2 w-20 mt-3" />
        </span>
      </section>
      <section className="flex flex-col items-center justify-center my-20 bg-gray-50">
        <div className="mx-6 mt-8">
          <span className="text-lg leading-7 font-bold flex flex-col items-center mb-[45px]">
            Barang Terlaris
            <hr className="border-black border-2 w-20 mt-3" />
          </span>
          <div className="flex flex-wrap justify-center gap-4 mb-11">
            {[...Array(8)].map((i) => (
              <ProductCard
                className="w-40 h-60 md:w-[232px] md:h-80"
                key={i}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center">
        <span className="text-lg leading-7 font-bold flex flex-col items-center my-8">
          Mitra Kami
          <hr className="border-black border-2 w-20 mt-3" />
        </span>
      </section>
      <section className="flex flex-col items-center justify-center">
        <span className="text-lg leading-7 font-bold flex flex-col items-center my-8">
          Temukan Kami
          <hr className="border-black border-2 w-20 mt-3" />
          <div className="mt-11">
            <img
              src="/map.png"
              className="w-full h-full object-cover"
            />
          </div>
        </span>
      </section>
    </main>
  </MainLayout>
);

export default homepage;
