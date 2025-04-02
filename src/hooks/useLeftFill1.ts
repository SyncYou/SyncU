import { useState } from "react";
import { useUserStore } from "../store/UseUserStore";
import { Niches } from "../components/Profile/Step3/Niches";
import { sendUserDetails } from "../utils/SupabaseRequest";
import { errorToast } from "oasis-toast";

export const useLeftFill1 = () => {
  const { userDetails, setUserDetails } = useUserStore();
  const [checked, setChecked] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const selectedStack = Niches.find((niche) => niche.id === checked) || null;

  const defaultUserDetails = {
    firstName: "",
    lastName: "",
    countryOfResidence: "",
    email: "",
    username: "",
    areaOfExpertise: "",
  };
  
  const safeUserDetails = userDetails ?? defaultUserDetails;

  // Function to handle stack selection
  const handleAreaClick = (area: string) => {
    setUserDetails({areaOfExpertise: area});
    setIsModalOpen(false);
  };

  // Validation for the form
  const isValid =
  safeUserDetails.firstName.trim() !== "" &&
  safeUserDetails.lastName.trim() !== "" &&
  safeUserDetails.countryOfResidence.trim() !== "" &&
  safeUserDetails.firstName !== "N/A" &&
  safeUserDetails.lastName !== "N/A" &&
  safeUserDetails.email !== "" &&
  safeUserDetails.countryOfResidence !== "N/A" &&
  safeUserDetails.username.trim() !== "" &&
  safeUserDetails.areaOfExpertise !== "";


  // useEffect(() => {

  
  //   // Update isValid when userDetails change
  //   setIsValid(
  //     safeUserDetails.firstName.trim() !== "" &&
  //     safeUserDetails.lastName.trim() !== "" &&
  //     safeUserDetails.countryOfResidence.trim() !== "" &&
  //     safeUserDetails.firstName !== "N/A" &&
  //     safeUserDetails.lastName !== "N/A" &&
  //     safeUserDetails.email !== "" &&
  //     safeUserDetails.countryOfResidence !== "N/A" &&
  //     safeUserDetails.username.trim() !== "" &&
  //     safeUserDetails.areaOfExpertise !== ""
  //   );
  // }, [userDetails]);

  // Handle form submission and send user details
  const handleRequest = async () => {
    if (!isValid) return;
  
    try {
      const { error } = await sendUserDetails(safeUserDetails);
      if (error) {
        errorToast("An error occurred", "Please try again.");
        console.error("Supabase error:", error);
      }
    } catch (error) {
      console.error("Error sending data to Supabase:", error);
      errorToast("An error occurred", "Please try again.");
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