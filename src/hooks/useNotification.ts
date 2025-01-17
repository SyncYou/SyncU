import { useState, useEffect } from "react";
import useToastNotifications from "./useToastNotifications";

export const useNotification = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const { toast, showToast } = useToastNotifications();

  useEffect(() => {
    const showNotificationTimeout = setTimeout(() => {
      setShowNotifications(true);
      showToast(
        "success",
        "Email Verified",
        "Your email has been successfully verified."
      );
    }, 3000);

    const hideNotificationTimeout = setTimeout(() => {
      setShowNotifications(false);
    }, 10000);

    return () => {
      clearTimeout(showNotificationTimeout);
      clearTimeout(hideNotificationTimeout);
    };
  }, [showToast]);

  return { showNotifications, setShowNotifications, toast };
};
