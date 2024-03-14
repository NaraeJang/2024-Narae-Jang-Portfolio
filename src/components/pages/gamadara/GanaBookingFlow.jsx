import { GanaTitleText } from './';
import bookingFlowImg01 from '../../../assets/ganadara-assets/BookingFlow01.webp';
import bookingFlowImg02 from '../../../assets/ganadara-assets/BookingFlow02.webp';
import bookingFlowImg03 from '../../../assets/ganadara-assets/BookingFlow03.webp';
import bookingFlowImg04 from '../../../assets/ganadara-assets/BookingFlow04.webp';
import bookingFlowImg05 from '../../../assets/ganadara-assets/BookingFlow05.webp';

const GanaBookingFlow = () => {
  return (
    <section id="gana-booking-flow" className="bg-[#f5f5f5]">
      <div className="custom-container text-left w-[90%] ">
        <GanaTitleText text="Booking flow" />

        <div className="flex flex-col gap-8 md:grid md:grid-cols-6 md:gap-4 md:gap-y-8 lg:flex lg:flex-row lg:flex-wrap lg:gap-8 lg:justify-between lg:max-w-[1370px] lg:ml-auto lg:mr-auto">
          <div className="flex flex-col gap-5 md:col-span-2 lg:col-span-3 ">
            <img
              src={bookingFlowImg01}
              alt="gana booking flow img"
              className="h-[26rem] mx-auto md:mr-auto md:ml-0"
            />
            <p className="lg:max-w-[13rem]">
              On the home page, a user can{' '}
              <strong>select a date, time and number of their group.</strong>
            </p>
          </div>

          <div className="flex flex-col gap-5 md:col-span-4 lg:col-span-6 ">
            <div className="flex flex-col gap-5 md:flex-row md:gap-2 md:justify-between">
              <img
                src={bookingFlowImg02}
                alt="gana booking flow img"
                className="h-[26rem] mx-auto md:mr-auto md:ml-0"
              />
              <img
                src={bookingFlowImg03}
                alt="gana booking flow img"
                className="h-[26rem] mx-auto md:mr-auto md:ml-0"
              />
            </div>
            <p className="md:pl-4 lg:max-w-[25rem]">
              For the <strong>new user,</strong> the app will require the
              <strong>user&apos;s phone number to verify.</strong> The user also
              can skip if they don&apos;t want to continue with their phone
              number. However, for The user{' '}
              <strong>
                who already did this verification step, the app won't ask this
                step again.
              </strong>
            </p>
          </div>

          <div className="flex flex-col gap-5 md:col-span-2 lg:col-span-3 ">
            <img
              src={bookingFlowImg04}
              alt="gana booking flow img"
              className="h-[26rem] mx-auto md:mr-auto md:ml-0"
            />
            <p className="lg:max-w-[13rem]">
              Before the user makes a reservation, the app will{' '}
              <strong>show the confirmation page to the user</strong> to check
              if all information is correct.
            </p>
          </div>

          <div className="flex flex-col gap-5 md:col-span-4 ">
            <img
              src={bookingFlowImg05}
              alt="gana booking flow img"
              className="h-[26rem] mx-auto md:mr-auto md:ml-0"
            />
            <p className="md:max-w-[20rem] lg:max-w-[13rem]">
              Once the user completes the booking, the app{' '}
              <strong>
                offers options to the user for their next journey.
              </strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default GanaBookingFlow;
