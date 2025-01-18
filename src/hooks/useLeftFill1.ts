import { useState, useEffect } from "react";
import { useUserStore } from "../store/UseUserStore";
import useToastNotifications from "./useToastNotifications";
import { Niches } from "../components/Profile/Step3/Niches";
import { sendUserDetails } from "../utils/SupabaseRequest";

export const useLeftFill1 = () => {
  const { userDetails, setUserDetails } = useUserStore();
  const [checked, setChecked] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const { toast, showToast } = useToastNotifications();

  const selectedStack = Niches.find((niche) => niche.id === checked) || null;

  // Function to handle stack selection
  const handleAreaClick = (area: string) => {
    setUserDetails("areaOfExpertise", area);
    setIsModalOpen(false);
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
    userDetails.username.trim() !== "" &&
    userDetails.areaOfExpertise !== "";

  useEffect(() => {
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
  }, [userDetails]);

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
    checked,
    setChecked,
    isModalOpen,
    setIsModalOpen,
    showNotifications,
    userDetails,
    toast,
    selectedStack,
    handleAreaClick,
    isValid,
    handleRequest,
  };
};
