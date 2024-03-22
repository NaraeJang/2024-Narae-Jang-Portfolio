import TitleText from '../TitleText';
import SocialMedia01 from '../../../assets/ifly-marketing/SocialMedia-01.webp';
import SocialMedia02 from '../../../assets/ifly-marketing/SocialMedia-02.webp';
import SocialMedia03 from '../../../assets/ifly-marketing/SocialMedia-03.webp';
import SocialMedia04 from '../../../assets/ifly-marketing/SocialMedia-04.webp';
import SocialMedia05 from '../../../assets/ifly-marketing/SocialMedia-05.gif';
import SocialMedia06 from '../../../assets/ifly-marketing/SocialMedia-06.webp';
import SocialMedia07 from '../../../assets/ifly-marketing/SocialMedia-07.webp';

const CSocialMedia = () => {
  return (
    <section className="custom-container w-[90%] mx-auto text-left lg:max-w-[80rem]">
      <h5 className="poppins-semibold leading-relaxed text-lg text-[#717171]  mb-4">
        Social Media Content
      </h5>

      <div className="flex flex-row flex-wrap gap-4 items-center justify-center lg:justify-between">
        <img
          src={SocialMedia07}
          alt="Social Media img 07"
          className="border rounded border-slate-200 shadow-sm w-[45%] max-w-[18rem]"
        />
        <img
          src={SocialMedia04}
          alt="Social Media img 04"
          className="border rounded border-slate-200 shadow-sm w-[45%] max-w-[18rem]"
        />
        <img
          src={SocialMedia05}
          alt="Social Media img 05"
          className="border rounded border-slate-200 shadow-sm w-[45%] max-w-[18rem]"
        />

        <img
          src={SocialMedia06}
          alt="Social Media img 06"
          className="border rounded border-slate-200 shadow-sm w-[45%] max-w-[18rem]"
        />
      </div>

      <div className="flex flex-col justify-center items-center gap-8 mt-20 md:flex-row">
        <img
          src={SocialMedia01}
          alt="Social Media Img"
          className="w-1/2 max-w-[23rem]"
        />
        <div className="flex flex-col gap-8">
          <div>
            <h5 className="poppins-semibold mb-1">
              Redesigning highlight icons
            </h5>
            <p className="max-w-[33rem]">
              By recreating IFLY's Instagram highlight icons, IFLY was able to
              emphasize IFLY's brand identity more and have consistency in
              IFLY's design.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <h5 className="poppins-semibold mb-1">before</h5>
              <img
                src={SocialMedia02}
                alt="Social Media img 02"
                className="w-full max-w-[33rem]"
              />
            </div>
            <div>
              <h5 className="poppins-semibold mb-1">after</h5>
              <img
                src={SocialMedia03}
                alt="Social Media img 03"
                className="w-full max-w-[33rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CSocialMedia;
