import CreatedProjects from "../../components/Projects/section/CreatedProjects";
import RequestedProjects from "../../components/Projects/section/RequestedProjects";
import { useUserProjects } from "../../context/useUserProject";

const Projects = () => {
  const { currentView } = useUserProjects();

  return currentView == "Created" ? <CreatedProjects /> : <RequestedProjects />;
};

export default Projects;
