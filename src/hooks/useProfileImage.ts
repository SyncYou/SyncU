import { useEffect, ChangeEvent } from "react";
import { useUserStore } from "../store/UseUserStore";
import { sendUserDetails, uploadAvatar } from "../utils/SupabaseRequest";
import { errorToast } from "oasis-toast";
// import { useAuth } from "../providers/AuthProvider";

export function useProfileImage() {
  const { userDetails, setUserDetails } = useUserStore();
  // const { completeOnboarding } = useAuth();

  // Check whether the form is valid
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

  // Fetch user details from the localStorage
  useEffect(() => {
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
  }, [userDetails, isValid]);

  // Fetch the loggedInUser from the localStorage, and set it to the user deatils
  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      const loggedInUser = JSON.parse(storedUser);
      if (loggedInUser?.user_metadata?.avatar_url) {
        setUserDetails("photoUrl", loggedInUser?.user_metadata.avatar_url);
      }
    }
  }, [setUserDetails]);

  // Handle the selection of an image
  const handleAvatarSelect = (image: string) => {
    setUserDetails("photoUrl", image);
  };

  // Upload image to supabase bucket
  const handleImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      const reader = new FileReader();

      reader.onload = async () => {
        try {
          const avatarUrl = await uploadAvatar(file);
          setUserDetails("photoUrl", avatarUrl);
          setUserDetails("onboardingComplete", 'true')
        } catch (error) {
          console.error("Error uploading image:", error);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Send the user details to the database
  const handleRequest = async () => {
    if (isValid) {
      try {
        const { error } = await sendUserDetails(userDetails);
        setUserDetails("onboardingComplete", 'true')
        localStorage.setItem('onboardingComplete', 'true')
        //  completeOnboarding();
        if (error) {
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
    handleAvatarSelect,
    handleImageUpload,
    handleRequest,
    isValid,
  };
}
