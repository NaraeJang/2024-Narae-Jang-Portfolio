import { CandleTitleText } from '.';
import CandleUserFlow01 from '../../../assets/candle-images/candle-user-flow-01.webp';
import CandleUserFlow02 from '../../../assets/candle-images/candle-user-flow-02.webp';
import CandleUserFlow03 from '../../../assets/candle-images/candle-user-flow-03.webp';

const CandleUserFlow = () => {
  return (
    <section className="custom-container w-[90%] max-w-[2560px]">
      <p className="poppins-medium text-[#737373]">User Flow</p>
      <CandleTitleText text="Making a smooth flow to “leave a review” while the consumer is registering their tag." />

      <div className="flex flex-col gap-8 text-center md:flex-row md:flex-wrap md:text-left md:justify-center lg:justify-between max-w-[56rem] mx-auto mt-10">
        <div className="flex flex-col items-center gap-4   md:items-start">
          <img
            src={CandleUserFlow01}
            alt="Candle User Flow 01"
            className="max-w-[8.75rem]"
          />
          <div>
            <p className="poppins-medium">Step 1</p>
            <p className="max-w-[10rem]">
              We offer a form to register the user's tag.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4  md:items-start">
          <img
            src={CandleUserFlow02}
            alt="Candle User Flow 02"
            className="max-w-[8.75rem]"
          />

          <div>
            <p className="poppins-medium">Step 2</p>
            <p className="max-w-[14rem]">
              The purpose of putting the review form in the middle of the step
              is so that the user wouldn’t feel pressured to complete the form
              and can experience a smooth transition from the registration form.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4   md:items-start">
          <img
            src={CandleUserFlow03}
            alt="Candle User Flow 03"
            className="max-w-[8.75rem]"
          />

          <div>
            <p className="poppins-medium">Step 3</p>
            <p className="max-w-[14rem]">
              The user will be guided to track their items by clicking CTA
              buttons to go to App Store or Google Play. <br />
              <br /> If the user has any questions about the product, the user
              can go to FAQ page by clicking FAQ CTA.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CandleUserFlow;
