
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InfoBar from '@/components/InfoBar';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col soccer-pattern">
      <InfoBar />
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
  