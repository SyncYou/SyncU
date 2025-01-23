import { useState, useEffect, useRef } from "react";
import { useUserStore } from "../store/UseUserStore";
import useToastNotifications from "./useToastNotifications";
import { getLoggedInUser } from "../utils/AuthRequest";
import { sendUserDetails } from "../utils/SupabaseRequest";
export const useTellUsAboutYourself = () => {
  const [disable, setDisable] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { userDetails, setUserDetails } = useUserStore();
  const { toast, showToast } = useToastNotifications();

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
