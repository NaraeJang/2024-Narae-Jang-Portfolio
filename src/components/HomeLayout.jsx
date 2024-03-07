import { Outlet } from 'react-router-dom';
import { Cursor, Footer, Navbar } from './';
import { useState, useEffect } from 'react';

const HomeLayout = () => {
  const [shouldShowCursor, setShouldShowCursor] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShouldShowCursor(window.innerWidth >= 1024);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {shouldShowCursor && <Cursor />}
      <div className="relative">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};
export default HomeLayout;
