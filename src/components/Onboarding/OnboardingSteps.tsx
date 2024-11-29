import React from 'react';
import { OnboardingStepProps } from '../../types/onboarding';
import { getStepComponents } from './StepComponents';

interface OnboardingStepsProps extends OnboardingStepProps {
  currentStep: number;
  isMobile?: boolean;
}


export const OnboardingSteps: React.FC<OnboardingStepsProps> = ({
  currentStep,
  handlePrevStep,
  handleNextStep,
  isMobile = false
}) => {
  const steps = getStepComponents({ handlePrevStep, handleNextStep }, isMobile);
  
  return steps[currentStep] || steps[0];
};