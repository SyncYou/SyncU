import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router";
import useToastNotifications from "./useToastNotifications";
import { useUserStore } from "../store/UseUserStore";
import { signupWithOTP, verifyEmail } from "../utils/AuthRequest";

const useVerifyEmail = () => {
  const navigate = useNavigate();
  const { userDetails } = useUserStore();
  const { toast, showToast } = useToastNotifications();
  const [isLoading, setIsLoading] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
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
      setIsLoading(false);
      const showNotificationTimeout = setTimeout(() => {
        setShowNotifications(true);
        showToast("error", "An Error occurred", "Invalid otp.");
      }, 3000);

      const hideNotificationTimeout = setTimeout(() => {
        setShowNotifications(false);
      }, 10000);

      console.log(error);
      return () => {
        clearTimeout(showNotificationTimeout);
        clearTimeout(hideNotificationTimeout);
      };
    }

    if (session) {
      const showNotificationTimeout = setTimeout(() => {
        setShowNotifications(true);
        showToast("success", "Authentication Successful", "Welcome to syncu");
      }, 1000);

      const hideNotificationTimeout = setTimeout(() => {
        setShowNotifications(false);
      }, 5000);

      localStorage.setItem("newUser", JSON.stringify(session?.user));
      navigate("/auth/set-up-your-profile");

      return () => {
        clearTimeout(showNotificationTimeout);
        clearTimeout(hideNotificationTimeout);
      };
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
    showNotifications,
    toast,
    handleChange,
    handleKeyDown,
    handleSubmit,
    handleResendEmail,
    setShowNotifications,
  };
};

export default useVerifyEmail;
