import { useEffect, useState } from 'react';

export const useOnboardingState = (isMobileView: boolean) => {
  const [step, setStep] = useState(0);
  const maxSteps = isMobileView ? 3 : 2;

  const handleNextStep = () => {
    setStep((prevStep) => Math.min(prevStep + 1, maxSteps));
  };

  const handlePrevStep = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  useEffect(() => {
    if (step >= maxSteps) {
      setStep(maxSteps - 1);
    }
  }, [maxSteps, step]);

  return {
    step,
    handleNextStep,
    handlePrevStep,
  };
};