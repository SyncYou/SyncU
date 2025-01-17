import Overlay from "../../../components/Reuseables/Overlay";
import tourImage from "/assets/Illustration.svg";
import PrimaryButton from "../../../components/Reuseables/PrimaryButton";
import { FiArrowRight } from "react-icons/fi";
import SecondaryButton from "../../../components/Reuseables/SecondaryButton";
import Shepherd from "shepherd.js";
import "shepherd.js/dist/css/shepherd.css";

interface PropType {
  tourState: () => void;
}

const HomeOnboardingTour = ({ tourState }: PropType) => {
  const startTour = () => {
    const tour = new Shepherd.Tour({
      useModalOverlay: true,
      defaultStepOptions: {
        cancelIcon: {
          enabled: true,
        },
        classes:
          "bg-white rounded-lg shadow-lg border border-gray200 h-[203px] w-[24px]",
        scrollTo: true,
      },
    });

    tour.addStep({
      text: `
        <div class="flex items-center mb-4 h-5">
          <span class="font-medium">Vergil from syncu</span>
        </div>
        <h2 class="text-sm font-medium text-gray950">Collaborate</h2>
        <p class="text-sm mt-2 font-normal text-gray700">Find people and projects to work here</p>
      `,
      attachTo: {
        element: ".first",
        on: "right",
      },
      buttons: [
        {
          text: "Next",
          action: tour.next,
        },
      ],
    });
    tour.addStep({
      title: "Welcome",
      text: "This is SyncU",
      attachTo: {
        element: ".second",
        on: "right",
      },
      buttons: [
        {
          text: "Back",
          action: tour.back,
        },
        {
          text: "Next",
          action: tour.next,
        },
      ],
    });
    tour.addStep({
      title: "Welcome",
      text: "This is SyncU",
      attachTo: {
        element: ".third",
        on: "right",
      },
      buttons: [
        {
          text: "Back",
          action: tour.back,
        },
        {
          text: "End",
          action: tour.complete,
        },
      ],
    });

    tourState();
    tour.start();
  };

  return (
    <Overlay>
      {/* <div className=""></div> */}
      <div className="h-[600px] w-[513px] bg-white rounded-3xl">
        <img src={tourImage} className="mb-6 rounded-t-3xl" alt="" />
        <div className="w-full h-[320px] py-4">
          <div className="mb-6">
            <h2 className="font-semibold text-gray950 text-[32px] text-center mb-2 leading-10">
              Welcome to syncu
            </h2>
            <p className="text-lg font-normal text-gray700 text-center mx-auto w-1/2">
              Take a quick tour 🚀 to see how it works and get started!
            </p>
          </div>
          <div className="flex flex-col gap-4 py-4 px-6">
            <PrimaryButton onClick={startTour} classes="w-[350px] mx-auto">
              Start tour
              <FiArrowRight />
            </PrimaryButton>
            <SecondaryButton onClick={tourState} classes="w-[350px] mx-auto">
              Skip tour
            </SecondaryButton>
          </div>
        </div>
      </div>
    </Overlay>
  );
};

export default HomeOnboardingTour;
