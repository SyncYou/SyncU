import { PiSortAscending } from "react-icons/pi";
import { useUserProjects } from "../../context/useUserProject";
import Chip from "../Reuseables/Chip";
import SecondaryButton from "../Reuseables/SecondaryButton";

const ProjectTabs = () => {
  const { currentView, setCurrentView } = useUserProjects();

  return (
    <section className="h-12 w-full bg-white">
      <div className="h-full w-full pl-8 pr-14 border-gray200 border-b">
        <div className="w-[266px] h-full project flex gap-4">
          <div
            onClick={() => setCurrentView("Created")}
            className={`w-[125px] h-12 flex ${
              currentView === "Created" && "active"
            } relative justify-center items-center`}
          >
            Created
          </div>
          <div
            onClick={() => setCurrentView("Requested")}
            className={`w-[125px] h-12 flex ${
              currentView === "Requested" && "active"
            } relative justify-center items-center`}
          >
            Requested
          </div>
        </div>
      </div>
      <div className="h-16 w-full py-4 px-8 flex gap-4 items-center">
        {currentView === "Requested" && (
          <>
            <div className="flex gap-3">
              <Chip className="!border-brand600 text-brand600">All</Chip>
              <Chip>Accepted</Chip>
              <Chip>Pending</Chip>
            </div>
            <div className="h-5 border-[1.5px] border-gray200"></div>
          </>
        )}
        <SecondaryButton classes="min-w-[133px] h-8 py-1 px-3">
          <PiSortAscending /> Sort by: Latest
        </SecondaryButton>
      </div>
    </section>
  );
};

export default ProjectTabs;
