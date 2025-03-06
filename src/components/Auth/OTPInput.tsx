import React from "react";
import { BsDot } from "react-icons/bs";

interface OTPInputProps {
  otp: string[];
  inputRefs: React.RefObject<(HTMLInputElement | null)[]>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, idx: number) => void;
  handleKeyDown: (
    e: React.KeyboardEvent<HTMLInputElement>,
    idx: number
  ) => void;
}

const OTPInput: React.FC<OTPInputProps> = ({
  otp,
  inputRefs,
  handleChange,
  handleKeyDown,
}) => {
  return (
    <div className="flex gap-2 mt-10 p-2">
      {otp.map((digit, idx) => (
        <div key={idx} className="w-fit h-fit relative">
          <input
            ref={(el) => {
              // Check if inputRefs.current is not null
              if (inputRefs.current) {
                inputRefs.current[idx] = el;
              }
            }}
            id={`input-${idx}`}
            inputMode="numeric"
            aria-label={`Digit ${idx + 1} of OTP`}
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(e, idx)}
            onKeyDown={(e) => handleKeyDown(e, idx)}
            className="w-[4rem] h-[4rem] text-black focus:outline-none text-center border border-[#D6D6E0] rounded-lg bg-transparent z-50 text-3xl"
          />
          {!digit && (
            <label
              htmlFor={`input-${idx}`}
              className="absolute top-1/2 right-1/2 text-[2.7rem] translate-x-1/2 -translate-y-1/2"
            >
              <BsDot className="opacity-30" />
            </label>
          )}
        </div>
      ))}
    </div>
  );
};

export default OTPInput;
