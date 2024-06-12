import { gsap } from 'gsap';
import { createContext, useContext, useState, useEffect } from 'react';

// Components
import { projectsData } from '../../data/newProjectData';
import { WorkCategories } from './WorkSection';

// GSAP
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Context
const ProjectContext = createContext();

const Works = () => {
  //CATEGORY FILTER FUNCTION
  const allCategories = [
    'all',
    ...new Set(projectsData.flatMap((item) => item.category)),
  ];
  const [currentCategory, setCurrentCategory] = useState('all');

  const [projectsItems, setProjectsItems] = useState(projectsData);

  const filterItems = (category) => {
    if (category === 'all') {
      setProjectsItems(projectsData);
      setCurrentCategory('all');
      return;
    }
    const newItems = projectsData.filter((item) => {
      return item.category.some((cat) => cat === category);
    });
    setCurrentCategory(category);
    return setProjectsItems(newItems);
  };

  // GSAP ANIMATION
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.g-bg-scale',
        toggleActions: 'play none none reverse',
        scrub: 1,
        start: 'top bottom-=5%',
        end: 'top bottom-=10%',
        markers: false,
      },
    });

    tl.to('#work', {
      scale: 1,
      backgroundColor: '#fff',
    });
  }, []);

  return (
    <ProjectContext.Provider
      value={{ allCategories, filterItems, projectsItems, currentCategory }}>
      <section
        id="work"
        className="scale-95 bg-transparent g-bg-scale relative min-h-fit min-w-[100svw] grid place-items-center mt-[-10svh] rounded-3xl overflow-hidden border-2 border-white z-40">
        <div className="cc-change h-full w-full py-24 px-[4%]">
          <div className="w-full flex felx-col justify-between items-end">
            <div>
              <h3 className="font-title text-neutral-900 uppercase text-3xl leading-tight">
                work
              </h3>
              <p className="mt-2">
                I help businesses in design to drive more digital sales.
              </p>
            </div>

            <WorkCategories />
          </div>
        </div>
      </section>
    </ProjectContext.Provider>
  );
};

export const useProjectContext = () => useContext(ProjectContext);
export default Works;
