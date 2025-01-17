import { useState, useEffect, ChangeEvent } from "react";
import { useUserStore } from "../store/UseUserStore";
import useToastNotifications from "./useToastNotifications";
import { sendUserDetails, uploadAvatar } from "../utils/SupabaseRequest";


export function useProfileImage() {
  const { userDetails, setUserDetails } = useUserStore();
  const { toast, showToast } = useToastNotifications();
  const [showNotifications, setShowNotifications] = useState(false);

  const isValid =
    userDetails.firstName.trim() !== "" &&
    userDetails.lastName.trim() !== "" &&
    userDetails.countryOfResidence.trim() !== "" &&
    userDetails.firstName !== "N/A" &&
    userDetails.lastName !== "N/A" &&
    userDetails.email !== "" &&
    userDetails.countryOfResidence !== "N/A" &&
    userDetails.username.trim() !== "" &&
    userDetails.areaOfExpertise !== "" &&
    userDetails.photoUrl !== "" &&
    userDetails.stacks.length > 0;

  useEffect(() => {
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
  }, [userDetails, isValid]);

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      const loggedInUser = JSON.parse(storedUser);
      if (loggedInUser?.user_metadata?.avatar_url) {
        setUserDetails("photoUrl", loggedInUser?.user_metadata.avatar_url);
      }
    }
  }, [setUserDetails]);

  const handleAvatarSelect = (image: string) => {
    setUserDetails("photoUrl", image);
  };

  const handleImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      const reader = new FileReader();

      reader.onload = async () => {
        try {
          const avatarUrl = await uploadAvatar(file);
          setUserDetails("photoUrl", avatarUrl);
        } catch (error) {
          console.error("Error uploading image:", error);
        }
      };
      reader.readAsDataURL(file);
    }
  };

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
    showNotifications,
    setShowNotifications,
    toast,
    handleAvatarSelect,
    handleImageUpload,
    handleRequest,
    isValid,
  };
}
