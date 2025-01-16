import React, { useEffect, useState } from "react";
import Header from "../Reuseables/Header";
import { useNavigate } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import profile from "/signUp-imgs/profile.svg";
import useToastNotifications from "../../hooks/useToastNotifications";
import Toast from "../Reuseables/Toast";

const SetUpYourProfile: React.FC = () => {
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);
  const { toast, showToast } = useToastNotifications();

  useEffect(() => {
    const showNotificationTimeout = setTimeout(() => {
      setShowNotifications(true);
      showToast(
        "success",
        "Email Verified",
        "Your email has been successfully verified."
      );
    }, 3000);

    const hideNotificationTimeout = setTimeout(() => {
      setShowNotifications(false);
    }, 10000);

    return () => {
      clearTimeout(showNotificationTimeout);
      clearTimeout(hideNotificationTimeout);
    };
  }, []);
  return (
    <section className="p-3">
      {showNotifications && toast && (
        <div className="absolute top-0 flex items-center justify-center w-full z-50">
          <Toast
            type={toast.type}
            message={toast.message}
            description={toast.description}
          />
        </div>
      )}
      <div>
        <Header />
      </div>
      <div className="h-full w-full flex flex-col items-center justify-center mt-20 space-y-5">
        <img className="my-5 mb-1" src={profile} alt="" />
        <div>
          <h2 className="font-semibold text-secondary text-center text-[2rem] leading-[32px]">
            Set up your profile🌟
          </h2>
          <p className="text-gray text-center leading-6 font-normal text-[16px] my-5">
            Just a few more steps to go...
          </p>
        </div>

        <div className="my-5">
          <button
            onClick={() => {
              navigate("/onboarding/tell-us-about-yourself");
            }}
            className="text-[#F5F5FA] leading-6 text-[16px] text-center bg-gray-950 py-4 px-10 rounded-full flex items-center justify-center gap-5"
          >
            Get started
            <FaArrowRightLong />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SetUpYourProfile;
