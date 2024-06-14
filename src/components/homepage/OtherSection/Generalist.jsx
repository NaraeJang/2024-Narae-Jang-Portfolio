import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useState, useEffect, useRef } from 'react';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

const Generalist = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const generalistSectionRef = useRef(null);

  useEffect(() => {
    const splitTypes = document.querySelectorAll('.reveal-type');

    splitTypes.forEach((words) => {
      const text = new SplitType(words, { types: 'words' });

      gsap.from(text.words, {
        scrollTrigger: {
          trigger: words,
          start: 'top bottom-=30%',
          end: 'top top+=25%',
          scrub: 1,
          markers: false,
        },
        opacity: 0.2,
        stagger: 0.1,
      });
    });

    gsap.to('#g-journey-section', {
      scrollTrigger: {
        trigger: generalistSectionRef.current,
        scrub: 1,
        start: 'top bottom-=15%',
        end: 'top bottom-=20%',
        markers: false,
      },
      opacity: 0,
    });

    gsap.to('.g-bg-manipulator', {
      scrollTrigger: {
        trigger: generalistSectionRef.current,
        toggleActions: 'restart none none reset',
        scrub: 1,
        start: 'top bottom-=20%',
        end: 'top bottom-=30%',
        markers: false,
      },
      backgroundColor: '#ffffff',
    });

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section
      ref={generalistSectionRef}
      id="g-generalist-section"
      className="h-[80vh] lg:h-max my-28 md:my-40 lg:mt-56 lg:mb-50 grid place-items-center px-[4%] w-svw ">
      <div className="w-full ">
        {windowWidth < 448 ? (
          <h1 className="text-left reveal-type text-neutral-900 font-title text-[2.5rem] leading-normal">
            I’m a{' '}
            <span className="gradient-word-generalist">
              passionate generalist
            </span>{' '}
            who enjoys the variety of jobs that I get to do. which isn’t
            categorical, is situational. I can be graphic designer, UI designer,
            and front-end developer.
          </h1>
        ) : (
          <h1 className="text-center reveal-type text-neutral-800 font-title text-4xl md:text-5xl lg:text-6xl leading-normal md:leading-normal lg:leading-normal lg:tracking-tight">
            I’m a{' '}
            <span className="gradient-word-generalist transition-all">
              passionate generalist
            </span>
            <br /> who enjoys the variety of jobs
            {windowWidth > 700 && windowWidth < 1330 ? <br /> : ' '}
            that I get to do.
            <br /> which isn’t categorical, is situational.
            <br /> I can be graphic designer, UI designer,
            <br /> and front-end developer.
          </h1>
        )}
      </div>
    </section>
  );
};

export default Generalist;
