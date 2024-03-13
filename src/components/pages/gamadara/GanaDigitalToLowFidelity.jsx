import { GanaTitleText } from './';
import digitalImg01 from '../../../assets/ganadara-assets/Digital-wireframes01.webp';
import digitalImg02 from '../../../assets/ganadara-assets/Digital-wireframes02.webp';
import lowFidelity from '../../../assets/ganadara-assets/lowfi-proto.webp';

const GanaDigitalToLowFidelity = () => {
  return (
    <section id="gana-digital-to-lowfidelity">
      <div className="custom-container text-left w-[90%] flex flex-col gap-[10rem] 2xl:max-w-[1920px] 2xl:mx-auto">
        <div>
          <GanaTitleText text="Usability study: findings" />
          <p className="mb-10">
            After sketching paper wireframes I reviewed all the structures, if
            it needs improvement. In this step, I made sure every flow goes well
            without any errors before moving on to the visuals.
          </p>

          <div className="w-full flex flex-col lg:flex-row gap-10">
            <img
              src={digitalImg01}
              alt="Ganadara Digital Wireframe img"
              className="w-auto md:w-4/6 lg:w-2/5 xl:max-w-[50rem] mt-6 sm:mx-auto"
            />
            <img
              src={digitalImg02}
              alt="Ganadara Digital Wireframe img"
              className="w-auto md:w-4/6 lg:w-2/5 xl:max-w-[50rem] mt-6 sm:mx-auto"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-full gap-4 md:gap-10 lg:gap-20">
          <div className="md:w-[40%]">
            <GanaTitleText text="Low-fidelity prototype" />
            <p className="mb-4 lg:mb-8">
              Using the completed set of digital wireframes, I created a
              low-fidelity prototype. The primary user flow I connected was
              reserve a table and confirm the reservation information, so the
              prototype could be used in a usability study.
            </p>
            <a
              href="https://www.figma.com/proto/5WGfdjgHzFlPUpiZRGUSDF/Bar-Ganadara-booking-app?page-id=89%3A491&type=design&node-id=89-493&viewport=254%2C381%2C0.21&t=wNtk7ZqMxqF2sYbe-1&scaling=scale-down&starting-point-node-id=89%3A569&mode=design"
              target="_blank"
              className="btn btn-gana">
              View Lo-fi prototype
            </a>
          </div>
          <img
            data-enlargable
            src={lowFidelity}
            alt="Ganadara low fidelity img"
            className="md:w-[60%] md:max-w-[60rem] mx-auto mt-6"
          />
        </div>
      </div>
    </section>
  );
};
export default GanaDigitalToLowFidelity;
