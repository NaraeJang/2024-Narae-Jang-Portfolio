import { CandleTitleText } from '.';
import CandleWireframe01 from '../../../assets/candle-images/candle-wireframes-01.webp';
import CandleWireframe02 from '../../../assets/candle-images/candle-wireframes-02.webp';
import CandleWireframe03 from '../../../assets/candle-images/candle-wireframes-03.webp';
import CandleFinal01 from '../../../assets/candle-images/candle-final-01.webp';
import CandleFinal02 from '../../../assets/candle-images/candle-final-02.webp';
import CandleFinal03 from '../../../assets/candle-images/candle-final-03.webp';

const CandleWireframes = () => {
  return (
    <>
      <section className="custom-container w-[90%]">
        <p className="poppins-medium text-[#737373]">User Flow</p>
        <CandleTitleText text="Wireframing" />
        <p className="mb-10">
          I conducted the usability testing. Findings from the usability testing
          helped guide the designs from the first wireframes to the second ones.
          The usability testing used the first high-fidelity wireframes and
          revealed what aspects of the second wireframes needed refining.
        </p>
        <div className=" flex flex-col gap-20">
          <div className="flex flex-col-reverse gap-8 lg:gap-20 lg:flex-row 2xl:max-w-[1920px] 2xl:mx-auto justify-center items-center">
            <p className="max-w-[30rem]">
              Early designs allowed users to fill in the form. However, there
              wasn’t any explanation about the tag. Because of that, the User
              couldn’t understand what the tag is for and how to use it.
              Therefore, we included the explanation so that users know what the
              tag is for and how to use it.
            </p>

            <img
              src={CandleWireframe01}
              alt="Candle Registration Wireframe img"
              className="w-full max-w-[33rem] mt-4"
            />
          </div>
          <div className="flex flex-col-reverse gap-8 lg:gap-20 lg:flex-row 2xl:max-w-[1920px] 2xl:mx-auto justify-center items-center">
            <p className="max-w-[30rem]">
              At the beginning of this project, IFLY didn’t want to categorize
              candle products. However, we found it frustrating when collecting
              and analysing data because of the decision we made. Therefore, I
              added an input section which has a dropdown menu in the form so
              that we can organize and display reviews depending on the candle
              products consumers purchased.
            </p>

            <img
              src={CandleWireframe02}
              alt="Candle Registration Wireframe img"
              className="w-full max-w-[33rem] mt-4"
            />
          </div>
          <div className="flex flex-col-reverse gap-8 lg:gap-20 lg:flex-row 2xl:max-w-[1920px] 2xl:mx-auto justify-center items-center">
            <p className="max-w-[30rem]">
              We found unnecessary information existed after the test. To focus
              on the principal information, we eliminated the video section
              which gave the page a simple and clean look.
            </p>

            <img
              src={CandleWireframe03}
              alt="Candle Registration Wireframe img"
              className="w-full max-w-[33rem] mt-4"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#F3F8FF]">
        <div className="custom-container w-[90%]">
          <CandleTitleText text="User Interface Design" />

          <div className="flex flex-col items-center md:flex-row gap-4 justify-center mt-4 mb-20">
            <img
              src={CandleFinal01}
              alt="Candle Final Design img"
              className="w-full md:w-[30%] max-w-[20rem]"
            />
            <img
              src={CandleFinal02}
              alt="Candle Final Design img"
              className="w-full md:w-[30%] max-w-[20rem]"
            />
            <img
              src={CandleFinal03}
              alt="Candle Final Design img"
              className="w-full md:w-[30%] max-w-[20rem]"
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default CandleWireframes;
