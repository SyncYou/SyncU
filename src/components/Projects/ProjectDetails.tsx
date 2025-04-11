import { FiSend } from "react-icons/fi";
import x from "/assets/X.svg";
import { BsShare } from "react-icons/bs";
import { HiOutlineBriefcase, HiOutlineLockClosed } from "react-icons/hi";
import { PiTagChevron } from "react-icons/pi";
import { FaRegCalendarMinus } from "react-icons/fa";
import { IoCheckmarkCircle } from "react-icons/io5";
import Overlay from "../Reuseables/Overlay";
import SecondaryButton from "../Reuseables/SecondaryButton";
import PrimaryButton from "../Reuseables/PrimaryButton";
import Chip from "../Reuseables/Chip";
import { fetchUser } from "../../utils/queries/fetch";
import useProjectRequest from "../../hooks/useProjectRequest";
import ProjectDetailsMobile from "./ProjectDetailsMobile";
import ViewRequests from "./ViewRequests";
import useModalView from "../../hooks/useModalView";
import { Loading } from "../Reuseables/Loading";
import WorkSpace from "../Reuseables/Workspace";
import { useQuery } from "@tanstack/react-query";
import { formatTimestamp } from "../../utils/FormatDate";
import { useUserStore } from "../../store/UseUserStore";
import { useEffect } from "react";
import { fetchProjectInvitations } from "../../utils/SupabaseRequest";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";
import { supabase } from "../../supabase/client";
import { Alert } from "../../utils/types/Types";

