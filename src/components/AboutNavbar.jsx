import { NavLink, useLocation } from 'react-router-dom';
import { aboutNavbarList } from '../data/data';

const AboutNavbar = () => {
  const location = useLocation();

  return (
    <aside className="py-20 hidden invisible opacity-0 lg:block lg:visible lg:opacity-100 lg:w-full  lg:max-w-[15.5rem]">
      <nav className="flex flex-col gap-6 fixed top-1/2 -translate-y-1/2">
        {aboutNavbarList.map((nav) => {
          return (
            <a
              key={nav.id}
              href={`/about${nav.path}`}
              className={`w-full min-w-[9.375rem] work-pill leading-tight text-left ${
                location.pathname === '/about' &&
                location.hash === `${nav.path}`
                  ? 'active'
                  : ''
              }`}>
              {nav.title}
            </a>
          );
        })}
      </nav>
    </aside>
  );
};
export default AboutNavbar;
