import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  return (
    <div className="fixed top-0 right-0 group rounded-full w-fit h-fit text-right group cursor-pointer z-50">
      <div className="bg-white rounded-full min-w-10 min-h-10 group-hover:py-3 group-hover:px-6 mt-8 mr-8 transition-all shadow-navbar">
        <p className="font-title grid place-items-center w-full h-10 group-hover:invisible group-hover:opacity-0 group-hover:hidden text-neutral-400">
          NJ
        </p>
        <ul className="invisible hidden group-hover:visible group-hover:flex flex-row gap-4 items-center justify-end leading-none">
          <li>
            <a href="/" className="">
              <p className="font-title text-base text-neutral-800">
                Narae Jang
              </p>
            </a>
          </li>
          <li>
            <HashLink
              to="/#work"
              className="tracking-tight text-neutral-500 hover:text-neutral-700 transition-colors text-sm">
              Work
            </HashLink>
          </li>
          <li>
            <a
              href="#"
              className="tracking-tight text-neutral-500 hover:text-neutral-700 transition-colors text-sm">
              Resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
