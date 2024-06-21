import Han01Img from '../../assets/logo/han_International1.webp';
import Han02Img from '../../assets/logo/han_International2.webp';
import Han03Img from '../../assets/logo/han_International3.webp';
import Han04Img from '../../assets/logo/han_International4.webp';
import Han05Img from '../../assets/logo/han_International5.webp';
import Han06Img from '../../assets/logo/han_International6.webp';
import Han07Img from '../../assets/logo/han_International7.webp';
import Han08Img from '../../assets/logo/han_International8.webp';
import Han09Img from '../../assets/logo/han_International9.webp';
import Han10Img from '../../assets/logo/han_International10.webp';
import Han11Img from '../../assets/logo/han_International11.webp';

const HanInternational = () => {
  return (
    <main className="px-[4%] text-center max-w-[1920px] mx-auto">
      <section className="detail-section-first">
        <img src={Han01Img} alt="Mockup" className="w-full" />
      </section>

      <section className="detail-section-middle">
        <div className="detail-title-container">
          <h2 className="detail-title">Han International Logo Design</h2>
          <p className="detail-description">
            Freelance Graphic Design Work for Han International
          </p>
          <div className="detail-category-container">
            <span className="detail-category-pill">Photoshop</span>
            <span className="detail-category-pill">Illustrator</span>
            <span className="detail-category-pill">Indesign</span>
          </div>
        </div>
        <div className="detail-content-container">
          <p>
            Han International is a trade company mainly from South Korea to
            Montreal.
          </p>
          <p>
            To develop unique and impactful brand identities through logo
            design, I created a comprehensive logo guideline. This guideline
            ensures consistency across all brand applications by defining
            typography, color palette, and variations of the logo, including
            full logo, secondary logo, and icon. By providing clear brand
            guidelines, we were able to strengthen Han International's brand
            identity and communicate their essence consistently across all
            touchpoints.
          </p>
        </div>
      </section>

      <img
        src={Han02Img}
        alt="Mockup"
        className="w-full rounded-2xl detail-section-middle-margin border border-neutral-200"
      />
      <img
        src={Han03Img}
        alt="Mockup"
        className="w-full rounded-2xl detail-section-middle-margin border border-neutral-200"
      />
      <img
        src={Han04Img}
        alt="Mockup"
        className="w-full rounded-2xl detail-section-middle-margin border border-neutral-200"
      />
      <img
        src={Han05Img}
        alt="Mockup"
        className="w-full rounded-2xl detail-section-middle-margin border border-neutral-200"
      />
      <img
        src={Han06Img}
        alt="Mockup"
        className="w-full rounded-2xl detail-section-middle-margin border border-neutral-200"
      />
      <img
        src={Han07Img}
        alt="Mockup"
        className="w-full rounded-2xl detail-section-middle-margin border border-neutral-200"
      />
      <img
        src={Han08Img}
        alt="Mockup"
        className="w-full rounded-2xl detail-section-middle-margin border border-neutral-200"
      />
      <img
        src={Han09Img}
        alt="Mockup"
        className="w-full rounded-2xl detail-section-middle-margin border border-neutral-200"
      />
      <img
        src={Han10Img}
        alt="Mockup"
        className="w-full rounded-2xl detail-section-middle-margin border border-neutral-200"
      />
      <img
        src={Han11Img}
        alt="Mockup"
        className="w-full rounded-2xl detail-section-middle-margin border border-neutral-200"
      />
    </main>
  );
};
export default HanInternational;
