import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router";
import { useUserStore } from "../store/UseUserStore";
import { signupWithOTP, verifyEmail } from "../utils/AuthRequest";
import { errorToast, successToast } from "oasis-toast";

const useVerifyEmail = () => {
  const navigate = useNavigate();
  const { userDetails } = useUserStore();
  const [isLoading, setIsLoading] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    // Set the email from userDetails
    const storedEmail = localStorage.getItem("userEmail");
    setEmail(userDetails?.email ?? storedEmail ?? "vergil@gmail.com");

    // Protected routes, redirets if there's no email
    if (!userDetails?.email && !storedEmail) {
      navigate("/auth/signup");
    }
  }, [userDetails, navigate]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
      const value = e.target.value;
      if (!/^\d$/.test(value)) return;

      setOtp((prevOtp) => {
        const updatedOtp = [...prevOtp];
        updatedOtp[idx] = e.target.value;
        return updatedOtp;
      });

      // Only focus the next input if inputRefs.current is not null and the next input exists
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

          // Only focus the previous input if inputRefs.current is not null
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

    const { session, error } = await verifyEmail(email, otpString);
    if (error) {
    errorToast("An error occurred", "Please try again.");
    }

    if (session) {
      successToast("Authentication Successful", "Welcome to Syncu");
    }

    setIsLoading(false);
    console.log(session, error);
  };

  const handleResendEmail = async () => {
    await signupWithOTP(email);
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
