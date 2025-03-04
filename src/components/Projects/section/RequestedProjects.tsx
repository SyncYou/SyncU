import empty from "/assets/Empty.svg";
import ProjectCard from "../ProjectCard";
import { fetchUserRequestedProject, user } from "../../../utils/queries/fetch";
import { useQuery } from "@tanstack/react-query";


const RequestedProjects = () => {
  const { data: projects, isLoading } = useQuery({
    queryKey: ["requested-projects"],
    queryFn: fetchUserRequestedProject,
  });

  const requestedProjects = projects?.filter((pg) =>
    pg.requests.some((reqPg: { userId: string; status: string }) => reqPg.userId === user.data.user?.id)
  );

  return (
    <section className="md:px-8 px-4 md:py-6 pt-6 pb-20 md:w-full w-screen">
      {isLoading && ( <div className="h-full w-full flex justify-center items-center pt-20">
            <div className="w-10 h-10 border-4 border-gray-800 border-solid border-t-transparent rounded-full animate-spin"></div>
          </div>)}
      {requestedProjects?.length === 0 ? (
        <div className="mx-auto w-[261px] flex flex-col gap-6">
          <img className="w-[124px] mx-auto" src={empty} alt="" />
          <div className="">
            <h2 className="text-gray950 font-medium text-lg text-center mb-2">
              Psst! it’s empty in here.
            </h2>
            <p className="text-gray700 text-base font-medium text-center">
              Create a project to see them here.
            </p>
          </div>
        </div>
      ) : (
        <section className="grid md:grid-cols-[repeat(auto-fit,_minmax(305px,_1fr))] min-h-full gap-8 md:max-w-full max-w-screen">
          {requestedProjects?.map((project, i) => {
            return <ProjectCard key={i} data={project} fetching={isLoading} />;
          })}
        </section>
      )}
    </section>
  );
};

export default RequestedProjects;
