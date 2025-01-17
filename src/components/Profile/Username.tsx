import React from "react";
import Nav_Btn from "../Reuseables/Nav_Btn";

import Toast from "../Reuseables/Toast";
import { useUsername } from "../../hooks/useUsername";

const Username: React.FC = () => {
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
      {showNotifications && toast && (
        <div className="absolute top-0 flex items-center justify-center w-full z-50">
          <Toast
            type={toast.type}
            message={toast.message}
            description={toast.description}
          />
        </div>
      )}
      <section className="mt-20">
        <div className="p-5 flex flex-col w-full">
          <small className="font-medium text-[14px] leading-5 text-[#8C8C99]">
            STEP 2 of 5
          </small>
          <div className="my-5 flex flex-col">
            <h2 className="font-semibold text-[24px] leading-[32px] text-secondary">
              Enter a username.
            </h2>
            <p className="text-gray leading-6 font-normal text-[16px] py-2">
              This will enable other users to find you easily on syncu.
            </p>
          </div>

          <div className="space-y-5">
            <div className="border border-[#E6E6F0] rounded-xl py-2 px-3 flex flex-col gap-2 focus:border focus:border-primary focus:shadow focus:shadow-[#EDE4FA] max-w-[400px]">
              <label
                className="text-secondary leading-6 text-[16px] font-normal"
                htmlFor="username"
              >
                Username
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

            <Nav_Btn
              disabled={!isValid}
              showPrevious={true}
              handleRequest={handleRequest}
              navTo="/onboarding/area-of-expertise"
              btn_Style={`${
                isValid
                  ? "bg-gray-950 text-opacity-100 text-white"
                  : "text-opacity-40 cursor-not-allowed"
              }`}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Username;
