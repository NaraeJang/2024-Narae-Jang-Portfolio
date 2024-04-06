import { AboutCard } from './';

const AboutCards = ({ cards, extraClass = '' }) => {
  return (
    <div className="mt-6 flex flex-col gap-5 md:flex-row flex-wrap">
      {cards.map((card) => {
        const { id, year, title, linkTitle, link } = card;

        return (
          <AboutCard
            key={id}
            year={year}
            title={title}
            linkTitle={linkTitle}
            link={link}
            extraClass={extraClass}
          />
        );
      })}
    </div>
  );
};
export default AboutCards;
