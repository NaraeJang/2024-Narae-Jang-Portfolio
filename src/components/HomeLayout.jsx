import { Outlet } from 'react-router-dom';
import { Cursor, Footer, Navbar } from './';

const HomeLayout = () => {
  return (
    <>
      <Cursor />
      <div className="relative">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};
export default HomeLayout;
