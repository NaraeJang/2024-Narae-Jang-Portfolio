import { GanaTitleText } from './';
import designSystemImg from '../../../assets/ganadara-assets/Design-System.webp';

const GanaDesignSystem = () => {
  return (
    <section id="gana-design-system">
      <div className="custom-container w-[90%] text-left">
        <GanaTitleText text="Design system" />
        <img
          src={designSystemImg}
          alt="Ganadara design system img"
          className="mx-auto w-full max-w-[70rem] mt-6"
        />
      </div>
    </section>
  );
};
export default GanaDesignSystem;
