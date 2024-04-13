import { createContext, useContext, useState, useEffect } from 'react';
import { FaqQuestion, Title } from './';
import { faqQuestions } from '../data/data';
import { FaArrowRight } from 'react-icons/fa6';

import { HashLink } from 'react-router-hash-link';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

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
        <div className="pt-[5rem] mx-auto pb-[10rem] max-w-[2560px]">
          <div className="faq-container">
            <h5 className="home_me_title md:w-10/12 lg:w-9/12 md:mx-auto dt-black text-3xl md:text-4xl lg:text-5xl mb-[2rem] text-sand-600">
              Before you go...
            </h5>
            <p className="text-primary-100 mb-10">
              I've prepared some of answers if you want to know more about me.
            </p>
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
