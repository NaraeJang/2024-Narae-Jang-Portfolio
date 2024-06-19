import heroImg from '../../assets/candle-images/CandleHero.webp';

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

      <section className="detail-section-middle !bg-blue-50">
        <h4 className="font-title text-xl text-neutral-800">Before Start</h4>
        <div className="detail-content-container">
          <p>
            In the design process, we took a goal-directed design approach that
            helped us move along the timeline smoothly.
          </p>
          <p>
            We did this by asking some generic but useful internal questions
            which turned out to be very effective during our design process,
            most notably our usability testing sessions.
          </p>
        </div>

        <div className="grid grid-rows-5 grid-flow-col gap-8 md:grid-rows-3 italic mt-8 max-w-[60rem] mx-auto">
          <p>“Who is our primary user?”</p>
          <p>“What is our ultimate goal?”</p>
          <p>“What do our users need to most in this steps?”</p>
          <p>“Which users are most important?”</p>
          <p>“What are the challenges we will face?”</p>
        </div>
      </section>
    </main>
  );
};
export default CalegoTag;
