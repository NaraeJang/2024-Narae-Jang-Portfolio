import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { useEffect } from 'react';
import NaraeImg from '../../assets/narae.webp';
gsap.registerPlugin(TextPlugin);

const HomeAbout = () => {
  useEffect(() => {}, []);

  return (
    <section className="scale-bg min-h-[120vh] min-w-[100vw] grid place-items-center mt-[-8vh] rounded-3xl overflow-hidden bg-bgcolor ">
      <div className="cc-change h-full w-full  pt-[9vh] ">
        <div className="max-w-[1960px] mx-auto px-[2vw]">
          <div className="flex flex-col lg:flex-row gap-10 justify-between items-center">
            <div className="home_about--my_image shrink-0 rounded-full"></div>

            <div className="home_about--me w-[90%] mx-auto md:max-w-[80vw] lg:max-w-[60vw]">
              <h5 className="dt-black text-3xl md:text-4xl lg:text-5xl mb-[2rem] text-primary-600">
                based in <br />
                Montreal, Canada.
              </h5>

              <div className="flex flex-col gap-[2rem]  md:grid  md:grid-cols-3 lg:grid-cols-3 ">
                <p className="poppins-medium text-left text-base w-full 2xl:max-w-[20vw]">
                  <span className="block poppins-regular text-sm text-primary-400">
                    (1)
                  </span>
                  Equipped with computer science and in-house creative team
                  experience.
                </p>
                <p className="poppins-medium text-left text-base w-full 2xl:max-w-[20vw]">
                  <span className="block poppins-regular text-sm text-primary-400">
                    (2)
                  </span>
                  Owning end-to-end design process while managing high impacts
                  stakeholders.
                </p>
                <p className="poppins-medium text-left text-base w-full 2xl:max-w-[20vw]">
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

        <div className="home_about--experience">not</div>
      </div>
    </section>
  );
};
export default HomeAbout;
