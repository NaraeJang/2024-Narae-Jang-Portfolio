import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const location = useLocation();
  const [isScrolling, setIsScrolling] = useState(false);

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
    <div className={`absolute navbar ${isScrolling ? 'show-bg' : ''}`}>
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
          works
        </HashLink>
        <HashLink
          to="./about#about-me"
          className={location.pathname === '/about' ? 'active' : ''}>
          about
        </HashLink>
        <a
          href="https://drive.google.com/file/d/1u40opSKDyBVkq_N2Ilqzocx_vt-CiVJv/view?usp=sharing"
          target="_black">
          resume
        </a>
      </nav>
    </div>
  );
};
export default Navbar;
