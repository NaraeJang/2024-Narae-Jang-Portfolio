const Wegic = () => {
  return (
    <main className="px-[4%] text-center">
      <section className="detail-section-middle">
        <div className="detail-title-container">
          <h2 className="detail-title">Wegic</h2>
          <p className="detail-description">
            Freelance UX/UI Designer project
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
                Visit Site
              </p>
            </a>

            <a
              href="https://github.com/NaraeJang/Wegic"
              target="_blank"
              rel="noopener noreferrer">
              <p className="mt-4 py-3 px-6 rounded-full text-base transition-colors hover:text-neutral-700 hover:border-neutral-700 inline-block">
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
