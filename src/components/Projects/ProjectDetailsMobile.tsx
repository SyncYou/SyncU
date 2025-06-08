import { useEffect, useState } from "react";
import { FiSend } from "react-icons/fi";
import x from "/assets/X.svg";
import { BsShare } from "react-icons/bs";
import { HiOutlineBriefcase, HiOutlineLockClosed } from "react-icons/hi";
import { PiTagChevron } from "react-icons/pi";
import { FaRegCalendarMinus } from "react-icons/fa";
import { IoCheckmarkCircle } from "react-icons/io5";
import SecondaryButton from "../Reuseables/SecondaryButton";
import PrimaryButton from "../Reuseables/PrimaryButton";
import Chip from "../Reuseables/Chip";
import { fetchUser } from "../../utils/queries/fetch";
import useProjectRequest from "../../hooks/useProjectRequest";
import { Loading } from "../Reuseables/Loading";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { formatTimestamp } from "../../utils/FormatDate";
import { supabase } from "../../supabase/client";
import { fetchProjectInvitations } from "../../utils/SupabaseRequest";
import WorkSpace from "../Reuseables/Workspace";
import { useUserData } from "../../context/useUserData";

interface PropsType {
  state: () => void;
  id: string;
  isOpen?: boolean;
  handleModal: () => void;
}

