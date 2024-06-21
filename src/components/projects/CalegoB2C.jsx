import heroImg from '../../assets/ifly-marketing/Ifly-Marketing-Bg.webp';
import rdPainPoints from '../../assets/redesign-assets/rd-pain_points.webp';
import rdPersona from '../../assets/redesign-assets/rd-persona-img.webp';
import rdUserJourney from '../../assets/redesign-assets/rd-user-journey.webp';
import rdCompetitive from '../../assets/redesign-assets/rd-competitve.webp';
import rdUserFlow from '../../assets/redesign-assets/rd-userflow.webp';
import rdSitemap from '../../assets/redesign-assets/rd-sitemap.webp';
import rdWireframes from '../../assets/redesign-assets/rd-wireframes.webp';
import rdStypleGuide from '../../assets/redesign-assets/rd-style.webp';
import rdProto01 from '../../assets/redesign-assets/rd-proto-1.webp';
import rdProto02 from '../../assets/redesign-assets/rd-proto-2.webp';
import rdProto03 from '../../assets/redesign-assets/rd-proto-3.webp';
import rdDesktop from '../../assets/redesign-assets/rd-desktp.webp';
import rdMobile from '../../assets/redesign-assets/rd-mobile.webp';
import calegoVideo from '../../assets/redesign-assets/calegoVideo.mp4';

