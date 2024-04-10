import GanaTitleImg from '../../assets/print-gana/Ganadara_BC.webp';
import MoodBoardImg from '../../assets/print-gana/Retro-moodboard.webp';
import MenuEnImg from '../../assets/print-gana/Meal_menu_EN.webp';
import MenuFrImg from '../../assets/print-gana/Meal_menu_FR.webp';
import MockImg from '../../assets/print-gana/GanadaraMenu.webp';

const PrintGana = () => {
  return (
    <main id="print-gana-toppage" className="text-left w-[90%]  mx-auto">
      <section className="py-[6rem] lg:py-[10rem] flex flex-col">
        <div>
          <span className="poppins-medium">Bar Ganadara</span>
          <h3 className="dt-black text-3xl">Print Design</h3>
          <p className="mt-[1.75rem]">
            As a freelance designer, I manage end-to-end responsibilities for
            menus and business card design for Bar Ganadara.
          </p>
          <p className="mt-[1.75rem]">
            This includes understanding client needs, conceptualizing designs
            aligned with their brand, and executing visually captivating
            layouts. I ensure consistent communication with clients, refining
            designs based on feedback. Additionally, I handle print preparation,
            collaborate with vendors, and conduct quality checks for the
            results.
          </p>
        </div>

        <div className="mt-10 mb-20 md:mb-40">
          <h4 className="dt-black text-xl mb-4">Business Card</h4>
          <img src={GanaTitleImg} className="w-full max-w-[62rem] mx-auto" />
        </div>

        <div className="flex flex-col gap-4 md:gap-10">
          <div>
            <h4 className="dt-black text-xl mb-4">Menu Design</h4>
            <p>
              To capture the Korean retro vibes desired by "Bar Ganadara" for
              their menu design, I began by creating a moodboard. This visual
              compilation drew inspiration from retro elements like typography,
              colors, and imagery. The moodboard guided the design process,
              ensuring alignment with the client's vision while facilitating
              collaborative discussions.
            </p>
          </div>
          <img src={MoodBoardImg} className="w-full max-w-[62rem] mx-auto" />
          <p className="mt-10">
            Here is the final version of the menu design for 'Bar Ganadara,'
            capturing the desired retro vibes. The design reflects the unique
            atmosphere of the establishment and has been prepared in both
            English and French.
          </p>
          <img src={MenuEnImg} className="w-full max-w-[62rem] mx-auto" />
          <img src={MenuFrImg} className="w-full max-w-[62rem] mx-auto" />
          <img src={MockImg} className="w-full max-w-[62rem] mx-auto" />
        </div>
      </section>
    </main>
  );
};
export default PrintGana;
