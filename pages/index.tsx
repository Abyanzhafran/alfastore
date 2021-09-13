/* eslint-disable jsx-a11y/alt-text */
import type { NextPage } from 'next';
import MainLayout from 'components/MainLayout';

const homepage: NextPage = () => (
  <MainLayout className="">
    <div className="relative w-full h-screen flex">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/alfa.png"
        className="w-full h-full object-cover"
      />

      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, rgba(196, 196, 196, 0) 20.51%, rgba(39, 39, 42, 0.7) 64.84%, #171717 100%)' }}
      />

      <div className="absolute bottom-12 left-14">
        <span className="text-xl leading-7 font-bold z-10 text-white uppercase">General Supplier</span>
        <hr className="text-white mb-2 h-px w-20" />
      </div>
    </div>
  </MainLayout>
);

export default homepage;
