import { Faq, Projects } from './';
import { NewProjects } from './newProject';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Hero, HomeAbout, ProjectTitle, ProjectSection } from './newHompage';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  return (
    <main className="relative" id="container">
      <div className="bg-primary-600">
        <Hero />
        <HomeAbout />
        <ProjectTitle />
        {/* <Projects /> */}
        <NewProjects />
        <Faq />
      </div>
    </main>
  );
};
export default Home;
