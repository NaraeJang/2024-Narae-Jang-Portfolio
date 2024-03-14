import TitleText from '../TitleText';
import rdDesktop from '../../../assets/redesign-assets/rd-desktp.webp';

const UIDesktop = () => {
  return (
    <section>
      <div className="mx-auto py-[5rem] w-[90%]">
        <TitleText text="UI design: Desktop" />
        <img
          src={rdDesktop}
          alt="ifly ui design desktop img"
          className="w-full max-w-[1080px] mx-auto mt-8  "
        />
      </div>
    </section>
  );
};
export default UIDesktop;
