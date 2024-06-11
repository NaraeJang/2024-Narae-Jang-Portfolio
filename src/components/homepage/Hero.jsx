import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  // REVEALING ANIMATION
  useEffect(() => {
    // const tl = gsap.timeline({
    //   defaults: {
    //     ease: 'none',
    //   },
    //   scrollTrigger: {
    //     trigger: '#g-hero-container',
    //     toggleActions: 'restart none reverse none',
    //     pin: true,
    //     start: 'top top',
    //     end: '+=800',
    //     scrub: 1,
    //     markers: true,
    //   },
    // });
    // tl.from('#g-hero-container #g-hero-hidden-element', {
    //   clipPath: 'circle(0% at 50% 50%)',
    //   stagger: 1,
    // });
  }, []);

  return (
    <section
      id="g-hero-container"
      className="grid grid-cols-[1fr] grid-rows-[1fr] gap-0 items-center justify-center bg-yellow-500">
      <div className="h-svh grid-area-hero bg-green-500 text-black flex justify-center items-center w-full">
        <div className="max-w-[900px]">
          <h1>section 01</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium, illo!
          </p>
        </div>
      </div>

      <div
        id="g-hero-hidden-element"
        className="h-svh grid-area-hero bg-blue-500 clip-path-hero text-black flex justify-center items-center w-full">
        <div className="max-w-[900px]">
          <h1>the new section 02</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium, illo!
          </p>
        </div>
      </div>
    </section>
  );
};
export default Hero;
