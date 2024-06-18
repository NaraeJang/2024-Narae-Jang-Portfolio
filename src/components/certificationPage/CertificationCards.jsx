import { Card } from '.';

const CertificationCards = ({ cards, extraClass = '' }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 min-[1800px]:grid-cols-4 place-items-center gap-x-8 xl:gap-x-12 gap-y-8 lg:gap-y-12">
      {cards.map((card) => {
        const { id, year, title, linkTitle, link } = card;

        return (
          <Card
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
export default CertificationCards;
