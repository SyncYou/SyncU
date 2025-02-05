import { useState, useEffect } from "react";
import { useUserStore } from "../store/UseUserStore";
import useToastNotifications from "./useToastNotifications";
import { checkUsername, sendUserDetails } from "../utils/SupabaseRequest";
import { useQuery } from "@tanstack/react-query";

export const useUsername = () => {
  const [disable, setDisable] = useState(true);
  const [showNotifications, setShowNotifications] = useState(false);
  const { userDetails, setUserDetails } = useUserStore();
  const { toast, showToast } = useToastNotifications();
  const [usernameToCheck, setUsernameToCheck] = useState("");

  const { data: usernameCheckResult, isLoading: isCheckingUsername } = useQuery({
    queryKey: ["username", usernameToCheck], // Re-run query when usernameToCheck changes
    queryFn: async () => {
      if (usernameToCheck.trim() === "") return null; // Skip check if username is empty
      return await checkUsername(usernameToCheck);
    },
    enabled: !!usernameToCheck, // Only run the query if usernameToCheck is not empty
  });

  // Handle input change
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails(name as keyof typeof userDetails, value);

    // Update the username to check
    if (name === "username") {
      setUsernameToCheck(value);
    }
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
    userDetails.username.trim() !== "" 

  useEffect(() => {
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
    setDisable(!isValid);
  }, [userDetails, isValid]);

  // Handle form submission and send user details
  const handleRequest = async () => {
    if (isValid) {
      try {
        const { error } = await sendUserDetails(userDetails);
        console.log(error)
     return error
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
    isCheckingUsername,
    usernameCheckResult,
  };
};
