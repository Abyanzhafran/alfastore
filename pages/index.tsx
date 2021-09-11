import type { NextPage } from 'next'
import MainLayout from 'components/MainLayout'

const homepage: NextPage = () => {
  return (
    <MainLayout className="w-full">
      <div className="relative h-screen flex items-end justify-start">
        <img src="/alfa.png" className="absolute w-full h-full object-cover" />
        <span className="font-bold text-xl z-10 text-white ml-14 mb-12">this is Homepage boyy</span>
      </div>
    </MainLayout>
  )
}

export default homepage