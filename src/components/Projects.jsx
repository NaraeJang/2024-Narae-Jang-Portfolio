import { ProjectsCategories, Title, ProjectItems } from './';
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
    gsap.fromTo(
      '.project-title',
      {
        scrollTrigger: {
          trigger: '.project-title',
          start: 'top end',
          scrub: 1,
        },
        x: '-50%',
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: '.project-title',
          start: 'top 80%',
          end: 'top 50%',
          scrub: 1,
        },
        x: '0%',
        opacity: 1,
      }
    );

    gsap.fromTo(
      '.project-category',
      {
        scrollTrigger: {
          trigger: '.project-category',
          start: 'top end',
          scrub: 1,
        },
        x: '50%',
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: '.project-category',
          start: 'top 80%',
          end: 'top 50%',
          scrub: 1,
        },
        x: '0%',
        opacity: 1,
      }
    );

    gsap.fromTo(
      '.project-item',
      {
        scrollTrigger: {
          trigger: '.project-item',
          start: 'top 80%',
          scrub: 1,
        },
        opacity: 0,
        y: 100,
      },
      {
        scrollTrigger: {
          trigger: '.project-item',
          start: 'top 80%',
          end: 'top 50%',
          scrub: 1,
        },
        delay: 0.5,
        opacity: 1,
        y: 0,
        stagger: 0.3,
      }
    );
  }, []);

  // ...

  return (
    <ProjectContext.Provider
      value={{ allCategories, filterItems, projectsItems, currentCategory }}>
      <section id="projects" className="mt-[3rem]">
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
