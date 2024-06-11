import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  // REVEALING ANIMATION
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: {
        ease: 'none',
      },
      scrollTrigger: {
        trigger: '#g-pin',
        toggleActions: 'restart none reverse reset',
        start: 'top bottom-=25%',
        end: 'bottom top+=25%',
        scrub: 1,
        markers: true,
      },
    });

    tl.to('#g-hero-hidden-element', {
      clipPath: 'circle(100% at 50% 50%)',
      stagger: 1,
    });
  }, []);

  return (
    <section id="g-hero-container" className="relative h-[200svh]">
      <div className="g-element-container absolute top-0 left-0 h-[200svh] w-full">
        <div className="sticky top-0 left-0 h-svh flex justify-center items-center w-full">
          <div className="max-w-3xl text-center">
            <h1 className="max-w-xl mx-auto font-title uppercase text-[5rem] text-black leading-tight">
              Transforming ideas into reality
            </h1>
            <p className="text-lg leading-relaxed">
              My expertise encompasses branding, logo design, publication
              design, digital marketing, UI/UX, and development, forging new
              paths into the digital landscape.
            </p>
          </div>
        </div>

        <div id="g-pin" className="z-20">
          {/* <p>element</p> */}
        </div>
      </div>

      <div
        id="g-hero-hidden-element"
        className="sticky top-0 left-0 z-10 h-svh clip-path-hero flex justify-center items-center w-full bg-green-500 text-white">
        <div className="max-w-3xl text-center">
          <h1 className="max-w-xl mx-auto font-title uppercase text-[5rem] text-white leading-tight">
            Transforming ideas into reality
          </h1>
          <p className="text-lg leading-relaxed">
            My expertise encompasses branding, logo design, publication design,
            digital marketing, UI/UX, and development, forging new paths into
            the digital landscape.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Hero;
