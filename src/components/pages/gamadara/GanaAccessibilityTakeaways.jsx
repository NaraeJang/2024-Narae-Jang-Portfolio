import { GanaTitleText } from './';
import accessibility01 from '../../../assets/ganadara-assets/Accessibility01.webp';
import accessibility02 from '../../../assets/ganadara-assets/Accessibility02.webp';
import accessibility03 from '../../../assets/ganadara-assets/Accessibility03.webp';
const GanaAccessibilityTakeaways = () => {
  return (
    <section id="gana-accessibility-takeaways " className="mb-[10rem]">
      <div className="custom-container w-[90%] text-left">
        <GanaTitleText text="Accessibility considerations" />
        <div className="flex flex-col gap-5 items-center justify-center md:grid md:grid-cols-2 lg:grid-cols-3  mx-auto mt-12">
          <img
            src={accessibility01}
            alt="Ganadara accessibility01 img"
            className="w-full max-w-[24rem] justify-self-center"
          />
          <img
            src={accessibility02}
            alt="Ganadara accessibility02 img"
            className=" w-full max-w-[24rem] justify-self-center"
          />
          <img
            src={accessibility03}
            alt="Ganadara accessibility03 img"
            className=" w-full max-w-[24rem] justify-self-center"
          />
        </div>
      </div>
      <div className="custom-container  w-[90%] text-left">
        <GanaTitleText text="Takeaways" />
        <div className="flex flex-col md:flex-row gap-8 md:gap-[4.5rem] w-full ">
          <div className="md:w-1/2">
            <h5 className="poppins-semibold leading-relaxed text-lg">Impact</h5>
            <div className="w-full max-w-[50rem]">
              <p>
                The app makes users feel like Bar Ganadara booking app really
                thinks about how to meet their needs.
              </p>
              <p className="mt-4">
                One quote from peer feedback: "I hope to use this feature when I
                want to make a reservation in a bar, especially for a popular
                bar for dinner so that I don't need to wait in a line"
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <h5 className="poppins-semibold leading-relaxed text-lg">
              What I learned
            </h5>
            <p className="w-full max-w-[50rem]">
              While designing the Bar Ganadara app, I learned that the first
              ideas for the app are only the beginning of the process. Usability
              studies and peer feedback influenced each iteration of the
              app&apos;s designs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default GanaAccessibilityTakeaways;
