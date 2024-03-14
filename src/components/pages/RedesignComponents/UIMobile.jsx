import TitleText from '../TitleText';
import rdMobile from '../../../assets/redesign-assets/rd-mobile.webp';

const UIMobile = () => {
  return (
    <section>
      <div className="pb-[5rem] mx-auto w-[90%]">
        <TitleText text="UI design: Mobile" />
        <img
          src={rdMobile}
          alt="ifly ui design mobile img"
          className="w-full max-w-[1080px] mx-auto mt-8  "
        />
      </div>
    </section>
  );
};
export default UIMobile;
