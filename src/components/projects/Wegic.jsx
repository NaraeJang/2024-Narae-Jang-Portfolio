import heroImg from '../../assets/projects-images/wegic02.webp';

const Wegic = () => {
  return (
    <main className="px-[4%] text-center">
      <section className="detail-section-first">
        <img src={heroImg} alt="Wegic Design" className="w-full" />
      </section>

      <section className="detail-section-middle">
        <div className="detail-title-container">
          <h2 className="detail-title">Wegic: Mobile Invitation</h2>
          <p className="detail-description">
            Freelance UX/UI Designer project & Self-executed Front-End
            Development project
            <br />
            Collaborated with a couple who wants to dive into wedding industry
          </p>
          <div className="detail-category-container">
            <span className="detail-category-pill">Figma</span>
            <span className="detail-category-pill">Photoshop</span>
          </div>
        </div>
        <div className="detail-content-container">
          <p>
            Originally conceived as a UX/UI project for a Korean-Canadian couple
            entering the Canadian wedding market, I've brought the Wegic Mobile
            Wedding Invitation to life through web development.
          </p>
          <p>
            Mobile invitations have gained popularity for their convenience,
            cost-effectiveness, environmental consciousness and social media
            compatibility.
          </p>
          <p>
            Focused on the mobile version, Wegic is offering notable features
            such as a dynamic calendar, D-day countdown, and the ability to save
            data and leave comments for the couple.
          </p>
        </div>
      </section>

      <section className="detail-section-middle">
        <h4 className="detail-sub-title">Features</h4>

        <div className="text-left grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-8">
          <ol className="list-disc ml-8 lg:ml-4">
            <li>
              <span className="font-medium text-neutral-600">
                {' '}
                Accessible Database:
              </span>{' '}
              Utilizing Google Sheets as Wegic's database for easy data viewing
              and editing by users unfamiliar with databases.
            </li>
            <li className="mt-3">
              <span className="font-medium text-neutral-600">
                Event Overview Page:
              </span>{' '}
              Access all essential information about the event on a single page.
            </li>
            <li className="mt-3">
              <span className="font-medium text-neutral-600">
                {' '}
                Multilingual Support:
              </span>{' '}
              Wegic supports English and French based on the target audience.
            </li>
            <li className="mt-3">
              <span className="font-medium text-neutral-600">
                {' '}
                Our Story Section:
              </span>{' '}
              Share the couple's romantic stories.
            </li>
            <li className="mt-3">
              <span className="font-medium text-neutral-600">
                {' '}
                Gallery Section:
              </span>{' '}
              Swipe through multiple couple photos.
            </li>
            <li className="mt-3">
              <span className="font-medium text-neutral-600">
                {' '}
                Contact Section:
              </span>{' '}
              Directly linked to Groom & Bride contact info for easy celebration
              coordination.
            </li>
            <li className="mt-3">
              <span className="font-medium text-neutral-600">
                {' '}
                Calendar Section:
              </span>{' '}
              Customized calendar functions that calculates days, recognizes
              weekdays, and displays targeted month and D-day.
            </li>
          </ol>
          <ol className="list-disc ml-8 lg:ml-4">
            <li>
              <span className="font-medium text-neutral-600">
                {' '}
                Our Wedding Day & Wedding Party Section:
              </span>{' '}
              Display the schedule and wedding party details.
            </li>
            <li className="mt-3">
              <span className="font-medium text-neutral-600">
                {' '}
                Gift Registry Section:
              </span>{' '}
              Link to the gift registry website for easy gifting information.
            </li>
            <li className="mt-3">
              <span className="font-medium text-neutral-600">
                {' '}
                Location Section:
              </span>{' '}
              Utilizing the Google Map Embed API to display the location and any
              necessary information about the place.
            </li>
            <li className="mt-3">
              <span className="font-medium text-neutral-600">
                {' '}
                RSVP Section:
              </span>{' '}
              Fetch (POST) data to Google Sheets to manage guest attendance,
              number of attendees, and food preferences.
            </li>
            <li className="mt-3">
              <span className="font-medium text-neutral-600">
                {' '}
                Live Wedding Section:
              </span>{' '}
              Allows remote participation in the wedding through a provided
              link.
            </li>
            <li className="mt-3">
              <span className="font-medium text-neutral-600">
                {' '}
                Comment Section:
              </span>{' '}
              Users can leave and edit comments on the page by posting data to
              Google Sheets.
            </li>
          </ol>
        </div>
      </section>

      <section className="detail-section-middle">
        <div>
          <h4 className="detail-sub-title">Explore Wegic</h4>
          <p className="mt-4 max-w-3xl mx-auto">
            Would you like to see the final UI design or the code behind this
            project?
          </p>

          <div className="flex flex-row gap-4 justify-center items-center">
            <a
              href="https://naraejang-wegic-project.netlify.app/"
              target="_blank"
              rel="noopener noreferrer">
              <p className="mt-4 py-3 px-6 border border-neutral-300 rounded-full text-base transition-colors hover:text-neutral-700 hover:border-neutral-700 inline-block">
                Visit Live Demo
              </p>
            </a>

            <a
              href="https://github.com/NaraeJang/Wegic"
              target="_blank"
              rel="noopener noreferrer">
              <p className="mt-4 py-3 px-6 border border-neutral-300 rounded-full text-base transition-colors hover:text-neutral-700 hover:border-neutral-700 inline-block">
                Visit Github
              </p>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Wegic;
