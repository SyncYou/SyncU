import { useState, useEffect, useRef } from "react";
import { useUserStore } from "../store/UseUserStore";
import { getLoggedInUser } from "../utils/AuthRequest";
import { sendUserDetails } from "../utils/SupabaseRequest";
import { errorToast, successToast } from "oasis-toast";
// import { useNavigate } from "react-router-dom";

export const useTellUsAboutYourself = () => {
  // const navigate = useNavigate();
  const [disable, setDisable] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { userDetails, setUserDetails } = useUserStore();

  // Form validation logic
  const isValid =
    userDetails?.firstName?.trim() !== "" &&
    userDetails?.lastName?.trim() !== "" &&
    userDetails?.countryOfResidence?.trim() !== "" &&
    userDetails?.firstName !== "N/A" &&
    userDetails?.lastName !== "N/A" &&
    userDetails?.countryOfResidence !== "N/A";

  useEffect(() => {
    setDisable(!isValid);
  }, [userDetails, isValid]);

  // Fetch logged-in user details
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getLoggedInUser();
        if (user?.email) {
          setUserDetails({ email: user.email });
        }
        if (user?.user_metadata?.name) {
          const fullName = user.user_metadata.name;
          const [firstName, lastName] = fullName.split(" ");
          setUserDetails({ 
            firstName: firstName || "",
            lastName: lastName || "" 
          });
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchUser();
  }, [setUserDetails]);

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails({ [name]: value });
  };

  // Open country modal
  const handleCountryInputClick = () => {
    setModalOpen(true);
  };

  // Select country from modal
  const handleCountrySelect = (selectedCountry: string) => {
    setUserDetails({ countryOfResidence: selectedCountry });
    setModalOpen(false);
  };

  // Handle form submission and send user details
  const handleRequest = async () => {
    if (!isValid || isSubmitting) return;
    
    setIsSubmitting(true);
    try {
      const { error } = await sendUserDetails(userDetails);
      
      if (error) {
        errorToast("An error occurred", "Please try again.");
        console.error("Supabase error:", error);
        return;
      }
      
      successToast("Success", "Details saved successfully!");
      // navigate("/onboarding/username");
    } catch (error) {
      errorToast("An error occurred", "Please try again.");
      console.error("Error sending data to Supabase:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    disable: disable || isSubmitting,
    inputRef,
    userDetails,
    isValid,
    handleChange,
    handleCountryInputClick,
    handleCountrySelect,
    handleRequest,
    modalOpen,
    isSubmitting
  };
};