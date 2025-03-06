import { useState } from "react";
import {
  requestToJoinProject,
  withdrawToJoinProject,
} from "../utils/SupabaseRequest";
import { ProjectType } from "../utils/types/Types";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "../supabase/client";

const useProjectRequest = (id: string) => {
  const [showNotifications, setShowNotifications] = useState<boolean>(false);
  const [sendingRequest, setSendingRequest] = useState<boolean>(false);
  const [isRequested, setIsRequested] = useState<boolean>(false);

  const [data, setData] = useState<ProjectType>({
    created_at: "string",
    created_by: "string",
    description: "string",
    id: "string",
    industry: "string",
    participants: ["string"],
    project_views: 0,
    requests: [
      {
        userId: "string",
        status: "string",
      },
    ],
    required_roles: ["string"],
    required_stacks: ["string"],
    title: "string",
    updated_at: "string",
    username: "string",
    workspace: { name: "Slack", url: "string" },
  });
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

  const handleRequest = async (id: string, created_by: string) => {
    try {
      setSendingRequest(true);
      const req = await requestToJoinProject(id, created_by);
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

  const withdrawRequest = async (id: string, created_by: string) => {
    try {
      setSendingRequest(true);
      const req = await withdrawToJoinProject(id, created_by);
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
    setIsRequested,
    withdrawRequest,
    data,
    isFetching,
  };
};

export default useProjectRequest;
