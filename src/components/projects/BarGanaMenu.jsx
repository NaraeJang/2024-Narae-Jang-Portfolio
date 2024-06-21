import heroImg from '../../assets/print-gana/GanadaraMenu.webp';
import MoodBoard from '../../assets/print-gana/Retro-moodboard.webp';
import FinalImg01 from '../../assets/print-gana/Meal_menu_EN.webp';
import FinalImg02 from '../../assets/print-gana/Meal_menu_FR.webp';

const BarGanaMenu = () => {
  return (
    <main className="px-[4%] text-center max-w-[1920px] mx-auto">
      <section className="detail-section-first">
        <img src={MoodBoard} alt="Bar Ganadara Mockup" className="w-full" />
      </section>

      <section className="detail-section-middle">
        <div className="detail-title-container">
          <h2 className="detail-title">
            Bar Ganadara Korean Retro Style Menu Design
          </h2>
          <p className="detail-description">
            Freelance Graphic Design Work for Bar Ganadara
          </p>
          <div className="detail-category-container">
            <span className="detail-category-pill">Photoshop</span>
            <span className="detail-category-pill">Indesign</span>
          </div>
        </div>
        <div className="detail-content-container">
          <p>
            Bar Ganadara is Korean fusion bar in the heart of downtown Montreal.
          </p>
          <p>
            Bar Ganadara wants to express Korean Retro Style on their menu. From
            understanding client needs, I created mood board first, and designed
            the menu. I ensure consistent communication with clients, refining
            designs based on feedback. Additionally, I handle print preparation,
            collaborate with vendors, and conduct quality checks for the
            results.
          </p>

          <p>
            To capture the Korean retro vibes desired by "Bar Ganadara" for
            their menu design, I began by creating a moodboard. This visual
            compilation drew inspiration from retro elements like typography,
            colors, and imagery. The moodboard guided the design process,
            ensuring alignment with the client's vision while facilitating
            collaborative discussions.
          </p>
        </div>
      </section>

      <img
        src={FinalImg01}
        alt="Bar Ganadara Mood Board"
        className="w-full rounded-2xl "
      />

      <img
        src={FinalImg02}
        alt="Bar Ganadara Mood Board"
        className="w-full rounded-2xl detail-section-middle-margin"
      />

      <section className="detail-section-middle">
        <div className="detail-content-container">
          <p>
            Here is the final version of the menu design for 'Bar Ganadara,'
            capturing the desired retro vibes. The design reflects the unique
            atmosphere of the establishment and has been prepared in both
            English and French.
          </p>
        </div>
      </section>
    </main>
  );
};
export default BarGanaMenu;
