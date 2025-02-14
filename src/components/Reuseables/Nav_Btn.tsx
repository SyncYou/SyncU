import { BsArrowLeft } from "react-icons/bs";
import Button from "./Button";
import { useUserStore } from "../../store/UseUserStore";
import { useNavBtn } from "../../hooks/useNavBtn";

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
  handleRequest = async () => {},
  showPrevious,
}: Nav_BtnProps) {
  const { currentStep, setCurrentStep } = useUserStore();
  const { handleNext, handlePrev} = useNavBtn(
    navTo,
    disabled,
    currentStep,
    setCurrentStep,
    handleRequest
  );

  return (
    <>
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
