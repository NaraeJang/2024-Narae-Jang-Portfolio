import { GanaTitleText } from './';
import highFidelity from '../../../assets/ganadara-assets/hifi-Proto.webp';

const GanaHighFidelity = () => {
  return (
    <section id="gana-hight-fidelity">
      <div className="custom-container text-left w-[90%] flex flex-col gap-[10rem]">
        <div className="flex flex-col md:flex-row w-full gap-4 md:gap-10 lg:gap-20">
          <div className="md:w-[40%]">
            <GanaTitleText text="High-fidelity prototype" />
            <p className="mb-4 lg:mb-8">
              The final high-fidelity prototype presented cleaner user flows for
              taking a reservation, viewing menu and confirming detail
              information. It also met user needs for reschedule/cancel table
              option.
            </p>
            <a
              href="https://www.figma.com/proto/5WGfdjgHzFlPUpiZRGUSDF/Bar-Ganadara-booking-app?page-id=300%3A2630&type=design&node-id=325-4319&viewport=139%2C308%2C0.13&t=Tr2pjTHYjDI4tXkw-1&scaling=scale-down&starting-point-node-id=300%3A2674&mode=design"
              target="_blank"
              className="btn btn-gana">
              View High-fi prototype
            </a>
          </div>
          <img
            data-enlargable
            src={highFidelity}
            alt="Ganadara high fidelity img"
            className="md:w-[60%] md:max-w-[60rem] mx-auto mt-6"
          />
        </div>
      </div>
    </section>
  );
};
export default GanaHighFidelity;
