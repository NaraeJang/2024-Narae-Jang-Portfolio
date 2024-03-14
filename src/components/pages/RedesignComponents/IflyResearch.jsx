import TitleText from '../TitleText';
import rdPainPoints from '../../../assets/redesign-assets/rd-pain_points.webp';

const IFLYResearch = () => {
  return (
    <section>
      <div className="custom-container w-[90%]">
        <TitleText text="User research: summary" />
        <p>
          Based on existing user data provided by IFLY and discussions with IFLY
          internal teams, I gained better insight into the end users, including
          their main goals, needs and pain points to deliver a better user
          experience.
        </p>
        <img
          src={rdPainPoints}
          alt="ifly pain point img"
          className="w-full max-w-[57rem] mx-auto mt-8"
        />
      </div>
    </section>
  );
};
export default IFLYResearch;
