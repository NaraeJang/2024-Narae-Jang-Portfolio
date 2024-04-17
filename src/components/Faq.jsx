import { createContext, useContext, useState, useEffect } from 'react';
import { FaqQuestion, Title } from './';
import { faqQuestions } from '../data/faqQuestions';
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

  // useEffect(() => {
  //   gsap.to('.faq-container', {
  //     scrollTrigger: {
  //       trigger: '.faq-container',
  //       toggleActions: 'restart none none none',
  //       start: 'top 90%',
  //       markers: false,
  //     },
  //     ease: 'none',
  //     opacity: 1,
  //     y: 0,
  //   });
  // }, []);

  return (
    <FaqContext.Provider value={{ toggleQuestion, questions, activeId }}>
      <section id="faq" className="w-[100vw]  overflow-hidden">
        <div className="pt-[5rem] mx-auto pb-[10rem] max-w-[2560px] faq-main">
          <div className="faq-container">
            <h5 className="text-left md:text-center px-[5vw] md:px-[2vw] home_me_title md:w-8/12 lg:w-10/12 md:mx-auto dt-black text-3xl md:text-4xl lg:text-5xl mb-[2rem] text-sand-600">
              If you want to know more about me...
            </h5>
            <p className="text-left md:text-center px-[5vw] md:px-[2vw]  text-sand-800 mb-10">
              I've prepared some questions & answers about me.
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
