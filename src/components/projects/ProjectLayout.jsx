import { Outlet } from 'react-router-dom';
import { Navbar, Footer } from '../';
Navbar;
const ProjectLayout = () => {
  return (
    <div className="relative max-w-screen-2xl mx-auto">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
export default ProjectLayout;
