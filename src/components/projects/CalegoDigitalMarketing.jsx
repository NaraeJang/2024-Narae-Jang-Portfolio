import heroImg from '../../assets/ifly-marketing/Ifly-Marketing-Bg.webp';

// Email
import CEmailNewsletter01 from '../../assets/ifly-marketing/email/01.gif';
import CEmailNewsletter02 from '../../assets/ifly-marketing/email/02.gif';
import CEmailNewsletter03 from '../../assets/ifly-marketing/email/03.webp';
import CEmailNewsletter04 from '../../assets/ifly-marketing/email/04.webp';
import CEmailNewsletter05 from '../../assets/ifly-marketing/email/05.webp';
import CEmailNewsletter06 from '../../assets/ifly-marketing/email/06.gif';
import CEmailNewsletter07 from '../../assets/ifly-marketing/email/07.gif';
import CEmailNewsletter08 from '../../assets/ifly-marketing/email/08.webp';

// Social Media
import SocialMedia01 from '../../assets/ifly-marketing/SocialMedia-01.webp';
import SocialMedia02 from '../../assets/ifly-marketing/SocialMedia-02.webp';
import SocialMedia03 from '../../assets/ifly-marketing/SocialMedia-03.webp';
import SocialMedia04 from '../../assets/ifly-marketing/SocialMedia-04.webp';
import SocialMedia05 from '../../assets/ifly-marketing/SocialMedia-05.gif';
import SocialMedia06 from '../../assets/ifly-marketing/SocialMedia-06.webp';
import SocialMedia07 from '../../assets/ifly-marketing/SocialMedia-07.webp';

// Web banners
import WebBanners from '../../assets/ifly-marketing/WebBanners.webp';

// Collaborated projects
import Arcade from '../../assets/ifly-marketing/Arcade.webp';
import WrrantyCard01 from '../../assets/ifly-marketing/WarrantyCard-01.webp';
import WrrantyCard02 from '../../assets/ifly-marketing/WarrantyCard-02.webp';
import WrrantyCard03 from '../../assets/ifly-marketing/WarrantyCard-03.webp';
import BabyMobile from '../../assets/ifly-marketing/Baby-Mobile.gif';
import BabyDesktop from '../../assets/ifly-marketing/Baby-desktop.gif';

// Presentation
import Presentation from '../../assets/ifly-marketing/Presentation.webp';

