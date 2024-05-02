import TitleText from '../TitleText';
import CEmailNewsletter01 from '../../../assets/ifly-marketing/email/01.gif';
import CEmailNewsletter02 from '../../../assets/ifly-marketing/email/02.gif';
import CEmailNewsletter03 from '../../../assets/ifly-marketing/email/03.webp';
import CEmailNewsletter04 from '../../../assets/ifly-marketing/email/04.webp';
import CEmailNewsletter05 from '../../../assets/ifly-marketing/email/05.webp';
import CEmailNewsletter06 from '../../../assets/ifly-marketing/email/06.gif';
import CEmailNewsletter07 from '../../../assets/ifly-marketing/email/07.gif';
import CEmailNewsletter08 from '../../../assets/ifly-marketing/email/08.webp';

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
        <div className="gap-8 columns-1 sm:columns-2 lg:columns-3 lg:max-w-[80rem] lg:mx-auto column">
          <img
            src={CEmailNewsletter01}
            alt="ifly newsletter img"
            className="pb-8"
          />
          <img
            src={CEmailNewsletter02}
            alt="ifly newsletter img"
            className="pb-8"
          />
          <img
            src={CEmailNewsletter03}
            alt="ifly newsletter img"
            className="pb-8"
          />
          <img
            src={CEmailNewsletter04}
            alt="ifly newsletter img"
            className="pb-8"
          />
          <img
            src={CEmailNewsletter05}
            alt="ifly newsletter img"
            className="pb-8 hidden lg:block"
          />
          <img
            src={CEmailNewsletter06}
            alt="ifly newsletter img"
            className="pb-8 hidden lg:block"
          />
          <img
            src={CEmailNewsletter07}
            alt="ifly newsletter img"
            className="pb-8 hidden lg:block"
          />
        </div>
      </div>
    </section>
  );
};
export default CEmailNewsletter;
