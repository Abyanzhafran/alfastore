import BaseNavbar from './BaseNavbar';
import BaseFooter from './BaseFooter';
import type { HTMLAttributes } from 'react';

const MainLayout = ({ children, ...props }: HTMLAttributes<HTMLElement>) => {
  return (
    <>
      <BaseNavbar />
      <main {...props}>
        {children}
      </main>
      <BaseFooter />
    </>
  )
}

export default MainLayout