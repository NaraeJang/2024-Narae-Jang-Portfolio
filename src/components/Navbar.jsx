const Navbar = () => {
  return (
    <div className="absolute navbar show-bg">
      <a href="/" className="logo">
        narae jang
      </a>

      <nav className="navbar__list">
        <a href="#projects" className="active">
          work
        </a>
        <a href="/about">about</a>
        <a href="#" target="_black">
          resume
        </a>
      </nav>
    </div>
  );
};
export default Navbar;
