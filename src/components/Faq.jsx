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

  useEffect(() => {
    gsap.fromTo(
      '.faq-container',
      {
        scrollTrigger: {
          trigger: '.faq-container',
          start: 'top 95%',
          scrub: true,
        },
        opacity: 0,
        y: 200,
      },
      {
        scrollTrigger: {
          trigger: '.faq-container',
          start: 'top 90%',
          end: 'top 60%',
          scrub: 1,
          markers: true,
        },
        opacity: 1,
        y: 0,
      }
    );
  }, []);

  return (
    <FaqContext.Provider value={{ toggleQuestion, questions, activeId }}>
      <section id="faq">
        <div className="pt-[5rem] mx-auto pb-[10rem]">
          <div className="faq-container">
            <Title title="FAQs" />
            {faqQuestions.map((question) => {
              return <FaqQuestion key={question.id} {...question} />;
            })}
            <HashLink to="./about#about-me" className="link-about">
              <span>do you want to know about me more?</span>
              <FaArrowRight />
            </HashLink>
          </div>
        </div>
      </section>
    </FaqContext.Provider>
  );
};

export const useFaqContext = () => useContext(FaqContext);
export default Faq;
