import React from "react";
import Nav_Btn from "../Reuseables/Nav_Btn";

import Toast from "../Reuseables/Toast";
import { useUsername } from "../../hooks/useUsername";

const Username: React.FC = () => {
  // Custom hook for the logic
  const {
    showNotifications,
    toast,
    isValid,
    userDetails,
    handleChange,
    handleRequest,
  } = useUsername();
  return (
    <>
      {/* Notifications */}
      {showNotifications && toast && (
        <div className="absolute top-0 flex items-center justify-center w-full z-50">
          <Toast
            type={toast.type}
            message={toast.message}
            description={toast.description}
          />
        </div>
      )}
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
            <div className="border border-[#E6E6F0] rounded-xl py-1 px-3 flex flex-col gap-2 focus:border focus:border-primary focus:shadow focus:shadow-[#EDE4FA] max-w-[400px]">
              <label
                className="text-[#2A2A33] leading-6 text-[12px] font-normal"
                htmlFor="username"
              >
                username
              </label>
              <input
                className="focus:outline-none"
                name="username"
                type="text"
                placeholder="John"
                value={userDetails.username}
                onChange={handleChange}
              />
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
