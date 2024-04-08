import { useLocation } from 'react-router-dom';
import { Faq, Header, Projects, Loading, SecondHeader } from './';
import { useEffect } from 'react';
import { gsap } from 'gsap';

const Home = () => {
  useEffect(() => {
    const t1 = gsap.timeline();

    t1.fromTo(
      '.intro-container',
      {
        opacity: 0,
        y: -100,
      },
      {
        duration: 1,
        opacity: 1,
        y: 0,
      }
    );
  }, []);

  return (
    <main className="relative overflow-hidden">
      {/* <Loading /> */}
      <SecondHeader />
      <Projects />
      <Faq />
    </main>
  );
};
export default Home;
