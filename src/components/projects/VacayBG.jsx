import heroImg from '../../assets/newItemThumbs/Vacay01.webp';
import Vacay02 from '../../assets/newItemThumbs/Vacay02.webp';
import Vacay03 from '../../assets/newItemThumbs/Vacay03.webp';
import Vacay04 from '../../assets/newItemThumbs/Vacay04.webp';
import Vacay05 from '../../assets/newItemThumbs/Vacay05.webp';
import Vacay06 from '../../assets/newItemThumbs/Vacay06.webp';
import Vacay07 from '../../assets/newItemThumbs/Vacay07.webp';
import Vacay08 from '../../assets/newItemThumbs/Vacay08.webp';
import Vacay09 from '../../assets/newItemThumbs/Vacay09.webp';
import Vacay10 from '../../assets/newItemThumbs/Vacay10.webp';
import Vacay11 from '../../assets/newItemThumbs/Vacay11.webp';
import Vacay12 from '../../assets/newItemThumbs/Vacay12.webp';
import Vacay13 from '../../assets/newItemThumbs/Vacay13.webp';
import Vacay14 from '../../assets/newItemThumbs/Vacay14.webp';

const vacayImg = [
  Vacay02,
  Vacay03,
  Vacay04,
  Vacay05,
  Vacay06,
  Vacay07,
  Vacay08,
  Vacay09,
  Vacay10,
  Vacay11,
  Vacay12,
  Vacay13,
  Vacay14,
];

const VacayBG = () => {
  return (
    <main className="px-[4%] text-center">
      <section className="detail-section-first">
        <img src={heroImg} alt="Vacay Brand Guideline" className="w-full" />
      </section>

      <section className="detail-section-middle">
        <div className="detail-title-container">
          <h2 className="detail-title">Vacay Brand Guidelines</h2>
          <p className="detail-description">
            For Calego International, Vacay Luggage
          </p>
          <div className="detail-category-container">
            <span className="detail-category-pill">Photoshop</span>
          </div>
        </div>
        <div className="detail-content-container">
          <p>Vacay Luggage is one of Calego's subsidiary luggage brands.</p>
          <p>
            As a Senior Graphic Designer in the digital marketing team at
            Calego, I was responsible for redefining the brand identity and
            refining the Vacay brand guidelines. I collaborated closely with the
            Creative Director on this project.
          </p>

          <p>
            The primary objective was to modernize the Vacay brand to align with
            current market trends and appeal to a younger, stylish audience
          </p>
        </div>
      </section>

      {vacayImg.map((img, index) => {
        return (
          <img
            src={img}
            key={`vacay ${index}`}
            alt="Vacay Brand Guideline"
            className="detail-section-middle-image"
          />
        );
      })}
    </main>
  );
};
export default VacayBG;
