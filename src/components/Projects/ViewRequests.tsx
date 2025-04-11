import { useState } from "react";
import Chip from "../Reuseables/Chip";
import Overlay from "../Reuseables/Overlay";
import InvitationItem from "../Reuseables/InvitationItem";
import { Alert } from "../../utils/types/Types";

interface PropsType {
  projectId: string;
  state: () => void;
  requests: Alert[];
  invites: Alert[];
}

const ViewRequests = ({ projectId, state, requests, invites }: PropsType) => {
  const [activeTab, setActiveTab] = useState<"requests" | "invites">(
    "requests"
  );

  // Get items for the active tab
  const items = activeTab === "requests" ? requests : invites;

  return (
    <Overlay>
      <div className="h-[603px] w-[566px] rounded-[20px] bg-white">
        <div className="h-[76px] flex justify-between items-center px-6 border-b border-gray200">
          <h2 className="text-xl font-semibold">Project Collaborators</h2>
          <button onClick={state}>
            <img src="/assets/X.svg" alt="Close" />
          </button>
        </div>

        <div className="p-6">
          {/* Main tabs (Requests/Invites) */}
          <div className="flex gap-4 mb-6">
            <Chip
              onClick={() => setActiveTab("requests")}
              active={activeTab === "requests"}
            >
              Requests ({requests.length})
            </Chip>
            <Chip
              onClick={() => setActiveTab("invites")}
              active={activeTab === "invites"}
            >
              Invites ({invites.length})
            </Chip>
          </div>

          {/* List of items */}
          <div className="space-y-4 max-h-[400px] overflow-y-auto">
            {items.length === 0 && (
              <p className="text-center text-gray500 py-4">
                Nothing to show at his time.
              </p>
            )}
            {items.map((item) => (
              <InvitationItem
                key={item.id}
                invitation={item}
                projectId={projectId}
                type={activeTab}
              />
            ))}
          </div>
        </div>
      </div>
    </Overlay>
  );
};

export default ViewRequests;
