import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUserStore } from "../store/UseUserStore";
import useToastNotifications from "./useToastNotifications";
import { userSchema } from "../schema/userSchema";
import { signupWithOTP } from "../utils/AuthRequest";
import { User } from "../types/user";

export const useSignup = () => {
  const navigate = useNavigate();
  const [disable, setDisable] = useState(true);
  const { setUserDetails } = useUserStore();
  const [showNotifications, setShowNotifications] = useState(false);
  const { toast, showToast } = useToastNotifications();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    reset,
    watch,
  } = useForm<User>({
    resolver: zodResolver(userSchema),
    mode: "onChange",
  });

  // Check if the email is valid
  const email = watch("email");

  useEffect(() => {
    setDisable(!isValid || !email);
  }, [email, isValid]);

  // Handle form submission and send user details
  const handleSignup = async (data: any) => {
    const { email } = data;
    if (email) {
      setDisable(false);
    }

    try {
      setUserDetails("email", email);
      localStorage.setItem("userEmail", email);

      const { data: response, error } = await signupWithOTP(email);

      if (error) {
        setTimeout(() => {
          setShowNotifications(true);
          showToast("error", "An Error occurred", "Please try again.");
        }, 3000);
        setTimeout(() => {
          setShowNotifications(false);
        }, 10000);
        return;
      }

      if (response) {
        setTimeout(() => {
          setShowNotifications(true);
          showToast(
            "success",
            "Authentication Successful",
            "Check your email for your otp"
          );
        }, 3000);
        setTimeout(() => {
          setShowNotifications(false);
        }, 10000);
        navigate("/auth/verify-email");
      }

      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    disable,
    showNotifications,
    toast,
    handleSignup,
  };
};
