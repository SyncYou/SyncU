import { FiPlus } from "react-icons/fi";
import empty from "/assets/Empty.svg";
import ProjectCard from "../ProjectCard";
import SecondaryButton from "../../Reuseables/SecondaryButton";
import useDisplayPostProjectForm from "../../../context/useDisplayPostProjectForm";
import { useQuery } from "@tanstack/react-query";
import { fetchCreatedProjects } from "../../../utils/queries/fetch";

const CreatedProjects = () => {
  const { setShow } = useDisplayPostProjectForm();

  const { data: createdProjects, isLoading } = useQuery({
    queryKey: ["created-projects"],
    queryFn: fetchCreatedProjects,
  });

  return (
    <section className="md:px-8 px-4 md:py-6 pt-6 pb-20 md:w-full w-screen">
      {createdProjects?.length === 0 ? (
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
          <SecondaryButton
            onClick={() => setShow(true)}
            classes="w-[177px] h-11 mx-auto"
          >
            <FiPlus />
            New Project
          </SecondaryButton>
        </div>
      ) : (
        <section className="grid md:grid-cols-3 min-h-full gap-8 md:max-w-full max-w-screen">
          {createdProjects?.map((project) => {
            return <ProjectCard data={project} fetching={isLoading} />;
          })}
        </section>
      )}
    </section>
  );
};

export default CreatedProjects;