const CalegoB2C = () => {
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
          <h2 className="detail-title">Redesigning iFLY Luggage Website</h2>
          <p className="detail-description">
            Sole UX/UI Designer | 2 Months Duration
            <br />
            Collaborated with the CMO, Art Director, Digital Creative Director,
            Marketing Coordinator, and developer teams.
          </p>
          <div className="detail-category-container">
            <span className="detail-category-pill">Figma</span>
            <span className="detail-category-pill">Photoshop</span>
          </div>
        </div>
        <div className="detail-content-container">
          <p>
            Calego owns four travel accessories brands (iFLY, VACAY, IFLY SMART,
            Sammys), each with its own website. This fragmented structure made
            it challenging for users to find products and complete purchases
            across different brands. Additionally, SEO and reviews were
            dispersed, leading to a disjointed customer experience and impacting
            sales.
          </p>
          <p>
            To address these issues, we undertook the initiative to consolidate
            all separate websites into a unified platform. This strategic
            decision aimed to streamline user interactions and enhance Calego’s
            sales potential. As the sole UX/UI Designer on this project, I led
            the effort from inception to delivery.
          </p>

          <p>
            <span className="font-medium text-neutral-600">
              Responsibilities included:
            </span>{' '}
            Conducting user research, identifying pain points, developing
            personas, creating user journey maps, performing competitive audits,
            crafting digital wireframes, establishing a style guide,
            prototyping, and designing the user interface while adhering to
            brand guidelines.
          </p>
        </div>
      </section>

      <section className="detail-section-middle text-left">
        <div>
          <h4 className="detail-sub-title">User Research: Summary</h4>
          <p className="mt-4">
            Based on existing user data provided by iFLY and discussions with
            iFLY internal teams, I gained better insight into the end users,
            including their main goals, needs and pain points to deliver a
            better user experience.
          </p>
        </div>

        <img
          src={rdPainPoints}
          alt="pain points"
          className="w-full lg:w-[70%] mx-auto"
        />
      </section>

      <section className="detail-section-middle text-left">
        <div>
          <h4 className="detail-sub-title">Persona</h4>
          <p className="mt-4">
            I created a persona to represent the ideal user of the product so
            that I can bring a better design solution.
          </p>
          <p>
            Olivia is a content creator and also a mom of her family who wants
            to find the best travel products because it can represent her
            identity and herself.
          </p>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 mx-auto items-start justify-center md:bg-white md:p-12 rounded-xl">
          <img
            src={rdPersona}
            alt="Ifly persona img"
            className="w-full rounded-xl"
          />

          <div className="w-full flex flex-col gap-1 my-auto">
            <p>
              <span className="poppins-semibold capitalize">name:</span> Olivia
            </p>
            <p>
              <span className="poppins-semibold capitalize">age:</span> 34
            </p>
            <p>
              <span className="poppins-semibold capitalize">occupation:</span>{' '}
              Content Creator, Mom
            </p>
            <p>
              <span className="poppins-semibold capitalize">goals:</span>{' '}
              Personalization of her travel gears, establishing sense of
              identity
            </p>
            <p>
              <span className="poppins-semibold capitalize">lift goals:</span>{' '}
              Keep a forward-looking mentality in her life, build and maintain
              personal brand.
            </p>
            <p>
              <span className="poppins-semibold capitalize">expertise:</span>{' '}
              Travel, fashion, digital content creation
            </p>
            <p>
              <span className="poppins-semibold capitalize">quote:</span> Your
              choice makes your life
            </p>

            <p className="mt-3">
              <span className="poppins-semibold capitalize">bio:</span> Olivia
              is a 34 years old digital content creator specializing in
              traveling and fashion, and also a mom to her family. She works for
              herself regardless of time and date. She spends most of her time
              creating digital content and taking care of her family. Because of
              her job, she needs a lot of gear for traveling or her content and
              wants products that can reflect her values and identify her.
            </p>
          </div>
        </div>
      </section>

      <section className="detail-section-middle text-left">
        <div>
          <h4 className="detail-sub-title">User Journey Map</h4>
          <p className="mt-4">
            Based on user research, I created a user journey map to empathize
            with the user's pain points, challenges, mindsets and the journey
            that the user will face when shopping for items on iFLY website. In
            addition, it helps to discover opportunities to improve the user
            experience while using iFLY website.
          </p>
        </div>

        <img
          src={rdUserJourney}
          alt="ifly user journey img"
          className="w-full max-w-4xl mx-auto"
        />
      </section>

      <section className="detail-section-middle text-left">
        <div>
          <h4 className="detail-sub-title">Competitive Analysis</h4>
          <p className="mt-4">
            In order to understand competitors' strengths and weaknesses in
            comparison to iFLY Luggage and find a gap in the market, I collected
            data to enhance iFLY Luggage products.
          </p>
        </div>

        <img
          src={rdCompetitive}
          alt="ifly comptitive analysis img"
          className="w-full max-w-4xl mx-auto"
        />
      </section>

      <section className="detail-section-middle text-left">
        <div>
          <h4 className="detail-sub-title">User Flow</h4>
          <p className="mt-4">
            I constructed a user flow of what a basic start to finish journey
            looks like while purchasing an item. This helps us understand the
            ways in which users can interact with the product, as well as
            allowing us to see the navigation through user goals.
          </p>
        </div>

        <img
          src={rdUserFlow}
          alt="ifly user flow img"
          className="w-full max-w-4xl mx-auto mt-2"
        />
      </section>

      <section className="detail-section-middle text-left">
        <div>
          <h4 className="detail-sub-title">Site Map</h4>
          <p className="mt-4">
            Building a sitemap helps to understand the flow of the website. It
            also helps to check if the the information is grouped properly and
            is easy to navigate.
          </p>
        </div>

        <img
          src={rdSitemap}
          alt="ifly sitemap img"
          className="w-full rounded-xl"
        />
      </section>

      <section className="detail-section-middle text-left">
        <div>
          <h4 className="detail-sub-title">Digital wireframes</h4>
          <p className="mt-4">
            After understanding the user and constructing the website structure,
            I created the wireframes to iterate on our ideas. By utilizing the
            wireframes, we tested the flow so as to get a better insight into
            the user.
          </p>
        </div>

        <img
          src={rdWireframes}
          alt="ifly wireframes img"
          className="w-full rounded-xl"
        />
      </section>

      <section className="detail-section-middle text-left">
        <div>
          <h4 className="detail-sub-title">Style Guide</h4>
          <p className="mt-4">
            Each brand has a different brand identity. In order to maintain
            uniqueness, I used different colors depending on the brand so that
            it could align with each brand's guidelines. Furthermore, I used
            neutral colors for the general landing page where users can see
            every item regardless of brand. In this way, I was able to create
            the pages without harming each brand's identity.
          </p>
        </div>

        <img
          src={rdStypleGuide}
          alt="ifly Style Guide img"
          className="w-full rounded-xl max-w-5xl mx-auto"
        />
      </section>

      <section className="detail-section-middle text-left">
        <div>
          <h4 className="detail-sub-title">Prototyping</h4>
        </div>

        <div className="flex flex-col gap-10">
          <div className="bg-white p-12 flex flex-col gap-12 md:grid md:grid-cols-5 md:place-items-center rounded-2xl">
            <img
              src={rdProto01}
              alt="ifly proto img"
              className="w-full md:col-span-3 rounded-xl"
            />
            <p className="md:col-span-2">
              Users are able to browse all brands and shop for items in IFLY
              website without the hassle of visiting 4 different websites.
            </p>
          </div>

          <div className="bg-white p-12 flex flex-col-reverse gap-12 md:grid md:grid-cols-5 md:place-items-center rounded-2xl">
            <p className="md:col-span-2">
              Users can register their warranty in a fast and intuitive way.
            </p>
            <img
              src={rdProto02}
              alt="ifly proto img"
              className="w-full md:col-span-3 rounded-xl"
            />
          </div>

          <div className="bg-white p-12 flex flex-col gap-12 md:grid md:grid-cols-5 md:place-items-center rounded-2xl">
            <img
              src={rdProto03}
              alt="ifly proto img"
              className="w-full md:col-span-3 rounded-xl"
            />
            <p className="md:col-span-2">
              By designing the pages that were uncompleted, I eliminated the
              feeling of an incomplete website.
            </p>
          </div>
        </div>
      </section>

      <section className="detail-section-middle text-left">
        <div>
          <h4 className="detail-sub-title">UI design: Desktop</h4>
        </div>

        <img
          src={rdDesktop}
          alt="ifly ui design desktop img"
          className="w-full rounded-xl"
        />
      </section>
      <section className="detail-section-middle text-left">
        <div>
          <h4 className="detail-sub-title">UI design: Mobile</h4>
        </div>

        <img
          src={rdMobile}
          alt="ifly ui design mobile img"
          className="w-full rounded-xl"
        />
      </section>

      <section className="detail-section-middle">
        <div>
          <h4 className="detail-title">Result</h4>
          <p className="mt-4 max-w-3xl mx-auto">
            Since 2022, IFLY website uses most of the new features we built. As
            a result, it enables users to browse and shop all items without
            anxiety to find several websites. In addition, Calego was able to
            integrate all websites into one, drive more sales and gather SEO and
            reviews.
          </p>

          <a
            href="https://iflyluggage.com/"
            target="_blank"
            rel="noopener noreferrer">
            <p className="mt-4 py-3 px-6 border border-neutral-300 rounded-full text-base transition-colors hover:text-neutral-700 hover:border-neutral-700 inline-block">
              Visit the Actual Product
            </p>
          </a>
        </div>

        <video autoPlay muted loop className="w-full">
          <source src={calegoVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      <section className="detail-section-middle">
        <h5 className="detail-title">Takeaways</h5>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          <div>
            <p className="font-medium text-neutral-600 mb-2 md:h-12 content-center">
              Less is More
            </p>
            <p>
              When Calego had 4 different webistes, it overwhelmed the users. By
              simplifying the front end of the website we facilitated the user
              journey.
            </p>
          </div>
          <div>
            <p className="font-medium text-neutral-600 mb-2 md:h-12 content-center">
              Collaborative work always, <br /> leads to better result.
            </p>
            <p>
              As a team, we communticated and brainstormed togther so we could
              get diverse ideas to solve the problems that we had. If I had done
              this project alone, I would not have been able to reach the
              effective solution.
            </p>
          </div>
          <div>
            <p className="font-medium text-neutral-600 mb-2 md:h-12 content-center">
              Divide and conquer!
            </p>
            <p>
              when the project is too big to handle, breaking it into pieces and
              solving them one by one helps alleviate development.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
export default CalegoB2C;
