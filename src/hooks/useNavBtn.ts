import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useToastNotifications from "./useToastNotifications";

export function useNavBtn<T>(
  navTo: string,
  disabled: boolean,
  currentStep: number,
  setCurrentStep: (step: number) => void,
  handleRequest?: () => Promise<T>,
) {
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);
  const { toast, showToast } = useToastNotifications();

  const handleNext = async () => {
    if (!disabled) {
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);

      // Check if handleRequest is defined before calling it
      if (handleRequest) {
        try {
          await handleRequest();
          navigate(navTo);
        } catch (error) {
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
      } else {
        navigate(navTo);
      }
    }
  };

  const handlePrev = () => {
    const prevStep = currentStep - 1;
    setCurrentStep(prevStep);
    navigate(-1);
  };

  return {
    handleNext,
    handlePrev,
    showNotifications,
    setShowNotifications,
    toast,
  };
}
