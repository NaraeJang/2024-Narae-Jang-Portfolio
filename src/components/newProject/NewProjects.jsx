import { ProjectsCategories, ProjectItems } from './';
import { projectsData } from '../../data/projectData';
import { createContext, useContext, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger);

const ProjectContext = createContext();

const NewProjects = () => {
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

    // tl.to('.project-title', {
    //   x: '0px',
    //   opacity: 1,
    //   duration: 0.5,
    //   ease: 'none',
    // });

    // tl.to('.project-category', {
    //   x: '0%',
    //   opacity: 1,
    //   duration: 0.5,
    //   ease: 'none',
    // });

    tl.to('.project-category', {
      y: '0%',
      opacity: 1,
      duration: 0.5,
      ease: 'none',
    });
  }, []);

  useEffect(() => {
    // gsap.to('.project-item', {
    //   scrollTrigger: {
    //     trigger: '#projects',
    //     toggleActions: 'restart none none none',
    //     start: 'top 80%',
    //     markers: false,
    //   },
    //   opacity: 1,
    //   y: '0px',
    //   ease: 'none',
    // });

    gsap.to('.faq-container', {
      scrollTrigger: {
        trigger: '.faq-container',
        toggleActions: 'restart none none none',
        start: 'top 90%',
        markers: false,
      },
      ease: 'none',
      opacity: 1,
      duration: 0.3,
      y: 0,
    });
  }, [projectsItems]);

  // ...

  return (
    <ProjectContext.Provider
      value={{ allCategories, filterItems, projectsItems, currentCategory }}>
      <section
        id="projects"
        className="mt-[-8vh] bg-bgcolor  min-h-[120vh] h-fit rounded-3xl z-40 relative overflow-hidden">
        <div className="mt-[3rem]  max-w-[2560px] grid place-items-center">
          <div className="responsive-padding mx-auto w-full max-w-[100vw] px-[5vw] lg:px-[2vw]">
            {/* <div className="title-container gap-y-6 md:flex-row md:items-center md:justify-between mb-8"> */}
            <div className="title-container flex items-center mb-8">
              {/* <Title title="Projects" extraClass="project-title" /> */}
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

export default NewProjects;