import heroImg from '../../assets/projects-images/Arcade1up.webp';

const ArcadeOneUpWarranty = () => {
  return (
    <main className="px-[4%] text-center">
      <section className="detail-section-first">
        <img src={heroImg} alt="arcade1up image" className="w-full" />
      </section>
      <section className="detail-section-middle">
        <div className="detail-title-container">
          <h2 className="detail-title">Arcade1Up Warranty Sticker Design</h2>
          <p className="detail-description">
            collaborated with creative director
          </p>
          <div className="detail-category-container">
            <span className="detail-category-pill">Illustrator</span>
          </div>
        </div>
        <div className="detail-content-container">
          <p>
            Arcade1Up is a computer hardware production company specializing in
            creating functional 3/4 scale arcade video games. As a Senior
            Graphic Designer at Calego International, I had the opportunity to
            work with Arcade1Up on a project.
          </p>

          <p>
            The Arcade1Up team wanted a new design for their warranty sticker
            that better aligned with their brand identity. The previous design
            was inspired by a warning sign, which did not resonate well with the
            brand's image. For the new design, I drew inspiration from
            futuristic and cyberpunk aesthetics.
          </p>

          <p>
            One challenge was balancing the futuristic, cyberpunk aesthetic with
            the need for clear readability and brand consistency. This was
            achieved through careful selection of colors, fonts, and design
            elements that complemented the existing brand identity.
          </p>
          <p>
            The new warranty sticker design received positive feedback from the
            Arcade1Up team and better aligned with the brand’s identity.
          </p>
        </div>
      </section>
    </main>
  );
};
export default ArcadeOneUpWarranty;
