import { useState, useEffect } from "react";
import { useUserStore } from "../store/UseUserStore";
import { checkUsername, sendUserDetails } from "../utils/SupabaseRequest";
import { useQuery } from "@tanstack/react-query";
import { errorToast, successToast } from "oasis-toast";
// import { useNavigate } from "react-router-dom";

export const useUsername = () => {
  // const navigate = useNavigate();
  const [disable, setDisable] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { userDetails, setUserDetails } = useUserStore();
  const [usernameToCheck, setUsernameToCheck] = useState("");

  const safeUserDetails = userDetails || {
    firstName: '',
    lastName: '',
    countryOfResidence: '',
    email: '',
    username: '',
    // ... other fields with empty defaults
  };

  // Username availability check
  const { 
    data: usernameCheckResult, 
    isLoading: isCheckingUsername,
    error: usernameCheckError 
  } = useQuery({
    queryKey: ["username-availability", usernameToCheck],
    queryFn: () => checkUsername(usernameToCheck),
    enabled: usernameToCheck.length > 0,
    retry: false,
    staleTime: 1000 * 60 * 5 // 5 minutes
  });

  // Form validation
  const isValid = (
    safeUserDetails.firstName.trim() !== "" &&
    safeUserDetails.lastName.trim() !== "" &&
    safeUserDetails.countryOfResidence.trim() !== "" &&
    safeUserDetails.email.trim() !== "" &&
    safeUserDetails.username.trim() !== "" &&
    usernameCheckResult?.status !== "unavailable" &&
    !isCheckingUsername
  );

  // Update disable state
  useEffect(() => {
    setDisable(!isValid || isSubmitting);
  }, [isValid, isSubmitting]);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails({ [name]: value });

    if (name === "username") {
      setUsernameToCheck(value.toLowerCase().trim());
    }
  };

  // Handle form submission
  const handleRequest = async () => {
    if (!isValid || isSubmitting) return;
    
    setIsSubmitting(true);
    try {
      const { error } = await sendUserDetails({
        ...userDetails,
        username: usernameToCheck // Ensure we use the checked username
      });

      if (error) {
        throw error;
      }

      successToast("Success", "Profile updated successfully!");
      // navigate("/onboarding/next-step"); // Update with your actual next route
    } catch (error) {
      errorToast(
        "Update Failed", 
        error instanceof Error ? error.message : "Please try again later"
      );
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
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
    usernameCheckError,
    isSubmitting
  };
};