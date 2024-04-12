import { useLocation } from 'react-router-dom';
import { Faq, Header, Projects, Loading, SecondHeader, ThirdHeader } from './';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useEffect(() => {
    const t1 = gsap.timeline();
    const tlTwo = gsap.timeline();

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

    tlTwo.from('#home-about', {});

    ScrollTrigger.create({
      animation: tlTwo,
      start: 'top top',
      end: '+=4000',
      scrub: true,
      pin: true,
      anticipatePin: 1,
    });
  }, []);

  return (
    <main className="relative">
      {/* <Loading /> */}
      <SecondHeader />
      {/* <ThirdHeader /> */}
      <div className="overflow-hidden">
        <Projects />
        <Faq />
      </div>
    </main>
  );
};
export default Home;
