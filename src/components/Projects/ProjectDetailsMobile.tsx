import { useState } from "react";
import { ProjectType } from "../../utils/types/Types";
import Chip from "../Reuseables/Chip";
import x from "/assets/X.svg";
import SecondaryButton from "../Reuseables/SecondaryButton";
import PrimaryButton from "../Reuseables/PrimaryButton";
import { FiSend } from "react-icons/fi";
import { BsShare } from "react-icons/bs";
import useProjectRequest from "../../hooks/useProjectRequest";
import { user } from "../../utils/queries/fetch";

interface PropsType {
  state: () => void;
  data: ProjectType;
}

const ProjectDetailsMobile = ({ data, state }: PropsType) => {
  const [currentView, setCurrentView] = useState<string>("About");
  const creator = data.created_by === user.data.user?.id;

  const { handleRequest, isRequested } = useProjectRequest();

  const checkIfRequested = data.requests?.filter(
    (req) => req.userId === user.data.user?.id
  );

  return (
    <div className="h-screen w-screen bg-white md:hidden">
      <div className="w-full border-b border-gray200 bg-white">
        <div className="flex gap-[10px] py-[10px] px-4 border-b border-gray200">
          <div className="flex gap-2 items-center">
            <div className="h-10 w-10 bg-black rounded-full"></div>
            <div className="">
              <p className="m-0 font-normal text-sm text-gray950">@oscarteem</p>
              <p className="m-0 font-normal text-xs text-gray700">
                is looking for collaborators
              </p>
            </div>
          </div>
          <div className="flex ml-auto">
            <div className="w-20 h-[32px] flex gap-4 my-auto">
              <button className="w-[32px] h-[32px] rounded-[80px] border-[0.4px] border-gray200">
                {"<"}
              </button>
              <button className="w-[32px] h-[32px] rounded-[80px] border-[0.4px] border-gray200">
                {">"}
              </button>
            </div>
            <div className="w-4 h-0 border-[1px] border-gray200 my-auto -rotate-90"></div>
            <img
              onClick={state}
              className="my-auto cursor-pointer"
              src={x}
              alt=""
            />
          </div>
        </div>
        <div className="h-11 w-full px-4 border-gray200 border-b gap-4">
          <div className="project flex items-center gap-4">
            <div
              onClick={() => setCurrentView("About")}
              className={`w-[125px] h-11 flex ${
                currentView === "About" && "active"
              } relative justify-center items-center`}
            >
              About
            </div>
            <div
              onClick={() => setCurrentView("Workspace")}
              className={`w-[125px] h-11 flex ${
                currentView === "Workspace" && "active"
              } relative justify-center items-center`}
            >
              Workspace
            </div>
          </div>
        </div>
      </div>
      <div className="h-full w-full pr-5 flex flex-col gap-8 overflow-y-scroll scrollbar-thin scrollbar-thumb-white scrollbar-track-gray100">
        <div className="h-16 flex justify-between">
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-2xl">{data.title}</h3>
            <p className="font-normal text-base text-gray700">
              {data.industry}
            </p>
          </div>
          <div className="h-10 w-10 cursor-pointer rounded-[100px] flex justify-center items-center border-[0.5px] border-gray300 my-auto">
            <BsShare className="rotate-180 text-[24px]" />
          </div>
        </div>
        <div className="h-[99px] flex flex-col gap-3">
          <p className="font-medium text-sm">Required</p>
          <div className="flex gap-[11px]">
            {data.required_stacks.map((skill) => {
              return <Chip>{skill}</Chip>;
            })}
          </div>
        </div>
        <div className="w-full">
          <p className="mb-3 text-gray950 font-medium">Description</p>
          <div className="text-[#374151] font-normal">
            <p>{data.description}</p>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 h-16 w-full border-t border-gray200 bg-white flex justify-between items-center px-4 py-[10px]">
        {checkIfRequested.length == 1 ||
          (isRequested && !creator && (
            <SecondaryButton classes="h-11 min-w-[294px]">
              Withdraw Request
            </SecondaryButton>
          ))}
        {checkIfRequested.length == 0 ||
          (!isRequested && !creator && (
            <PrimaryButton
              onClick={() => handleRequest(data.id, data.created_by)}
              classes="h-11 min-w-[294px] gap-3"
            >
              Send Request
              <FiSend />
            </PrimaryButton>
          ))}
        {creator && (
          <SecondaryButton classes="h-11 min-w-[294px]">
            Edit project
          </SecondaryButton>
        )}
        <div className="h-10 w-10 cursor-pointer drop-shadow-lg rounded-[100px] flex justify-center items-center border-[0.5px] border-gray300 my-auto">
          <BsShare className="rotate-180 text-[20px]" />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsMobile;
