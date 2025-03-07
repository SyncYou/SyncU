import { FiSend } from "react-icons/fi";
import x from "/assets/X.svg";
import { BsShare } from "react-icons/bs";
import { HiOutlineBriefcase, HiOutlineLockClosed } from "react-icons/hi";
import { PiTagChevron } from "react-icons/pi";
import { FaRegCalendarMinus } from "react-icons/fa";
import { IoCheckmarkCircle } from "react-icons/io5";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Overlay from "../Reuseables/Overlay";
import SecondaryButton from "../Reuseables/SecondaryButton";
import PrimaryButton from "../Reuseables/PrimaryButton";
import Chip from "../Reuseables/Chip";
import { user } from "../../utils/queries/fetch";
import useProjectRequest from "../../hooks/useProjectRequest";
import ProjectDetailsMobile from "./ProjectDetailsMobile";
import ViewRequests from "./ViewRequests";
import useModalView from "../../hooks/useModalView";
import { Loading } from "../Reuseables/Loading";
import WorkSpace from "../Reuseables/Workspace";

interface PropsType {
  state: () => void;
  id: string;
}

const ProjectDetails = ({ state, id }: PropsType) => {
  const { modal, handleModal } = useModalView();
  const {
    handleRequest,
    showNotifications,
    sendingRequest,
    withdrawRequest,
    data,
    isFetching,
    // isRequested
  } = useProjectRequest(id);

  const isParticipant = data?.participants?.includes(user.data.user?.id ?? "");

  const creator = data?.created_by === user.data.user?.id;

  const checkIfRequested = data?.requests?.filter(
    (req) => req.userId === user.data.user?.id
  );
  console.log(isParticipant, creator);


  return (
    <Overlay>
      {modal && (
        <ViewRequests
          projectId={data.id}
          requests={data.requests}
          state={handleModal}
        />
      )}
      {sendingRequest && <Loading />}
      {isFetching && <Loading />}
      {showNotifications && (
        <div className="absolute z-20 h-10 w-[145px] rounded-lg bg-[#2A2A33CC] flex items-center justify-center gap-[10px]">
          <IoCheckmarkCircle className="text-success700" />
          <span className="font-normal text-base text-white">Request sent</span>
        </div>
      )}
      <ProjectDetailsMobile data={data} state={state} handleModal={handleModal} />
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
            {checkIfRequested.length == 1 && !creator && !isParticipant && (
              <SecondaryButton
                onClick={() => withdrawRequest(data.id, data.created_by)}
                classes="h-11"
              >
                Withdraw Request
              </SecondaryButton>
            )}
            {checkIfRequested.length == 0 && !creator && !isParticipant && (
              <PrimaryButton
                onClick={() => handleRequest(data.id, data.created_by)}
                classes="text-sm justify-between py-2 h-fit px-4 gap-2"

              >
                Send request
                <FiSend />
              </PrimaryButton>
            )}
            {creator && (
              <SecondaryButton classes="h-11">Edit project</SecondaryButton>
            )}

            <div className="w-20 h-[32px] flex gap-4 my-auto">
              <button className="w-[32px] h-[32px] rounded-[80px] opacity-70 border-[0.4px] flex justify-center items-center border-gray200">
                <FaArrowLeftLong  className="text-sm"/>
              </button>
              <button className="w-[32px] h-[32px] rounded-[80px] shadow border-[0.4px] flex justify-center items-center border-gray200">
                <FaArrowRightLong className="text-sm" />
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
          <div className="md:max-w-[670px] w-full max-h-[661px] pr-5 flex flex-col gap-6 overflow-y-scroll scrollbar-thin scrollbar-thumb-white scrollbar-track-gray100">
            <div className="flex justify-between">
              <div className="flex flex-col gap-2">
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
                  <WorkSpace workspace={data.workspace?.name ?? "Slack"} />
                  <span className="text-gray950 font-medium">
                    {data.workspace?.name}
                  </span>
                </div>
                <PrimaryButton
                  onClick={() => window.open(data.workspace?.url, "_blank")}
                  disabled={!isParticipant || false}
                  classes="flex items-center gap-2 disabled:opacity-65 border border-gray200 py-2 px-4 rounded-full h-10 w-[84px]"
                >
                  <HiOutlineLockClosed />
                  Join
                </PrimaryButton>
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
          </div>
        </div>
      </div>
    </Overlay>
  )
};

export default ProjectDetails;
