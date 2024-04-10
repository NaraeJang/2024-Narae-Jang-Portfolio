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
import Logo1Img from '../../assets/logo/logo1.webp';
import Logo2Img from '../../assets/logo/logo2.webp';

const LogoDesign = () => {
  return (
    <main id="logo_design-top" className="text-left w-[90%]  mx-auto">
      <section className="py-[6rem] lg:py-[10rem] flex flex-col">
        <div>
          <h3 className="dt-black text-3xl">Print Design</h3>
          <p className="mt-[1.75rem]">
            As a freelance designer, I collaborated with various clients,
            including Han International, Jako Restaurant, and R&K Consulting, to
            develop unique and impactful brand identities through logo design.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:gap-10 mt-8">
          <div>
            <h4 className="dt-black text-xl mb-2">Han International</h4>
            <p>
              In addition to designing Han International's primary logo, I also
              created a comprehensive logo guideline. This guideline ensures
              consistency across all brand applications by defining typography,
              color palette, and variations of the logo, including full logo,
              secondary logo, and icon. By providing clear brand guidelines, we
              were able to strengthen Han International's brand identity and
              communicate their essence consistently across all touchpoints.
            </p>
          </div>
          <div>
            <img src={Han01Img} className="w-full max-w-[100rem] mx-auto" />
            <img src={Han02Img} className="w-full max-w-[100rem] mx-auto" />
            <img src={Han03Img} className="w-full max-w-[100rem] mx-auto" />
            <img src={Han04Img} className="w-full max-w-[100rem] mx-auto" />
            <img src={Han05Img} className="w-full max-w-[100rem] mx-auto" />
            <img src={Han06Img} className="w-full max-w-[100rem] mx-auto" />
            <img src={Han07Img} className="w-full max-w-[100rem] mx-auto" />
            <img src={Han08Img} className="w-full max-w-[100rem] mx-auto" />
            <img src={Han09Img} className="w-full max-w-[100rem] mx-auto" />
            <img src={Han10Img} className="w-full max-w-[100rem] mx-auto" />
            <img src={Han11Img} className="w-full max-w-[100rem] mx-auto" />
          </div>
        </div>

        <div className="flex flex-col gap-4 md:gap-10 mt-[8rem]">
          <div>
            <h4 className="dt-black text-xl mb-2">Jako Restaurant</h4>
            <img src={Logo1Img} className="w-full max-w-[100rem] mx-auto" />
          </div>

          <div>
            <h4 className="dt-black text-xl mb-2">R&K Consulting</h4>
            <img src={Logo2Img} className="w-full max-w-[100rem] mx-auto" />
          </div>
        </div>
      </section>
    </main>
  );
};
export default LogoDesign;
