import TitleText from '../TitleText';
import WebBanners from '../../../assets/ifly-marketing/WebBanners.webp';

const Cbanners = () => {
  return (
    <section className="text-left">
      <div className="custom-container  mx-auto w-[90%]">
        <h5 className="poppins-semibold leading-relaxed text-lg text-[#717171] mb-4 lg:max-w-[80rem] lg:mx-auto">
          Web banner
        </h5>

        <img
          src={WebBanners}
          alt="ifly newsletter img"
          className="w-full max-w-[64rem] mx-auto"
        />
      </div>
    </section>
  );
};
export default Cbanners;
