import heroImg from '../../assets/candle-images/CandleHero.webp';
import candleVideo from '../../assets/candle-images/CandleTag.mp4';

// User Flow
import CandleUserFlow01 from '../../assets/candle-images/candle-user-flow-01.webp';
import CandleUserFlow02 from '../../assets/candle-images/candle-user-flow-02.webp';
import CandleUserFlow03 from '../../assets/candle-images/candle-user-flow-03.webp';
// Wireframes
import CandleWireframe01 from '../../assets/candle-images/candle-wireframes-01.webp';
import CandleWireframe02 from '../../assets/candle-images/candle-wireframes-02.webp';
import CandleWireframe03 from '../../assets/candle-images/candle-wireframes-03.webp';
// Finals
import CandleFinal01 from '../../assets/candle-images/candle-final-01.webp';
import CandleFinal02 from '../../assets/candle-images/candle-final-02.webp';
import CandleFinal03 from '../../assets/candle-images/candle-final-03.webp';

const CalegoTag = () => {
  return (
    <main className="px-[4%] text-center">
      <section className="detail-section-first">
        <img
          src={heroImg}
          alt="Gabriel Publication Design"
          className="w-full"
        />
      </section>

      <section className="detail-section-middle">
        <div className="detail-title-container">
          <h2 className="detail-title">Register Your Tag</h2>
          <p className="detail-description">
            Sole UX/UI Designer | 1 Week Duration <br />
            With Art Director, Creative Director, Marketing Coordinator
          </p>
          <div className="detail-category-container">
            <span className="detail-category-pill">Figma</span>
            <span className="detail-category-pill">Illustrator</span>
          </div>
        </div>
        <div className="detail-content-container">
          <p>
            iFLY Luggage is one of the developers and distributors of luggage,
            travel bags and accessories based in Montreal, Canada.
          </p>
          <p>
            iFLY launched their new travel candle products. When a consumer
            purchases the candle, there is a tag in the package that helps them
            find their lost items. To activate the tag, the consumer has to
            register their tag through the QR code that iFLY provides in the
            same package. At the same time, IFY wanted to gain more reviews in
            order to build elevated trust with iFLY consumers. The main point of
            this project was to gain more product reviews while providing the
            customers added value.
          </p>
          <p>
            In this project, I was responsible for the{' '}
            <span className="font-medium text-neutral-600">
              user research, user flow, wireframing,
            </span>{' '}
            <span className="font-medium text-neutral-600">UI design</span>, and{' '}
            <span className="font-medium text-neutral-600">prototyping</span>.
          </p>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row gap-8 my-4 md:my-8">
        <video
          autoPlay
          muted
          loop
          className="w-[80%] md:w-[40%] lg:w-[25%] mx-auto">
          <source src={candleVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="px-[4%] py-14 md:py-14 rounded-2xl flex flex-col gap-8 bg-blue-50 text-left">
          <div>
            <h4 className="detail-sub-title">Before Start</h4>
            <div className="detail-content-container !max-w-full mt-4">
              <p>
                In the design process, we took a goal-directed design approach
                that helped us move along the timeline smoothly. We did this by
                asking some generic but useful internal questions which turned
                out to be very effective during our design process, most notably
                our usability testing sessions.
              </p>
            </div>
          </div>

          <div className="grid grid-rows-5 grid-flow-col gap-3 md:gap-8 md:grid-rows-3 italic mt-8 max-w-[60rem] mx-auto">
            <p>“Who is our primary user?”</p>
            <p>“What is our ultimate goal?”</p>
            <p>“What do our users need to most in this steps?”</p>
            <p>“Which users are most important?”</p>
            <p>“What are the challenges we will face?”</p>
          </div>
        </div>
      </section>

      <section className="detail-section-middle text-left">
        <div>
          <h4 className="detail-sub-title">
            Making a smooth flow to “leave a review” while the consumer is
            registering their tag.
          </h4>
          <p className="mt-4">
            In this step, we were brainstorming about how we can make the smooth
            transition from registering their tag to leaving a review about a
            product.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-4">
          <div className="rounded-xl pt-4 md:p-4 xl:p-8 grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-8">
            <img
              src={CandleUserFlow01}
              alt="register your tag user flow"
              className="w-[60%] lg:w-full mx-auto"
            />
            <div className="flex flex-col gap-2 xl:pt-16">
              <p className="font-semibold text-neutral-400/60">Step 01</p>
              <p>We offer a form to register the user's tag.</p>
            </div>
          </div>
          <div className=" rounded-xl pt-4 md:p-4 xl:p-8 grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-8">
            <img
              src={CandleUserFlow02}
              alt="register your tag user flow"
              className="w-[60%] lg:w-full mx-auto"
            />
            <div className="flex flex-col gap-2 xl:pt-16">
              <p className="font-semibold text-neutral-400/60">Step 02</p>
              <p>We suggest user leaving a review in the middle of the step.</p>
              <p>
                By putting the review form in middle before delivering
                successful message, user can experience a smooth transition from
                the registration form.
              </p>
            </div>
          </div>
          <div className=" rounded-xl pt-4 md:p-4 xl:p-8 grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-8">
            <img
              src={CandleUserFlow03}
              alt="register your tag user flow"
              className="w-[60%] lg:w-full mx-auto"
            />
            <div className="flex flex-col gap-2 xl:pt-16">
              <p className="font-semibold text-neutral-400/60">Step 03</p>
              <p>
                The user will be guided to track their items by clicking CTA
                buttons to go to App Store or Google Play.
              </p>
              <p>
                If the user has any questions about the product, the user can go
                to FAQ page by clicking FAQ CTA.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="detail-section-middle text-left">
        <div>
          <h4 className="detail-sub-title">
            After conducting simple usability testing internally, we found what
            to improve.
          </h4>
          <p className="mt-4">
            The usability testing helped guide the designs, and discover pain
            points user might encounter.
          </p>
        </div>

        <div className="flex flex-col gap-12 md:gap-20 mt-8">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 md:gap-16">
            <div className="detail-content-container justify-center">
              <p>Early designs allowed users to fill in the form.</p>
              <p>
                However, there wasn’t any explanation about the tag. Because of
                that, the user couldn’t understand what the tag is for and how
                to use it.
              </p>
              <p>
                Therefore, we included the explanation so that the user know
                what the tag is for and how to use it.
              </p>
            </div>

            <img
              src={CandleWireframe01}
              alt="register your tag wireframe 01"
              className="w-[90%] md:w-[70%] lg:w-full mx-auto"
            />
          </div>

          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-16">
            <img
              src={CandleWireframe02}
              alt="register your tag wireframe 02"
              className="w-[90%] md:w-[70%] lg:w-full mx-auto"
            />
            <div className="detail-content-container justify-center">
              <p>
                At the beginning of this project, iFLY didn’t want to categorize
                candle products. However, we found it frustrating when
                collecting and analysing data because of the decision we made.
              </p>
              <p>
                Therefore, We added an input section which has a dropdown menu
                in the form so that we can organize and display reviews
                depending on the candle products consumers purchased.
              </p>
            </div>
          </div>

          <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 md:gap-16">
            <div className="detail-content-container justify-center">
              <p>
                To focus on the principal information, we eliminated the video
                section which gave the page a simple and clean look.
              </p>
            </div>

            <img
              src={CandleWireframe03}
              alt="register your tag wireframe 03"
              className="w-[90%] md:w-[70%] lg:w-full mx-auto"
            />
          </div>
        </div>
      </section>

      <section className="detail-section-middle !bg-blue-50">
        <div>
          <h4 className="detail-title">Final User Interface Design</h4>
          <p className="mt-4 max-w-3xl mx-auto">
            As a result, we are able to gather more reviews for the candles,
            users understand what the tag is for, how to use it and how to
            register their tag successfully.
          </p>
          <a
            href="https://iflyluggage.com/pages/candle-review"
            target="_blank"
            rel="noopener noreferrer">
            <p className="mt-4 py-3 px-6 border border-neutral-300 rounded-full text-base transition-colors hover:text-neutral-700 hover:border-neutral-700 inline-block">
              Visit the Actual Product
            </p>
          </a>
        </div>

        <div className="flex flex-col gap-4 md:grid md:grid-cols-3 md:gap-12 max-w-5xl mx-auto mt-4">
          <img
            src={CandleFinal01}
            alt="register your tag final"
            className="w-[90%] mx-auto md:w-full"
          />
          <img
            src={CandleFinal02}
            alt="register your tag final"
            className="w-[90%] mx-auto md:w-full"
          />
          <img
            src={CandleFinal03}
            alt="register your tag final"
            className="w-[90%] mx-auto md:w-full"
          />
        </div>
      </section>
    </main>
  );
};
export default CalegoTag;
