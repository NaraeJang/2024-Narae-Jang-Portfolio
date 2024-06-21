import Ew01Img from '../../assets/ew/ew1.webp';
import Ew02Img from '../../assets/ew/ew2.webp';

const EwNetwork = () => {
  return (
    <main className="px-[4%] text-center max-w-[1920px] mx-auto">
      <section className="detail-section-first">
        <img src={Ew01Img} alt="EW Network Mockup" className="w-full" />
      </section>

      <section className="detail-section-middle">
        <div className="detail-title-container">
          <h2 className="detail-title">Print Design for EW Network</h2>
          <p className="detail-description">
            Freelance Print Design Work for EW Network
          </p>
          <div className="detail-category-container">
            <span className="detail-category-pill">Photoshop</span>
            <span className="detail-category-pill">Illustrator</span>
            <span className="detail-category-pill">Indesign</span>
          </div>
        </div>
        <div className="detail-content-container">
          <p>
            EW Network is an educational agency assisting individuals in finding
            local language study opportunities.
          </p>
          <p>
            Through collaborative efforts with EW Network, I successfully
            developed a suite of marketing materials that effectively
            represented their brand and communicated their mission to
            prospective clients. The designs were well-received and contributed
            to an enhanced brand image for the agency, ultimately supporting
            their goal of connecting individuals with valuable language learning
            opportunities.
          </p>

          <p>
            My role involved crafting various marketing materials to enhance
            their brand presence and communicate their services effectively.
          </p>
        </div>
      </section>

      <img
        src={Ew02Img}
        alt="EW Network Mockup"
        className="w-full rounded-2xl detail-section-middle-margin"
      />
    </main>
  );
};
export default EwNetwork;
