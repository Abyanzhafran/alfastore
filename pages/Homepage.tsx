import type { NextPage } from 'next'
import MainLayout from 'components/MainLayout'

const homepage: NextPage = () => {
  return (
    <MainLayout className="w-full max-w-sm mx-auto border-l border-r">
      <div className="flex items-center justify-center h-screen">
        <span className="font-bold text-xl">this is Homepage boyy</span>
      </div>
    </MainLayout>
  )
}

export default homepage