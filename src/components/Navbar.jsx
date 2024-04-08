import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { gsap } from 'gsap';

const Navbar = () => {
  const location = useLocation();
  const [isScrolling, setIsScrolling] = useState(false);
  const navigate = useNavigate();

  console.log(location.pathname);

  const navigateToHome = () => {
    navigate({
      pathname: '/',
      state: { from: location.pathname },
    });
  };

  useEffect(() => {
    const t1 = gsap.timeline();
    t1.to('.navbar', {
      opacity: 1,
      duration: 0.4,
    });

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
          to="#projects"
          onClick={navigateToHome}
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
