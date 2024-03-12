import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const location = useLocation();
  const [isScrolling, setIsScrolling] = useState(false);
  const onAboutPage = location.pathname.includes('/about');

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;

      setIsScrolling(scrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`absolute navbar ${
        isScrolling || onAboutPage ? 'show-bg' : ''
      }`}>
      <HashLink to={'./#header'} className="logo">
        narae jang
      </HashLink>

      <nav className="navbar__list">
        <HashLink
          to={'./#projects'}
          className={
            location.pathname === '/' && location.hash === '#projects'
              ? 'active'
              : ''
          }>
          Works
        </HashLink>
        <HashLink
          to="./about#about-me"
          className={location.pathname === '/about' ? 'active' : ''}>
          about
        </HashLink>
        <a href="#" target="_black">
          resume
        </a>
      </nav>
    </div>
  );
};
export default Navbar;
