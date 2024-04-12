import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

const SecondHeader = () => {
  useEffect(() => {
    const splitTypes = document.querySelectorAll('.reveal-type');
    const tl = gsap.timeline();

    splitTypes.forEach((word, i) => {
      const text = new SplitType(word, {
        types: 'words',
      });

      gsap.from(text.words, {
        scrollTrigger: {
          trigger: word,
          start: 'top 38%',
          end: 'bottom 35%',
          scrub: true,
        },
        opacity: 0.2,
        stagger: 0.1,
      });

      // gsap.from(text.words, {
      //   yPercent: 100,
      //   delay: 0.5,
      //   opacity: 0,
      //   duration: 0.65,
      //   stagger: 0.1,
      //   ease: 'back',
      // });
    });

    // gsap.to('.reveal-content', {
    //   x: 0,
    //   opacity: 1,
    //   delay: 1.5,
    //   duration: 0.5,
    // });
  }, []);

  return (
    <>
      <section id="header">
        <div className="intro-container max-w-[2560px] mx-auto">
          <h1 className="opacity-0 invisible hidden">
            From defining brand identities to refining user interfaces, my
            expertise encompasses branding, logo design, publication design,
            digital marketing, UI/UX, and development, forging new paths into
            the digital landscape.
          </h1>

          <h5 className="poppins-medium reveal-type">
            From defining brand identities to refining user interfaces. My
            expertise encompasses branding, logo design, publication design,
            digital marketing, UI/UX, and development, forging new paths into
            the digital landscape.
          </h5>
        </div>
      </section>
    </>
  );
};
export default SecondHeader;
