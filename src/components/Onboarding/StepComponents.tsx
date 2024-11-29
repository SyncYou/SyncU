import { OnboardingStepProps } from '../../types/onboarding';
import Step1 from './Step1';
import Step2 from './Step2';
import Signup from '../Auth/Signup';

export const getStepComponents = (props: OnboardingStepProps, isMobile: boolean) => {
  const baseSteps = [
    <Step1 key="step1" {...props} />,
    <Step2 key="step2" {...props} />
  ];

  if (isMobile) {
    return [...baseSteps, <Signup key="step3" {...props} />];
  }

  return baseSteps;
};