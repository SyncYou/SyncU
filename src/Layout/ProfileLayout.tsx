import React from "react";
import ProfilePreview from "../components/Profile/ProfilePreview";
import Header from "../components/Reuseables/Header";
import { Outlet, useLocation, useNavigate } from "react-router";
import Button from "../components/Reuseables/Button";
import { BsArrowLeft } from "react-icons/bs";
import { useUserStore } from "../store/UseUserStore";

const ProfileLayout: React.FC = () => {
  const { setCurrentStep, currentStep } = useUserStore();
  const location = useLocation();
  const navigate = useNavigate();
  function handlePrev() {
    const prevStep = currentStep - 1;
    setCurrentStep(prevStep);
    navigate(-1);
  }

  return (
    <>
      <div className="border-[0.5px] border-[#D6D6E0] hidden md:block">
        <Header />
      </div>
      <section className="flex w-full h-dvh">
        {location.pathname !== "/onboarding/finishing" && (
          <div className="w-full h-dvh">
            <Outlet />
          </div>
        )}
        <div
          className={`${location.pathname !== "/onboarding/finishing" ? "hidden" : "block"} md:block w-full h-[100vh]  items-center justify-center border-l-[0.5px] border-[#D6D6E0] mt-10`}
        >
          <ProfilePreview />

          <div className="flex items-center justify-center w-full py-5">
            {location.pathname === "/onboarding/finishing" && (
              <Button
                onClick={handlePrev}
                style="rounded-full py-[12px] px-[12px] bg-white shadow-xs"
              >
                <BsArrowLeft />
              </Button>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfileLayout;
