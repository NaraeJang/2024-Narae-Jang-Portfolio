import { ProjectsCategories, Title, ProjectItems } from './';
import { projectsData } from '../data/data';
import { createContext, useContext, useState } from 'react';

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

  return (
    <ProjectContext.Provider
      value={{ allCategories, filterItems, projectsItems, currentCategory }}>
      <section id="projects">
        <div className="custom-container">
          <div className="title-container gap-y-6 md:flex-row md:items-center md:justify-between mb-8">
            <Title title="works" />
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
