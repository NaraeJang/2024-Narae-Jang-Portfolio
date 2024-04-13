import ArtWork4Img from '../../assets/artwork/artwork4.webp';
import ArtWork3Img from '../../assets/artwork/artwork3.webp';
import CandleImg from '../../assets/candle-images/CandleHero.webp';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Items = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.project_title--container',
        toggleActions: 'play none none reverse',
        markers: true,
        scrub: true,
      },
      ease: 'power4.out', // Use GSAP's built-in easing
    });

    tl.to('.project_title--img', {
      stagger: 0.2,
      y: -700,
      duration: 1.2, // Set the duration here
    });
  }, []);
  return (
    <section id="project-gallery" className="h-[100vh] relative">
      <div className="absolute h-[200vh] w-[100vw]">
        <h5 className="project_title">Projects</h5>
      </div>

      <div className="project_title--container_line">
        <div className="project_title--container_line--inner">
          <div className="project_title--line"></div>
          <div className="project_title--line"></div>
          <div className="project_title--line"></div>
        </div>
      </div>

      <div className="project_title--container h-[100vh] absolute">
        <img
          src={ArtWork4Img}
          alt="project cover photo"
          className="project_title--img"
        />
        <img
          src={ArtWork3Img}
          alt="project cover photo"
          className="project_title--img"
        />
        <img
          src={CandleImg}
          alt="project cover photo"
          className="project_title--img"
        />
        <img
          src={ArtWork4Img}
          alt="project cover photo"
          className="project_title--img"
        />
        <img
          src={ArtWork4Img}
          alt="project cover photo"
          className="project_title--img"
        />
        <img
          src={ArtWork4Img}
          alt="project cover photo"
          className="project_title--img"
        />
        <img
          src={ArtWork4Img}
          alt="project cover photo"
          className="project_title--img"
        />
        <img
          src={ArtWork4Img}
          alt="project cover photo"
          className="project_title--img"
        />
        <img
          src={ArtWork4Img}
          alt="project cover photo"
          className="project_title--img"
        />
      </div>
    </section>
  );
};
export default Items;
