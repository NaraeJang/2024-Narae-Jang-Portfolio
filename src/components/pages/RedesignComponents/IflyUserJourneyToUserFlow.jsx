import TitleText from '../TitleText';
import rdUserJourney from '../../../assets/redesign-assets/rd-user-journey.webp';
import rdCompetitive from '../../../assets/redesign-assets/rd-competitve.webp';
import rdUserFlow from '../../../assets/redesign-assets/rd-userflow.webp';

const IflyUserJourneyToUserFlow = () => {
  return (
    <>
      <section>
        <div className="custom-container w-[90%]">
          <TitleText text="User journey map" />
          <p>
            Based on user research, I created a user journey map to empathize
            with the user's pain points, challenges, mindsets and the journey
            that the user will face when shopping for items on IFLY website. In
            addition, it helps to discover opportunities to improve the user
            experience while using IFLY website.
          </p>
          <img
            src={rdUserJourney}
            alt="ifly user journey img"
            className="w-full max-w-[57rem] mx-auto mt-8"
          />
        </div>
      </section>

      <section>
        <div className="custom-container w-[90%]">
          <TitleText text="Competitive analysis" />
          <p>
            In order to understand competitors' strengths and weaknesses in
            comparison to IFLY Travel Luggage and find a gap in the market, I
            collected data to enhance IFLY Travel Luggage products.
          </p>
          <img
            src={rdCompetitive}
            alt="ifly comptitive analysis img"
            className="w-full max-w-[57rem] mx-auto mt-8"
          />
        </div>
      </section>

      <section>
        <div className="custom-container w-[90%]">
          <TitleText text="User flow" />
          <p>
            I constructed a user flow of what a basic start to finish journey
            looks like while purchasing an item. This helps us understand the
            ways in which users can interact with the product, as well as
            allowing us to see the navigation through user goals.
          </p>
          <img
            src={rdUserFlow}
            alt="ifly user flow img"
            className="w-full max-w-[57rem] mx-auto mt-8"
          />
        </div>
      </section>
    </>
  );
};
export default IflyUserJourneyToUserFlow;
