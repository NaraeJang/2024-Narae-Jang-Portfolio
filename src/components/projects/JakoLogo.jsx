import heroImg from '../../assets/logo/logo1.webp';
import jakoImg from '../../assets/logo/jako-photo.webp';

const JakoLogo = () => {
  return (
    <main className="px-[4%] text-center max-w-[1920px] mx-auto">
      <section className="detail-section-first">
        <img src={heroImg} alt="Bar Ganadara Mockup" className="w-full" />
      </section>

      <section className="detail-section-middle">
        <div className="detail-title-container">
          <h2 className="detail-title">
            Jako Restaurant Logo and Window Decal Design
          </h2>
          <p className="detail-description">
            Freelance Graphic Design Work for Jako Restaurant
          </p>
          <div className="detail-category-container">
            <span className="detail-category-pill">Photoshop</span>
            <span className="detail-category-pill">Illustrator</span>
          </div>
        </div>
        <div className="detail-content-container">
          <p>
            Jako is an Asian fusion restaurant located in Montreal. The owners
            of Jako approached me to design their logo and window sticker/decal,
            aiming to convey a blend of oceanic elements, Korean and Japanese
            influences, and a modern restaurant ambiance, rather than a bar
            vibe.
          </p>
          <p>
            To achieve this, I maintained consistent communication with the
            owners, discussing various approaches for the logo design. We
            decided on neutral and bright colors to appeal primarily to students
            and young adults, aligning with Jako's goal of offering affordable
            menu prices. The friendly vibe of the logo reflects this target
            audience.
          </p>
          <p>
            Considering that both Korea and Japan are surrounded by oceans and
            use circular shapes in their national symbols, I incorporated these
            elements into the design. The gradient effect in the logo symbolizes
            ocean waves, further enhancing the connection to the sea.
          </p>
        </div>
      </section>

      <img
        src={jakoImg}
        alt="Jako Restaurant Photo"
        className="w-full rounded-2xl detail-section-middle-margin"
      />
    </main>
  );
};
export default JakoLogo;
