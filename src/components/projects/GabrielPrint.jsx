import KiaBrochure01 from '../../assets/gabriel/Kia-brochure.webp';
import KiaBrochure02 from '../../assets/gabriel/Kia-brochure2.webp';
import KiaPrintAd from '../../assets/gabriel/KIA-Print-Ad.webp';
import NissanPrintAd from '../../assets/gabriel/Nissan_Suburban.webp';
import WashCoupon01 from '../../assets/gabriel/Car-wash-coupon01.webp';
import WashCoupon02 from '../../assets/gabriel/Car-wash-coupon02.webp';
import LexusVIPCard from '../../assets/gabriel/LexusVIPCard.webp';
import heroImg from '../../assets/newItemThumbs/GabrielPrint.webp';

const GabrielPrint = () => {
  return (
    <main className="px-[4%] text-center">
      <section className="detail-section-first">
        <img
          src={heroImg}
          alt="Gabriel Publication Design"
          className="w-full"
        />
      </section>

      <section className="detail-section-middle">
        <div className="detail-title-container">
          <h2 className="detail-title">Publication Design</h2>
          <p className="detail-description">
            For All Dealerships that belongs to Groupe Gabriel with in-house
            marketing team in 2019 - 2021
          </p>
          <div className="detail-category-container">
            <span className="detail-category-pill">Photoshop</span>
            <span className="detail-category-pill">Illustrator</span>
            <span className="detail-category-pill">Indesign</span>
          </div>
        </div>
        <div className="detail-content-container">
          <p>
            Groupe Gabriel is one of the largest car dealership groups in the
            Greater Montreal area.
          </p>
          <p>
            My responsibilities were generating fresh ideas, retouching images,
            and designing materials that maintain consistency across various
            platforms. This involved closely communicating with multiple
            dealerships and assisting in proofreading to ensure all design work,
            including adjustments, adhered to strict brand guidelines.
          </p>
          <p>
            The scope of this work covered everything from basic layout
            adjustments to the creation of comprehensive branding materials.
          </p>
        </div>
      </section>

      <div className="flex flex-col lg:flex-row gap-4 md:gap-8 my-4 md:my-8">
        <img
          src={NissanPrintAd}
          alt="Nissan Suburban"
          className="object-contain h-full max-h-full rounded-2xl border border-neutral-200 col-span-3"
        />

        <div className="py-4 md:py-auto px-4 flex flex-col gap-4 justify-center items-center w-full rounded-2xl bg-neutral-50 object-contain">
          <img src={WashCoupon01} alt="Nissan Car Wash Coupon" />
          <img src={WashCoupon02} alt="Nissan Car Wash Coupon" />
        </div>
      </div>

      <img
        src={KiaBrochure01}
        alt="Nissan Brochure"
        className="object-fit rounded-2xl w-full  md:gap-8 my-4 md:my-8"
      />
      <img
        src={KiaBrochure02}
        alt="Nissan Brochure"
        className="object-fit rounded-2xl w-full  md:gap-8 my-4 md:my-8"
      />

      <div className="flex flex-col lg:flex-row gap-4 md:gap-8 my-4 md:my-8">
        <div className="py-4 md:py-auto px-4 rounded-2xl bg-neutral-100 w-full">
          <img
            src={LexusVIPCard}
            alt="Lexus Vip Card"
            className="object-cover w-full h-full rounded-2xl"
          />
        </div>

        <img
          src={KiaPrintAd}
          alt="Kia Gabriel Ouest Print Ad"
          className="rounded-2xl bg-neutral-50 object-contain w-full lg:w-[70%]  border border-neutral-200"
        />
      </div>
    </main>
  );
};
export default GabrielPrint;
