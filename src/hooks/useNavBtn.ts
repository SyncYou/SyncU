import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useToastNotifications from "./useToastNotifications";

export function useNavBtn<T>(
  navTo: string,
  disabled: boolean,
  currentStep: number,
  setCurrentStep: (step: number) => void,
  handleRequest?: () => Promise<T>
) {
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);
  const { toast, showToast } = useToastNotifications();

  const handleNext = async () => {
    if (!disabled) {
      if (handleRequest) {
        try {
          const error = await handleRequest();

          if (!error) {
            const nextStep = currentStep + 1;
            setCurrentStep(nextStep);
            navigate(navTo);
          } else {
            setShowNotifications(true);
            showToast("error", "An error occurred", "Please try again.");
            return;
          }
        } catch (error: unknown) {
          const pgError = error as { code: string };

          if (pgError.code === "23505") {
            setShowNotifications(true);
            showToast(
              "error",
              "Username is already taken",
              "Please choose a different username."
            );
          } else {
            setShowNotifications(true);
            showToast("error", "An error occurred", "Please try again.");
          }

          console.log(pgError);
        }
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
