import { createContext, useContext, useState } from 'react';
import { FaqQuestion, Title } from './';
import { faqQuestions } from '../data/data';

const FaqContext = createContext();

const Faq = () => {
  const [questions, setQuestions] = useState(faqQuestions);
  const [activeId, setActiveId] = useState(null);

  const toggleQuestion = (id) => {
    const newActiveId = id === activeId ? null : id;
    setActiveId(newActiveId);
  };

  return (
    <FaqContext.Provider value={{ toggleQuestion, questions, activeId }}>
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
