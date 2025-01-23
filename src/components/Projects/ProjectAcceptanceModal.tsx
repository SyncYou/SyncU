import { PiArrowSquareOut } from "react-icons/pi";
import X from "/assets/X.svg";
import PrimaryButton from "../Reuseables/PrimaryButton";
import SecondaryButton from "../Reuseables/SecondaryButton";
import Overlay from "../Reuseables/Overlay";

const ProjectAcceptanceModal = () => {
  return (
    <Overlay>
      <div className="w-[414px] h-[518px] rounded-3xl border border-gray200 bb-10 bg-white">
        <div className="mb-2 flex justify-between h-[72px] py-4 px-6">
          <p></p>
          <img src={X} alt="x" />
        </div>
        <div className="h-[398px] flex flex-col gap-8 px-6">
          <div className="flex flex-col justify-center gap-8">
            <div className="flex gap-3 justify-center items-center">
              <div className="h-[82px] w-[82px] bg-brand600 rounded-full"></div>
              X
              <div className="h-[82px] w-[82px] bg-brand600 rounded-full"></div>
            </div>
            <div className="">
              <p className="font-semibold text-gray950 text-2xl text-center mb-4">
                Congratulations 🎉 <br /> You’re in!
              </p>
              <p className="font-normal text-base text-center text-gray700">
                Wooray! your request to work on{" "}
                <span className="font-medium text-gray950">MealMind</span> has
                been accepted.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <PrimaryButton classes="h-[56px] w-[264px] mx-auto">
              Join workspace <PiArrowSquareOut />
            </PrimaryButton>
            <SecondaryButton classes="h-[56px] w-[264px] mx-auto">
              View Project
            </SecondaryButton>
          </div>
        </div>
      </div>
    </Overlay>
  );
};

export default ProjectAcceptanceModal;
