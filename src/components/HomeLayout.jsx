import { Outlet } from 'react-router-dom';
import { Footer, Navbar } from './';

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
