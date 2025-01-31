import { useState } from "react";
import {
  requestToJoinProject,
  withdrawToJoinProject,
} from "../utils/SupabaseRequest";

const useProjectRequest = () => {
  const [showNotifications, setShowNotifications] = useState<boolean>(false);
  const [sendingRequest, setSendingRequest] = useState<boolean>(false);
  const [isRequested, setIsRequested] = useState<boolean>(false);

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
        setIsRequested(true);

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
        setIsRequested(true);

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
  };
};

export default useProjectRequest;
