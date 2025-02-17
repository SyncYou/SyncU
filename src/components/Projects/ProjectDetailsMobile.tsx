import { useState } from "react";
import { ProjectType } from "../../utils/types/Types";
import Chip from "../Reuseables/Chip";
import slack from "/assets/slack.svg";
import x from "/assets/X.svg";
import { PiTagChevron } from "react-icons/pi";
import SecondaryButton from "../Reuseables/SecondaryButton";
import PrimaryButton from "../Reuseables/PrimaryButton";
import { FiSend } from "react-icons/fi";
import { FaRegCalendarMinus } from "react-icons/fa";
import { BsShare } from "react-icons/bs";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { HiOutlineBriefcase, HiOutlineLockClosed } from "react-icons/hi";
import useProjectRequest from "../../hooks/useProjectRequest";
import { user } from "../../utils/queries/fetch";

interface PropsType {
  state: () => void;
  data: ProjectType;
  handleModal: () => void;
}

const ProjectDetailsMobile = ({ data, state, handleModal }: PropsType) => {
  const [currentView, setCurrentView] = useState<string>("About");
  const creator = data.created_by === user.data.user?.id;

  const { handleRequest, isRequested, withdrawRequest } = useProjectRequest();


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
              <button className="w-[32px] h-[32px] rounded-[80px] opacity-70 border-[0.4px] flex justify-center items-center border-gray200">
                <FaArrowLeftLong  className="text-sm"/>
              </button>
              <button className="w-[32px] h-[32px] rounded-[80px] shadow border-[0.4px] flex justify-center items-center border-gray200">
                <FaArrowRightLong className="text-sm" />
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
      <div className="h-full w-full px-3 flex flex-col gap-8 overflow-y-scroll scrollbar-thin scrollbar-thumb-white scrollbar-track-gray100">
        { currentView === 'About' ? 
        (<><div className="flex justify-between">
          <div className="flex flex-col gap-2 mt-2">
            <h6 className="font-medium text-sm pt-2">Project Title</h6>
            <h3 className="font-semibold text-2xl">{data.title}</h3>
            <p className="font-normal text-sm text-gray700">
              {data.industry}
            </p>
          </div>
          <div className="h-10 w-10 cursor-pointer rounded-full flex justify-center items-center border-[0.5px] border-gray300 my-auto">
            <BsShare className="rotate-180 text-[1.22rem]" />
          </div>
        </div>
        <hr />
        <div className="flex flex-col gap-3">
          <p className="font-medium text-sm">Required roles</p>
          <div className="flex flex-wrap gap-[11px]">
            {data.required_roles.map((skill, _) => {
              return <Chip key={_}>{skill}</Chip>;
            })}
          </div>
        </div>
        <hr />
        <div className="flex flex-col gap-3">
          <p className="font-medium text-sm">Required skills or stacks</p>
          <div className="flex flex-wrap gap-[11px]">
            {data.required_stacks.map((skill, _) => {
              return <Chip key={_}>{skill}</Chip>;
            })}
          </div>
        </div>
        <hr />
        <div className="w-full">
          <p className="mb-3 text-gray950 font-medium text-sm">Description</p>
          <div className="text-[#374151] font-normal text-base font-inter">
            <p className="font-normal text-base font-inter">{data.description}</p>
          </div>
        </div></>) : 
          (<div className="h-[280px] w-[98%] mx-auto mt-4 flex flex-col text-gray700 text-sm gap-4 rounded-lg py-4 border border-gray200">
            <div className="px-3">
              <p className="m-1 flex gap-2 h-5 items-center">
                <HiOutlineBriefcase />
                Workspace
              </p>
              <div className="w-full h-10 flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <img className="" src={slack} alt="" />
                  <span className="text-gray950 font-medium">Slack</span>
                </div>
                <button className="flex items-center gap-2 opacity-65 border border-gray200 py-2 px-4 rounded-full h-10 w-[84px]">
                  <HiOutlineLockClosed />
                  Join
                </button>
              </div>
            </div>
            <div className="border-t border-gray200 flex flex-col gap-1">
              <div className="h-20">
                <div className="flex justify-between h-10 px-3 py-2">
                  <div className="flex items-center gap-2 w-20">
                    <PiTagChevron /> Industry
                  </div>
                  <p className="text-gray950 font-medium">{data.industry}</p>
                </div>
                <div className="flex justify-between h-10 px-3 py-2">
                  <div className="flex items-center gap-2">
                    <FaRegCalendarMinus />
                    Date Posted
                  </div>
                  <p className="text-gray950 font-medium">30.11.2024</p>
                </div>
              </div>
              <div className="w-full h-0 border-t border-gray200"></div>
              <div className="h-20">
                <div className="flex justify-between h-10 px-3 py-2">
                  <div className="">Project views</div>
                  <p className="text-gray950 font-medium">
                    {data.project_views}
                  </p>
                </div>
                <div className="flex justify-between h-10 px-3 py-2">
                  <div>Requests</div>
                  {creator ? (
                    <button onClick={handleModal}>{">"}</button>
                  ) : (
                    <p className="text-gray950 font-medium">
                      {data.requests?.length}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>)
        }
      </div>
      <div className="fixed bottom-0 h-16 w-full border-t border-gray200 bg-white flex justify-between items-center px-4 py-[10px]">
        {checkIfRequested.length == 1 ||
          (isRequested && !creator && (
            <SecondaryButton 
              onClick={() => withdrawRequest(data.id, data.created_by)}
              classes="h-11 min-w-[294px]">
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
