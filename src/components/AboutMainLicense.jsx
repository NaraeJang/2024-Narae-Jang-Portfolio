import { certificationCards } from '../data/data';
import { Title, AboutCards } from './';

const AboutMainLicense = () => {
  return (
    <section id="about-license" className="mb-[8rem]">
      <div className="custom-container">
        <Title title="certifications" />
        <AboutCards cards={certificationCards} />
      </div>
    </section>
  );
};
export default AboutMainLicense;
