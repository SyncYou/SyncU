import React, { useState } from "react";
import Signup from "../components/Auth/Signup";
import Step1 from "../components/Onboarding/Step1";
import Step2 from "../components/Onboarding/Step2";

const OnboardingLayout: React.FC = () => {
  const [step, setStep] = useState(0);

  const handleNextStep = () => {
    setStep((prev) => prev + 1);
  };

  const handlePrevStep = () => {
    setStep((prev) => prev - 1);
  };

  const mobileOnboardingSteps = () => {
    switch (step) {
      case 0:
        return (
          <Step1
            handleNextStep={handleNextStep}
            handlePrevStep={handlePrevStep}
          />
        );
        break;
      case 1:
        return (
          <Step2
            handleNextStep={handleNextStep}
            handlePrevStep={handlePrevStep}
          />
        );
        break;
      case 2:
        return <Signup />;
        break;
      default:
        return (
          <Step1
            handleNextStep={handleNextStep}
            handlePrevStep={handlePrevStep}
          />
        );
        break;
    }
  };

  const desktopOnboardingSteps = () => {
    switch (step) {
      case 0:
        return (
          <Step1
            handleNextStep={handleNextStep}
            handlePrevStep={handlePrevStep}
          />
        );
        break;
      case 1:
        return (
          <Step2
            handleNextStep={handleNextStep}
            handlePrevStep={handlePrevStep}
          />
        );
        break;
      default:
        return (
          <Step1
            handleNextStep={handleNextStep}
            handlePrevStep={handlePrevStep}
          />
        );
        break;
    }
  };

  return (
    <section className="w-full h-dvh ">
      {/* Desktop View */}
      <div className="hidden md:flex w-full h-dvh">
        <div className="flex-1">
          <Signup />
        </div>
        <div className="flex-1">{desktopOnboardingSteps()}</div>
      </div>
      {/* mobile view */}
      <div className="w-full md:hidden">{mobileOnboardingSteps()}</div>
    </section>
  );
};

export default OnboardingLayout;
