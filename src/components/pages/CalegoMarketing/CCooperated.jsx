import TitleText from '../TitleText';
import Arcade from '../../../assets/ifly-marketing/Arcade.webp';
import WrrantyCard01 from '../../../assets/ifly-marketing/WarrantyCard-01.webp';
import WrrantyCard02 from '../../../assets/ifly-marketing/WarrantyCard-02.webp';
import WrrantyCard03 from '../../../assets/ifly-marketing/WarrantyCard-03.webp';
import BabyMobile from '../../../assets/ifly-marketing/Baby-Mobile.gif';
import BabyDesktop from '../../../assets/ifly-marketing/Baby-desktop.gif';

const CCooperated = () => {
  return (
    <section className="text-left">
      <div className="py-[6rem] lg:py-[10rem]  mx-auto w-[90%]">
        <TitleText text="Collaborative Projects with External Companies" />
        <p>
          While serving as the senior graphic designer at Calego, I actively
          collaborated with partner companies. This involved creating print and
          graphic design materials, providing consulting services, and
          contributing to the redesign of their webpages.
        </p>

        <div className="w-full max-w-[50rem] mx-auto flex flex-col gap-8">
          <div>
            <h5 className="poppins-semibold leading-relaxed text-lg text-[#717171] mt-12 mb-4 lg:max-w-[80rem] lg:mx-auto">
              Arcade1Up warranty sticker
            </h5>

            <img
              src={Arcade}
              alt="Arcade Sticker img"
              className="w-full max-w-[40rem] mx-auto"
            />
            <p className="text-sm text-right mt-4">
              *The QR code does not lead to a functioning webpage.
            </p>
          </div>

          <div>
            <h5 className="poppins-semibold leading-relaxed text-lg text-[#717171] mt-12 mb-4 lg:max-w-[80rem] lg:mx-auto">
              Warranty Card
            </h5>

            <div className="flex flex-row gap-2">
              <img
                src={WrrantyCard01}
                alt="Warranty Card img"
                className="w-[30%] max-w-[14rem] mx-auto"
              />
              <img
                src={WrrantyCard02}
                alt="Warranty Card img"
                className="w-[30%] max-w-[14rem] mx-auto"
              />
              <img
                src={WrrantyCard03}
                alt="Warranty Card img"
                className="w-[30%] max-w-[14rem] mx-auto"
              />
            </div>
            <p className="text-sm text-right mt-4">
              *The QR code does not lead to a functioning webpage.
            </p>
          </div>

          <div>
            <h5 className="poppins-semibold leading-relaxed text-lg text-[#717171] mt-12 mb-4 lg:max-w-[80rem] lg:mx-auto">
              Redesigning Babybrezza warranty step pages
            </h5>

            <div className="flex flex-row">
              <img
                src={BabyDesktop}
                alt="Babybrezza Desktop warranty step gif"
                className="w-4/5 max-w-[38rem] mx-auto"
              />
              <img
                src={BabyMobile}
                alt="Babybrezza Mobile warranty step gif"
                className="w-1/5 max-w-[8rem] mx-auto my-auto h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CCooperated;
