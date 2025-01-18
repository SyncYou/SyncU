import { useProjects } from "../../../context/useUserData";
import ProjectCard from "../../ProjectPage/components/ProjectCard";

const ProjectContainer = () => {
  const { projects } = useProjects();

  console.log(projects);

  return (
    <section className="md:px-8 px-4 md:py-6 pt-6 pb-20 md:w-full w-screen">
      <section className="grid md:grid-cols-3 min-h-full gap-8 md:max-w-full max-w-screen">
        {projects?.map((col, index) => {
          return <ProjectCard key={index} data={col} />;
        })}
      </section>
    </section>
  );
};

export default ProjectContainer;
