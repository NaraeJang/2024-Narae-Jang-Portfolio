import { useLocation } from 'react-router-dom';
import { Faq, Header, Projects, Loading, SecondHeader, ThirdHeader } from './';
import { NewProjects } from './newProject';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Hero, HomeAbout, ProjectTitle, ProjectSection } from './newHompage';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  // useEffect(() => {
  //   const t1 = gsap.timeline();

  //   t1.fromTo(
  //     '.intro-container',
  //     {
  //       opacity: 0,
  //       y: -100,
  //     },
  //     {
  //       duration: 1,
  //       opacity: 1,
  //       y: 0,
  //     }
  //   );
  // }, []);

  return (
    <main className="relative" id="container">
      {/* <Loading />
      <SecondHeader /> */}
      {/* <ThirdHeader /> */}
      {/* <div className="overflow-hidden">
        <Projects />
   
      </div> */}

      <div className="bg-primary-600">
        <Hero />
        <HomeAbout />
        <ProjectTitle />
        <Projects />
        {/* <NewProjects /> */}
        <Faq />
      </div>
    </main>
  );
};
export default Home;
