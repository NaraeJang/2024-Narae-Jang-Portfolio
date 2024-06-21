import logoImg from '../../assets/logo/logo2.webp';
import heroImg from '../../assets/newItemThumbs/RK_Logo.webp';

const RkLogo = () => {
  return (
    <main className="px-[4%] text-center max-w-[1920px] mx-auto">
      <section className="detail-section-first">
        <img src={heroImg} alt="Bar Ganadara Mockup" className="w-full" />
      </section>

      <section className="detail-section-middle">
        <div className="detail-title-container">
          <h2 className="detail-title">R&K Consulting Logo Design</h2>
          <p className="detail-description">
            Freelance Graphic Design Work for R&K Consulting
          </p>
          <div className="detail-category-container">
            <span className="detail-category-pill">Illustrator</span>
          </div>
        </div>
        <div className="detail-content-container">
          <p>
            R&K Consulting is an immigration consultancy and consulting firm
            based in Montreal. Before launching their business, they wanted to
            create a logo. "R" and "K" are the initials of the owners' names.
            They desired a logo that was simple, minimal, yet symmetric in
            design.
          </p>
        </div>
      </section>

      <img
        src={logoImg}
        alt="R&K Logo Design"
        className="w-full rounded-2xl detail-section-middle-margin"
      />
    </main>
  );
};
export default RkLogo;
