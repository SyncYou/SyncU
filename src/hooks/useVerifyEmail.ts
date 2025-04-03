import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../store/UseUserStore";
import { signupWithOTP, verifyEmail } from "../utils/AuthRequest";
import { errorToast, successToast } from "oasis-toast";

const useVerifyEmail = () => {
  const navigate = useNavigate();
  const { userDetails } = useUserStore();
  const [isLoading, setIsLoading] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [otp, setOtp] = useState(new Array(6).fill(""));

  // Get email directly from userDetails
  const email = userDetails?.email;

  useEffect(() => {
    // Protected route - redirect if no email
    if (!email) {
      navigate("/auth/signup");
    }
  }, [email, navigate]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
      const value = e.target.value;
      if (!/^\d$/.test(value)) return;

      setOtp((prevOtp) => {
        const updatedOtp = [...prevOtp];
        updatedOtp[idx] = e.target.value;
        return updatedOtp;
      });

      if (value && inputRefs.current && inputRefs.current[idx + 1]) {
        inputRefs.current[idx + 1]?.focus();
      }
    },
    []
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>, idx: number) => {
      if (e.key === "Backspace" && otp[idx] === "") {
        if (idx > 0) {
          setOtp((prevOtp) => {
            const newOtp = [...prevOtp];
            newOtp[idx - 1] = "";
            return newOtp;
          });

          if (inputRefs.current && inputRefs.current[idx - 1]) {
            inputRefs.current[idx - 1]?.focus();
          }
        }
      }
    },
    [otp]
  );

  const handleSubmit = async () => {
    setIsLoading(true);
    const otpString = otp.join("");

    const { session, error } = await verifyEmail(email as string, otpString);
    if (error) {
      errorToast("An error occurred", "Please try again.");
      setIsLoading(false);
      return;
    }

    if (session) {
      successToast("Authentication Successful", "Welcome to Syncu");
      navigate('/');
    }

    setIsLoading(false);
  };

  const handleResendEmail = async () => {
    await signupWithOTP(email as string);
  };

  return {
    otp,
    inputRefs,
    isLoading,
    email,
    handleChange,
    handleKeyDown,
    handleSubmit,
    handleResendEmail,
  };
};

export default useVerifyEmail;