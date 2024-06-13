import { workExperience } from '../../../data/workExperience';

const Journey = () => {
  return (
    <section className="my-28 md:my-40 lg:my-52 px-[4%]">
      <h3 className="font-title text-white uppercase text-3xl leading-tight">
        My Journey
      </h3>

      <ol className="list-none mt-10 md:mt-20 md:px-[4%]">
        <li className="border-b border-b-neutral-700 lg:hover:border-b-neutral-800 lg:border-b-black grid grid-cols-3 lg:grid-cols-7 gap-4 text-neutral-400 pb-6">
          <p className="col-span-3">Current</p>
          <div id="certification-btn" className="col-span-4">
            <p className="text-neutral-100 text-lg">
              Have been self-studying UX/UI design and front-end development.
              I’ve gotten 13 certifications in both fields. Always looking for
              opportunities to learn more technologies.
            </p>
            <a href="#" className="group">
              <div className="relative overflow-hidden border border-gray-800 text-gray-800 inline-block text-[15px] leading-[15px] py-[18px] px-[18px] bg-white cursor-pointer select-none">
                <span className="relative z-10 transition-colors duration-[600ms] ease-[cubic-bezier(0.48,0,0.12,1)]">
                  Hover me
                </span>
                <span className="text-white block absolute bottom-0 transition-all duration-[500ms] ease-[cubic-bezier(0.48,0,0.12,1)] z-20 opacity-0 top-1/2 left-1/2 transform translate-y-[225%] translate-x-[-50%] h-[14px] leading-[13px]">
                  Thanks!
                </span>
              </div>
            </a>
          </div>
        </li>

        {workExperience.map((work, index) => {
          const { id, title, company, year } = work;

          return (
            <li
              className="border-b border-b-neutral-700 lg:hover:border-b-neutral-800 lg:border-b-black grid grid-cols-4 lg:grid-cols-7 gap-4 text-neutral-400 py-6"
              key={id}>
              <p className="col-span-2 lg:col-span-1">{year}</p>
              <p className="col-span-2 text-right lg:text-left">{company}</p>
              <p className="col-span-4 text-neutral-100 text-lg">{title}</p>
            </li>
          );
        })}
      </ol>
    </section>
  );
};
export default Journey;
