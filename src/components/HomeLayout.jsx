import { Navbar, Footer } from './';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
  return (
    <div className="relative">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
export default HomeLayout;
