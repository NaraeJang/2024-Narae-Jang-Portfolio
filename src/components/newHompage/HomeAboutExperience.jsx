const HomeAboutExperience = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="home_about--experience px-[2vw] mt-10">
      <div className="flex flex-row justify-between items-center">
        <h5 className="dt-black text-primary-600 text-4xl">Past Experience</h5>
        <p className="text-primary-500">2018 - {currentYear}</p>
      </div>
      <hr className="my-8" />
    </div>
  );
};
export default HomeAboutExperience;
