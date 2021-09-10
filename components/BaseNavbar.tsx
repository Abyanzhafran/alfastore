import { MenuAlt1Icon, SearchIcon, XIcon } from '@heroicons/react/outline';
import { useState } from 'react';

const BaseNavbar = () => {
  const [isOpen, setOpen] = useState(false)
  const [isSearch, setSearch] = useState(false)
  const [isClose, setClose] = useState(false)

  return (
    <nav className="fixed w-full flex flex-col bg-white border-b-4 border-gray-100 shadow-sm gap-4">
      <div className="flex flex-col">
        <div className="flex p-4 justify-between items-center">
          {/* left nav */}
          <div className="flex p-1">
            <button className={`${isSearch ? "hidden" : "block"} outline-none`} onClick={() => setOpen(!isOpen)}>
              <MenuAlt1Icon className="w-6 h-6 text-gray-900" />
            </button>
            <button className={`${isSearch ? "block" : "hidden"} outline-none`} onClick={() => setClose(!isClose)}>
              <XIcon className="w-6 h-6 text-gray-900" />
            </button>
          </div>

          {/* brand */}
          <div>
            <div className="px-2 py-1">
              <span className={`${isSearch ? "hidden" : "block"} font-bold text-lg text-gray-900 leading-7`}>Alfastore</span>
              <input className={`${isSearch ? "block" : "hidden"} border-b-2 h-7 rounded focus:outline-none text-lg`} type="input" placeholder="Search..." />
            </div>
          </div>

          {/* right nav */}
          <div className="flex p-1">
            <button className="outline-none" onClick={() => setSearch(!isSearch)}>
              <SearchIcon className="w-6 h-6 text-gray-500" />
            </button>
          </div>
        </div>
        <div className={`w-full flex justify-center h-screen ${isOpen ? "block" : "hidden"}`}>
          <ul className="flex flex-col gap-8 uppercase text-lg font-semibold items-center justify-center text-gray-900">
            <li className="cursor-pointer active:text-gray-500">Beranda</li>
            <li className="cursor-pointer active:text-gray-500">Tentang</li>
            <li className="cursor-pointer active:text-gray-500">Produk</li>
            <li className="cursor-pointer active:text-gray-500">Bantuan</li>
            <nav className="font-bold normal-case text-lg text-gray-900 leading-7 fixed bottom-5">Alfastore</nav>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default BaseNavbar