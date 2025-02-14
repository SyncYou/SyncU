import { useState, useEffect } from "react";
import { useUserStore } from "../store/UseUserStore";
import { checkUsername, sendUserDetails } from "../utils/SupabaseRequest";
import { useQuery } from "@tanstack/react-query";
import { errorToast } from "oasis-toast";

export const useUsername = () => {
  const [disable, setDisable] = useState(true);
  const { userDetails, setUserDetails } = useUserStore();
  const [usernameToCheck, setUsernameToCheck] = useState("");

  const { data: usernameCheckResult, isLoading: isCheckingUsername } = useQuery({
    queryKey: ["username", usernameToCheck], 
    queryFn: async () => {
      if (usernameToCheck.trim() === "") return null;
      return await checkUsername(usernameToCheck);
    },
    enabled: !!usernameToCheck, 
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
        if(error) {
          errorToast('An error occurred', 'Please try again.');
        }
        console.log(error)
     return error
      } catch (error) {
        errorToast('An error occurred', 'Please try again.');
        console.error("Error sending data to Supabase:", error);
      }
    }
  };

  return {
    disable,
    isValid,
    userDetails,
    handleChange,
    handleRequest,
    isCheckingUsername,
    usernameCheckResult,
  };
};
