import { useQuery } from "@tanstack/react-query";
import ProjectCard from "../Projects/ProjectCard";
import { fetchProjects } from "../../utils/queries/fetch";

const ProjectContainer = () => {
  const { data: projects, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });

  return (
    <section className="md:px-8 px-4 md:py-6 pt-6 pb-20 md:w-full w-screen">
      <section className="grid md:grid-cols-3 min-h-full gap-8 md:max-w-full max-w-screen">
        {projects?.map((data) => {
          return <ProjectCard key={data.id} data={data} fetching={isLoading} />;
        })}
      </section>
    </section>
  );
};

export default ProjectContainer;
