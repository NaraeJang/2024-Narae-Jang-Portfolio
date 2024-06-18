import { Navbar, Footer } from './';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
  return (
    <div className="relative max-w-[1920px] mx-auto">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
export default HomeLayout;
