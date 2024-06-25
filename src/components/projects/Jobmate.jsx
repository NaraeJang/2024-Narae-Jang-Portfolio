import jobMate01 from '../../assets/projects-images/jobmate01.webp';
import jobMate02 from '../../assets/projects-images/jobmate02.webp';
import jobMate03 from '../../assets/projects-images/jobmate03.webp';
import jobMate04 from '../../assets/projects-images/jobmate04.webp';
import jobMate05 from '../../assets/projects-images/jobmate05.webp';
import JobmateVideo from '../../assets/projects-images/JobmateVideo.mp4';

const Jobmate = () => {
  return (
    <main className="px-[4%] text-center">
      <section className="detail-section-middle">
        <div className="detail-title-container">
          <video autoPlay playsInline muted loop className="mt-4 md:mt-2">
            <source src={JobmateVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h2 className="detail-title">Jobmate</h2>
          <p className="detail-description">
            Self-executed Full-Stack Development Project
          </p>
          <div className="detail-category-container">
            <span className="detail-category-pill">Figma</span>
            <span className="detail-category-pill">VSCode</span>
          </div>
        </div>
        <div className="detail-content-container">
          <p>
            JobMate is your personalized solution for tracking job applications,
            crafted to simplify and streamline your job search process. With
            JobMate, you can efficiently manage your job applications, track the
            progress of each one, and stay organized throughout your career
            journey.
          </p>
        </div>
      </section>

      <section className="detail-section-middle-margin">
        <div className="flex flex-col-reverse md:grid md:grid-cols-5 md:grid-flow-row gap-2 lg:gap-4">
          <img
            src={jobMate04}
            alt="jobmate img"
            className="rounded-2xl md:col-span-2 md:row-span-3 object-cover h-full w-full object-center"
          />
          <img
            src={jobMate02}
            alt="jobmate img"
            className="invisible md:visible hidden md:inline-block  rounded-2xl md:col-span-3 md:row-span-2 object-cover h-full w-full object-center"
          />
          <img
            src={jobMate05}
            alt="jobmate img"
            className="invisible md:visible hidden md:inline-block rounded-2xl md:col-span-1 md:row-span-1 object-cover h-full w-full object-center"
          />{' '}
          <img
            src={jobMate03}
            alt="jobmate img"
            className="rounded-2xl md:col-span-2 md:row-span-3 object-cover h-full w-ful object-center"
          />
          <img
            src={jobMate01}
            alt="jobmate img"
            className="rounded-2xl md:col-span-3 md:row-span-2 object-cover h-full w-full object-center"
          />
        </div>
      </section>

      <section className="detail-section-middle text-left">
        <div>
          <h4 className="detail-sub-title">Process</h4>
          <div className="detail-content-container !max-w-full mt-4">
            <p>
              One of my online courses featured a similar project, and I thought
              it would be great to create my own based on that existing one.
            </p>
            <p>
              However, I aimed to incorporate different features, functions,
              layouts, and designs. Therefore, I began by jotting down
              everything I wanted to implement in this app, contemplating ways
              to enhance the user experience.
            </p>
            <p>
              On the design side, I progressed from low-fidelity wireframes to
              high-fidelity wireframes, developed a design system, and created a
              simple prototype.
            </p>
            <p>
              In terms of development, following the design, I initiated the
              front-end setup, including establishing basic CSS, structuring
              pages using React Router DOM with mock data, and developing CSS
              for each page using the Styled Components library. Afterward, I
              delved into the back-end, setting up the server, connecting to
              MongoDB using Mongoose, and creating schemas, routes, controllers,
              and custom errors. Once both front-end and back-end were in place,
              I integrated them using Axios and transferred data to the MongoDB
              Database. I tested CRUD methods from the front-end, addressing any
              bugs that arose.
            </p>

            <p>
              To enhance the user experience, I utilized React Query for
              managing and caching data, optimizing loading times and
              eliminating the need to submit data each time a page is loaded.
            </p>

            <p>
              The most challenging aspect was seamlessly connecting data without
              errors. Especially on the "All Jobs" pages, various methods were
              employed to communicate with the server—retrieving all data,
              updating data, deleting data, and fetching data specific to the
              user's search. Managing data and making functions independent yet
              seamlessly interconnected were significant learning points during
              this project. Being my first MERN Project, it took me a month to
              complete, presenting a fulfilling challenge and a valuable
              learning experience.
            </p>
          </div>
        </div>
      </section>

      <section className="detail-section-middle">
        <div>
          <h4 className="detail-sub-title">Explore Jobmate</h4>
          <p className="mt-4 max-w-3xl mx-auto">
            Would you like to see the final UI design or the code behind this
            project?
          </p>

          <div className="flex flex-row gap-4 justify-center items-center">
            <a
              href="https://jobmate-1gpn.onrender.com/"
              target="_blank"
              rel="noopener noreferrer">
              <p className="mt-4 py-3 px-6 border border-neutral-300 rounded-full text-base transition-colors hover:text-neutral-700 hover:border-neutral-700 inline-block">
                Visit Live Demo
              </p>
            </a>

            <a
              href="https://github.com/NaraeJang/Jobmate"
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
export default Jobmate;
