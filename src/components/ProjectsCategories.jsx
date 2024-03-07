import { useProjectContext } from './Projects';

const ProjectsCategories = () => {
  const { allCategories, filterItems, currentCategory } = useProjectContext();

  return (
    <div className="pill-container gap-4">
      {allCategories.map((category) => {
        return (
          <button
            type="button"
            key={category}
            className={
              currentCategory === category ? 'work-pill active' : 'work-pill'
            }
            onClick={() => filterItems(category)}>
            {category}
          </button>
        );
      })}
    </div>
  );
};
export default ProjectsCategories;
