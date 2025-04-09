import { useState, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../store/UseUserStore";
import { signupWithOTP, verifyEmail } from "../utils/AuthRequest";
import { errorToast, successToast } from "oasis-toast";
import { supabase } from "../supabase/client";

const useVerifyEmail = () => {
  const navigate = useNavigate();
  const { userDetails } = useUserStore();
  const [isLoading, setIsLoading] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [otp, setOtp] = useState(new Array(6).fill(""));

  const email = userDetails?.email;

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
    try {
      const otpString = otp.join("");
      const { session, error } = await verifyEmail(email as string, otpString);

      if (error) throw error;

      if (session) {
        const { data: { user } } = await supabase.auth.getUser();
        
        if (user) {
          const { data: profile, error: profileError } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', user.id)
            .single();

          if (profileError || !profile) {
            successToast("Verified!", "Please complete your profile");
            navigate("/auth/set-up-your-profile");
          } else {
            successToast("Welcome back!", "Redirecting to your dashboard");
            navigate("/");
          }
        }
      }
    } catch (error) {
      errorToast("Verification Failed", "Invalid or expired OTP");
      setOtp(new Array(6).fill(""));
      if (inputRefs.current[0]) inputRefs.current[0].focus();
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendEmail = async () => {
    try {
      await signupWithOTP(email as string);
      successToast("Email Sent", "A new OTP has been sent to your email");
    } catch (error) {
      errorToast("Error", "Failed to resend OTP");
    }
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