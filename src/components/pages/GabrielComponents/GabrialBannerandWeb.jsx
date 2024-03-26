import GabrielTitleText from './GabrielTitleText';
import InfinitiLogo from '../../../assets/gabriel/Infiniti_logo.webp';
import KiaLogo from '../../../assets/gabriel/KIA_logo.webp';
import NissanLogo from '../../../assets/gabriel/Nissan.webp';
import LexusLogo from '../../../assets/gabriel/lexus.webp';
import WebBannerWebp from '../../../assets/gabriel/Web-banners.webp';
import WebsiteWebp from '../../../assets/gabriel/Website.webp';
import WebsiteWebp02 from '../../../assets/gabriel/banners.webp';

const GabrialBannerandWeb = () => {
  return (
    <>
      <section className="custom-container w-[90%]">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-20 xl:justify-between">
          <div className="md:w-3/5 lg:w-1/2">
            <h4 className="dt-black text-xl capitalize">
              Animated web banners
            </h4>
            <p className="text-sm text-gray-400">
              Click to one of the logo to see the animation.
            </p>
            <p className="mt-8">
              I also took charge of digital marketing initiatives, including the
              development of animated web banners. These banners were designed
              to engage viewers across Groupe Gabriel's online platforms. By
              leveraging animation techniques, I aimed to enhance brand
              visibility and drive user interaction.
              <br />
              By clicking on the logos, you can view the animations in action.
            </p>
          </div>

          <div className="grid grid-rows-2 grid-cols-2 place-items-center gap-y-5 gap-x-10 lg:gap-x-20 2xl:flex 2xl:flex-fow 2xl:shrink-0">
            <a
              href="https://app.flexitive.com/preview/?breakpoints=728x90,300x50,320x50,300x250,300x600,970x250&pageId=2xvC1Otvnoy&templateId=5686&tab=fix-inPage"
              target="_blank"
              rel="noopener noreferrer"
              className=" max-w-[11.25rem] hover:scale-105 transition-transform ease-linear duration-100">
              <img src={InfinitiLogo} alt="Infiniti Logo" className="w-full" />
            </a>

            <a
              href="https://app.flexitive.com/preview/?breakpoints=300x50,320x50,728x90,970x250,300x250,300x600&pageId=6vwUSmFtU3v&templateId=5686&tab=fix-inPage"
              target="_blank"
              rel="noopener noreferrer"
              className=" max-w-[11.25rem] hover:scale-105 transition-transform ease-linear duration-100">
              <img src={KiaLogo} alt="Kia Logo" className="w-full" />
            </a>

            <a
              href="https://app.flexitive.com/preview/?breakpoints=970x250,300x50,300x250,320x50,728x90,300x600&pageId=N4XwH4wbCqm&templateId=5686&tab=fix-inPage"
              target="_blank"
              rel="noopener noreferrer"
              className=" max-w-[11.25rem] hover:scale-105 transition-transform ease-linear duration-100">
              <img src={NissanLogo} alt="Nissan Logo" className="w-full" />
            </a>

            <a
              href="https://app.flexitive.com/preview/?breakpoints=300x50,320x50,728x90,300x250,970x250,300x600&pageId=ACfxaJGphMK&templateId=5686&tab=fix-inPage"
              target="_blank"
              rel="noopener noreferrer"
              className=" max-w-[11.25rem] hover:scale-105 transition-transform ease-linear duration-100">
              <img src={LexusLogo} alt="Lexus Logo" className="w-full" />
            </a>
          </div>
        </div>

        <img
          src={WebBannerWebp}
          alt="web banner images"
          className="w-full rounded-2xl shadow-sm mt-20 max-w-[80rem] mx-auto"
        />
      </section>

      <section className="custom-container w-[90%]">
        <GabrielTitleText text="Website Maintenance & Visual Asset Management" />
        <p>
          In addition to my design duties, I actively contributed to maintaining
          and optimizing Groupe Gabriel’s websites, which involved creating
          visual assets tailored to the specific needs of different dealerships
          and brands. This collaborative effort with web developers ensured that
          the websites remained up-to-date and functional, while also addressing
          any errors. My goal was to create a seamless online experience that
          reflected the high standards of the Groupe Gabriel brand across all
          platforms.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 md:gap-8 lg:gap-10 rounded-xl shadow-sm mt-10">
          <img
            src={WebsiteWebp}
            alt="Gabriel Web hero banner image"
            className="w-full max-w-[80rem]"
          />
          <img
            src={WebsiteWebp02}
            alt="Gabriel Web hero banner image"
            className="w-full max-w-[80rem]"
          />
        </div>
      </section>
    </>
  );
};
export default GabrialBannerandWeb;
