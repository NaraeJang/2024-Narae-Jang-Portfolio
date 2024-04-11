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
    gsap.to('.project-title', {
      scrollTrigger: {
        trigger: '.project-title',
        start: 'top 80%',
        end: 'top 60%',
        scrub: 1,
      },
      x: '0px',
      opacity: 1,
    });

    gsap.to(
      '.project-category',

      {
        scrollTrigger: {
          trigger: '.project-category',
          start: 'top 80%',
          end: 'top 60%',
          scrub: 1,
        },
        x: '0%',
        opacity: 1,
      }
    );
  }, []);

  useEffect(() => {
    gsap.to('.project-item', {
      scrollTrigger: {
        trigger: '.project-item',
        start: 'top 80%',
        end: 'top 60%',
        scrub: true,
      },
      opacity: 1,
      y: '0px',
      stagger: 0.5,
    });

    gsap.to('.faq-container', {
      scrollTrigger: {
        trigger: '.faq-container',
        start: 'top 80%',
        end: 'top 60%',
        scrub: true,
      },
      opacity: 1,
      y: 0,
    });
  }, [projectsItems]);

  // ...

  return (
    <ProjectContext.Provider
      value={{ allCategories, filterItems, projectsItems, currentCategory }}>
      <section id="projects" className="mt-[3rem] max-w-[2560px] mx-auto">
        <div className="pt-[10rem] mx-auto pb-[5rem]">
          <div className="title-container gap-y-6 md:flex-row md:items-center md:justify-between mb-8">
            <Title title="works" extraClass="project-title" />
            <ProjectsCategories />
          </div>
          <ProjectItems />
        </div>
      </section>
    </ProjectContext.Provider>
  );
};

export const useProjectContext = () => useContext(ProjectContext);

export default Projects;
