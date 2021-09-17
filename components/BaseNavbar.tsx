/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import Link from 'next/link';
import { MenuAlt1Icon, SearchIcon, XIcon } from '@heroicons/react/outline';
import { PhoneIcon } from '@heroicons/react/solid';
import AlfaBrand from './AlfaBrand';

const BaseNavbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [isSearch, setSearch] = useState(false);
  // const [isClose, setClose] = useState(false)

  return (
    <nav className="fixed w-full flex flex-col bg-white border-b-4 border-gray-100 shadow-sm z-10">
      <div className="flex flex-col">
        <div className="flex p-4 justify-between items-center lg:hidden">
          {/* left nav */}
          <div className="flex p-1">
            <button
              type="button"
              className={`${isSearch ? 'hidden' : 'block'} outline-none`}
              onClick={() => setOpen(!isOpen)}
            >
              <MenuAlt1Icon className="w-6 h-6 text-gray-900" />
            </button>

            <button
              type="submit"
              className={`${isSearch ? 'block' : 'hidden'} outline-none`}
              onClick={() => setSearch(!isSearch)}
            >
              <XIcon className="w-6 h-6 text-gray-900" />
            </button>
          </div>

          {/* brand */}
          <div>
            <div className="px-2 py-1 w-1/3">
              <AlfaBrand className={`${isSearch ? 'hidden' : 'block'} font-bold text-lg text-gray-900 leading-7`} />

              <input
                className={`${isSearch ? 'block' : 'hidden'} border-b-2 h-7 rounded focus:outline-none text-lg`}
                type="input"
                placeholder="Search..."
              />
            </div>
          </div>

          {/* right nav */}
          <div className="flex p-1">
            <button
              type="submit"
              className="outline-none"
              onClick={() => setSearch(!isSearch)}
            >
              <SearchIcon className="w-6 h-6 text-gray-500" />
            </button>
          </div>
        </div>

        {/* If Open nav or not */}
        <div className={`w-full flex justify-center h-screen ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col gap-8 uppercase text-lg font-semibold items-center justify-center text-gray-900">
            <li className="cursor-pointer active:text-gray-500">Beranda</li>

            <li className="cursor-pointer active:text-gray-500">Tentang</li>

            <li className="cursor-pointer active:text-gray-500">Produk</li>

            <li className="cursor-pointer active:text-gray-500">Bantuan</li>

            <nav className="font-bold normal-case text-lg text-gray-900 leading-7 fixed bottom-5">Alfastore</nav>
          </ul>
        </div>

        {/* If > lg breakpoint */}
        <div className="hidden lg:block p-4">
          <div className="flex justify-between items-center">
            <AlfaBrand className="" />
            <div className="flex flex-row items-center p-1 gap-10 mr-[131.5px] ml-[151.5px]">
              <Link href="#!">
                <a className="text-sm leading-5 font-medium focus:outline-none">
                  Beranda
                </a>
              </Link>

              <Link href="#!">
                <a className="text-sm leading-5 font-medium focus:outline-none">
                  Tentang
                </a>
              </Link>

              <Link href="#!">
                <a className="text-sm leading-5 font-medium focus:outline-none">
                  Katalog
                </a>
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center w-44">
                <input
                  className="border-b-2 w-40 h-6 rounded focus:outline-none text-lg"
                  type="input"
                  placeholder="cari sesuatu..."
                />
                <SearchIcon className="w-[15px] h-[15px] text-gray-500" />
              </div>

              <Link href="#!">
                <a className="bg-gray-700 p-1">
                  <div className="flex items-center gap-[5.6px] my-1 ml-[13.6px] mr-[5.6px]">
                    <PhoneIcon className="w-[12.8px] h-[12.8px] text-white" />
                    <span className="text-sm leading-5 font-medium text-white">Hubungi Kami</span>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default BaseNavbar;
