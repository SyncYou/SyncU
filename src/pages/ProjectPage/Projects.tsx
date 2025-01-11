import { useUserProjects } from "../../context/useUserProject";
import CreatedProjects from "./components/section/CreatedProjects";
import RequestedProjects from "./components/section/RequestedProjects";

const Projects = () => {
  const { currentView } = useUserProjects();

  return currentView == "Created" ? <CreatedProjects /> : <RequestedProjects />;
};

export default Projects;
