import Artwork1Img from '../../assets/artwork/artwork1.webp';
import Artwork1dot1Img from '../../assets/artwork/artwork1-1.gif';
import Artwork2Img from '../../assets/artwork/artwork2.webp';
import Artwork3Img from '../../assets/artwork/artwork3.webp';
import Artwork4Img from '../../assets/artwork/artwork4.webp';
import Artwork5dot1Img from '../../assets/artwork/artwork5-1.gif';
import Artwork7Img from '../../assets/artwork/artwork7.gif';
import Artwork8Img from '../../assets/artwork/artwork8.gif';
import Artwork9Img from '../../assets/artwork/artwork9.gif';
import Artwork10Img from '../../assets/artwork/artwork10.gif';

const Artwork = () => {
  return (
    <main id="artwork-top" className="text-left  mx-auto max-w-[2560px]">
      <div className=" w-[90%] mx-auto">
        <section className="py-[6rem] lg:py-[10rem] flex flex-col">
          <div>
            <h3 className="dt-black text-3xl">Artwork</h3>
            <p className="mt-[1.75rem]">
              Drawing and image retouching is my passion, allowing me to craft
              personalized artworks that reflect my unique perspective. Drawing
              inspiration from my surroundings and experiences, each piece is a
              heartfelt expression of creativity and imagination. Explore my
              collection and hope you find joy and inspiration in my creations.
            </p>
          </div>

          <div className="flex flex-col gap-10 mt-[2rem]">
            <img
              src={Artwork2Img}
              className="w-full max-w-[100rem] mx-auto"
              alt="artwork2"
            />
            <img
              src={Artwork5dot1Img}
              className="w-full max-w-[60rem] mx-auto"
              alt="artwork5"
            />
            <img
              src={Artwork4Img}
              className="w-full max-w-[100rem] mx-auto"
              alt="artwork4"
            />
            <div className="flex flex-col gap-10 md:grid md:grid-cols-2 md:gap-5">
              <img
                src={Artwork9Img}
                className="w-full max-w-[30rem] mx-auto"
                alt="artwork9"
              />
              <img
                src={Artwork7Img}
                className="w-full max-w-[30rem] mx-auto md:place-self-center"
                alt="artwork7"
              />
            </div>
            <img
              src={Artwork3Img}
              className="w-full max-w-[60rem] mx-auto"
              alt="artwork3"
            />
            <img
              src={Artwork10Img}
              className="w-full max-w-[60rem] mx-auto"
              alt="artwork10"
            />
            <img
              src={Artwork8Img}
              className="w-full max-w-[60rem] mx-auto"
              alt="artwork8"
            />
            <img
              src={Artwork1dot1Img}
              className="w-full max-w-[60rem] mx-auto"
              alt="artwork1"
            />
            <img
              src={Artwork1Img}
              className="w-full max-w-[60rem] mx-auto"
              alt="artwork1"
            />
          </div>
        </section>
      </div>
    </main>
  );
};
export default Artwork;