const ProjectDetailsMobile = ({ state, id, handleModal, isOpen }: PropsType) => {
  const [currentView, setCurrentView] = useState<"About" | "Workspace">("About");
  const { user } = useUserData();
  const queryClient = useQueryClient();

  const {
    showNotification,
    notificationMessage,
    handleRequest,
    sendingRequest,
    isRequested,
    withdrawRequest,
    data,
    setIsRequested,
  } = useProjectRequest(id);

  const creator = data?.created_by === user?.id;

  const { data: creatorData } = useQuery({
    queryKey: ["project-creator", data?.id],
    queryFn: () => fetchUser(data?.created_by ?? ""),
    enabled: !!data?.created_by,
  });

  useEffect(() => {
    if (isOpen && user?.id) {
      checkRequestStatus();
    }
  }, [isOpen, user?.id]);

  const checkRequestStatus = async () => {
    if (!user?.id || !id) return;

    try {
      const invitations = await fetchProjectInvitations(id, user.id);
      setIsRequested(invitations.length > 0);
    } catch (error) {
      console.error("Error checking request status:", error);
    }
  };

  
  useEffect(() => {
    if (!id || !isOpen) return;

    const channel = supabase
      .channel("project_invitations_changes")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "Project_Invitations",
          filter: `project_id=eq.${id}`,
        },
        () => {
          queryClient.invalidateQueries({
            queryKey: ["project-invitations", id],
          });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [id, isOpen, queryClient]);

  const { data: projectInvitations } = useQuery({
    queryKey: ["project-invitations", id],
    queryFn: async () => {
      const { data: invitations, error } = await supabase
        .from("Project_Invitations")
        .select("*")
        .eq("project_id", id)
        .order("created_at", { ascending: false });

      if (error) throw error;

      const validInvitations = invitations.filter(
        (inv) => inv.status !== "accepted" && inv.status !== "rejected"
      );

      const invitationsWithUsers = await Promise.all(
        validInvitations.map(async (invitation) => {
          const { data: user } = await supabase
            .from("Users")
            .select("*")
            .eq("id", invitation.sender_id)
            .single();

          return {
            ...invitation,
            user,
          };
        })
      );

      return {
        requests: invitationsWithUsers.filter((inv) => inv.type === "request"),
        invites: invitationsWithUsers.filter((inv) => inv.type === "invite"),
      };
    },
    enabled: !!id && isOpen,
  });

  const { data: isProjectMember } = useQuery({
    queryKey: ["project-member", id, user?.id],
    queryFn: async () => {
      if (!user?.id || !id) return false;

      const { data } = await supabase
        .from("Project_Members")
        .select("user_id")
        .eq("project_id", id)
        .eq("user_id", user.id)
        .single();

      return !!data;
    },
    enabled: !!id && !!user?.id && isOpen,
  });

  return (
    <div className="h-screen w-screen bg-white md:hidden">
      {sendingRequest && <Loading />}
      {showNotification && (
        <div className="absolute z-20 top-4 left-1/2 transform -translate-x-1/2 h-10 px-4 rounded-lg bg-[#2A2A33CC] flex items-center justify-center gap-[10px]">
          <IoCheckmarkCircle className="text-success700" />
          <span className="font-normal text-base text-white">
            {notificationMessage}
          </span>
        </div>
      )}
      
      <div className="w-full border-b border-gray200 bg-white">
        <div className="flex gap-[10px] py-[10px] px-4 border-b border-gray200">
          <div className="flex gap-2 items-center">
            <div className="h-10 w-10 bg-black rounded-full">
              <img 
                className="w-full h-full object-cover rounded-full" 
                src={creatorData?.photoUrl} 
                alt={creatorData?.username} 
              />
            </div>
            <div className="">
              <p className="m-0 font-normal text-sm text-gray950">@{creatorData?.username}</p>
              <p className="m-0 font-normal text-xs text-gray700">
                is looking for collaborators
              </p>
            </div>
          </div>
          <div className="flex ml-auto gap-2">
            <img
              onClick={state}
              className="my-auto cursor-pointer"
              src={x}
              alt="close"
            />
          </div>
        </div>
        
        <div className="h-11 w-full px-4 border-gray200 border-b gap-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setCurrentView("About")}
              className={`h-11 px-4 ${currentView === "About" ? "text-brand600 border-b-2 border-brand600" : "text-gray700"}`}
            >
              About
            </button>
            <button
              onClick={() => setCurrentView("Workspace")}
              className={`h-11 px-4 ${currentView === "Workspace" ? "text-brand600 border-b-2 border-brand600" : "text-gray700"}`}
            >
              Workspace
            </button>
          </div>
        </div>
      </div>

      <div className="h-[calc(100vh-120px)] w-full px-4 pb-20 flex flex-col gap-6 overflow-y-auto">
        {currentView === "About" ? (
          <>
            <div className="flex justify-between mt-4">
              <div className="flex flex-col gap-2">
                <h6 className="font-medium text-sm">Project Title</h6>
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
                {data?.required_roles.map((skill, _) => (
                  <Chip key={_}>{skill}</Chip>
                ))}
              </div>
            </div>
            <hr />
            <div className="flex flex-col gap-3">
              <p className="font-medium text-sm">Required skills or stacks</p>
              <div className="flex flex-wrap gap-[11px]">
                {data?.required_stacks.map((skill, _) => (
                  <Chip key={_}>{skill}</Chip>
                ))}
              </div>
            </div>
            <hr />
            <div className="w-full">
              <p className="mb-3 text-gray950 font-medium text-sm">
                Description
              </p>
              <p className="font-normal text-base font-inter">
                {data?.description}
              </p>
            </div>
          </>
        ) : (
          <div className="mt-4 w-full flex flex-col gap-4 rounded-lg py-4 border border-gray200">
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
                    disabled={!isProjectMember}
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
                  <div>Project views</div>
                  <p className="text-gray950 font-medium">
                    {data?.project_views}
                  </p>
                </div>
                <div className="flex justify-between h-10 px-3 py-2">
                  <div>Requests and invites</div>
                  {creator && (
                    <div className="flex items-center">
                      <div className="flex -space-x-2">
                        {projectInvitations?.requests
                          .slice(0, 3)
                          .map((invitation, index) => (
                            <img
                              key={index}
                              src={
                                invitation.user?.photoUrl || "/default-avatar.png"
                              }
                              alt={invitation.user?.username || "User"}
                              className="w-6 h-6 rounded-full border-2 border-white"
                            />
                          ))}
                      </div>
                      {projectInvitations &&
                        (projectInvitations.requests.length > 0 ||
                          projectInvitations.invites.length > 0) && (
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
        )}
      </div>


      <div className="fixed bottom-0 h-16 w-full border-t border-gray200 bg-white flex justify-between items-center px-4 py-[10px]">
        <div className="flex-1">
          {isRequested && !creator && (
            <SecondaryButton
              onClick={() => withdrawRequest(data?.id as string, data?.created_by as string)}
              classes="h-11 w-full"
            >
              Withdraw Request
            </SecondaryButton>
          )}
          {!isRequested && !creator && !isProjectMember && (
            <PrimaryButton
              onClick={() => handleRequest(data?.id as string, data?.created_by as string, data?.title as string)}
              classes="h-11 w-full gap-2"
            >
              Send Request <FiSend />
            </PrimaryButton>
          )}
          {creator && (
            <div className="flex gap-2">
              <SecondaryButton classes="h-11 flex-1">
                <BiEdit /> Edit project
              </SecondaryButton>
              <PrimaryButton classes="h-11 flex-1 gap-2 bg-[#FFEAEA] text-[#C83C3C]">
                <RiDeleteBinLine /> Delete
              </PrimaryButton>
            </div>
          )}
        </div>
        <div className="h-10 w-10 cursor-pointer drop-shadow-lg rounded-[100px] flex justify-center items-center border-[0.5px] border-gray300 ml-2">
          <BsShare className="rotate-180 text-[20px]" />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsMobile;