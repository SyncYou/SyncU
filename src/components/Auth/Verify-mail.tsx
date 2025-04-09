import React, { useEffect } from "react";
import Header from "../Reuseables/Header";
import mail from "/mail.svg";
import { Loading } from "../Reuseables/Loading";
import useVerifyEmail from "../../hooks/useVerifyEmail"; // Importing the custom hook
import ResendEmail from "./ResendEmail";
import OTPInput from "./OTPInput";


const Verifymail: React.FC = () => {
  const {
    otp,
    inputRefs,
    isLoading,
    email,
    handleChange,
    handleKeyDown,
    handleSubmit,
    handleResendEmail,
  } = useVerifyEmail();

  useEffect(() => {
    if (otp.every((digit) => digit !== "")) {
      handleSubmit();
    }
  }, [otp, handleSubmit]);


  return (
    <>
      <section className="p-5 h-full min-h-screen grid grid-rows-[4rem_auto] bg-[#D6D6E0] overflow-y-hidden">
        <div>
          <Header />
        </div>

        <div className="h-full w-full  flex flex-col justify-center items-center">
          <div className="mx-auto flex items-center justify-center w-full">
            <div className="bg-[#ffffff]  md:max-w-[31.5rem] max-w-[25rem] h-[24rem] rounded-2xl shadow-lg shadow-[#4242421A] p-5 md:p-10 flex flex-col items-center justify-between">
              <div className="flex flex-col items-center">
                <img src={mail} alt="mail" />
                <h2 className="text-secondary text-center md:text-[32px] text-[28px] leading-[32px] font-semibold my-5">
                  Verify your email.
                </h2>
              </div>
              <div className="px-8">
                <p className="font-normal md:text-base text-[14px] text-[#5C5C66] leading-6 text-center">
                  Check your email inbox for the code that was sent to
                  <span className="text-black font-semibold"> {email}.</span>
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
