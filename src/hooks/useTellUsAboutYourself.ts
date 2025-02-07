import { useState, useEffect, useRef } from "react";
import { useUserStore } from "../store/UseUserStore";
import { getLoggedInUser } from "../utils/AuthRequest";
import { sendUserDetails } from "../utils/SupabaseRequest";
import { errorToast } from "oasis-toast";
export const useTellUsAboutYourself = () => {
  const [disable, setDisable] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { userDetails, setUserDetails } = useUserStore();

  // Form validation logic
  const isValid =
    userDetails.firstName.trim() !== "" &&
    userDetails.lastName.trim() !== "" &&
    userDetails.countryOfResidence.trim() !== "" &&
    userDetails.firstName !== "N/A" &&
    userDetails.lastName !== "N/A" &&
    userDetails.countryOfResidence !== "N/A";

  useEffect(() => {
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
    setDisable(!isValid);
  }, [userDetails, isValid]);

  // Fetch logged-in user details
  useEffect(() => {
    const fetchUser = async () => {
      const user = await getLoggedInUser();
      localStorage.setItem("loggedInUser", JSON.stringify(user));
    };
    fetchUser();
  }, []);

  // Set user details from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      const loggedInUser = JSON.parse(storedUser);
      if (loggedInUser?.email) setUserDetails("email", loggedInUser.email);
      if (loggedInUser?.user_metadata?.name) {
        const fullName = loggedInUser.user_metadata.name;
        const [firstName, lastName] = fullName.split(" ");
        setUserDetails("firstName", firstName);
        setUserDetails("lastName", lastName);
      }
    }
  }, [setUserDetails]);

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails(name as keyof typeof userDetails, value);
  };

  // Open country modal
  const handleCountryInputClick = () => {
    setModalOpen(true);
  };

  // Select country from modal
  const handleCountrySelect = (selectedCountry: string) => {
    setUserDetails("countryOfResidence", selectedCountry);
    setModalOpen(false);
  };

  // Handle form submission and send user details
  const handleRequest = async () => {
    if (isValid) {
      try {
        const { error } = await sendUserDetails(userDetails);
        if(error){
          errorToast("An error occurred", "Please try again.");
        }
        console.log(error);
        return error;
      } catch (error) {
        errorToast("An error occurred", "Please try again.");
        console.error("Error sending data to Supabase:", error);
      }
    }
  };

  return {
    disable,
    inputRef,
    userDetails,
    isValid,
    handleChange,
    handleCountryInputClick,
    handleCountrySelect,
    handleRequest,
    modalOpen,
  };
};
