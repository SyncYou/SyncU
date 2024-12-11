import React, { useCallback, useEffect, useState } from "react";
import Header from "../Reuseables/Header";
import mail from "/mail.svg";
import { useProfileStore } from "../../store/profileStore";
import { signupWithOTP, verifyEmail } from "../../utils/AuthRequest";
import { useNavigate } from "react-router";

const Verifymail: React.FC = () => {
  const { userProfile } = useProfileStore();
  const navigate = useNavigate();

  const email: string | undefined =
    userProfile?.email ?? "thatguyvergil@gmail.com";

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

      if (value && e.target.nextElementSibling) {
        const nextInput = e.target.nextElementSibling as HTMLInputElement;
        if (nextInput) {
          nextInput.focus();
        }
      }
    },
    [otp]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>, idx: number) => {
      const target = e.target as HTMLInputElement;

      if (e.key === "Backspace" && otp[idx] === "") {
        if (idx > 0) {
          setOtp((prevOtp) => {
            const newOtp = [...prevOtp];
            newOtp[idx - 1] = "";
            return newOtp;
          });

          // Move focus to the previous input
          const prevInput = target.previousElementSibling as HTMLInputElement;
          if (prevInput) {
            prevInput.focus();
          }
        }
      }
    },
    [otp]
  );

  const handleSubmit = async () => {
    const otpString = otp.join("");

    const { session, error } = await verifyEmail(email, otpString);
    if (error) {
      console.log(error);
    }

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
    if (userProfile.email == undefined) {
      navigate("/");
    }
  });

  return (
    <section className="p-5">
      <div>
        <Header />
      </div>

      <div className="h-full w-full max-w-screen-sm mx-auto">
        <div className="bg-[#ffffff] shadow-lg shadow-[#4242421A] p-10 flex flex-col items-center justify-between">
          <div className="flex flex-col items-center">
            <img src={mail} alt="mail" />
            <h2 className="text-secondary text-center text-[24px] leading-[32px] font-semibold my-5">
              Verify your email.
            </h2>
          </div>
          <div className="px-8">
            <p className="font-normal leading-6 text-center">
              Check your email inbox for the code that was sent to
              <span className="font-medium"> {email}.</span>
            </p>
          </div>

          <div className=" flex gap-2 mt-10 p-2">
            {otp.map((digit, idx) => (
              <input
                key={idx}
                type="password"
                inputMode="numeric"
                aria-label={`Digit ${idx + 1} of OTP`}
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e, idx)}
                onKeyDown={(e) => handleKeyDown(e, idx)}
                className="w-[45px] h-[45px] text-black focus:outline-none text-center border border-[#D6D6E0] rounded-lg"
              />
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
          className="text-primary font-medium leading-6 text-[16px]"
        >
          Resend email
        </small>
      </div>
    </section>
  );
};

export default Verifymail;
