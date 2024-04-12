import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const ThirdHeader = () => {
  useEffect(() => {
    if (
      !CSS.supports('animation-timeline: scroll()') &&
      matchMedia('(prefers-reduced-motion: no-preference)')
    ) {
      const scrub = 0.5;
      const trigger = 'main';

      gsap.set('#new-header > #new-header-span', {
        '--progress': 0,
        backgroundPositionX:
          'calc(-200vmax + (var(--progress) * 200vmax)), calc(-200vmax + (var(--progress) * 200vmax)), 0',
        color: 'transparent',
      });
      gsap.to('#new-header > #new-header-span', {
        '--progress': 1,
        scrollTrigger: {
          trigger,
          scrub,
          start: 'top top',
          end: 'top top-=75%',
        },
      });
      gsap.to('#new-header > s#new-header-span', {
        color: 'white',
        scrollTrigger: {
          trigger,
          scrub,
          start: 'top top-=75%',
          end: 'bottom bottom',
        },
      });
    }
  }, []);
  return (
    <div className="controls">
      <section className="third-header-container">
        <p id="new-header">
          <span contenteditable={true} className="new-header-span">
            Responsive Animated Text Reveals with CSS Scroll-Driven Animations.
          </span>
        </p>
      </section>
    </div>
  );
};
export default ThirdHeader;
