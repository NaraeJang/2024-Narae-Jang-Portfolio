import { ProjectsCategories, Title, ProjectItems, SmoothScroll } from './';
import { projectsData } from '../data/data';
import { createContext, useContext, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger);

const ProjectContext = createContext();

const Projects = () => {
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

  // ...

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#projects',
        toggleActions: 'restart none none none',
        start: 'top 80%',
      },
    });

    tl.to('.project-title', {
      x: '0px',
      opacity: 1,
      duration: 0.5,
      ease: 'none',
    });

    tl.to('.project-category', {
      x: '0%',
      opacity: 1,
      duration: 0.5,
      ease: 'none',
    });
  }, []);

  useEffect(() => {
    gsap.to('.project-item', {
      scrollTrigger: {
        trigger: '#projects',
        toggleActions: 'restart none none none',
        start: 'top 80%',
        markers: false,
      },
      opacity: 1,
      y: '0px',
      delay: 0.5,
      ease: 'none',
    });
  }, [projectsItems]);

  // ...

  return (
    <ProjectContext.Provider
      value={{ allCategories, filterItems, projectsItems, currentCategory }}>
      <section
        id="projects"
        className="mt-[-8vh] bg-bgcolor  min-h-[120vh] rounded-3xl z-40">
        <div className="mt-[3rem] px-[5vw] lg:px-[2vw] max-w-[2560px] mx-auto grid place-items-center">
          <div className="responsive-padding mx-auto">
            <div className="title-container gap-y-6 md:flex-row md:items-center md:justify-between mb-8">
              <Title title="works" extraClass="project-title" />
              <ProjectsCategories />
            </div>
            <ProjectItems />
          </div>
        </div>
      </section>
    </ProjectContext.Provider>
  );
};

export const useProjectContext = () => useContext(ProjectContext);

export default Projects;
