import { useState, useEffect } from "react";
import { useUserStore } from "../store/UseUserStore";
import { Niches } from "../components/Profile/Step3/Niches";
import { sendUserDetails } from "../utils/SupabaseRequest";
import { errorToast } from "oasis-toast";

export const useLeftFill1 = () => {
  const { userDetails, setUserDetails } = useUserStore();
  const [checked, setChecked] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const selectedStack = Niches.find((niche) => niche.id === checked) || null;

  // Function to handle stack selection
  const handleAreaClick = (area: string) => {
    setUserDetails("areaOfExpertise", area);
    setIsModalOpen(false);
  };

  // Validation for the form
  const [isValid, setIsValid] = useState<boolean>(() => {
    return (
      userDetails.firstName.trim() !== "" &&
      userDetails.lastName.trim() !== "" &&
      userDetails.countryOfResidence.trim() !== "" &&
      userDetails.firstName !== "N/A" &&
      userDetails.lastName !== "N/A" &&
      userDetails.email !== "" &&
      userDetails.countryOfResidence !== "N/A" &&
      userDetails.username.trim() !== "" &&
      userDetails.areaOfExpertise !== ""
    );
  });

  useEffect(() => {
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
  
    // Update isValid when userDetails change
    setIsValid(
      userDetails.firstName.trim() !== "" &&
      userDetails.lastName.trim() !== "" &&
      userDetails.countryOfResidence.trim() !== "" &&
      userDetails.firstName !== "N/A" &&
      userDetails.lastName !== "N/A" &&
      userDetails.email !== "" &&
      userDetails.countryOfResidence !== "N/A" &&
      userDetails.username.trim() !== "" &&
      userDetails.areaOfExpertise !== ""
    );
  }, [userDetails]);

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
        console.error("Error sending data to Supabase:", error);
        errorToast('An error occurred', 'Please try again.');
      }
    }
  };

  return {
    checked,
    setChecked,
    isModalOpen,
    setIsModalOpen,
    userDetails,
    selectedStack,
    handleAreaClick,
    isValid,
    handleRequest,
  };
};