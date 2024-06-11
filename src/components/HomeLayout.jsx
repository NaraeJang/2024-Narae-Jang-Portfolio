import { Navbar, Footer } from './';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
export default HomeLayout;
