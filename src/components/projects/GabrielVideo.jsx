import AudiQ7video from '../../assets/gabriel/AudiQ7.mp4';
import AudiVideo from '../../assets/gabriel/AudiGabrielVideo.mp4';
import PorschePrestige from '../../assets/gabriel/PorschePrestige.mp4';

const gabrielVideo = () => {
  return (
    <main className="px-[4%] text-center max-w-[1920px] mx-auto">
      <section className="detail-section-first">
        <video autoPlay muted loop className="w-full">
          <source src={PorschePrestige} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      <section className="detail-section-middle">
        <div className="detail-title-container">
          <h2 className="detail-title">
            Creation of Groupe Gabriel Promotional Videos
          </h2>
          <p className="detail-description">
            For Porsche Prestige & Audi Gabriel with in-house marketing team in
            2019 - 2021
          </p>
          <div className="detail-category-container">
            <span className="detail-category-pill">Premier Pro</span>
            <span className="detail-category-pill">After Effect</span>
          </div>
        </div>
        <div className="detail-content-container">
          <p>
            Groupe Gabriel is one of the largest car dealership groups in the
            Greater Montreal area.
          </p>
          <p>
            My task required me to blend various official videos with smooth
            transitions to create a coherent narrative flow, ensuring the
            inclusion of Groupe Gabriel’s information and logo both throughout
            the video and in the outro. The aim was to produce engaging and
            informative content that effectively communicated the brand’s
            message to its audience.
          </p>
          <p>
            These videos were displayed at the Porsche VIP Golf Event and on TVs
            in Audi dealerships across several areas in Montreal.
          </p>
        </div>
      </section>

      <section className="detail-section-middle-image">
        <video controls className="w-full">
          <source src={AudiVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
      <section className="detail-section-middle-image">
        <video muted controls className="w-full">
          <source src={AudiQ7video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
    </main>
  );
};
export default gabrielVideo;
