import Overlay from "../../../components/Overlay";
import tourImage from "/assets/Illustration.svg";
import PrimaryButton from "../../../components/PrimaryButton";
import { FiArrowRight } from "react-icons/fi";
import SecondaryButton from "../../../components/SecondaryButton";
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
        classes: "shepherd-theme-arrows",
        scrollTo: {
          behavior: "smooth",
          block: "center",
        },
      },
    });

    tour.addStep({
      title: "Collaborate",
      text: "Find People and projects to work on here",
      attachTo: {
        element: ".first",
        on: "right",
      },
      classes: "w-[1000px] h-[500px] font-black",
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
