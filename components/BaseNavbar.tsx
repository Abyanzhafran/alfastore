const BaseNavbar = () => {
  return (
    <nav className="bg-white w-96 flex flex-col gap-4 shadow-2xl">
      <div className="flex justify-between">
        <button className="bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-6 rounded inline-flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </button>
        <span className="my-6 text-lg leading-7 font-bold">Alfastore</span>
        <button className="bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-6 rounded inline-flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
    </nav>
  )
}

export default BaseNavbar
