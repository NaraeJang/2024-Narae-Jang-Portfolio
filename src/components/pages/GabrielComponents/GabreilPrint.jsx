import GabrielTitleText from './GabrielTitleText';
import KiaBrochure01 from '../../../assets/gabriel/Kia-brochure.webp';
import KiaBrochure02 from '../../../assets/gabriel/Kia-brochure2.webp';
import KiaPrintAd from '../../../assets/gabriel/KIA-Print-Ad.webp';
import NissanPrintAd from '../../../assets/gabriel/Nissan_Suburban.webp';
import WashCoupon01 from '../../../assets/gabriel/Car-wash-coupon01.webp';
import WashCoupon02 from '../../../assets/gabriel/Car-wash-coupon02.webp';
import LexusVIPCard from '../../../assets/gabriel/LexusVIPCard.webp';

const GabreilPrint = () => {
  return (
    <>
      <section className="custom-container w-[90%]">
        <GabrielTitleText text="Print Design" />
        <p>
          My responsibilities extended to generating fresh ideas, retouching
          images, and designing materials that maintain consistency across
          various platforms. This involved closely communicating with multiple
          dealerships and assisting in proofreading to ensure all design work,
          including adjustments, adhered to strict brand guidelines. The scope
          of this work covered everything from basic layout adjustments to the
          creation of comprehensive branding materials.
        </p>

        <div className="flex flex-col gap-4 items-center justify-center mt-10">
          <img
            src={KiaBrochure01}
            alt="print design image"
            className="w-full max-w-[80rem] rounded-2xl shadow-sm"
          />
          <img
            src={KiaBrochure02}
            alt="print design image"
            className="w-full max-w-[80rem] rounded-2xl shadow-sm"
          />
        </div>

        <div className="flex flex-col gap-4 items-center justify-center mt-10 lg:flex-row lg:items-start">
          <img
            src={KiaPrintAd}
            alt="Kia print design image"
            className="w-full max-w-[25rem] rounded-sm shadow-sm"
          />
          <img
            src={NissanPrintAd}
            alt="Nissan print design image"
            className="w-full max-w-[32.5rem] rounded-sm shadow-sm"
          />
        </div>

        <div className="flex flex-col gap-4 items-center justify-center mt-10 xl:flex-row">
          <img
            src={WashCoupon01}
            alt="Car wash coupon image"
            className="w-full max-w-[40rem] rounded-sm shadow-sm"
          />
          <img
            src={WashCoupon02}
            alt="Car wash coupon image"
            className="w-full max-w-[40rem] rounded-sm shadow-sm"
          />
        </div>

        <img
          src={LexusVIPCard}
          alt="Lexus VIP Card image"
          className="w-full max-w-[58rem] rounded-sm shadow-sm mt-10 mx-auto"
        />
      </section>

      <section className="custom-container w-[90%] text-center">
        <h3 className="dt-black text-xl mb-2 text-[#4e3de8]">Thank you!</h3>
        <p>I appreciate you taking the time to check out my project.</p>
      </section>
    </>
  );
};
export default GabreilPrint;
