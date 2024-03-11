import { AboutMain, AboutNavbar } from './';

const About = () => {
  return (
    <div className="md:flex md:flex-row md:gap-10 w-[90%] mx-auto">
      <AboutNavbar />
      <AboutMain />
    </div>
  );
};
export default About;
