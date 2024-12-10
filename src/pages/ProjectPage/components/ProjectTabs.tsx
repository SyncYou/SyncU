import { PiSortAscending } from "react-icons/pi";
import SecondaryButton from "../../../components/SecondaryButton";

const ProjectTabs = () => {
  return (
    <section className="h-12 w-full bg-white">
      <div className="h-full w-full pl-8 pr-14 border-gray200 border-b">
        <div className="w-[266px] h-full project flex gap-4">
          <div className="w-[125px] h-12 flex active relative justify-center items-center">
            Created
          </div>
          <div className="w-[125px] h-12 flex relative justify-center items-center">
            Requested
          </div>
        </div>
      </div>
      <div className="h-16 w-full py-4 px-8">
        <SecondaryButton classes="min-w-[133px] h-8 py-1 px-3">
          <PiSortAscending /> Sort by: Latest
        </SecondaryButton>
      </div>
    </section>
  );
};

export default ProjectTabs;
