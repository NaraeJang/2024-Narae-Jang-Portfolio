import TitleText from '../TitleText';
import rdSitemap from '../../../assets/redesign-assets/rd-sitemap.webp';
import rdWireframes from '../../../assets/redesign-assets/rd-wireframes.webp';

const IflySitemapToWireFrames = () => {
  return (
    <>
      <section>
        <div className="custom-container w-[90%]">
          <TitleText text="Sitemap" />
          <p>
            Building a sitemap helps to understand the flow of the website. It
            also helps to check if the the information is grouped properly and
            is easy to navigate.
          </p>
          <img
            src={rdSitemap}
            alt="ifly sitemap img"
            className="w-full max-w-[57rem] mx-auto mt-8 rounded-xl"
          />
        </div>
      </section>

      <section>
        <div className="custom-container w-[90%]">
          <TitleText text="Digital wireframes" />
          <p>
            After understanding the user and constructing the website structure,
            I created the wireframes to iterate on our ideas. By utilizing the
            wireframes, we tested the flow so as to get a better insight into
            the user.
          </p>
          <img
            src={rdWireframes}
            alt="ifly wireframes img"
            className="w-full max-w-[57rem] mx-auto mt-8  rounded-xl"
          />
        </div>
      </section>
    </>
  );
};
export default IflySitemapToWireFrames;
