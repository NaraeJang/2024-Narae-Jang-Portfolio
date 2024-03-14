import TitleText from '../TitleText';
import rdStypleGuide from '../../../assets/redesign-assets/rd-style.webp';

const IflyStyleGuide = () => {
  return (
    <section>
      <div className="custom-container w-[90%]">
        <TitleText text="Style guide" />
        <p>
          Each brand has a different brand identity. In order to maintain
          uniqueness, I used different colors depending on the brand so that it
          could align with each brand's guidelines. Furthermore, I used neutral
          colors for the general landing page where users can see every item
          regardless of brand. In this way, I was able to create the pages
          without harming each brand's identity.
        </p>
        <img
          src={rdStypleGuide}
          alt="ifly Style Guide img"
          className="w-full max-w-[57rem] mx-auto mt-8  rounded-xl"
        />
      </div>
    </section>
  );
};
export default IflyStyleGuide;
