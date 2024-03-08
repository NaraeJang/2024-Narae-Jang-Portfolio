import ProjectItem from './ProjectItem';
import { useProjectContext } from './Projects';

const ProjectItems = () => {
  const { projectsItems } = useProjectContext();

  return (
    <div>
      {projectsItems.map((item) => {
        return <ProjectItem key={item.id} {...item} />;
      })}
    </div>
  );
};
export default ProjectItems;
