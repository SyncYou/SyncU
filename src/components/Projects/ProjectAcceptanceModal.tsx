import { PiArrowSquareOut } from "react-icons/pi";
import X from "/assets/X.svg";
import PrimaryButton from "../Reuseables/PrimaryButton";
import SecondaryButton from "../Reuseables/SecondaryButton";
import Overlay from "../Reuseables/Overlay";
import { Alert, ProjectType } from "../../utils/types/Types";
import { UserDetails } from "../../store/UseUserStore";
import { useState } from "react";
import ProjectDetails from "./ProjectDetails";

interface ProjectAcceptanceModalProps {
  onClose: () => void;
  creator?: UserDetails;
  sender?: UserDetails;
  project?: ProjectType;
  alert: Alert;
}

const ProjectAcceptanceModal = ({ 
  onClose, 
  creator, 
  sender, 
  project,
  alert 
}: ProjectAcceptanceModalProps) => {
  const [showProjectDetails, setShowProjectDetails] = useState(false);
  return (
    <Overlay>
      <div className="w-[414px] h-[518px] rounded-3xl border border-gray200 bb-10 bg-white">
        <div className="mb-2 flex justify-between h-[72px] py-4 px-6">
          <p></p>
          <img 
            src={X} 
            alt="x" 
            onClick={onClose}
            className="cursor-pointer"
          />
        </div>
        <div className="h-[398px] flex flex-col gap-8 px-6">
          <div className="flex flex-col justify-center gap-8">
            <div className="flex gap-3 justify-center items-center">
              <div className="h-[82px] w-[82px] rounded-full overflow-hidden">
                <img 
                  src={creator?.photoUrl} 
                  alt={creator?.username}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xl">→</span>
              <div className="h-[82px] w-[82px] rounded-full overflow-hidden">
                <img 
                  src={sender?.photoUrl} 
                  alt={sender?.username}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="">
              <p className="font-semibold text-gray950 text-2xl text-center mb-4">
                {alert.status === "accepted" 
                  ? "Congratulations 🎉 You're in!"
                  : alert.status === "pending"
                    ? "Request Pending"
                    : "Request Status"}
              </p>
              <p className="font-normal text-base text-center text-gray700">
                {alert.message}
              </p>
              {project && (
                <p className="font-medium text-center mt-2">
                  Project: {project.title}
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <PrimaryButton 
              onClick={() => window.open(project?.workspace?.url, "_blank")}
              classes="h-[56px] w-[264px] mx-auto"
            >
              Join workspace <PiArrowSquareOut />
            </PrimaryButton>
            <SecondaryButton  onClick={() => setShowProjectDetails(true)} classes="h-[56px] w-[264px] mx-auto">
              View Project
            </SecondaryButton>
          </div>
        </div>
      </div>
      {showProjectDetails && project && (
        <ProjectDetails
          state={() => setShowProjectDetails(false)}
          id={project.id}
          isOpen={showProjectDetails}
        />
      )}
    </Overlay>
  );
};

export default ProjectAcceptanceModal;