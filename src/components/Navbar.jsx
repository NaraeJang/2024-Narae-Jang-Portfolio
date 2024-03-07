const Navbar = () => {
  return (
    <div className="absolute navbar show-bg">
      <a href="/" className="logo">
        narae jang
      </a>

      <div className="navbar__list">
        <a href="#work" className="active">
          work
        </a>
        <a href="/about">about</a>
        <a href="#" target="_black">
          resume
        </a>
      </div>
    </div>
  );
};
export default Navbar;
