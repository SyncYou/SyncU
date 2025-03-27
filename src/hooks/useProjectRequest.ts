import { useState } from "react";
import {
  fetchProjectInvitations,
  requestToJoinProject,
  withdrawProjectRequest,
} from "../utils/SupabaseRequest";
import { ProjectType } from "../utils/types/Types";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "../supabase/client";
import { fetchUserData } from "../utils/queries/fetch";

const useProjectRequest = (id: string) => {
  const [showNotifications, setShowNotifications] = useState<boolean>(false);
  const [sendingRequest, setSendingRequest] = useState<boolean>(false);
  const [isRequested, setIsRequested] = useState<boolean>(false);

  const [data, setData] = useState<ProjectType | null>(null);
  
  const queryClient = useQueryClient();
  const invalidateQueries = (id: string) => {
    queryClient.invalidateQueries({
      queryKey: ["project-details", id],
    });
  };

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

 const fetchInvitations = async (projectId: string, userId: string) => {
  try {
    const invitations = await fetchProjectInvitations(projectId, userId);
  setIsRequested(invitations.length > 0);
  } catch (error) {
    
  }
 }

  const handleRequest = async (id: string, created_by: string, project_name: string) => {
    try {
      setSendingRequest(true);
      const req = await requestToJoinProject(id, created_by, project_name);
      if (req) {
        const showNotificationTimeout = setTimeout(() => {
          setShowNotifications(true);
        }, 1000);

        const hideNotificationTimeout = setTimeout(() => {
          setShowNotifications(false);
        }, 3000);
        invalidateQueries(id);

        return () => {
          clearTimeout(showNotificationTimeout);
          clearTimeout(hideNotificationTimeout);
        };
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
        const showNotificationTimeout = setTimeout(() => {
          setShowNotifications(true);
        }, 1000);

        const hideNotificationTimeout = setTimeout(() => {
          setShowNotifications(false);
        }, 3000);
        invalidateQueries(id);

        return () => {
          clearTimeout(showNotificationTimeout);
          clearTimeout(hideNotificationTimeout);
        };
      }
    } catch (error) {
      console.error(error);
    } finally {
      setSendingRequest(false);
    }
  };

  return {
    showNotifications,
    handleRequest,
    sendingRequest,
    isRequested,
    withdrawRequest,
    data,
    isFetching,
  };
};

export default useProjectRequest;
