import type { HTMLAttributes } from 'react';
import BaseNavbar from './BaseNavbar';
import BaseFooter from './BaseFooter';

const MainLayout = ({ children, ...props }: HTMLAttributes<HTMLElement>) => (
  <>
    <BaseNavbar />
    <main {...props}>
      {children}
    </main>
    <BaseFooter />
  </>
);

export default MainLayout;
