import { AboutMain, AboutNavbar, Loading } from './';

const About = () => {
  return (
    <div className="md:flex md:flex-row md:gap-[3rem] w-[90%] mx-auto lg:gap-[5rem] xl:gap-[8rem] relative">
      <Loading />
      <AboutNavbar />
      <AboutMain />
    </div>
  );
};
export default About;
