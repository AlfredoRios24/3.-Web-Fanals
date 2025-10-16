import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const HEADER_HEIGHT = 50;

const AppLayout: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main style={{ flexGrow: 1, paddingTop: HEADER_HEIGHT + 10 }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
