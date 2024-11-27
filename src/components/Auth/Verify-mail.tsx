import React, { useState } from "react";
import Header from "../Reuseables/Header";
import mail from "/mail.svg";

interface OtpProps {
    e: React.ChangeEvent<HTMLInputElement>,
    idx: string,
}

const Verifymail: React.FC = () => {
  const [otp, setOtp] = useState(new Array(4).fill(""));

  const handleChange = ({e, idx}: OtpProps) => {
    if (isNaN(e.target.value)) return false;

    setOtp([
      ...otp.map((digit, index) => (index === idx ? e.target.value : digit)),
    ]);

    if (e.target.value && e.target.nextSibling) {
      e.target.nextSibling.focus();
    }
  };
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
          <div className="px-10">
            <p className="font-normal leading-6 text-center">
              Check your email inbox for the code that was sent to
              <span className="font-medium"> thatguyvergil@gmail.com.</span>
            </p>
          </div>

          <div className=" flex gap-3 mt-10">
            {otp.map((digit, idx) => (
              <input
                key={idx}
                type="password"
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
        <p className="leading-6 text-[16px] font-normal text-center text-[#5C5C66]">Haven’t recieved the code?</p>
        <small className="text-primary font-medium leading-6 text-[16px]">Resend email</small>
      </div>
    </section>
  );
};

export default Verifymail;
