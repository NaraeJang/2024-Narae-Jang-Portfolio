import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

const SecondHeader = () => {
  useEffect(() => {
    const splitTypes = document.querySelectorAll('.reveal-type');

    splitTypes.forEach((char, i) => {
      const text = new SplitType(char, {
        types: 'chars',
      });

      gsap.from(text.chars, {
        scrollTrigger: {
          trigger: char,
          start: 'top 38%',
          end: 'bottom 35%',
          scrub: true,
          markers: false,
        },
        opacity: 0.2,
        stagger: 0.1,
      });
    });
  }, []);

  return (
    <section id="header">
      <div className="intro-container">
        <h1 className="opacity-0 invisible hidden">
          From defining brand identities to refining user interfaces, my
          expertise encompasses branding, logo design, publication design,
          digital marketing, UI/UX, and development, forging new paths into the
          digital landscape.
        </h1>

        <h5 className="poppins-medium reveal-type">
          From defining brand identities to refining user interfaces, my
          expertise encompasses branding, logo design, publication design,
          digital marketing, UI/UX, and development, forging new paths into the
          digital landscape.
        </h5>
      </div>
    </section>
  );
};
export default SecondHeader;
