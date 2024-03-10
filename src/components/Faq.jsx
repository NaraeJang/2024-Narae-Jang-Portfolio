import { createContext, useContext } from 'react';
import { FaqQuestion, Title } from './';
import { faqQuestions } from '../data/data';

const FaqContext = createContext();

const Faq = () => {
  return (
    <FaqContext.Provider value={{}}>
      <section id="faq">
        <div className="custom-container">
          <div className="faq-container">
            <Title title="FAQs" />
            {faqQuestions.map((question) => {
              return <FaqQuestion key={question.id} {...question} />;
            })}
          </div>
        </div>
      </section>
    </FaqContext.Provider>
  );
};

export const useFaqContext = () => useContext(FaqContext);
export default Faq;
