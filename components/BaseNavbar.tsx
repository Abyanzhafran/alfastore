import { MenuAlt1Icon, SearchIcon } from '@heroicons/react/outline';

const BaseNavbar = () => {
  return (
    <nav className="fixed w-full flex flex-col bg-white border-b border-gray-100 shadow-sm gap-4">
      <div className="flex p-4 justify-between items-center">
        {/* left nav */}
        <div className="flex p-1">
          <button className="">
            <MenuAlt1Icon className="w-6 h-6 text-gray-900" />
          </button>
        </div>

        {/* brand */}
        <div>
          <div className="px-2 py-1">
            <span className="font-bold text-lg text-gray-900 leading-7">Alfastore</span>
          </div>
        </div>

        {/* right nav */}
        <div className="flex p-1">
          <button className="">
            <SearchIcon className="w-6 h-6 text-gray-500" />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default BaseNavbar
