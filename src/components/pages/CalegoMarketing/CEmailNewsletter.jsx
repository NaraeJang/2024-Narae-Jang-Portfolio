import TitleText from '../TitleText';
import CEmailNewsletter01 from '../../../assets/ifly-marketing/newsletter-01.webp';
import CEmailNewsletter02 from '../../../assets/ifly-marketing/newsletter-02.webp';
import CEmailNewsletter03 from '../../../assets/ifly-marketing/newsletter-03.webp';

const CEmailNewsletter = () => {
  return (
    <section className="text-left">
      <div className="custom-container  mx-auto w-[90%]">
        <TitleText text="Digital Content Creation" />
        <p>
          I specialized in creating engaging social media content. This involved
          crafting captivating e-letters, homepage/landing pages, editorials,
          and digital ads tailored specifically for social media platforms. My
          role included leading the design, creation, and delivery of compelling
          visual content, optimized for seamless integration into social media
          campaigns.
        </p>

        <h5 className="poppins-semibold leading-relaxed text-lg text-[#717171] mt-12 mb-4 lg:max-w-[80rem] lg:mx-auto">
          Email Newsletters
        </h5>
        <div className="flex flex-row  gap-4 items-start justify-center md:justify-start lg:justify-between lg:max-w-[80rem] lg:mx-auto">
          <img
            src={CEmailNewsletter01}
            alt="ifly newsletter img"
            className="w-[45%] max-w-[24rem] lg:w-[32%]"
          />
          <img
            src={CEmailNewsletter02}
            alt="ifly newsletter img"
            className="hidden invisible opacity-0 max-w-[24rem] lg:w-[32%] lg:block lg:visible lg:opacity-100"
          />
          <img
            src={CEmailNewsletter03}
            alt="ifly newsletter img"
            className="w-[45%] max-w-[24rem] lg:w-[32%]"
          />
        </div>
      </div>
    </section>
  );
};
export default CEmailNewsletter;
