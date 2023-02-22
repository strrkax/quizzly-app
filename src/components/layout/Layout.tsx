import React, { FC } from 'react';
import Header from '../header/Header';
import './layout.scss';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <main className='layout'>
      <Header />
      {children}
    </main>
  );
};

export default Layout;