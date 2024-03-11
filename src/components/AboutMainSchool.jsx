import { AboutCards, Title } from './';
import { educationCards } from '../data/data';
const AboutMainSchool = () => {
  return (
    <section id="about-education">
      <div className="py-[6rem] pb-20">
        <Title title="Education" />
        <AboutCards cards={educationCards} />
      </div>
    </section>
  );
};
export default AboutMainSchool;
