import { Loading } from '../';
import TitleText from './TitleText';
import CandleImg01 from '../../assets/candle-images/01-Activate Your Tag.webp';
import CandleImg02 from '../../assets/candle-images/02-Review.webp';
import CandleImg03 from '../../assets/candle-images/03-Final.webp';
const Candle = () => {
  return (
    <main id="candle-img">
      <Loading />
      <section className="custom-container w-[90%]">
        <h3 className="dt-black text-3xl candle-title mb-10 mt-5 md:mb-[5rem] md:mt-10">
          Register Your Tag
        </h3>
        <div className="flex flex-col-reverse gap-12">
          <div className="img-container flex flex-col gap-12 md:flex-row md:gap-4 items-center justify-center">
            <img
              src={CandleImg01}
              alt="Activate Your Tag"
              className="w-full md:w-1/3 max-w-[22rem]"
            />
            <img
              src={CandleImg02}
              alt="Review the item"
              className="w-full md:w-1/3 max-w-[22rem]"
            />
            <img
              src={CandleImg03}
              alt="Final Page"
              className="w-full md:w-1/3 max-w-[22rem]"
            />
          </div>
          <div className="overview">
            <TitleText text="Overview" />
            <p className="max-w-screen-xl mx-auto">
              Ifly wanted to launch their new candle products and gain more
              reviews. Therefore, they decided to create a new mobile page with
              registration steps with the tag they provide when a new customer
              purchases the candle. My responsibility was to create a mobile
              landing page that the customer would be directed to through the QR
              code they provided with the candle.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-12 mt-12 mb-20">
          <div>
            <TitleText text="Goal" />
            <p className="max-w-screen-xl mx-auto">
              The goal was to gain more reviews of our candle product while
              making sure that the customers did not feel pressured to fill out
              the forms. I made sure that the brand identity of iFly was
              maintained throughout the pages.
            </p>
          </div>
          <div>
            <TitleText text="Solution" />
            <p className="max-w-screen-xl mx-auto">
              I applied the product colors of ifly and utilized their brand kit.
              By including small details of the CTA and planning the order of
              step, I made the review step to fell as if it's part of the steps
              to register the tag so that the customer does not feel any
              pressure or repulsion in registering.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Candle;
