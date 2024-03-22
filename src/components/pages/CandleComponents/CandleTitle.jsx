import { CandleTitleText } from '.';
import CandleTitleImg from '../../../assets/candle-images/Candle-title.webp';

const CandleTitle = () => {
  return (
    <>
      <section className="py-[6rem] lg:py-[10rem] w-[90%] mx-auto flex flex-col text-left">
        <div className="flex flex-row gap-10">
          <div className="flex flex-col gap-10 basic-3/5 md:w-[65%]">
            <div>
              <h3 className="dt-black text-3xl">Register Your Tag</h3>
              <p className="mt-[1.75rem]">
                IFLY is one of the developers and distributors of luggage,
                travel bags and accessories in Montreal, Canada. IFLY
                distributes its products in North America and Europe and has 18
                brand partners.
              </p>
              <p className="mt-[1.75rem]">
                Recently, IFLY launched their new travel candle products. When a
                consumer purchases the candle, there is a tag in the package
                that helps them find their lost items. To activate the tag, the
                consumer has to register their tag through the QR code that IFLY
                provides in the same package. At the same time, IFY wanted to
                gain more reviews in order to build elevated trust with IFLY
                consumers. The main point of this project was to gain more
                product reviews while providing the customers added value.
              </p>
              <p className="mt-[1.75rem]">
                In this project, I was responsible for the user research, user
                flow, wireframing the Candle Register Step pages’ UI design, and
                prototyping the design system.
              </p>
            </div>

            <div className="flex flex-row flex-wrap justify-start gap-8">
              <div>
                <h5 className="poppins-semibold leading-relaxed text-lg">
                  Role
                </h5>
                <p>Sole UX & UI Designer</p>
              </div>
              <div>
                <h5 className="poppins-semibold leading-relaxed text-lg">
                  Duration
                </h5>
                <p>1 week</p>
              </div>
              <div>
                <h5 className="poppins-semibold leading-relaxed text-lg">
                  Team
                </h5>
                <p>Art Director, Creative Director, Marketing Coordinator</p>
              </div>
            </div>
          </div>

          <div className="opacity-0 invisible hidden md:block md:opacity-100 md:visible mx-auto">
            <img
              src={CandleTitleImg}
              alt="Candle Title Image"
              className="max-w-[15rem] "
            />
          </div>
        </div>
      </section>

      <section className="bg-[#F3F8FF]">
        <div className="w-[90%] custom-container">
          <CandleTitleText text="Before Start" />
          <p>
            In the design process, we took a goal-directed design approach that
            helped us move along the timeline smoothly. We did this by asking
            some generic but useful internal questions which turned out to be
            very effective during our design process, most notably our usability
            testing sessions.
          </p>

          <div className="grid grid-rows-5 grid-flow-col gap-4 md:grid-rows-3 italic mt-8 max-w-[60rem] mx-auto">
            <p>“Who is our primary user?”</p>
            <p>“What is our ultimate goal?”</p>
            <p>“What do our users need to most in this steps?”</p>
            <p>“Which users are most important?”</p>
            <p>“What are the challenges we will face?”</p>
          </div>
        </div>
      </section>
    </>
  );
};
export default CandleTitle;
