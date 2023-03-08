import React from 'react';
import { Footer } from '../Home/Footer';

const Layout = ({ children }) => {
  return (
    <div className="text-sm flex flex-col w-full overflow-x-hidden min-h-screen">
      <div className="flex flex-col flex-grow w-full">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
