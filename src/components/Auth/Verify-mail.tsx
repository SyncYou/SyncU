import React, { useCallback, useEffect, useState, useRef } from "react";
import Header from "../Reuseables/Header";
import mail from "/mail.svg";
import { signupWithOTP, verifyEmail } from "../../utils/AuthRequest";
import { useNavigate } from "react-router";
import { useUserStore } from "../../store/UseUserStore";
import { Loading } from "../styles/Reuse/Loading";
import useToastNotifications from "../../hooks/useToastNotifications";
import Toast from "../Reuseables/Toast";
import { BsDot } from "react-icons/bs";

const Verifymail: React.FC = () => {
  const navigate = useNavigate();
  const { userDetails } = useUserStore();
  const [isLoading, setIsLoading] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const { toast, showToast } = useToastNotifications();
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);


  const email: string | undefined =
    userDetails?.email ?? "thatguyvergil@gmail.com";

  const [otp, setOtp] = useState(new Array(6).fill(""));

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
      const value = e.target.value;
      if (!/^\d$/.test(value)) return;

      setOtp((prevOtp) => {
        const updatedOtp = [...prevOtp];
        updatedOtp[idx] = e.target.value;
        return updatedOtp;
      });

      if (value && inputRefs.current[idx + 1]) {
        inputRefs.current[idx + 1]?.focus(); // Focus next input
      }
    },
    [otp]
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
          
          inputRefs.current[idx - 1]?.focus();
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

  useEffect(() => {
    if (otp.every((digit) => digit !== "")) {
      handleSubmit();
    }
  }, [otp]);

  const handleRwsendEmail = async () => {
    await signupWithOTP(email);
  };

  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    if (!userDetails.email && !storedEmail) {
      navigate("/auth/signup");
    }
  });

  return (
    <>
      {showNotifications && toast && (
        <div className="absolute top-0 flex items-center justify-center w-full z-50">
          <Toast
            type={toast.type}
            message={toast.message}
            description={toast.description}
          />
        </div>
      )}
      <section className="p-5 h-full min-h-screen grid grid-rows-[4rem_auto] bg-[#D6D6E0] overflow-y-hidden">
        <div>
          <Header />
        </div>

        <div className="h-full w-full  flex flex-col justify-center items-center">
          <div className="mx-auto">
            <div className="bg-[#ffffff]  max-w-[31.5rem] h-[24rem] rounded-2xl shadow-lg shadow-[#4242421A] p-10 flex flex-col items-center justify-between">
              <div className="flex flex-col items-center">
                <img src={mail} alt="mail" />
                <h2 className="text-secondary text-center text-[32px] leading-[32px] font-semibold my-5">
                  Verify your email.
                </h2>
              </div>
              <div className="px-8">
                <p className="font-normal text-base text-[#5C5C66] leading-6 text-center">
                  Check your email inbox for the code that was sent to
                  <span className="text-black font-semibold"> {email}.</span>
                </p>
              </div>

              <div className=" flex gap-2 mt-10 p-2">
                {otp.map((digit, idx) => (
                  <div key={idx} className="w-fit h-fit relative">
                    <input
                      ref={(el) => (inputRefs.current[idx] = el)}
                      id={`input-${idx}`}
                      inputMode="numeric"
                      aria-label={`Digit ${idx + 1} of OTP`}
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleChange(e, idx)}
                      onKeyDown={(e) => handleKeyDown(e, idx)}
                      className=" w-[4rem] h-[4rem] text-black focus:outline-none text-center border border-[#D6D6E0] rounded-lg bg-transparent z-50 text-3xl"
                      />
                      {!digit && (
                      <label htmlFor={`input-${idx}`} className="absolute top-1/2 right-1/2 text-[2.7rem] translate-x-1/2 -translate-y-1/2">
                        <BsDot className="opacity-30" />
                      </label>
                      )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 my-10">
            <p className="leading-6 text-[16px] font-normal text-center text-[#5C5C66]">
              Haven’t recieved the code?
            </p>
            <small
              onClick={handleRwsendEmail}
              className="text-primary font-medium leading-6 text-[16px] cursor-pointer"
            >
              Resend email
            </small>
          </div>
        </div>
      </section>
      {isLoading && <Loading />}
    </>
  );
};

export default Verifymail;