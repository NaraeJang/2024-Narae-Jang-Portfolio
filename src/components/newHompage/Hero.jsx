import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useEffect(() => {
    // scale animation in about section
    const bganimation = gsap.utils.toArray('.scale-bg');

    bganimation.forEach((bgani, i) => {
      gsap.set(bgani, { scaleX: 0.9 }); // Set initial scaleX to 0

      gsap.to(bgani, {
        scaleX: 1,
        scrollTrigger: {
          trigger: bgani,
          start: 'top 90%',
          end: 'top 80%',
          scrub: true,
          toggleActions: 'play play play reverse',
          markers: false,
        },
      });
    });

    // // change about section color
    // gsap.to('.cc-change', {
    //   scrollTrigger: {
    //     trigger: '.cc-change',
    //     start: 'top 85%',
    //     end: 'top 75%',
    //     scrub: true,
    //     markers: false,
    //   },
    //   duration: 1,
    //   opacity: 1,
    //   backgroundColor: '#fcf6ec',
    //   ease: 'none',
    // });

    // hero text reveal animation
    const splitTypes = document.querySelectorAll('.text-reveal');
    const tl = gsap.timeline();

    splitTypes.forEach((word, i) => {
      const text = new SplitType(word, {
        types: 'words',
      });

      gsap.from(text.words, {
        scrollTrigger: {
          trigger: text.words,
          toggleActions: 'restart none restart none',
        },
        yPercent: 100,
        duration: 0.5,
        opacity: 0,
        stagger: 0.1,
      });
    });

    gsap.set('.hero-title p', { x: -50, opacity: 0 });

    gsap.to('.hero-title p', {
      scrollTrigger: {
        trigger: '.hero-title p',
        toggleActions: 'restart none restart none',
      },
      delay: 1.5,
      x: 0,
      opacity: 1,
      duration: 1,
    });

    const textSplitTypes = document.querySelectorAll('.circle-text');

    textSplitTypes.forEach((char, i) => {
      const text = new SplitType(char, {
        types: 'chars',
      });

      // Wrap each word in a span tag
      text.chars.forEach((wordDiv, i) => {
        wordDiv.innerHTML = `<span style="transform:rotate(${i * 10.3}deg)">${
          wordDiv.textContent
        }</span>`;
      });
    });
  }, []);

  return (
    <>
      <section
        id="hero"
        className="min-h-[100vh] min-h-[100svh] overflow-hidden">
        <div className="hero-title">
          <h5 className="dt-black text-reveal">
            From defining brand identities to refining user interfaces.
          </h5>
          <p>
            My expertise encompasses branding, logo design, publication design,
            digital marketing, UI/UX, and development, forging new paths into
            the digital landscape.
          </p>
        </div>
      </section>
    </>
  );
};
export default Hero;
