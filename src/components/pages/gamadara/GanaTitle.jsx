import GanaTitleImg from '../../../assets/ganadara-assets/title.webp';
import { GanaTitleText } from './';

const GanaTitle = () => {
  return (
    <section className="gana py-[6rem] lg:py-[10rem] w-[90%] mx-auto flex flex-col text-left">
      <div className="flex flex-row gap-10">
        <div className="flex flex-col gap-10 basic-3/5 md:w-[65%]">
          <div>
            <span className="poppins-medium">Bar Ganadara</span>
            <h3 className="dt-black text-3xl">Booking App</h3>
            <p className="mt-[1.75rem]">
              Bar Ganadara booking application is a specified booking app only
              for Bar Ganadara. The app helps to book a table easily and
              immediately in advance. Giving users access to select a wide range
              of time&date options for their reservation if it needs while
              giving users choices by showing estimated walk-in wait times in
              real. The app allows users to get any necessary information about
              the bar before going to the bar in person.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <h5 className="poppins-semibold leading-relaxed text-lg">Role</h5>
              <p>Sole UX/UI designer from conception to delivery.</p>
            </div>
            <div>
              <h5 className="poppins-semibold leading-relaxed text-lg">
                Responsibilities
              </h5>
              <p>
                Conducting interviews, paper and digital wireframing, low and
                high-fidelity prototyping, conducting usability studies,
                accounting for accessibility, and iterating on designs.
              </p>
            </div>
            <div>
              <h5 className="poppins-semibold leading-relaxed text-lg">
                Duration
              </h5>
              <p>2 months</p>
            </div>
          </div>
        </div>

        <div className="opacity-0 invisible hidden md:block md:opacity-100 md:visible mx-auto">
          <img src={GanaTitleImg} className="max-w-[15rem] " />
        </div>
      </div>

      <hr className="my-20" />

      <div className="flex flex-col md:flex-row gap-8 md:gap-[4.5rem] w-full">
        <div className="md:w-1/2">
          <GanaTitleText text="The Problem" />
          <p>
            It&apos;s one of the famous bars in Montreal. Because of that, If
            customers walk into the bar without reservation, it often takes more
            than 1 hour to dine. Customers can book a table if they call, but
            when the bar is in peak time, the call is not available. It often
            causes a problem on both sides for employees and customers.
          </p>
        </div>
        <div className="md:w-1/2">
          <GanaTitleText text="The goals" />
          <ul className="list-decimal list-outside pl-[5%]">
            <li>
              Minimize reservation steps for users while keeping products.
            </li>
            <li>Design a cohesive interface for users.</li>
            <li>Devise hierarchy depends on priorities.</li>
            <li>Match the same mood between the bar and the app.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default GanaTitle;
