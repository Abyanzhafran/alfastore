import BaseNavbar from './BaseNavbar'
import BaseFooter from './BaseFooter'

const MainLayout = ({ children, className }) => {
  return (
    <>
      <BaseNavbar />
      <main className={`${className}`}>
        {children}
      </main>
      <BaseFooter />
    </>
  )
}

export default MainLayout