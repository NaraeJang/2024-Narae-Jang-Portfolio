import { createContext, useContext, useState } from 'react';
import { FaqQuestion, Title } from './';
import { faqQuestions } from '../data/data';
import { FaArrowRight } from 'react-icons/fa6';

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
            <a href="/about" className="link-about">
              <span>do you want to know about me more?</span>
              <FaArrowRight />
            </a>
          </div>
        </div>
      </section>
    </FaqContext.Provider>
  );
};

export const useFaqContext = () => useContext(FaqContext);
export default Faq;