const CalegoDigitalMarketing = () => {
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
          <h2 className="detail-title">Calego Digital Marketing Design</h2>
          <p className="detail-description">
            Senior Graphic Designer in Digital Marketing Team
            <br />
            Collaborated with Art Director, Creative Director, Marketing
            Coordinator
          </p>
          <div className="detail-category-container">
            <span className="detail-category-pill">Photoshop</span>
            <span className="detail-category-pill">Illustrator</span>
            <span className="detail-category-pill">Figma</span>
            <span className="detail-category-pill">Canva</span>
          </div>
        </div>
        <div className="detail-content-container">
          <p>
            Calego is a company that owns four travel accessories brands (iFLY,
            VACAY, iFLY SMART, and Sammys), with a primary focus on iFLY
            Luggage. In addition to the luggage brands, they also operate a
            software called Wholescale.
          </p>
          <p>
            As a Senior Graphic Designer in the marketing department, I was
            responsible for a variety of tasks, including{' '}
            <span className="font-medium text-neutral-600">
              creating and updating email campaigns, developing web content,
              designing social media content, and creating presentation
              templates.
            </span>{' '}
            I also worked on{' '}
            <span className="font-medium text-neutral-600">
              website redesigns, developed new collection landing pages, and
              refined brand and influencer guidelines.
            </span>{' '}
          </p>
          <p>
            Furthermore, I assisted in{' '}
            <span className="font-medium text-neutral-600">
              planning and executing photo shoots and retouching selected
              photos.
            </span>{' '}
            When Calego collaborated with other companies, I{' '}
            <span className="font-medium text-neutral-600">
              communicated with their marketing or sales teams
            </span>{' '}
            and{' '}
            <span className="font-medium text-neutral-600">
              designed the necessary assets
            </span>{' '}
            as the lead designer.
          </p>
        </div>
      </section>

      <section className="detail-section-middle">
        <div className="text-left">
          <h4 className="detail-sub-title">Email Campaigns</h4>
          <div className="detail-content-container !max-w-full mt-4">
            <p>
              I managed a variety of email campaigns including promotional
              emails, welcome series, abandoned cart notifications, confirmation
              emails, and more.
            </p>
          </div>
        </div>

        <div className="gap-8 columns-1 sm:columns-2 lg:columns-3 lg:max-w-[80rem] lg:mx-auto column ">
          <img
            src={CEmailNewsletter01}
            alt="ifly newsletter img"
            className="pb-8"
          />
          <img
            src={CEmailNewsletter02}
            alt="ifly newsletter img"
            className="pb-8"
          />
          <img
            src={CEmailNewsletter03}
            alt="ifly newsletter img"
            className="pb-8"
          />
          <img
            src={CEmailNewsletter04}
            alt="ifly newsletter img"
            className="pb-8"
          />
          <img
            src={CEmailNewsletter05}
            alt="ifly newsletter img"
            className="pb-8 hidden lg:block"
          />
          <img
            src={CEmailNewsletter06}
            alt="ifly newsletter img"
            className="pb-8 hidden lg:block"
          />
          <img
            src={CEmailNewsletter07}
            alt="ifly newsletter img"
            className="pb-8 hidden lg:block"
          />
        </div>
      </section>

      <section className="detail-section-middle">
        <div className="text-left">
          <h4 className="detail-sub-title">Social Media Contents</h4>
          <p className="mt-4">
            I developed visual assets such as carousel posts, stories, and
            reels, tailored to specific marketing strategies.
          </p>
        </div>

        <div className="columns-2 md:columns-4">
          <img
            src={SocialMedia07}
            alt="Social Media img 07"
            className="border rounded-lg border-neutral-50 shadow-sm mb-8"
          />
          <img
            src={SocialMedia04}
            alt="Social Media img 04"
            className="border rounded-lg border-neutral-50 shadow-sm mb-8"
          />
          <img
            src={SocialMedia05}
            alt="Social Media img 05"
            className="border rounded-lg border-neutral-50 shadow-sm mb-8"
          />

          <img
            src={SocialMedia06}
            alt="Social Media img 06"
            className="border rounded-lg border-neutral-50 shadow-sm mb-8"
          />
        </div>
      </section>

      <section className="flex flex-col lg:flex-row gap-8 my-4 md:my-8">
        <img
          src={SocialMedia01}
          alt="Social Media img 01"
          className="w-[80%] md:w-[40%] lg:w-[25%] mx-auto"
        />

        <div className="px-[4%] py-14 md:py-14 rounded-2xl flex flex-col gap-8 bg-neutral-50 text-left">
          <div>
            <h4 className="detail-sub-title">Redesigning Highlight Icons</h4>
            <div className="detail-content-container !max-w-full mt-4">
              <p>
                Through the recreation of IFLY's Instagram highlight icons, I
                enhanced IFLY's brand identity and ensured design consistency
                across their platform.
              </p>
            </div>
          </div>

          <div>
            <h5 className="font-title text-lg capitalize text-neutral-600">
              before
            </h5>
            <img
              src={SocialMedia02}
              alt="Social Media img 02"
              className="w-full max-w-3xl rounded-xl border border-neutral-200"
            />
          </div>
          <div>
            <h5 className="font-title text-lg capitalize text-neutral-600">
              after
            </h5>
            <img
              src={SocialMedia03}
              alt="Social Media img 03"
              className="w-full max-w-3xl rounded-xl bg-white"
            />
          </div>
        </div>
      </section>

      <section className="detail-section-middle text-left">
        <div>
          <h4 className="detail-sub-title">Web Banners</h4>
          <p className="mt-4">
            I contributed to the iFLY Luggage website by designing web banners
            for both desktop and mobile versions. These banners were crafted to
            enhance the visual appeal and user engagement on the site.
          </p>
        </div>

        <img
          src={WebBanners}
          alt="iFLY Web Banners"
          className="w-full max-w-[64rem] mx-auto mt-6"
        />
      </section>

      <section className="detail-section-middle text-left">
        <div>
          <h4 className="detail-sub-title">
            Collaborative Projects With External Companies
          </h4>
          <div className="detail-content-container !max-w-full">
            <p className="mt-4">
              While serving as a senior graphic designer at Calego, I engaged in
              collaborative projects with external companies. This included
              creating print and graphic design materials, offering consulting
              services, and contributing to the redesign of their webpages.
            </p>
            <p className="text-sm text-neutral-400">
              *The QR code does not lead to a functioning webpage.
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col xl:grid xl:grid-cols-5 gap-8">
          <div className="bg-white py-12 px-6 md:p-12 relative rounded-2xl xl:col-span-3">
            <h5 className="capitalize absolute py-2 px-4 bg-neutral-500/75 text-neutral-50 text-sm top-4 left-4 rounded-full">
              Arcade1Up warranty sticker
            </h5>

            <img
              src={Arcade}
              alt="Arcade Sticker img"
              className="w-full max-w-[40rem] mx-auto my-4"
            />
          </div>

          <div className="bg-white py-12 px-6 md:p-12 relative rounded-2xl xl:col-span-2">
            <h5 className="capitalize absolute py-2 px-4 bg-neutral-500/75 text-neutral-50 text-sm top-4 left-4 rounded-full">
              Warranty Cards
            </h5>

            <div className="h-full grid grid-cols-1 md:grid-cols-3 xl:grid-cols-2 gap-8 my-4 place-items-center">
              <img
                src={WrrantyCard01}
                alt="Warranty Card img"
                className="w-[70%] md:w-full mx-auto"
              />
              <img
                src={WrrantyCard02}
                alt="Warranty Card img"
                className="w-[70%] md:w-full mx-auto"
              />
              <img
                src={WrrantyCard03}
                alt="Warranty Card img"
                className="w-[70%] md:w-full mx-auto"
              />
            </div>
          </div>

          <div className="bg-white py-12 px-6 md:p-12 relative rounded-2xl lg:col-span-5">
            <h5 className="capitalize absolute py-2 px-4 bg-neutral-500/75 text-neutral-50 text-sm top-4 left-4 rounded-full">
              Babybrezza warranty steps
            </h5>

            <div className="grid gird-cols-1 md:grid-cols-8 my-6 gap-8 place-items-center h-full">
              <img
                src={BabyMobile}
                alt="Babybrezza Mobile warranty step gif"
                className="w-[60%] md:w-full md:col-span-2"
              />
              <img
                src={BabyDesktop}
                alt="Babybrezza Desktop warranty step gif"
                className="w-full md:col-span-6"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="detail-section-middle text-left">
        <div>
          <h4 className="detail-sub-title">Presentation Visual Assets</h4>
          <div className="detail-content-container !max-w-full">
            <p className="mt-4">
              I played a pivotal role in crafting visual assets for
              presentations at Calego. This encompassed designing slides,
              creating infographics, and ensuring cohesive visual elements to
              effectively communicate key messages.
            </p>

            <img
              src={Presentation}
              alt="ifly presentation visual assets img"
              className="w-full mt-4 object-cover rounded-xl"
            />
          </div>
        </div>
      </section>
    </main>
  );
};
export default CalegoDigitalMarketing;
