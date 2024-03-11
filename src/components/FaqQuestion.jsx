import { useRef, useState, useEffect } from 'react';
import { useFaqContext } from './Faq';

const FaqQuestion = ({ id, title, info }) => {
  const { activeId, toggleQuestion } = useFaqContext();

  const isActive = id === activeId;

  const infoContainerRef = useRef(null);
  const infoRef = useRef(null);
  const [infoHeight, setInfoHeight] = useState(0);

  useEffect(() => {
    if (infoRef.current) {
      setInfoHeight(
        isActive ? infoRef.current.getBoundingClientRect().height : 0
      );
    }
  }, [isActive]);

  return (
    <article className="question-container md:w-10/12 lg:w-7/12 md:mx-auto">
      <header className="p-4">
        <button
          type="button"
          className="flex flex-row justify-between items-center  w-full"
          onClick={() => {
            toggleQuestion(id);
            console.log(
              'containter',
              infoContainerRef.current.getBoundingClientRect()
            );
            console.log(infoRef.current.getBoundingClientRect());

            console.log(isActive);
          }}>
          <h5 className="text-left poppins-medium leading-relaxed ">{title}</h5>
          <div
            className={
              isActive
                ? 'plus-minus question-active shrink-0'
                : 'plus-minus shrink-0'
            }></div>
        </button>
      </header>
      <hr />
      <div
        className="info-container"
        ref={infoContainerRef}
        style={{
          height: `${infoHeight}px`,
        }}>
        <div className="infos" ref={infoRef}>
          {isActive && (
            <>
              <p className="px-4 pt-6 pb-10 text-left">{info}</p>
              <hr />
            </>
          )}
        </div>
      </div>
    </article>
  );
};
export default FaqQuestion;
