import React, { useEffect, useState } from "react";
import Signup from "../components/Auth/Signup";
import { OnboardingSteps } from "../components/Onboarding/OnboardingSteps";
import { useOnboardingState } from "../hooks/useOnboardingState";

const OnboardingLayout: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { step, handleNextStep, handlePrevStep } = useOnboardingState(isMobile);

  return (
    <section className="flex w-full h-[100vh] overflow-hidden">
      <div className="w-full flex-1 hidden md:block">
        <Signup />
      </div>
      {/* Desktop View */}
      <div className="w-full flex-1 hidden md:block">
        <OnboardingSteps
          currentStep={step}
          handlePrevStep={handlePrevStep}
          handleNextStep={handleNextStep}
          isMobile={false}
        />
      </div>
      {/* mobile view */}
      <div className="w-full md:hidden">
        <OnboardingSteps
          currentStep={step}
          handlePrevStep={handlePrevStep}
          handleNextStep={handleNextStep}
          isMobile={true}
        />
      </div>
    </section>
  );
};

export default OnboardingLayout;
