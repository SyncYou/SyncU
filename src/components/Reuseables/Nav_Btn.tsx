import { useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import Button from "./Button";
import { useUserStore } from "../../store/UseUserStore";
import Toast from "./Toast";
import useToastNotifications from "../../hooks/useToastNotifications";
import { useState } from "react";

interface Nav_BtnProps<T = unknown> {
  navTo: string;
  btn_Style: string;
  disabled: boolean;
  handleRequest?: () => Promise<T>;
  showPrevious: boolean;
}

export default function Nav_Btn({
  navTo,
  btn_Style,
  disabled,
  handleRequest,
  showPrevious,
}: Nav_BtnProps) {
  const navigate = useNavigate();
  const { currentStep, setCurrentStep } = useUserStore();
  const [showNotifications, setShowNotifications] = useState(false);
  const { toast, showToast } = useToastNotifications();

  async function handleNext() {
    if (!disabled) {
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);

      if (handleRequest) {
        try {
          await handleRequest();
          // const {  error } = (await handleRequest()) as {
          //   error: any;
          // };

          // if (typeof result === "object" && result !== null) {

          // if (error) {
          //   // console.log('An error occurred')
          //   // throw new Error(error)
          //   const showNotificationTimeout = setTimeout(() => {
          //     setShowNotifications(true);
          //     showToast("error", "An Error occurred", "Please try again.");
          //   }, 1000);

          //   const hideNotificationTimeout = setTimeout(() => {
          //     setShowNotifications(false);
          //   }, 5000);

          //   console.log(error);

          //   return () => {
          //     clearTimeout(showNotificationTimeout);
          //     clearTimeout(hideNotificationTimeout);
          //   };
          // }

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

        // }
      }
    }
  }

  function handlePrev() {
    const prevStep = currentStep - 1;
    setCurrentStep(prevStep);
    navigate(-1);
  }

  return (
    <>
      {showNotifications && toast && (
        <div className="absolute top-0 flex items-center justify-center w-full z-50">
          <Toast
            type={toast.type}
            message={toast.message}
            description={toast.description}
          />
        </div>
      )}
      <span className="gap-6 items-center flex w-full">
        {/* Previous Button */}
        {showPrevious && (
          <Button
            onClick={handlePrev}
            style="rounded-full py-[12px] px-[12px] bg-white shadow-xs"
          >
            <BsArrowLeft />
          </Button>
        )}

        {/* Next Button */}
        <Button
          style={`w-[30%] ${btn_Style}`}
          disabled={disabled}
          onClick={handleNext}
        >
          Next
        </Button>
      </span>
    </>
  );
}
