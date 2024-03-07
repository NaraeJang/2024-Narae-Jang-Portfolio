import { useProjectContext } from './Projects';

const ProjectItems = () => {
  const { projectsItems } = useProjectContext();
  console.log(projectsItems);
  return <div>ProjectItems</div>;
};
export default ProjectItems;
