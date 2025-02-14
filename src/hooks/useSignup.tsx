import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUserStore } from "../store/UseUserStore";
import { userSchema } from "../schema/userSchema";
import { signupWithOTP } from "../utils/AuthRequest";
import { User } from "../types/user";
import { errorToast, successToast } from "oasis-toast";

export const useSignup = () => {
  const navigate = useNavigate();
  const [disable, setDisable] = useState(true);
  const { setUserDetails } = useUserStore();

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
        errorToast('An error occurred', 'Please try again.');
        return;
      }

      if (response) {
        successToast("Authentication Successful", "Check your email for your otp");
        navigate("/auth/verify-email");
      }

      reset();
    } catch (error) {
      errorToast('An error occurred', 'Please try again.');
      console.log(error);
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    disable,
    handleSignup,
  };
};
