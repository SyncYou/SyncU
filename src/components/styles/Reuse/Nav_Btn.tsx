import { useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import Button from "./Button";
import { useUserStore } from "../../../store/UseUserStore";

interface Nav_BtnProps<T = unknown> {
  navTo: string;
  btn_Style: string;
  disabled: boolean;
  handleRequest: () => Promise<T>;
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

  async function handleNext() {
    if (!disabled) {
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);

      await handleRequest();
      navigate(navTo);
    }
  }

  function handlePrev() {
    const prevStep = currentStep - 1;
    setCurrentStep(prevStep);
    navigate(-1);
  }

  return (
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
  );
}
