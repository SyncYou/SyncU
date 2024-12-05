import ProjectCard from "./ProjectCard";
import project from "../utils/projects.json";

const ProjectContainer = () => {
  console.log(project);

  return (
    <section className="md:px-8 px-4 md:py-6 pt-6 pb-20 md:w-full w-screen">
      <section className="grid md:grid-cols-3 min-h-full gap-8 md:max-w-full max-w-screen">
        {project.map((col) => {
          return <ProjectCard data={col} />;
        })}
      </section>
    </section>
  );
};

export default ProjectContainer;
