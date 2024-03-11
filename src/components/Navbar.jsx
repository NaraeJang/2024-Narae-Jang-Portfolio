import { Link, NavLink, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="absolute navbar show-bg">
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
        <NavLink to="./about">about</NavLink>
        <a href="#" target="_black">
          resume
        </a>
      </nav>
    </div>
  );
};
export default Navbar;
