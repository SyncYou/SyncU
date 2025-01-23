import React, { useEffect } from "react";
import Header from "../Reuseables/Header";
import mail from "/mail.svg"; // Importing ResendEmail
import { Loading } from "../Reuseables/Loading";
import Toast from "../Reuseables/Toast";
import useVerifyEmail from "../../hooks/useVerifyEmail"; // Importing the custom hook
import ResendEmail from "./ResendEmail";
import OTPInput from "./OTPInput";

const Verifymail: React.FC = () => {
  // Custom hook for handling the logic
  const {
    otp,
    inputRefs,
    isLoading,
    showNotifications,
    toast,
    handleChange,
    handleKeyDown,
    handleSubmit,
    handleResendEmail,
  } = useVerifyEmail();

  useEffect(() => {
    // Trigger the submit if the input are filled up
    if (otp.every((digit) => digit !== "")) {
      handleSubmit();
    }
  }, [otp, handleSubmit]);

  return (
    <>
      {/* Show notifications */}
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
                <h2 className="text-secondary text-center text-[24px] leading-[32px] font-semibold my-5">
                  Verify your email.
                </h2>
              </div>
              <div className="px-8">
                <p className="font-normal leading-6 text-center">
                  Check your email inbox for the code that was sent to
                  <span className="font-medium"> your email.</span>
                </p>
              </div>

              <OTPInput
                otp={otp}
                inputRefs={inputRefs}
                handleChange={handleChange}
                handleKeyDown={handleKeyDown}
              />
            </div>
          </div>

          <ResendEmail handleResendEmail={handleResendEmail} />
        </div>
      </section>
      {/* Loading UI */}
      {isLoading && <Loading />}
    </>
  );
};

export default Verifymail;
