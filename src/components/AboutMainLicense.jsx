import { certificationCards } from '../data/data';
import { Title, AboutCards } from './';

const AboutMainLicense = () => {
  return (
    <section id="about-license">
      <div className="custom-container">
        <Title title="certifications" />
        <AboutCards cards={certificationCards} />
      </div>
    </section>
  );
};
export default AboutMainLicense;
