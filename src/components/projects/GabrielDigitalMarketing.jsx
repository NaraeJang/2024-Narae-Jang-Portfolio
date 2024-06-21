import heroImg from '../../assets/gabriel/banners.webp';
import marketingImg from '../../assets/gabriel/Website.webp';
import marketingImg03 from '../../assets/gabriel/Web-banners.webp';
import marketingImg02 from '../../assets/gabriel/banner2.webp';

// Logos
import InfinitiLogo from '../../assets/gabriel/Infiniti_logo.webp';
import KiaLogo from '../../assets/gabriel/KIA_logo.webp';
import NissanLogo from '../../assets/gabriel/Nissan.webp';
import LexusLogo from '../../assets/gabriel/lexus.webp';

// Videos
import InfinityVideo from '../../assets/gabriel/GabrielVideo/infiniti.mp4';
import KiaVideo from '../../assets/gabriel/GabrielVideo/kia.mp4';
import LexusVideo from '../../assets/gabriel/GabrielVideo/lexus.mp4';
import NissanVideo from '../../assets/gabriel/GabrielVideo/nissan.mp4';

const GabrielDigitalMarketing = () => {
  return (
    <main className="px-[4%] text-center">
      <section className="detail-section-first">
        <img
          src={heroImg}
          alt="Gabriel Digital Marketing Design"
          className="w-full"
        />
      </section>

      <section className="detail-section-middle">
        <div className="detail-title-container">
          <h2 className="detail-title">Digital Marketing Design</h2>
          <p className="detail-description">
            For All Dealerships that belongs to Groupe Gabriel with in-house
            marketing team in 2019 - 2021
          </p>
          <div className="detail-category-container">
            <span className="detail-category-pill">Photoshop</span>
            <span className="detail-category-pill">Illustrator</span>
            <span className="detail-category-pill">Indesign</span>
            <span className="detail-category-pill">Flexitive</span>
          </div>
        </div>
        <div className="detail-content-container">
          <p>
            Groupe Gabriel is one of the largest car dealership groups in the
            Greater Montreal area.
          </p>
          <p>
            As a web & graphic designer at Groupe Gabriel, My responsibilities
            included designing the{' '}
            <span className="font-medium text-neutral-600">
              monthly promotional web contents
            </span>{' '}
            on Groupe Gabriel websites,{' '}
            <span className="font-medium text-neutral-600">
              visual contents on Social media
            </span>{' '}
            such as Facebook and Instagram,{' '}
            <span className="font-medium text-neutral-600">
              responsive animated web banners
            </span>{' '}
            for all channels,{' '}
            <span className="font-medium text-neutral-600">
              email campaigns
            </span>{' '}
            and more.
          </p>
          <p>
            My goal in this position was connecting with potential customers
            using the internet and other forms of digital communication.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-8 w-full justify-between p-12 rounded-2xl bg-neutral-50">
        <video autoPlay muted loop className="">
          <source src={InfinityVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <video autoPlay muted loop className="max-lg:hidden">
          <source src={KiaVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <video autoPlay muted loop className="">
          <source src={LexusVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <video autoPlay muted loop className="max-lg:hidden">
          <source src={NissanVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      <section className="detail-section-middle">
        <div className="detail-content-container flex-1">
          <p>
            These banners were designed to engage viewers across Groupe
            Gabriel's online platforms. By leveraging animation techniques, I
            aimed to enhance brand visibility and drive user interaction.
          </p>
          <p>
            By clicking on the logos, you can view the animations in action.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 place-items-center max-w-5xl mx-auto">
          <a
            href="https://app.flexitive.com/preview/?breakpoints=728x90,300x50,320x50,300x250,300x600,970x250&pageId=2xvC1Otvnoy&templateId=5686&tab=fix-inPage"
            target="_blank"
            rel="noopener noreferrer"
            className="h-32 w-32 md:h-44 md:w-44 bg-white rounded-full p-8 grid place-items-center shadow-logo transition-all">
            <img
              src={InfinitiLogo}
              alt="Infiniti Logo"
              className="object-contain"
            />
          </a>
          <a
            href="https://app.flexitive.com/preview/?breakpoints=300x50,320x50,728x90,970x250,300x250,300x600&pageId=6vwUSmFtU3v&templateId=5686&tab=fix-inPage"
            target="_blank"
            rel="noopener noreferrer"
            className="h-32 w-32 md:h-44 md:w-44 bg-white rounded-full p-8 grid place-items-center shadow-logo transition-all">
            <img src={KiaLogo} alt="Kia Logo" className="object-contain" />
          </a>
          <a
            href="https://app.flexitive.com/preview/?breakpoints=970x250,300x50,300x250,320x50,728x90,300x600&pageId=N4XwH4wbCqm&templateId=5686&tab=fix-inPage"
            target="_blank"
            rel="noopener noreferrer"
            className="h-32 w-32 md:h-44 md:w-44 bg-white rounded-full p-8 grid place-items-center shadow-logo transition-all">
            <img
              src={NissanLogo}
              alt="Nissan Logo"
              className="object-contain"
            />
          </a>
          <a
            href="https://app.flexitive.com/preview/?breakpoints=300x50,320x50,728x90,300x250,970x250,300x600&pageId=ACfxaJGphMK&templateId=5686&tab=fix-inPage"
            target="_blank"
            rel="noopener noreferrer"
            className="h-32 w-32 md:h-44 md:w-44 bg-white rounded-full p-8 grid place-items-center shadow-logo transition-all">
            <img src={LexusLogo} alt="Lexus Logo" className="object-contain" />
          </a>
        </div>
      </section>

      <img
        src={marketingImg03}
        alt="Gabriel Digital Marketing Design"
        className="w-full object-cover rounded-2xl border border-neutral-100 detail-section-middle-margin"
      />
      <img
        src={marketingImg}
        alt="Gabriel Digital Marketing Design"
        className="w-full object-cover rounded-2xl detail-section-middle-margin"
      />

      <section className="detail-section-middle">
        <div className="w-full detail-content-container">
          <p>
            Furthermore, I actively contributed to maintaining and optimizing
            Groupe Gabriel’s websites, which involved creating visual assets
            tailored to the specific needs of different dealerships and brands.
            This collaborative effort with web developers ensured that the
            websites remained up-to-date and functional, while also addressing
            any errors.
          </p>
        </div>
      </section>

      <img
        src={marketingImg02}
        alt="Gabriel Digital Marketing Design"
        className="w-full object-cover rounded-2xl detail-section-middle-margin"
      />
    </main>
  );
};
export default GabrielDigitalMarketing;
