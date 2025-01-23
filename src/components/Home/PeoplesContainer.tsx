import { useProjects } from "../../context/useUserData";
import ProjectCard from "../Projects/ProjectCard";

const PeoplesContainer = () => {
  const { projects } = useProjects();

  return (
    <section className="md:px-8 px-4 md:py-6 pt-6 pb-20 md:w-full w-screen">
      <section className="grid md:grid-cols-3 min-h-full gap-8 md:max-w-full max-w-screen">
        {projects?.map((data) => {
          return <ProjectCard key={data.id} data={data} />;
        })}
      </section>
    </section>
  );
};

export default PeoplesContainer;
