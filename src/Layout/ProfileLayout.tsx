import React from "react";
import ProfilePreview from "../components/Profile/ProfilePreview";
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
      {/* <div className="hidden md:block">
        <Header />
      </div> */}
      <section className={` pt-[30px] md:pt-[63.1px] grid w-full h-full ${location.pathname !== "/onboarding/finishing" ? "md:grid-cols-[55%_45%]" : ""}`}>
        {location.pathname !== "/onboarding/finishing" && (
          <div className="w-full flex mt-2 md:mt-10 px-3 md:pl-4 md:pr-12">
            <Outlet />
          </div>
        )}
        <div className={`${location.pathname !== "/onboarding/finishing" ? "hidden" : "flex" } md:flex w-full flex-col bg-[#F5F5FA] px-4 items-center md:justify-center`}>
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
