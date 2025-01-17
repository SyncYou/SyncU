import { useState, useEffect } from "react";
import { useUserStore } from "../store/UseUserStore";
import useToastNotifications from "./useToastNotifications";
import { sendUserDetails } from "../utils/SupabaseRequest";

export const useUsername = () => {
  const [disable, setDisable] = useState(true);
  const [showNotifications, setShowNotifications] = useState(false);
  const { userDetails, setUserDetails } = useUserStore();
  const { toast, showToast } = useToastNotifications();

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails(name as keyof typeof userDetails, value);
  };

  // Validation for the form
  const isValid =
    userDetails.firstName.trim() !== "" &&
    userDetails.lastName.trim() !== "" &&
    userDetails.countryOfResidence.trim() !== "" &&
    userDetails.firstName !== "N/A" &&
    userDetails.lastName !== "N/A" &&
    userDetails.email !== "" &&
    userDetails.countryOfResidence !== "N/A" &&
    userDetails.username.trim() !== "";

  useEffect(() => {
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
    setDisable(!isValid);
  }, [userDetails, isValid]);

  // Handle form submission and send user details
  const handleRequest = async () => {
    if (isValid) {
      try {
        const { error } = await sendUserDetails(userDetails);
        if (error) {
          const showNotificationTimeout = setTimeout(() => {
            setShowNotifications(true);
            showToast("error", "An Error occurred", "Please try again.");
          }, 1000);

          const hideNotificationTimeout = setTimeout(() => {
            setShowNotifications(false);
          }, 5000);

          console.log(error);

          return () => {
            clearTimeout(showNotificationTimeout);
            clearTimeout(hideNotificationTimeout);
          };
        }
      } catch (error) {
        console.error("Error sending data to Supabase:", error);
      }
    }
  };

  return {
    disable,
    showNotifications,
    toast,
    isValid,
    userDetails,
    handleChange,
    handleRequest,
  };
};
