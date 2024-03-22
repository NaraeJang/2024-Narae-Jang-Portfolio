import TitleText from '../TitleText';
import Presentation from '../../../assets/ifly-marketing/Presentation.webp';
import BrandGuidelines from '../../../assets/ifly-marketing/BrandGuidelines.webp';

const CEnding = () => {
  return (
    <>
      <section className="text-left">
        <div className="py-[6rem] lg:py-[10rem] mx-auto w-[90%]">
          <TitleText text="Presentation Visual Asset" />
          <p>
            I also played a pivotal role in crafting visual assets for
            presentations. This included designing slides, creating
            infographics, and ensuring cohesive visual elements to effectively
            communicate key messages.
          </p>

          <img
            src={Presentation}
            alt="ifly presentation visual assets img"
            className="mt-4 w-full max-w-[56rem] mx-auto"
          />
        </div>
      </section>

      <section className="text-left mb-20">
        <div className="py-[6rem] lg:py-[10rem] mx-auto w-[90%]">
          <TitleText text="VACAY Brand Guidelines" />
          <p>
            I contributed to the design and innovation of influencer and brand
            guidelines for VACAY, collaborating with my manager to ensure they
            reflected our brand identity and maintained consistency across all
            platforms.
          </p>

          <img
            src={BrandGuidelines}
            alt="ifly brand guidelines img"
            className="mt-4 w-full max-w-[56rem] mx-auto border border-gray-200 shadow-sm rounded-2xl"
          />
        </div>
      </section>
    </>
  );
};
export default CEnding;
