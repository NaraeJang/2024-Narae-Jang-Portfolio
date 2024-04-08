import { Outlet } from 'react-router-dom';
import { Cursor, Footer, Navbar } from './';
import { useState, useEffect, createContext, useContext } from 'react';
import { gsap } from 'gsap';

const HomeContext = createContext();

const HomeLayout = () => {
  const [shouldShowCursor, setShouldShowCursor] = useState(true);

  useEffect(() => {
    const t1 = gsap.timeline();
    t1.fromTo(
      '.navbar',
      { opacity: 0 },
      {
        delay: 0.8,
        opacity: 1,
        duration: 0.4,
      }
    );

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
      <div className="relative">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </HomeContext.Provider>
  );
};

export const useHomeContext = () => useContext(HomeContext);

export default HomeLayout;
