import React from "react";
import dropdown from "/scroll.svg";
import CountryModal from "../Reuseables/CountryModal";
import Nav_Btn from "../Reuseables/Nav_Btn";
import Toast from "../Reuseables/Toast";
import { useTellUsAboutYourself } from "../../hooks/useTellUsAboutYourself";

const TellUsAboutYourself: React.FC = () => {
  // Custom hook for the logic
  const {
    disable,
    showNotifications,
    toast,
    inputRef,
    userDetails,
    isValid,
    handleChange,
    handleCountryInputClick,
    handleCountrySelect,
    handleRequest,
    modalOpen,
  } = useTellUsAboutYourself();

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
      <section>
        <div className="py-10 px-3 md:p-5 flex flex-col w-full">
          <small className="font-medium text-[14px] leading-5 text-[#8C8C99]">
            STEP 1 of 5
          </small>
          <div className="my-5 flex flex-col">
            <h2 className="font-semibold text-[24px] leading-[32px] text-secondary">
              Tell us about yourself.
            </h2>
            <p className="text-gray leading-6 font-normal text-[16px] py-2">
              This will help us give you a more personalised experience.
            </p>
          </div>

          <div className="space-y-5 w-full">
            <div className="flex w-full md:items-center gap-5 flex-col md:flex-row">
              <div className="border border-[#E6E6F0] rounded-xl py-2 px-3 flex flex-1 flex-col gap-2 focus:border focus:border-primary focus:shadow focus:shadow-[#EDE4FA]">
                <label
                  className="text-secondary leading-6 text-[16px] font-normal"
                  htmlFor="firstName"
                >
                  First name
                </label>
                <input
                  className="focus:outline-none"
                  name="firstName"
                  type="text"
                  placeholder="John"
                  value={userDetails.firstName}
                  onChange={handleChange}
                />
              </div>

              <div className="border border-[#E6E6F0] rounded-xl py-2 px-3 flex flex-1 flex-col gap-2 focus:border focus:border-primary focus:shadow focus:shadow-[#EDE4FA]">
                <label
                  className="text-secondary leading-6 text-[16px] font-normal"
                  htmlFor="lastName"
                >
                  Last name
                </label>
                <input
                  className="focus:outline-none"
                  name="lastName"
                  type="text"
                  placeholder="Doe"
                  value={userDetails.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="border border-[#E6E6F0] rounded-xl py-2 px-3 flex flex-col gap-2 focus:border focus:border-primary focus:shadow focus:shadow-[#EDE4FA] relative md:w-[389px] w-full">
              <label
                className="text-secondary leading-6 text-[16px] font-normal"
                htmlFor="country"
              >
                Country of residence
              </label>
              <div className="flex items-center justify-between px-2">
                <input
                  ref={inputRef}
                  className="focus:outline-none"
                  name="country"
                  type="text"
                  placeholder="Select country---"
                  value={userDetails.countryOfResidence || ""}
                  onClick={handleCountryInputClick}
                  readOnly
                />
                <img src={dropdown} alt="drop down" />
              </div>

              {/* Country Modal */}
              {modalOpen && (
                <CountryModal onSelectCountry={handleCountrySelect} />
              )}
            </div>
            <Nav_Btn
              disabled={disable}
              showPrevious={false}
              handleRequest={handleRequest}
              navTo="/onboarding/username"
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

export default TellUsAboutYourself;
