import { Outlet } from 'react-router-dom';
import { Cursor, Footer, Navbar } from './';
import { useState, useEffect, createContext, useContext } from 'react';

const HomeContext = createContext();

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
    <HomeContext.Provider value={{}}>
      {shouldShowCursor && <Cursor />}
      <div className="relative overflow-hidden">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </HomeContext.Provider>
  );
};

export const useHomeContext = () => useContext(HomeContext);

export default HomeLayout;
