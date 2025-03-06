import { errorToast } from "oasis-toast";
import { useNavigate } from "react-router-dom";

export function useNavBtn<T>(
  navTo: string,
  disabled: boolean,
  currentStep: number,
  setCurrentStep: (step: number) => void,
  handleRequest?: () => Promise<T>
) {
  const navigate = useNavigate();

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
            errorToast('An error occurred', 'Please try again.');
            return;
          }
        } catch (error: unknown) {
          const pgError = error as { code: string };

          if (pgError.code === "23505") {
            errorToast('Username is already taken', 'Please choose a different username.');
           
          } else {
            errorToast('An error occurred', 'Please try again.');
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
  };
}
