import { useHomeTabs } from "../../context/useHomeTabs";

const ProjectTag = () => {
  const { view, setView } = useHomeTabs();

  return (
    <div className="md:h-[73px] md:py-4 py-3 md:px-8 font-medium bg-white">
      <div className="bg-gray100 w-80 p-1 md:m-0 mx-auto rounded-full flex items-center justify-between text-sm gap-2 border border-solid border-gray200">
        <div
          onClick={() => setView("Projects")}
          className={`w-[148px] ${view === "Projects" && "active-tab"} rounded-full py-2 px-4 h-full items-center justify-center flex cursor-pointer`}
        >
          Projects
        </div>
        <div className="h-6 w-[2px]  left-1/2 bg-gray200"></div>
        <div
          onClick={() => setView("People")}
          className={`w-[148px] ${view === "People" && "active-tab"} rounded-full py-2 px-4 h-full items-center justify-center flex cursor-pointer`}
        >
          People
        </div>
      </div>
    </div>
  );
};

export default ProjectTag;
