import { MdiFacebook, MdiInstagram, MdiWhatsapp } from 'components/icons';

const BaseFooter = () => (
  <footer>
    <div className="absolute flex w-full bg-gray-900 items-center justify-center">
      {/* At < md breakpoint */}
      <div className="flex flex-col w-80 mx-4 my-8 justify-start gap-10 lg:hidden">
        <span className="font-bold text-lg text-white leading-7">
          Alfastore
          <hr className="text-white border-1 w-20" />
        </span>

        <div className="flex flex-col">
          <span className="text-white text-xs leading-4 font-bold mt-6 mb-4">Navigasi</span>

          <ul className="list-none text-white flex flex-col gap-4">
            <li className="text-base leading-6 font-semibold cursor-pointer">Beranda</li>

            <li className="text-base leading-6 font-semibold cursor-pointer">Tentang</li>

            <li className="text-base leading-6 font-semibold cursor-pointer">Katalog</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-xs text-white leading-4 font-bold">Media Sosial</span>

          <ul className="list-none text-white flex flex-col gap-4">
            <li className="cursor-pointer flex items-center">
              <div className="mr-1.5">
                <MdiInstagram className="w-5 h-5" />
              </div>

              <span className="text-base leading-6 font-semibold">ACM</span>
            </li>

            <li className="cursor-pointer flex items-center">
              <div className="mr-1.5">
                <MdiFacebook className="w-5 h-5" />
              </div>

              <span className="text-base leading-6 font-semibold">ACM</span>
            </li>

            <li className="cursor-pointer flex items-center">
              <div className="mr-1.5">
                <MdiWhatsapp className="w-5 h-5" />
              </div>

              <span className="text-base leading-6 font-semibold">+62 8312 XXXX</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col">
          <span className="text-white text-xs leading-4 font-bold mt-4">Alamat</span>

          <span className="text-white text-base leading-6 font-semibold mt-4 mb-6">Jl . jalan, No. 45, Kartasura, Jawa Selatan</span>

          <hr className="text-white mb-2 border-1" />

          <span className="text-white text-xs leading-4 font-normal">© 2021 Alfastore (CV. Alfa Cipta Mukti). All rights reserved.</span>
        </div>
      </div>
      {/* At > md breakoint */}
      <div className="hidden lg:block mx-6 my-8">
        <div className=" flex flex-row items-start gap-8">
          <div className="flex flex-col gap-16 w-56">
            <span className="font-bold text-lg text-white leading-7 border-b-2">Alfastore</span>

            <span className="text-white text-xs leading-4 font-normal">© 2021 Alfastore (CV. Alfa Cipta Mukti). All rights reserved.</span>
          </div>

          <div className="flex flex-col gap-4 w-56">
            <span className="text-white text-xs leading-4 font-bold">Navigasi</span>

            <ul className="list-none text-white flex flex-col gap-4">
              <li className="text-base leading-6 font-semibold cursor-pointer">Beranda</li>

              <li className="text-base leading-6 font-semibold cursor-pointer">Tentang</li>

              <li className="text-base leading-6 font-semibold cursor-pointer">Katalog</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4 w-56">
            <span className="text-xs text-white leading-4 font-bold">Media Sosial</span>

            <ul className="list-none text-white flex flex-col gap-4">
              <li className="cursor-pointer flex items-center">
                <div className="mr-1.5">
                  <MdiInstagram />
                </div>

                <span className="text-base leading-6 font-semibold">ACM</span>
              </li>

              <li className="cursor-pointer flex items-center">
                <div className="mr-1.5">
                  <MdiFacebook />
                </div>

                <span className="text-base leading-6 font-semibold">ACM</span>
              </li>

              <li className="cursor-pointer flex items-center">
                <div className="mr-1.5">
                  <MdiWhatsapp />
                </div>

                <span className="text-base leading-6 font-semibold">+62 8312 XXXX</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col w-56">
            <span className="text-white text-xs leading-4 font-bold">Alamat</span>

            <span className="text-white text-base leading-6 font-semibold mt-4">Jl . jalan, No. 45, Kartasura, Jawa Selatan</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default BaseFooter;
