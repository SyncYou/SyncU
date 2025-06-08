import { useState } from "react";
import {
  requestToJoinProject,
  withdrawProjectRequest,
  // fetchProjectInvitations,
} from "../utils/SupabaseRequest";
import { ProjectType } from "../utils/types/Types";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "../supabase/client";
// import { useUserStore } from "../store/UseUserStore";

const useProjectRequest = (id: string) => {
  const [showNotification, setShowNotification] = useState<boolean>(false);
  const [notificationMessage, setNotificationMessage] = useState<string>("");
  const [sendingRequest, setSendingRequest] = useState<boolean>(false);
  // const { userDetails } = useUserStore();
  // const userId = userDetails?.id;

  const [data, setData] = useState<ProjectType | null>(null);
  const [isRequested, setIsRequested] = useState<boolean>(false);



  const { isFetching } = useQuery({
    queryKey: ["project-details", id],
    queryFn: async (): Promise<ProjectType> => {
      const { data } = await supabase
        .from("Projects")
        .select()
        .eq("id", id)
        .single();

      if (data) {
        setData(data);
      }
      return data;
    },
  });

  const handleRequest = async (
    id: string,
    created_by: string,
    project_name: string
  ) => {
    try {
      setSendingRequest(true);
      const req = await requestToJoinProject(id, created_by, project_name);
      if (req) {
        setIsRequested(true);
        setNotificationMessage("Request sent");
        setShowNotification(true);

        setTimeout(() => {
          setShowNotification(false);
        }, 3000);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setSendingRequest(false);
    }
  };

  const withdrawRequest = async (id: string, creator: string) => {
    try {
      setSendingRequest(true);
      const req = await withdrawProjectRequest(id, creator);
      if (req) {
        setIsRequested(false);
        setNotificationMessage("Request withdrawn successfully");
        setShowNotification(true);

        setTimeout(() => {
          setShowNotification(false);
        }, 3000);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setSendingRequest(false);
    }
  };

  

  return {
    showNotification,
    notificationMessage,
    handleRequest,
    sendingRequest,
    isRequested,
    withdrawRequest,
    data,
    isFetching,
    setIsRequested,
  };
};

export default useProjectRequest;
