import React, { useCallback, useState } from "react";
import Header from "../Reuseables/Header";
import mail from "/mail.svg";


const Verifymail: React.FC = () => {
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const email = 'thatguyvergil@gmail.com';

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, currentIndex: number) => {
      const value = e.target.value;
      if (isNaN(Number(value))) return;

      setOtp((currentOtp) => {
        const newOtp = [...currentOtp];
        newOtp[currentIndex] = value;
        return newOtp;
      });

      // Auto-focus next input
      if (value && currentIndex < 3) {
        const nextInput =
          e.target.parentElement?.nextElementSibling?.querySelector("input");
        if (nextInput) nextInput.focus();
      }
    },
    []
  );


  return (
    <section className="p-5">
      <div>
        <Header />
      </div>

      <div className="h-full w-full">
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

          <div className=" flex gap-3 mt-10">
            {otp.map((digit, idx) => (
              <input
                key={idx}
                type="password"
                inputMode="numeric"
                aria-label={`Digit ${idx + 1} of OTP`}
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e, idx)}
                className="w-[50px] h-[50px] text-white focus:outline-none text-center border border-[#D6D6E0] rounded-lg"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 my-10">
        <p className="leading-6 text-[16px] font-normal text-center text-[#5C5C66]">
          Haven’t recieved the code?
        </p>
        <small className="text-primary font-medium leading-6 text-[16px]">
          Resend email
        </small>
      </div>
    </section>
  );
};

export default Verifymail;
