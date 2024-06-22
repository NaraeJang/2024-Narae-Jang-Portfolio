import heroImg from '../../assets/ganadara-assets/Ganadara-hero.webp';

import designProcess from '../../assets/ganadara-assets/DesignProcess.webp';
import painPoints from '../../assets/ganadara-assets/PainPoints.webp';
import competitorsLogos from '../../assets/ganadara-assets/Competitor-logo.webp';
import personas01 from '../../assets/ganadara-assets/Persona01.webp';
import personas02 from '../../assets/ganadara-assets/Persona02.webp';
import userJourneyMap from '../../assets/ganadara-assets/User-Journey-map-01.webp';
import userFlow from '../../assets/ganadara-assets/User-flow.webp';
import sitemap from '../../assets/ganadara-assets/Information-architecture.webp';
import paperWireframes from '../../assets/ganadara-assets/Paper-wireframes.webp';
import digitalImg01 from '../../assets/ganadara-assets/Digital-wireframes01.webp';
import digitalImg02 from '../../assets/ganadara-assets/Digital-wireframes02.webp';
import lowFidelity from '../../assets/ganadara-assets/lowfi-proto.webp';
import usabilityImg01 from '../../assets/ganadara-assets/Usability01.webp';
import usabilityImg02 from '../../assets/ganadara-assets/Usability02.webp';
import mockupImg01 from '../../assets/ganadara-assets/Mockup-Home.webp';
import mockupImg02 from '../../assets/ganadara-assets/Mockup-table.webp';

import bookingVideo from '../../assets/ganadara-assets/GabaVideo.mp4';
import loginVideo from '../../assets/ganadara-assets/gabaLogin.mp4';
import menuVideo from '../../assets/ganadara-assets/menuVideo.mp4';
import settingVideo from '../../assets/ganadara-assets/settingVideo.mp4';
import tableVideo from '../../assets/ganadara-assets/tableVideo.mp4';

import highFidelity from '../../assets/ganadara-assets/hifi-Proto.webp';
import designSystemImg from '../../assets/ganadara-assets/Design-System.webp';
import accessibility01 from '../../assets/ganadara-assets/Accessibility01.webp';
import accessibility02 from '../../assets/ganadara-assets/Accessibility02.webp';
import accessibility03 from '../../assets/ganadara-assets/Accessibility03.webp';

