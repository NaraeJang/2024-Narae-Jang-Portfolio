import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  return (
    <div className="fixed top-0 right-0 group rounded-full w-fit h-fit text-right group cursor-pointer z-50">
      <div className="bg-white rounded-full min-w-10 min-h-10 group-hover:py-3 group-hover:px-6 mt-8 mr-8 transition-all shadow-navbar">
        <ul className="invisible hidden group-hover:visible group-hover:flex flex-row gap-4 items-center justify-end leading-none">
          <li>
            <a href="/">
              <p className="font-title text-lg text-neutral-800">Narae Jang</p>
            </a>
          </li>
          <li>
            <HashLink
              to="/#work"
              className="tracking-tight text-neutral-500 hover:text-neutral-700 transition-colors">
              Work
            </HashLink>
          </li>
          <li>
            <HashLink
              to="/#other-section"
              className="tracking-tight text-neutral-500 hover:text-neutral-700 transition-colors">
              My Journey
            </HashLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
