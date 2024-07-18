import { useState, useRef, useEffect } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa6';
import { PiGithubLogo } from 'react-icons/pi';
import { RiLinkedinLine } from 'react-icons/ri';

const GridAccordion = () => {
  const [activeId, setActiveId] = useState(0);
  const infoContainerRefs = useRef([]);
  const infoRefs = useRef([]);

  const toggleQuestion = (id) => {
    const newActiveId = id === activeId ? null : id;
    setActiveId(newActiveId);
  };

  useEffect(() => {
    infoRefs.current.forEach((infoRef, index) => {
      if (infoRef) {
        const infoHeight =
          activeId === index ? infoRef.getBoundingClientRect().height : 0;
        infoContainerRefs.current[index].style.height = `${infoHeight}px`;
      }
    });
  }, [activeId]);

  const articles = [
    {
      id: 1,
      question: 'Core Values',
      answer: `I believe honesty, consistency, and trust are essential pillars that guide my work and relationships.`,
    },
    {
      id: 2,
      question: 'Approach',
      answer: `I’m passionate about using my skills to help people and businesses reach their goals through design and development.`,
    },
    {
      id: 3,
      question: 'To Consider',
      answer: `I’m looking forward to working together on projects that create synergy, help us grow together, and fuel our passion.`,
    },
  ];

  return (
    <div className="row-span-1 md:col-span-4 md:row-span-6 bg-neutral-50 rounded-2xl p-6 h-full overflow-hidden">
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-3">
          {articles.map((article, index) => {
            const isActive = activeId === index;
            return (
              <article
                className={`group w-full shadow-footer transition-all ${
                  isActive
                    ? `bg-neutral-900 rounded-3xl`
                    : `bg-white rounded-3xl`
                }`}
                key={article.id}>
                <header className="py-2 px-4 md:py-3 md:px-6">
                  <button
                    type="button"
                    className="flex flex-row justify-between items-center w-full gap-4"
                    onClick={() => toggleQuestion(index)}>
                    <h5
                      className={`text-left hero-title leading-relaxed font-title uppercase transition-colors ${
                        isActive
                          ? 'text-neutral-200'
                          : 'text-neutral-400 group-hover:text-neutral-500'
                      }`}>
                      {article.question}
                    </h5>
                    <div
                      className={`transition-colors ${
                        isActive
                          ? `bg-neutral-500 text-neutral-700`
                          : `bg-neutral-300 text-neutral-50 group-hover:bg-neutral-500`
                      } text-hover w-6 h-6 grid place-items-center rounded-full`}>
                      {isActive ? (
                        <FaMinus className="w-4 h-4" />
                      ) : (
                        <FaPlus className="w-4 h-4" />
                      )}
                    </div>
                  </button>
                </header>

                <div
                  className="info-container"
                  ref={(el) => (infoContainerRefs.current[index] = el)}
                  style={{
                    overflow: 'hidden',
                    transition: 'height 0.3s ease',
                  }}>
                  <div
                    className="infos"
                    ref={(el) => (infoRefs.current[index] = el)}>
                    {isActive && (
                      <>
                        <p className="px-4 md:px-6 pb-4 text-left text-neutral-50 narae-body-text">
                          {article.answer}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        <div className="text-neutral-500 flex flex-row gap-4 w-full items-center justify-center mt-4">
          <a
            href="https://www.linkedin.com/in/naraejang0117"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white rounded-full transition-all shadow-footer hover:text-neutral-900">
            <RiLinkedinLine className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/naraejang"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white rounded-full transition-all shadow-footer hover:text-neutral-900">
            <PiGithubLogo className="w-6 h-6" />
          </a>
          <a
            href="https://drive.google.com/file/d/1u40opSKDyBVkq_N2Ilqzocx_vt-CiVJv/view"
            target="_blank"
            rel="noopener noreferrer">
            <span className="leading-none py-4 px-8 bg-white rounded-full transition-all shadow-footer hover:text-neutral-900">
              Resume
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default GridAccordion;
