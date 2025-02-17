
import { useQuery } from "@tanstack/react-query";
import { useProjectFilter } from "../../context/useProjectFilter";
import ProjectCard from "../Projects/ProjectCard";
import { fetchProjects } from "../../utils/queries/fetch";

const ProjectContainer = () => {
  const { data: projects, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });
  const { filter } = useProjectFilter();


  return (
    <section className="md:px-8 px-4 md:py-6 pt-6 pb-20 md:w-full w-screen">
      <section className="grid md:grid-cols-[repeat(auto-fit,_minmax(305px,_1fr))] min-h-full gap-8 md:max-w-full max-w-screen">
        {projects
          ?.filter((project) => {
            if (filter != "All") {
              return project.industry === filter;
            }
            return project;
          })
          .map((data) => {
            return (
              <ProjectCard key={data.id} data={data} fetching={isLoading} />
            );
          })}

      </section>
    </section>
  );
};

export default ProjectContainer;
