// import Img01 from '../../assets/project-title-img/ProjectTitleImg.webp';
// import Img02 from '../../assets/project-title-img/ProjectTitleImg-1.webp';
// import Img03 from '../../assets/project-title-img/ProjectTitleImg-2.webp';
// import Img04 from '../../assets/project-title-img/ProjectTitleImg-3.webp';
// import Img05 from '../../assets/project-title-img/ProjectTitleImg-4.webp';
// import Img06 from '../../assets/project-title-img/ProjectTitleImg-5.webp';
// import Img07 from '../../assets/project-title-img/ProjectTitleImg-6.webp';
// import Img08 from '../../assets/project-title-img/ProjectTitleImg-7.webp';
// import Img09 from '../../assets/project-title-img/ProjectTitleImg-8.webp';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Items = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#project-gallery',
        toggleActions: 'restart none none reverse',
        markers: false,
        scrub: true,
      },
      ease: 'power4.out', // Use GSAP's built-in easing
    });

    tl.to('.project_title--img', {
      stagger: 0.2,
      y: -600,
      duration: 1.2, // Set the duration here
    });
  }, []);
  return (
    <section id="project-gallery" className="h-[100vh] relative mt-[-20vh]">
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

      <div className="project_title--container h-[150vh] absolute">
        <div className="project_title--img"></div>
        <div className="project_title--img"></div>
        <div className="project_title--img"></div>
        <div className="project_title--img"></div>
        <div className="project_title--img"></div>
        <div className="project_title--img"></div>
        <div className="project_title--img"></div>
        <div className="project_title--img"></div>
        <div className="project_title--img"></div>
      </div>
    </section>
  );
};
export default Items;

//  <img
//           src={Img06}
//           alt="project cover photo"
//           className="project_title--img"
//         />
//         <img
//           src={Img07}
//           alt="project cover photo"
//           className="project_title--img"
//         />
//         <img
//           src={Img08}
//           alt="project cover photo"
//           className="project_title--img"
//         />
//         <img
//           src={Img04}
//           alt="project cover photo"
//           className="project_title--img"
//         />
//         <img
//           src={Img05}
//           alt="project cover photo"
//           className="project_title--img"
//         />
//         <img
//           src={Img09}
//           alt="project cover photo"
//           className="project_title--img"
//         />
//         <img
//           src={Img01}
//           alt="project cover photo"
//           className="project_title--img"
//         />
//         <img
//           src={Img02}
//           alt="project cover photo"
//           className="project_title--img"
//         />
//         <img
//           src={Img03}
//           alt="project cover photo"
//           className="project_title--img"
//         />
