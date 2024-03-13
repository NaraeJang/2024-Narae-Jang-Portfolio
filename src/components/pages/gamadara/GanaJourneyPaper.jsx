import { GanaTitleText } from './';
import personas01 from '../../../assets/ganadara-assets/Persona01.webp';
import personas02 from '../../../assets/ganadara-assets/Persona02.webp';
import userJourneyMap from '../../../assets/ganadara-assets/User-Journey-map-01.webp';
import userFlow from '../../../assets/ganadara-assets/User-flow.webp';
import sitemap from '../../../assets/ganadara-assets/Information-architecture.webp';
import paperWireframes from '../../../assets/ganadara-assets/Paper-wireframes.webp';

const GanaJourneyPaper = () => {
  return (
    <section id="gana-persona-to-paper">
      <div className="custom-container text-left w-[90%] flex flex-col gap-[10rem]">
        <div>
          <GanaTitleText text="Personas" />
          <p>
            Based on user research I identified two personas and created user
            journey maps to help me empathize with users.
          </p>
          <div className="flex flex-col min-[2800px]:flex-row gap-6 mt-12">
            <img
              src={personas01}
              alt="Ganadara-persona-01"
              className="w-full max-w-[70rem] mx-auto"
            />
            <img
              src={personas02}
              alt="Ganadara-persona-02"
              className="w-full max-w-[70rem] mx-auto"
            />
          </div>
        </div>

        <div>
          <GanaTitleText text="User journey map" />
          <p>
            Mapping users&apos; journeys revealed how helpful it would be for
            users to access a dedicated Bar Ganadara Booking app.
          </p>
          <img
            src={userJourneyMap}
            alt="Ganadara user journey map"
            className="w-full max-w-[70rem] mx-auto mt-12"
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-20 lg:gap-10 w-full">
          <div className="lg:w-[50%]">
            <GanaTitleText text="User flow" />
            <p className="lg:h-[4rem]">
              The user flow aims to bring users from the entry to the end for
              user's results and actions.
            </p>
            <img
              data-enlargable
              src={userFlow}
              alt="Ganadara user flow"
              className="w-auto max-h-[60rem] mt-6 sm:mx-auto"
            />
          </div>
          <div className="lg:w-[50%]">
            <GanaTitleText text="Sitemap" />
            <p className="lg:h-[4rem]">
              To understand how the pieces fit together to create the larger
              picture, I built information architecture so that it helps users
              find information and complete tasks.
            </p>
            <img
              data-enlargable
              src={sitemap}
              alt="Ganadara sitemap"
              className="w-auto max-h-[60rem] mt-6 sm:mx-auto"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-full gap-4 md:gap-10 lg:gap-20">
          <div className="md:w-[40%]">
            <GanaTitleText text="Paper wireframes" />
            <p>
              Taking the time to draft iterations of each screen of the app on
              paper ensured that the elements that made it to digital wireframes
              would be well-suited to address user pain points. For the home
              screen, I prioritized a{' '}
              <strong>quick and easy booking process</strong> to help users to
              get their table.
            </p>
          </div>
          <img
            data-enlargable
            src={paperWireframes}
            alt="Ganadara pape wireframes"
            className="md:w-[60%] md:max-w-[60rem] mx-auto mt-6"
          />
        </div>
      </div>
    </section>
  );
};
export default GanaJourneyPaper;
