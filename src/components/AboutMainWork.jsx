import { workExperience } from '../data/data';
import { Title } from './';

const AboutMainWork = () => {
  return (
    <section id="about-work">
      <div className="py-[6rem] pb-20">
        <Title title="work experience" />
        <div className="work-list text-left mt-6 w-full max-w-[40rem]">
          {workExperience.map((work) => {
            return (
              <article key={work.id}>
                <span className="text-sm">{work.year}</span>
                <h4 className="text-lg poppins-semibold leading-loose">
                  {work.title}
                </h4>
                {work.company && <p className="text-sm">{work.company}</p>}
                {work.other && (
                  <div>
                    <h5 className="text-sm poppins-medium pb-[2px]">
                      Past Clients:
                    </h5>
                    <p className="text-sm">{work.other.clients}</p>
                  </div>
                )}
                <hr className="my-8" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default AboutMainWork;
