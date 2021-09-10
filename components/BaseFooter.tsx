import { MenuAlt1Icon } from '@heroicons/react/outline';

const BaseFooter = () => {
  return (
    <footer>
      <div className="flex w-full bg-gray-900 items-center justify-center">
        <div className="flex flex-col w-80 mx-4 my-8 justify-start gap-10">
          <span className="font-bold text-lg text-white leading-7 border-b-2">Alfastore</span>
          <div className="flex flex-col gap-4">
            <span className="text-white text-xs leading-4 font-bold mt-6 mb-4">Navigasi</span>
            <ul className="list-none text-white flex flex-col gap-4">
              <li className="text-base leading-6 font-semibold">Beranda</li>
              <li className="text-base leading-6 font-semibold">Tentang</li>
              <li className="text-base leading-6 font-semibold">Katalog</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-xs text-white leading-4 font-bold" >Media Sosial</span>
            <ul className="list-none text-white flex flex-col gap-4">
              <li className="text-base leading-6 font-semibold">ACM</li>
              <li className="text-base leading-6 font-semibold">ACM</li>
              <li className="text-base leading-6 font-semibold">+62 8312 XXXX</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <span className="text-white text-base leading-6 font-semibold mt-4" >Alamat</span>
            <span className="text-white text-base leading-6 font-semibold mt-4 mb-6">Jl . jalan, No. 45, Kartasura, Jawa Selatan</span>
            <hr className="text-white mb-8 h-px" />
            <span className="text-white text-xs leading-4 font-normal">© 2021 Alfastore (CV. Alfa Cipta Mukti). All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default BaseFooter;