interface PropsType {
  state: () => void;
  id: string;
  isOpen: boolean;
}
const ProjectDetails = ({ state, id, isOpen }: PropsType) => {
  const { modal, handleModal } = useModalView();
  const { userDetails } = useUserStore();

  const {
    showNotification,
    notificationMessage,
    handleRequest,
    sendingRequest,
    isRequested,
    withdrawRequest,
    data,
    isFetching,
    setIsRequested,
  } = useProjectRequest(id);

  const creator = data?.created_by === userDetails?.id;

  const { data: creatorData } = useQuery({
    queryKey: ["project-creator", data?.id],
    queryFn: () => fetchUser(data?.created_by ?? ""),
    enabled: !!data?.created_by,
  });

  useEffect(() => {
    if (isOpen && userDetails?.id) {
      checkRequestStatus();
      console.log(123);
    }
  }, [isOpen, userDetails?.id]);

  const checkRequestStatus = async () => {
    if (!userDetails?.id || !id) return;

    try {
      const invitations = await fetchProjectInvitations(id, userDetails.id);
      setIsRequested(invitations.length > 0);
      console.log(invitations.length);
    } catch (error) {
      console.error("Error checking request status:", error);
    }
  };

  const { data: invitations } = useQuery({
    queryKey: ["project-invitations", id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("Notifications")
        .select("*, action_data")
        .eq("action_data->>projectId", id); 

      if (error) throw error;
      console.log("Raw notifications data:", data);

      const invitationsWithUsers = await Promise.all(
        (data as Alert[]).map(async (invitation) => {
          const userId =
            invitation.action_data.sender || invitation.action_data.creatorId;
          const { data: user } = await supabase
            .from("Users")
            .select("photoUrl, username")
            .eq("id", userId)
            .single();

          return {
            ...invitation,
            user,
          };
        })
      );

      console.log(invitations);
      return invitationsWithUsers;
    },
    enabled: !!id && isOpen,
  });

  const requests =
    invitations?.filter((inv) => inv.message.includes("requested to join")) ||
    [];
  const invites =
    invitations?.filter((inv) =>
      inv.message.includes("invited to collaborate")
    ) || [];

  return (
    <Overlay>
      {modal && (
        <ViewRequests
          projectId={data?.id ?? ""}
          state={handleModal}
          requests={requests}
          invites={invites}
        />
      )}
      {sendingRequest && <Loading />}
      {isFetching && <Loading />}
      {showNotification && (
        <div className="absolute z-20 h-10 px-4 rounded-lg bg-[#2A2A33CC] flex items-center justify-center gap-[10px]">
          <IoCheckmarkCircle className="text-success700" />
          <span className="font-normal text-base text-white">
            {notificationMessage}
          </span>
        </div>
      )}
      {data && (
        <ProjectDetailsMobile
          data={data}
          state={state}
          handleModal={handleModal}
        />
      )}
      <div className="md:w-[1060px] md:h-[758px] text-gray950 hidden md:flex flex-col gap-4 relative w-[358px] h-[458px] rounded-3xl bg-white">
        <div className="w-full h-[76px] flex justify-between border-gray200 border-b py-4 px-6">
          <div className="flex gap-2">
            <div className="h-11 w-11 rounded-full bg-black">
              <img
                className="w-full h-full object-cover rounded-full"
                src={creatorData?.photoUrl}
                alt={creatorData?.username}
              />
            </div>
            <div className="">
              <p className="font-normal text-base">@{creatorData?.username}</p>
              <p className="font-normal text-xs text-gray700">
                is looking for collaborators
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            {isRequested && !creator && (
              <SecondaryButton
                onClick={() => withdrawRequest(data!.id, data!.created_by)}
                classes="h-11"
              >
                Withdraw Request
              </SecondaryButton>
            )}

            {!isRequested && !creator && (
              <PrimaryButton
                onClick={() =>
                  handleRequest(data!.id, data!.created_by, data!.title)
                }
                classes="text-sm justify-between py-2 h-fit px-4 gap-2"
              >
                Send request
                <FiSend />
              </PrimaryButton>
            )}

            {creator && (
              <SecondaryButton classes="h-11">
                <BiEdit />
                Edit project
              </SecondaryButton>
            )}
            {creator && (
              <PrimaryButton classes="h-11 flex items-center gap-2 py-2 px-4 rounded-full bg-[#FFEAEA] text-[#C83C3C] hover:opacity-90 hover:text-[#C83C3Ca4] ">
                <RiDeleteBinLine />
                Delete project
              </PrimaryButton>
            )}
            <div className="w-4 h-0 border-[2px] border-gray200 my-auto -rotate-90"></div>
            <img
              onClick={state}
              className="my-auto cursor-pointer"
              src={x}
              alt="close button"
            />
          </div>
        </div>
        <div className="w-full h-full px-6 flex justify-between">
          <div className="md:max-w-[670px] w-full max-h-[661px] pr-5 flex flex-col gap-6 overflow-y-scroll scrollbar-thin scrollbar-thumb-white scrollbar-track-gray100">
            <div className="flex justify-between">
              <div className="flex flex-col gap-2">
                <h6 className="font-medium text-sm pt-2">Project Title</h6>
                <h3 className="font-semibold text-2xl">{data?.title}</h3>
                <p className="font-normal text-sm text-gray700">
                  {data?.industry}
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
                {data?.required_roles.map((skill, _) => {
                  return <Chip key={_}>{skill}</Chip>;
                })}
              </div>
            </div>
            <hr />
            <div className="flex flex-col gap-3">
              <p className="font-medium text-sm">Required skills or stacks</p>
              <div className="flex flex-wrap gap-[11px]">
                {data?.required_stacks.map((skill, _) => {
                  return <Chip key={_}>{skill}</Chip>;
                })}
              </div>
            </div>
            <hr />
            <div className="w-full">
              <p className="mb-3 text-gray950 font-medium text-sm">
                Description
              </p>
              <div className="text-[#374151] font-normal text-base font-inter">
                <p className="font-normal text-base font-inter">
                  {data?.description}
                </p>
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
                  <WorkSpace workspace={data?.workspace?.name ?? "Slack"} />
                  <span className="text-gray950 font-medium">
                    {data?.workspace?.name}
                  </span>
                </div>
                {!creator && (
                  <PrimaryButton
                    onClick={() => window.open(data?.workspace?.url, "_blank")}
                    disabled={true}
                    classes="flex items-center gap-2 disabled:opacity-65 border border-gray200 py-2 px-4 rounded-full h-10 w-[84px]"
                  >
                    <HiOutlineLockClosed />
                    Join
                  </PrimaryButton>
                )}
              </div>
            </div>
            <div className="border-t border-gray200 flex flex-col gap-1">
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
                  <p className="text-gray950 font-medium">
                    {formatTimestamp(data?.created_at as string)}
                  </p>
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
                  <div>Requests and invites</div>
                  {creator && (
                    <div className="flex items-center">
                      <div className="flex -space-x-2">
                        {invitations
                          ?.slice(0, 3)
                          .map((invitation, index) => (
                            <img
                              key={index}
                              src={
                                invitation.user?.photoUrl ||
                                "/signUp-imgs/avatar1.svg"
                              }
                              alt={invitation.user?.username}
                              className="w-6 h-6 rounded-full border-2 border-white"
                            />
                          ))}
                      </div>
                      {[...requests, ...invites].length > 0 && (
                        <button
                          onClick={handleModal}
                          className="ml-2 text-gray-500 hover:text-gray-700"
                        >
                          {">"}
                        </button>
                      )}
                    </div>
                  )}
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
