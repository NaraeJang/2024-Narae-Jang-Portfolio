import { workExperience } from '../../data/data';

const HomeAboutExperience = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="home_about--experience px-[2vw] mt-20">
      <div className="flex flex-row justify-between items-center">
        <h5 className="dt-black text-primary-600 text-2xl lg:text-3xl">
          Past Experience
        </h5>
        <p className="text-primary-500">2018 - {currentYear}</p>
      </div>
      <hr className="my-8" />
      {workExperience.map((work) => {
        return (
          <div key={work.id}>
            <div className="flex flex-col md:flex-row justify-between items-center ">
              <div className="flex flex-row justify-between  w-full md:w-[35vw] items-center">
                <p className="min-w-[10rem] text-left text-primary-500">
                  {work.year}
                </p>
                <p className="min-w-[10rem] text-right md:text-left text-primary-500">
                  {work.company || 'Various Clients'}
                </p>
              </div>
              <div className="w-full">
                <p className="dt-black text-primary-600 text-3xl lg:text-4xl text-right">
                  {work.company ? work.title : 'Freelance Designer'}
                </p>
              </div>
            </div>
            <hr className="my-8" />
          </div>
        );
      })}
    </div>
  );
};
export default HomeAboutExperience;
