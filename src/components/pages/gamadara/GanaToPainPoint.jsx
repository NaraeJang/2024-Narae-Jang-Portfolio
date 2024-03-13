import painPoints from '../../../assets/ganadara-assets/PainPoints.webp';
import competitorsLogos from '../../../assets/ganadara-assets/Competitor-logo.webp';
import { GanaTitleText } from './';

const GanaToPainPoint = () => {
  return (
    <section id="gana-competitive-to-pain">
      <div className="custom-container text-left w-[90%] flex flex-col gap-[10rem]">
        <div>
          <GanaTitleText text="Competitive analysis" />
          <p>
            I looked at several potential direct & indirect competitors. I
            compared the booking experience of each competitor's app and
            searched what information I can get about restaurants or bars. Bar
            Ganadara booking app has the opportunity to capitalize on this by
            offering more detailed information in real-time.
          </p>
          <p className="mt-3">
            The majority of the features between competitors were very similar,
            however, the main differences that we noticed were:
          </p>
          <ul className="list-disc list-outside mt-4 pl-[5%] md:pl-[2%] poppins-medium text-[#FF5757]">
            <li>Estimated wait time.</li>
            <li>Announcement&Event System.</li>
            <li>
              Excessive information for every restaurants&bars VS Intensive
              information only for ONE bar.
            </li>
          </ul>
          <img
            data-enlargable
            src={competitorsLogos}
            className="w-full max-w-[43rem] mx-auto mt-12"
          />
        </div>
        <div>
          <GanaTitleText text="Summary of user research" />
          <p>
            I conducted user interviews to understand the users I’m designing
            for and their needs. A primary user group identified through
            research was cegep/college/university students and young working
            adults who often eat outside and have experienced waiting in line
            and anxiety.
          </p>
          <p className="mt-3">
            This user group confirmed initial assumptions about Bar Ganadara
            customers, but research also revealed that waiting time was not the
            only factor limiting users. Other user problems included hard to
            contact employees by call during peak times and uncertainty of
            available tables that make it difficult to reach the bar for having
            dinner or drink.
          </p>
        </div>
        <div>
          <GanaTitleText text="Pain points" />
          <img
            data-enlargable
            src={painPoints}
            className="w-full max-w-[54rem] mx-auto mt-12"
          />
        </div>
      </div>
    </section>
  );
};
export default GanaToPainPoint;
