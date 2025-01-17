import { FiSend } from "react-icons/fi";
import x from "/assets/X.svg";
import slack from "/assets/slack.svg";
import { BsShare } from "react-icons/bs";
import { HiOutlineBriefcase, HiOutlineLockClosed } from "react-icons/hi";
import { PiTagChevron } from "react-icons/pi";
import { FaRegCalendarMinus } from "react-icons/fa";
import { useState } from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import Overlay from "../../../components/Overlay";
import PrimaryButton from "../../../components/PrimaryButton";
import SecondaryButton from "../../../components/SecondaryButton";
import Chip from "../../../components/Chip";
import { requestTojoinProject } from "../../../utils/SupabaseRequest";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchProject, user } from "../../../utils/queries/fetch";

interface PropsType {
  state: () => void;
  projectId: string;
}

const ProjectDetails = ({ state, projectId }: PropsType) => {
  const [showNotifications, setShowNotifications] = useState<boolean>(false);
  const [currentView, setCurrentView] = useState<string>("About");

  const client = useQueryClient();

  const handleRequest = async () => {
    try {
      const req = await requestTojoinProject(data?.id);
      if (req) {
        // await sendNotification()
        const showNotificationTimeout = setTimeout(() => {
          setShowNotifications(true);
        }, 1000);

        const hideNotificationTimeout = setTimeout(() => {
          setShowNotifications(false);
        }, 3000);

        client.invalidateQueries({
          queryKey: ["project-details"],
        });

        return () => {
          clearTimeout(showNotificationTimeout);
          clearTimeout(hideNotificationTimeout);
        };
      }
    } catch (error) {
      console.error(error);
    }
  };

  const { data } = useQuery({
    queryKey: ["project-details"],
    queryFn: async () => {
      const project = await fetchProject(projectId);
      return project;
    },
  });

  return (
    <Overlay>
      {showNotifications && (
        <div className="absolute z-20 h-10 w-[145px] rounded-lg bg-[#2A2A33CC] flex items-center justify-center gap-[10px]">
          <IoCheckmarkCircle className="text-success700" />
          <span className="font-normal text-base text-white">Request sent</span>
        </div>
      )}
      <div className="h-screen w-screen bg-white md:hidden">
        <div className="w-full border-b border-gray200 bg-white">
          <div className="flex gap-[10px] py-[10px] px-4 border-b border-gray200">
            <div className="flex gap-2 items-center">
              <div className="h-10 w-10 bg-black rounded-full"></div>
              <div className="">
                <p className="m-0 font-normal text-sm text-gray950">
                  @oscarteem
                </p>
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
              <h3 className="font-semibold text-2xl">{data?.title}</h3>
              <p className="font-normal text-base text-gray700">
                {data?.industry}
              </p>
            </div>
            <div className="h-10 w-10 cursor-pointer rounded-[100px] flex justify-center items-center border-[0.5px] border-gray300 my-auto">
              <BsShare className="rotate-180 text-[24px]" />
            </div>
          </div>
          <div className="h-[99px] flex flex-col gap-3">
            <p className="font-medium text-sm">Required</p>
            <div className="flex gap-[11px]">
              {data?.required_stacks.map((skill) => {
                return <Chip>{skill}</Chip>;
              })}
            </div>
          </div>
          <div className="w-full">
            <p className="mb-3 text-gray950 font-medium">Description</p>
            <div className="text-[#374151] font-normal">
              <p>{data?.description}</p>
            </div>
          </div>
        </div>
        <div className="fixed bottom-0 h-16 w-full border-t border-gray200 bg-white flex justify-between items-center px-4 py-[10px]">
          {data?.requests.filter((req) => req.userId === user.data.user?.id)
            .length === 1 && (
            <SecondaryButton
              onClick={handleRequest}
              classes="h-11 min-w-[294px]"
            >
              Withdraw Request
            </SecondaryButton>
          )}
          {/* //{" "}
          <PrimaryButton onClick={handleRequest} classes="h-11 min-w-[294px]">
            // Send Request // <FiSend />
            //{" "}
          </PrimaryButton>
          // */}
          <div className="h-10 w-10 cursor-pointer drop-shadow-lg rounded-[100px] flex justify-center items-center border-[0.5px] border-gray300 my-auto">
            <BsShare className="rotate-180 text-[20px]" />
          </div>
        </div>
      </div>
      <div className="md:w-[1060px] md:h-[758px] text-gray950 hidden md:flex flex-col gap-4 relative w-[358px] h-[458px] rounded-3xl bg-white">
        <div className="w-full h-[76px] flex justify-between border-gray200 border-b py-4 px-6">
          <div className="flex gap-2">
            <div className="h-11 w-11 rounded-full bg-black"></div>
            <div className="">
              <p className="font-normal text-base">@ameenu</p>
              <p className="font-normal text-xs text-gray700">
                is looking for collaborators
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            {data?.created_by === user.data.user?.id && (
              <SecondaryButton classes="h-10 min-w-[146px]">
                Edit Project
              </SecondaryButton>
            )}
            {data?.requests.filter((req) => req.userId === user.data.user?.id)
              .length === 1 ? (
              <SecondaryButton
                onClick={handleRequest}
                classes="h-10 min-w-[146px]"
              >
                Withdraw Request
              </SecondaryButton>
            ) : (
              <PrimaryButton
                onClick={handleRequest}
                classes="h-10 min-w-[146px]"
              >
                Send Request
                <FiSend />
              </PrimaryButton>
            )}

            <div className="w-20 h-[32px] flex gap-4 my-auto">
              <button className="w-[32px] h-[32px] rounded-[80px] border-[0.4px] border-gray200">
                {"<"}
              </button>
              <button className="w-[32px] h-[32px] rounded-[80px] border-[0.4px] border-gray200">
                {">"}
              </button>
            </div>
            <div className="w-4 h-0 border-[2px] border-gray200 my-auto -rotate-90"></div>
            <img
              onClick={state}
              className="my-auto cursor-pointer"
              src={x}
              alt=""
            />
          </div>
        </div>
        <div className="w-full h-full px-6 flex justify-between">
          <div className="w-[670px] max-h-[661px] pr-5 flex flex-col gap-6 overflow-y-scroll scrollbar-thin scrollbar-thumb-white scrollbar-track-gray100">
            <div className="h-16 flex justify-between">
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-2xl">{data?.title}</h3>
                <p className="font-normal text-base text-gray700">
                  {data?.industry}
                </p>
              </div>
              <div className="h-10 w-10 cursor-pointer rounded-[100px] flex justify-center items-center border-[0.5px] border-gray300 my-auto">
                <BsShare className="rotate-180 text-[24px]" />
              </div>
            </div>
            <hr />
            <div className="h-[99px] flex flex-col gap-3">
              <p className="font-medium text-sm">Required roles</p>
              <div className="flex flex-wrap gap-[11px]">
                {data?.required_roles.map((skill) => {
                  return <Chip>{skill}</Chip>;
                })}
              </div>
            </div>
            <hr />
            <div className="h-[99px] flex flex-col gap-3">
              <p className="font-medium text-sm">Required skills or stacks</p>
              <div className="flex flex-wrap gap-[11px]">
                {data?.required_stacks.map((skill) => {
                  return <Chip>{skill}</Chip>;
                })}
              </div>
            </div>
            <hr />
            <div className="w-full">
              <p className="mb-3 text-gray950 font-medium">Description</p>
              <div className="text-[#374151] font-normal">
                <p>{data?.description}</p>
                {/* <h2 className="mt-4">Core Features</h2> */}
                {/* <ol className="list-decimal pl-4">
                  {data?.projectFeatures.map((feature) => {
                    return (
                      <li>
                        {feature.name}
                        <ul className="list-disc pl-4  mb-5">
                          {feature.details.map((detail) => (
                            <li>{detail}</li>
                          ))}
                        </ul>
                      </li>
                    );
                  })}
                </ol> */}
              </div>
            </div>
          </div>
          <div className="h-[280px] w-[323px] flex flex-col text-gray700 text-sm gap-4 rounded-lg py-4 border border-gray200">
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
            <div className="flex flex-col gap-1">
              <div className="h-20">
                <div className="flex justify-between h-10 px-3 py-2">
                  <div className="flex items-center gap-2 w-20">
                    <PiTagChevron /> Industry
                  </div>
                  <p className="text-gray950 font-medium">{data?.industry}</p>
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
                    {data?.project_views}
                  </p>
                </div>
                <div className="flex justify-between h-10 px-3 py-2">
                  <div>Requests</div>
                  <p className="text-gray950 font-medium">
                    {data?.requests?.length}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Overlay>
  );
};

export default ProjectDetails;
