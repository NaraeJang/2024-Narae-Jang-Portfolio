import { HomeAboutScroll, HomeAboutExperience } from './';

import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

import { infiniteScrollDesign, infiniteScrollDev } from '../../data/data';
gsap.registerPlugin(TextPlugin, ScrollTrigger);

const HomeAbout = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.scale-bg',
        toggleActions: 'restart reset restart reset',
        start: 'top 80%',
        markers: false,
      },
    });

    tl.to('.home_about--my_image', {
      x: 0,
      opacity: 1,
      ease: 'none',
      duration: 0.8,
    });

    tl.to('.home_me_title', {
      x: 0,
      opacity: 1,
      ease: 'none',
      duration: 0.4,
    });

    tl.to('.home_about-feature', {
      y: 0,
      opacity: 1,
      ease: 'none',
      stagger: 0.2,
      duration: 0.4,
    });
  }, []);

  return (
    <section
      id="about"
      className="scale-bg min-h-fit min-w-[100vw] grid place-items-center mt-[-8vh]  rounded-3xl overflow-hidden bg-bgcolor ">
      <div className="cc-change h-full w-full  py-[9vh]">
        <div className="home_about--me-section max-w-[1960px] mx-auto px-[2vw]">
          <div className="flex flex-col lg:flex-row gap-10 justify-between items-center">
            <div className="home_about--my_image shrink-0 rounded-full"></div>

            <div className="home_about--me w-[90%] mx-auto md:max-w-[80vw] lg:max-w-[60vw]">
              <h5 className="home_me_title dt-black text-3xl md:text-4xl lg:text-5xl mb-[2rem] text-primary-600">
                based in <br />
                Montreal, Canada.
              </h5>

              <div className="flex flex-col gap-[2rem]  md:grid  md:grid-cols-3 lg:grid-cols-3 ">
                <p className="home_about-feature poppins-medium text-left text-base w-full 2xl:max-w-[20vw]">
                  <span className="block poppins-regular text-sm text-primary-400">
                    (1)
                  </span>
                  Equipped with front-end development and in-house creative team
                  experience.
                </p>
                <p className="home_about-feature poppins-medium text-left text-base w-full 2xl:max-w-[20vw]">
                  <span className="block poppins-regular text-sm text-primary-400">
                    (2)
                  </span>
                  Owning end-to-end design process while managing high impacts
                  stakeholders.
                </p>
                <p className="home_about-feature poppins-medium text-left text-base w-full 2xl:max-w-[20vw]">
                  <span className="block poppins-regular text-sm text-primary-400">
                    (3)
                  </span>
                  Interested in using the science of design to create more
                  humane interface.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-[9vh] pb-2">
          <HomeAboutScroll
            list={infiniteScrollDesign}
            extraClass="fill_scroller"
            dataDirection="left"
            dataSpeed="slow"
            keyname="scroll-design"
          />
        </div>

        <HomeAboutScroll
          list={infiniteScrollDev}
          extraClass="stroke_scroller"
          dataDirection="right"
          dataSpeed="slow"
          keyname="scroll-dev"
        />

        <HomeAboutExperience />
      </div>
    </section>
  );
};
export default HomeAbout;
