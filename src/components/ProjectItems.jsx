import ProjectItem from './ProjectItem';
import { useProjectContext } from './Projects';

const ProjectItems = () => {
  const { projectsItems } = useProjectContext();

  return (
    <div className="flex flex-col items-center gap-x-7 gap-y-7 md:grid  md:grid-cols-2 lg:grid-cols-3  2xl:grid-cols-4 min-[1920px]:grid-cols-5 2xl:gap-y-10">
      {projectsItems.map((item) => {
        return <ProjectItem key={item.id} {...item} />;
      })}
    </div>
  );
};
export default ProjectItems;