const BarGanaApp = () => {
  return (
    <main className="px-[4%] text-center">
      <section className="detail-section-first">
        <img src={heroImg} alt="Bar Gana Hero Img" className="w-full" />
      </section>
      <section className="detail-section-middle">
        <div className="detail-title-container">
          <h2 className="detail-title">Bar Ganadara Customized Booking App</h2>
          <p className="detail-description">
            Self-executed Project | 2 Months Duration
          </p>
          <div className="detail-category-container">
            <span className="detail-category-pill">Figma</span>
          </div>
        </div>
        <div className="detail-content-container">
          <p>
            Bar Ganadara is a Korean fusion bar located in the heart of downtown
            Montreal.
          </p>
          <p>
            Bar Ganadara booking application is a specified booking app only for
            Bar Ganadara. The app helps to book a table easily and immediately
            in advance. Giving users access to select a wide range of time&date
            options for their reservation if it needs while giving users choices
            by showing estimated walk-in wait times in real. The app allows
            users to get any necessary information about the bar before going to
            the bar in person.
          </p>

          <p>
            <span className="font-medium text-neutral-600">
              Responsibilities included:
            </span>{' '}
            Conducting interviews, paper and digital wireframing, low and
            high-fidelity prototyping, conducting usability studies, accounting
            for accessibility, and iterating on designs.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 detail-section-middle-margin">
        <div className="bg-neutral-50 rounded-2xl px-[4%] py-14 md:py-14">
          <div className="detail-content-container text-left">
            <h4 className="detail-sub-title">The Problem</h4>
            <p>
              It's one of the famous bars in Montreal. Because of that, If
              customers walk into the bar without reservation, it often takes
              more than 1 hour to dine. Customers can book a table if they call,
              but when the bar is in peak time, the call is not available. It
              often causes a problem on both sides for employees and customers.
            </p>
          </div>
        </div>

        <div className="bg-neutral-50 rounded-2xl px-[4%] py-14 md:py-14">
          <div className="detail-content-container text-left">
            <h4 className="detail-sub-title">The Goals</h4>
            <ol className="list-decimal list-inside">
              <li>
                Minimize reservation steps for users while keeping products.
              </li>
              <li>Design a cohesive interface for users.</li>
              <li>Devise hierarchy depends on priorities.</li>
              <li>Match the same mood between the bar and the app.</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="detail-section-middle text-left">
        <div>
          <h4 className="detail-sub-title">Design Process</h4>
          <p className="mt-4">
            I used User-centered design (UCD) thinking process in order to
            empathize with user to understand their feelings or thoughts in a
            situation.
          </p>
        </div>

        <img src={designProcess} className="w-full mx-auto" />
      </section>

      <section className="detail-section-middle text-left">
        <div>
          <h4 className="detail-sub-title">Competitive Analysis</h4>
          <div className="detail-content-container !max-w-full mt-4">
            <p>
              I looked at several potential direct & indirect competitors. I
              compared the booking experience of each competitor's app and
              searched what information I can get about restaurants or bars. Bar
              Ganadara booking app has the opportunity to capitalize on this by
              offering more detailed information in real-time.
            </p>
            <p>
              The majority of the features between competitors were very
              similar, however, the main differences that we noticed were:
            </p>
            <ol className="list-inside list-disc">
              <li>Estimated wait time.</li>
              <li>Announcement&Event System.</li>
              <li>
                Excessive information for every restaurants&bars VS Intensive
                information only for ONE bar.
              </li>
            </ol>
          </div>
        </div>

        <img
          src={competitorsLogos}
          className="w-full max-w-[43rem] mx-auto mt-6"
        />
      </section>

      <section className="detail-section-middle text-left">
        <div>
          <h4 className="detail-sub-title">
            Summary of User Research & Pain Points
          </h4>
          <div className="detail-content-container !max-w-full mt-4">
            <p>
              I conducted user interviews to understand the users I'm designing
              for and their needs. A primary user group identified through
              research was cegep/college/university students and young working
              adults who often eat outside and have experienced waiting in line
              and anxiety.
            </p>
            <p>
              This user group confirmed initial assumptions about Bar Ganadara
              customers, but research also revealed that waiting time was not
              the only factor limiting users. Other user problems included hard
              to contact employees by call during peak times and uncertainty of
              available tables that make it difficult to reach the bar for
              having dinner or drink.
            </p>
          </div>
        </div>

        <img src={painPoints} className="w-full max-w-[54rem] mx-auto mt-4" />
      </section>

      <section className="detail-section-middle text-left">
        <div>
          <h4 className="detail-sub-title">Personas</h4>
          <div className="detail-content-container !max-w-full mt-4">
            <p>
              Based on user research I identified two personas and created user
              journey maps to help me empathize with users.
            </p>
          </div>
        </div>

        <div className="flex flex-col min-[2800px]:flex-row gap-6 mt-4">
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
      </section>

      <section className="detail-section-middle text-left">
        <div>
          <h4 className="detail-sub-title">User Journey Map</h4>
          <div className="detail-content-container !max-w-full mt-4">
            <p>
              Mapping users' journeys revealed how helpful it would be for users
              to access a dedicated Bar Ganadara Booking app.
            </p>
          </div>
        </div>

        <img
          src={userJourneyMap}
          alt="Ganadara user journey map"
          className="w-full max-w-[70rem] mx-auto mt-4"
        />
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 detail-section-middle-margin">
        <div className="bg-neutral-50 rounded-2xl px-[4%] py-14 md:py-14">
          <div className="detail-content-container text-left">
            <h4 className="detail-sub-title">User Flow</h4>
            <p>
              The user flow aims to bring users from the entry to the end for
              user's results and actions.
            </p>
          </div>
          <img
            src={userFlow}
            alt="Ganadara user flow"
            className="w-auto max-h-[60rem] mt-6 sm:mx-auto"
          />
        </div>

        <div className="bg-neutral-50 rounded-2xl px-[4%] py-14 md:py-14">
          <div className="detail-content-container text-left">
            <h4 className="detail-sub-title">Sitemap</h4>
            <p>
              I built information architecture so that it helps users find
              information and complete tasks.
            </p>
          </div>
          <img
            src={sitemap}
            alt="Ganadara sitemap"
            className="w-auto max-h-[60rem] mt-6 sm:mx-auto"
          />
        </div>
      </section>

      <section className="detail-section-middle text-left">
        <div>
          <h4 className="detail-sub-title">Paper Wireframes</h4>
          <div className="detail-content-container !max-w-full mt-4">
            <p>
              Taking the time to draft iterations of each screen of the app on
              paper ensured that the elements that made it to digital wireframes
              would be well-suited to address user pain points. For the home
              screen, I prioritized a quick and easy booking process to help
              users to get their table.
            </p>
          </div>
        </div>

        <img
          src={paperWireframes}
          alt="Ganadara pape wireframes"
          className="w-full max-w-[70rem] mx-auto mt-4"
        />
      </section>

      <section className="detail-section-middle text-left">
        <div>
          <h4 className="detail-sub-title">Usability Study: Findings</h4>
          <div className="detail-content-container !max-w-full mt-4">
            <p>
              After sketching paper wireframes I reviewed all the structures, if
              it needs improvement. In this step, I made sure every flow goes
              well without any errors before moving on to the visuals.
            </p>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
          <img
            src={digitalImg01}
            alt="Ganadara Digital Wireframe img"
            className="w-full"
          />
          <img
            src={digitalImg02}
            alt="Ganadara Digital Wireframe img"
            className="w-full"
          />
        </div>
      </section>

      <section className="detail-section-middle text-left">
        <div>
          <h4 className="detail-sub-title">Low-Fidelity Prototype</h4>
          <div className="detail-content-container !max-w-full mt-4">
            <p>
              Using the completed set of digital wireframes, I created a
              low-fidelity prototype. The primary user flow I connected was
              reserve a table and confirm the reservation information, so the
              prototype could be used in a usability study.
            </p>
          </div>
          <a
            href="https://www.figma.com/proto/5WGfdjgHzFlPUpiZRGUSDF/Bar-Ganadara-booking-app?page-id=89%3A491&type=design&node-id=89-493&viewport=254%2C381%2C0.21&t=wNtk7ZqMxqF2sYbe-1&scaling=scale-down&starting-point-node-id=89%3A569&mode=design"
            target="_blank"
            rel="noopener noreferrer">
            <p className="mt-4 py-3 px-6 border border-neutral-300 rounded-full text-base transition-colors hover:text-neutral-700 hover:border-neutral-700 inline-block">
              View Prototype
            </p>
          </a>
        </div>

        <img
          src={lowFidelity}
          alt="Ganadara low fidelity img"
          className="w-full"
        />
      </section>

      <section className="detail-section-middle text-left">
        <div>
          <h4 className="detail-sub-title">Usability Study: Findings</h4>
          <div className="detail-content-container !max-w-full mt-4">
            <p>
              I conducted two rounds of usability studies. Findings from the
              first study helped guide the designs from wireframes to mockups.
              The second study used a high-fidelity prototype and revealed what
              aspects of the mockups needed refining.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="md:w-[70%] lg:w-full mx-auto">
            <h5 className="text-sm bg-red-100 text-red-600 px-4 py-2 rounded-full inline-block">
              Round 1 findings
            </h5>
            <img
              src={usabilityImg01}
              alt="gana usability test 01 img"
              className="mt-2"
            />
          </div>
          <div className="md:w-[70%] lg:w-full mx-auto">
            <h5 className="text-sm bg-red-100 text-red-600 px-4 py-2 rounded-full inline-block">
              Round 2 findings
            </h5>
            <img
              src={usabilityImg02}
              alt="gana usability test 02 img"
              className="mt-2"
            />
          </div>
        </div>
      </section>

      <section className="detail-section-middle text-left">
        <div>
          <h4 className="detail-sub-title">Mockups</h4>
        </div>

        <div className="flex flex-col gap-10">
          <div className="bg-white p-12 flex flex-col gap-12 lg:grid lg:grid-cols-5 lg:place-items-center rounded-2xl">
            <img
              src={mockupImg01}
              alt="gana mockup homepage img"
              className="w-full lg:col-span-3 rounded-xl"
            />

            <div className="lg:col-span-2 detail-content-container">
              <p>
                The second usability study revealed frustration with too much
                work for the announcement system and overcrowded home page.
              </p>
              <p>
                To reduce the traffic on the home page and optimize the
                announcement system, I decreased the specific gravity of the
                announcement part on the home page, and also users can choose
                colours or images depending on their will for the announcement
                background.
              </p>
              <p>
                Furthermore, by adding an indicator, users can notice if there
                is more than 1 information.
              </p>
            </div>
          </div>

          <div className="bg-white p-12 flex flex-col gap-12 lg:grid lg:grid-cols-5 lg:place-items-center rounded-2xl">
            <img
              src={mockupImg02}
              alt="gana mockup reservation img"
              className="w-full lg:col-span-3 rounded-xl"
            />
            <div className="lg:col-span-2 detail-content-container">
              <p>
                From the usability study, I found that users were not able to
                complete the task of confirming detailed reservation
                information.
              </p>
              <p>
                Users didn't realize that the box can be expansive. Therefore, I
                included an indicator to let users recognize that the box can be
                opened.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row gap-8 my-4 md:my-8">
        <video
          autoPlay
          playsInline
          muted
          loop
          className="w-[80%] md:w-[40%] lg:w-[25%] mx-auto">
          <source src={bookingVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="px-[4%] py-14 md:py-14 rounded-2xl flex flex-col gap-8 bg-neutral-50 text-left">
          <div>
            <h4 className="detail-sub-title">Booking Flow</h4>
            <ol className="list-outside ml-4 mt-4 list-decimal">
              <li>
                On the home page, a user can select a date, time and number of
                their group.
              </li>
              <li className="mt-3">
                For the new user, the app will require the user's phone number
                to verify. The user also can skip if they don't want to continue
                with their phone number. However, for The user who already did
                this verification step, the app won't ask this step again.
              </li>
              <li className="mt-3">
                Before the user makes a reservation, the app will show the
                confirmation page to the user to check if all information is
                correct.
              </li>
              <li className="mt-3">
                Once the user completes the booking, the app offers options to
                the user for their next journey.
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section className="detail-section-middle text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="detail-sub-title">High-Fidelity Prototypee</h4>
            <div className="detail-content-container !max-w-full mt-4">
              <p>
                The final high-fidelity prototype presented cleaner user flows
                for taking a reservation, viewing menu and confirming detail
                information. It also met user needs for reschedule/cancel table
                option
              </p>
            </div>
            <a
              href="https://www.figma.com/proto/5WGfdjgHzFlPUpiZRGUSDF/Bar-Ganadara-booking-app?page-id=300%3A2630&type=design&node-id=325-4319&viewport=139%2C308%2C0.13&t=Tr2pjTHYjDI4tXkw-1&scaling=scale-down&starting-point-node-id=300%3A2674&mode=design"
              target="_blank"
              rel="noopener noreferrer">
              <p className="mt-4 py-3 px-6 border border-neutral-300 rounded-full text-base transition-colors hover:text-neutral-700 hover:border-neutral-700 inline-block">
                View Prototype
              </p>
            </a>
          </div>

          <img
            src={highFidelity}
            alt="Ganadara high fidelity img"
            className="w-full"
          />
        </div>
      </section>

      <section className="detail-section-middle text-left">
        <div>
          <h4 className="detail-sub-title">Design System</h4>
        </div>

        <img
          src={designSystemImg}
          alt="Ganadara design system img"
          className="mx-auto w-full max-w-[70rem] mt-6"
        />
      </section>

      <section className="detail-section-middle text-left">
        <div>
          <h4 className="detail-sub-title">Accessibility Considerations</h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <img
            src={accessibility01}
            alt="Ganadara accessibility01 img"
            className="w-full"
          />
          <img
            src={accessibility02}
            alt="Ganadara accessibility02 img"
            className=" w-full"
          />
          <img
            src={accessibility03}
            alt="Ganadara accessibility03 img"
            className=" w-full"
          />
        </div>
      </section>

      <section className="detail-section-middle">
        <h4 className="detail-title">Final User Interface Design</h4>
        <div className="detail-content-container -mt-4">
          <p>
            One quote from peer feedback: "I hope to use this feature when I
            want to make a reservation in a bar, especially for a popular bar
            for dinner so that I don't need to wait in a line"
          </p>
          <p>
            While designing the Bar Ganadara app, I learned that the first ideas
            for the app are only the beginning of the process. Usability studies
            and peer feedback influenced each iteration of the app's designs.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:grid md:grid-cols-3 md:gap-8 max-w-5xl mx-auto mt-4">
          <div>
            <video
              autoPlay
              playsInline
              muted
              loop
              className="w-[90%] mx-auto md:w-full rounded-3xl">
              <source src={loginVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>{' '}
            <p className="mt-4 text-sm bg-neutral-200 text-neutral-700 px-4 py-2 rounded-full inline-block">
              Register & Login
            </p>
          </div>

          <div>
            <video
              autoPlay
              playsInline
              muted
              loop
              className="w-[90%] mx-auto md:w-full rounded-3xl ">
              <source src={bookingVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>{' '}
            <p className="mt-4 text-sm bg-neutral-200 text-neutral-700 px-4 py-2 rounded-full inline-block">
              Booking Table
            </p>
          </div>

          <div>
            <video
              autoPlay
              playsInline
              muted
              loop
              className="w-[90%] mx-auto md:w-full rounded-3xl">
              <source src={tableVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>{' '}
            <p className="mt-4 text-sm bg-neutral-200 text-neutral-700 px-4 py-2 rounded-full inline-block">
              See My Table
            </p>
          </div>
          <div>
            <video
              autoPlay
              playsInline
              muted
              loop
              className="w-[90%] mx-auto md:w-full rounded-3xl">
              <source src={menuVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>{' '}
            <p className="mt-4 text-sm bg-neutral-200 text-neutral-700 px-4 py-2 rounded-full inline-block">
              See Menu
            </p>
          </div>
          <div>
            <video
              autoPlay
              playsInline
              muted
              loop
              className="w-[90%] mx-auto md:w-full rounded-3xl">
              <source src={settingVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>{' '}
            <p className="mt-4 text-sm bg-neutral-200 text-neutral-700 px-4 py-2 rounded-full inline-block">
              Setting
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
export default BarGanaApp;
