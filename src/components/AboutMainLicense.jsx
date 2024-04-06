import { certificationCards } from '../data/data';
import { Title, AboutCards } from './';

const AboutMainLicense = () => {
  return (
    <section id="about-license" className="mb-[8rem]">
      <div className="custom-container">
        <Title title="certifications" extraClass="about-license-title" />
        <AboutCards
          cards={certificationCards}
          extraClass="about-license-card"
        />
      </div>
    </section>
  );
};
export default AboutMainLicense;
