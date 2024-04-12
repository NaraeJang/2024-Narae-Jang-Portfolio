import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useEffect(() => {
    const bganimation = gsap.utils.toArray('.scale-bg');

    bganimation.forEach((bgani, i) => {
      gsap.set(bgani, { scaleX: 0.95 }); // Set initial scaleX to 0

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

    gsap.to('.cc-change', {
      scrollTrigger: {
        trigger: '.cc-change',
        start: 'top 85%',
        end: 'top 75%',
        scrub: true,
        markers: true,
      },
      duration: 1,

      backgroundColor: '#FFA500',
      ease: 'none',
    });
  }, []);

  return (
    <>
      <section id="hero" className="min-h-[100vh]">
        <div className="hero-title">
          <h5 className="dt-black reveal-type">
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
