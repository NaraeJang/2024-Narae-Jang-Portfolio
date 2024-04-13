import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const location = useLocation();
  const [isScrolling, setIsScrolling] = useState(false);
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate({
      pathname: '/',
      state: { from: location.pathname },
    });
  };

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
      <HashLink to={'./#hero'} className="logo">
        narae jang
      </HashLink>

      <nav className="navbar__list">
        <HashLink
          to="#about"
          className={location.hash === '#about' ? 'active' : ''}>
          about
        </HashLink>
        <HashLink
          to="#projects"
          onClick={navigateToHome}
          className={
            location.pathname === '/' && location.hash === '#projects'
              ? 'active'
              : ''
          }>
          projects
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
