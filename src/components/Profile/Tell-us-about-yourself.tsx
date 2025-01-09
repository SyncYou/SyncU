import React, { useState, useRef, useEffect } from "react";
import dropdown from "/scroll.svg";
import CountryModal from "../Reuseables/CountryModal";
import { useUserStore } from "../../store/UseUserStore";
import Nav_Btn from "../styles/Reuse/Nav_Btn";
import { sendUserDetails } from "../../utils/SupabaseRequest";
import useToastNotifications from "../../hooks/useToastNotifications";
import Toast from "../Reuseables/Toast";

const TellUsAboutYourself: React.FC = () => {
  const [disable, setDisable] = useState(true);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { userDetails, setUserDetails } = useUserStore();
  const [modalOpen, setModalOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const { toast, showToast } = useToastNotifications();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails(name as keyof typeof userDetails, value);
  };

  const handleCountryInputClick = () => {
    setModalOpen(true);
  };

  const handleCountrySelect = (selectedCountry: string) => {
    setUserDetails("countryOfResidence", selectedCountry);
    setModalOpen(false);
  };

  const isValid =
    userDetails.firstName.trim() !== "" &&
    userDetails.lastName.trim() !== "" &&
    userDetails.countryOfResidence.trim() !== "" &&
    userDetails.firstName !== "N/A" &&
    userDetails.lastName !== "N/A" &&
    userDetails.countryOfResidence !== "N/A";

  useEffect(() => {
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
    setDisable(!isValid);
  }, [userDetails, isValid]);

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");

    if (storedUser) {
      const loggedInUser = JSON.parse(storedUser);

      if (loggedInUser?.email) {
        setUserDetails("email", loggedInUser.email);
      }
      if (loggedInUser?.user_metadata?.name) {
        const fullName = loggedInUser.user_metadata.name;
        const [firstName, lastName] = fullName.split(" ");
        setUserDetails("firstName", firstName);
        setUserDetails("lastName", lastName);
      }
    }
  }, [setUserDetails]);

  const handleRequest = async () => {
    if (isValid) {
      try {
        const { data, error } = await sendUserDetails(userDetails);
        if (error) {
          const showNotificationTimeout = setTimeout(() => {
            setShowNotifications(true);
            showToast("error", "An Error occurred", "Please try again.");
          }, 1000);

          const hideNotificationTimeout = setTimeout(() => {
            setShowNotifications(false);
          }, 5000);

          console.log(error);

          return () => {
            clearTimeout(showNotificationTimeout);
            clearTimeout(hideNotificationTimeout);
          };
        }
        console.log("Data sent to Supabase:", data);
        return { data, error };
      } catch (error) {
        console.error("Error sending data to Supabase:", error);
      }
    }
  };

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
