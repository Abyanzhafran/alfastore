import BaseNavbar from 'components/BaseNavbar';
import BaseFooter from 'components/BaseFooter';
import type { HTMLAttributes } from 'react';

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
