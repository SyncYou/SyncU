import useFetchProjectData from "../../hooks/useFetchProjectData";
import ProjectCard from "../Projects/ProjectCard";
import { useQuery } from "@tanstack/react-query";

const ProjectContainer = () => {
  const { data, error } = useQuery({
    queryKey: ["projects"],
    queryFn: useFetchProjectData,
  });

  return (
    <section className="md:px-8 px-4 md:py-6 pt-6 pb-20 md:w-full w-screen">
      <section className="grid md:grid-cols-3 min-h-full gap-8 md:max-w-full max-w-screen">
        {error && (
          <div className="flex items-center justify-center w-full h-full">
            <p className="text-lg">Unable to fetch projects</p>
          </div>
        )}
        {data?.map((data) => {
          return <ProjectCard key={data.id} data={data} />;
        })}
      </section>
    </section>
  );
};

export default ProjectContainer;
