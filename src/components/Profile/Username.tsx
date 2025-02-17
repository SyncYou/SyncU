import React, { useRef, useState } from "react";
import Nav_Btn from "../Reuseables/Nav_Btn";
import check from "/check.svg";
import { useUsername } from "../../hooks/useUsername";

const Username: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  // Custom hook for the logic
  const {
    isValid,
    userDetails,
    handleChange,
    handleRequest,
    isCheckingUsername,
    usernameCheckResult,
  } = useUsername();
  return (
    <>
      {/* Notifications */}
      <section className="md:mt-28 px-1 md:px-5">
        <div className="md:p-5 flex flex-col w-full">
          <small className="font-medium text-[14px] leading-5 text-[#8C8C99]">
            STEP 2 of 5
          </small>
          <div className="my-5 flex flex-col">
            <h2 className="font-semibold text-[1.5rem] md:text-[2rem] leading-[32px] text-black">
              Enter a username.
            </h2>
            <p className="text-[#5C5C66] leading-6 font-normal text-base md:text-[18px] py-6 font-inter">
              This will enable other users to find you easily on syncu.
            </p>
          </div>

          <div className="space-y-5">
            <div>
              <div
                onClick={() => inputRef.current?.focus()}
                className={`border rounded-xl py-2 px-3 flex flex-col gap-2 max-w-[400px] ${
                  isFocused
                    ? "border-[#A771E5] shadow-lg shadow-[#EDE4FA]"
                    : "border-[#E6E6F0]"
                }`}
              >
                <label
                  className="text-secondary leading-6 text-[16px] font-normal"
                  htmlFor="username"
                >
                  Username
                </label>
                <div className="flex ">
                  <input
                    className="focus:outline-none flex-1"
                    name="username"
                    type="text"
                    placeholder="John"
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    value={userDetails.username}
                    onChange={handleChange}
                  />
                  {usernameCheckResult?.status === "available" && (
                    <img className="-mt-7" src={check} alt="check img" />
                  )}
                </div>
              </div>
              {isCheckingUsername && (
                <span className="inline-block m-1 text-[#5C5C66] text-[14px] leading-6">
                  checking username...
                </span>
              )}
              {usernameCheckResult?.status === "available" && (
                <span className="text-[#129343] text-[14px] leading-6">{usernameCheckResult.message}</span>
              )}
              {usernameCheckResult?.status === "error" && (
                <p className="text-red-500 text-[14px] leading-6">{usernameCheckResult.message}</p>
              )}
            </div>
            <div className="py-5">
              <Nav_Btn
                disabled={!isValid}
                showPrevious={true}
                handleRequest={handleRequest}
                navTo="/onboarding/area-of-expertise"
                btn_Style={`w-[184px] ${
                  isValid
                    ? "bg-gray-950 text-opacity-100 text-white"
                    : "text-opacity-40 cursor-not-allowed"
                }`}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Username;
