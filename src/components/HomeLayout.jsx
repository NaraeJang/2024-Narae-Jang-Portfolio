import { Outlet } from 'react-router-dom';
import { Cursor, Footer, Navbar } from './';
import { useState, useEffect, createContext, useContext } from 'react';
import { gsap } from 'gsap';

const HomeContext = createContext();

const useLoading = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false); // Set isLoading to false after the component mounts
  }, []);

  return isLoading;
};

const HomeLayout = () => {
  const isLoading = useLoading(); // Using the custom useLoading hook
  const [shouldShowCursor, setShouldShowCursor] = useState(true);
  const [isNavbarRendered, setIsNavbarRendered] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShouldShowCursor(window.innerWidth >= 1024);
    };

    handleResize(); // Set initial state based on window size
    setIsNavbarRendered(true);
    window.addEventListener('resize', handleResize); // Update state on window resize

    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup listener on component unmount
    };
  }, []);

  useEffect(() => {
    if (isNavbarRendered) {
      // If Navbar is confirmed to be rendered, start GSAP animation
      gsap.fromTo(
        '.navbar',
        { opacity: 0 },
        {
          delay: 0.8,
          opacity: 1,
          duration: 0.4,
        }
      );
    }
  }, [isNavbarRendered]); // Depend on the `isNavbarRendered` flag

  if (isLoading) {
    return (
      <main className="grid place-items-center bg-primary-600 min-h-svh">
        <div className="banter-loader">
          <div className="banter-loader__box"></div>
          <div className="banter-loader__box"></div>
          <div className="banter-loader__box"></div>
          <div className="banter-loader__box"></div>
          <div className="banter-loader__box"></div>
          <div className="banter-loader__box"></div>
          <div className="banter-loader__box"></div>
          <div className="banter-loader__box"></div>
          <div className="banter-loader__box"></div>
        </div>
      </main>
    );
  }

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
