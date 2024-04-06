import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
import SplitType from 'split-type';
import { SmoothScroll } from './';

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
          start: 'top 60%',
          end: 'bottom 30%',
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
        <h1 className="poppins-medium reveal-type">
          I craft seamless interfaces that bridge the gap between design and
          technology, enhancing user experiences and driving digital innovation.
        </h1>
      </div>
    </section>
  );
};
export default SecondHeader;
