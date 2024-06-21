import heroImg from '../../assets/print-gana/Ganadara_BC.webp';
import ganaInterior from '../../assets/print-gana/ganaInterior.webp';
import koreanFlag from '../../assets/print-gana/koreanFlag.svg';

const BarGanaBC = () => {
  return (
    <main className="px-[4%] text-center max-w-[1920px] mx-auto">
      <section className="detail-section-first">
        <img src={heroImg} alt="Bar Ganadara Mockup" className="w-full" />
      </section>

      <section className="detail-section-middle">
        <div className="detail-title-container">
          <h2 className="detail-title">Bar Ganadara Business Card Design</h2>
          <p className="detail-description">
            Freelance Graphic Design Work for Bar Ganadara
          </p>
          <div className="detail-category-container">
            <span className="detail-category-pill">Illustrator</span>
          </div>
        </div>
        <div className="detail-content-container">
          <p>
            Bar Ganadara is a Korean fusion bar located in the heart of downtown
            Montreal. As their business grows, they wanted to design a business
            card that reflects their unique identity.
          </p>
          <p>
            When designing the business card for Bar Ganadara, I aimed to
            incorporate elements from Bar Gana's signature interior design,
            specifically the wooden beams on the ceiling. I also wanted to
            highlight the bar's Korean identity by including symbols from the
            Taegeukgi (the South Korean flag), such as the four trigrams. To
            convey the hip vibe of Bar Gana, I minimized the use of color,
            opting for a black and white palette, and employed UV printing
            techniques to emphasize key areas of the design.
          </p>
          <p></p>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 detail-section-middle-margin">
        <img
          src={ganaInterior}
          alt="Bar Ganadara"
          className="w-full rounded-2xl "
        />
        <img
          src={koreanFlag}
          alt="Bar Ganadara"
          className="w-full rounded-2xl border border-neutral-200"
        />
      </div>
    </main>
  );
};
export default BarGanaBC;
