import { FiPlus } from "react-icons/fi";
import empty from "/assets/Empty.svg";
import { useQuery } from "@tanstack/react-query";
import ProjectCard from "../ProjectCard";
import { fetchUserCreatedProject } from "../../../utils/queries/fetch";
import SecondaryButton from "../../Reuseables/SecondaryButton";

const CreatedProjects = () => {
  const { data, error } = useQuery({
    queryKey: ["Created-projects"],
    queryFn: fetchUserCreatedProject,
  });

  return (
    <section className="md:px-8 px-4 md:py-6 pt-6 pb-20 md:w-full w-screen">
      {!data ? (
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
          <SecondaryButton classes="w-[177px] h-11 mx-auto">
            <FiPlus />
            New Project
          </SecondaryButton>
        </div>
      ) : (
        <section className="grid md:grid-cols-3 min-h-full gap-8 md:max-w-full max-w-screen">
          {data?.map((project) => {
            return <ProjectCard data={project} />;
          })}
        </section>
      )}
    </section>
  );
};

export default CreatedProjects;
