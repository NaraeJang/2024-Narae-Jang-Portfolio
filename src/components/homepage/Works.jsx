import {
  createContext,
  useContext,
  useState,
  useEffect,
  useLayoutEffect,
  useRef,
} from 'react';

// Components
import { projectsData } from '../../data/newProjectData';
import { WorkCategories, WorkItems } from './WorkSection';
import { useHomeContext } from './Home';

// GSAP
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

// Context
const ProjectContext = createContext();

const Works = () => {
  const { setCurrentWorkCategory } = useHomeContext();
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
    });
  }, []);

  useEffect(() => {
    setCurrentWorkCategory(currentCategory);
  }, [currentCategory]);

  return (
    <ProjectContext.Provider
      value={{ allCategories, filterItems, projectsItems, currentCategory }}>
      <section
        id="work"
        className="scale-95 bg-white g-bg-scale relative min-h-fit min-w-[100svw] grid place-items-center mt-[-20svh] rounded-3xl overflow-hidden border-2 border-white z-40">
        <div className="cc-change h-full w-svw py-24">
          <div className="w-full flex flex-col gap-4 xl:gap-0 xl:flex-row items-start xl:justify-between xl:items-end">
            <div className="px-[4%] shrink-0">
              <h3 className="font-title text-neutral-900 uppercase text-3xl leading-tight">
                work
              </h3>
              <p className="mt-2">
                I help businesses by providing design & development services.
              </p>
            </div>

            <WorkCategories />
          </div>
          <WorkItems />
        </div>
      </section>
    </ProjectContext.Provider>
  );
};

export const useProjectContext = () => useContext(ProjectContext);
export default Works;
