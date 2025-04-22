import { useEffect, useState } from "react";
// import Chip from "../Reuseables/Chip";
import Overlay from "../Reuseables/Overlay";
import InvitationItem from "../Reuseables/InvitationItem";
import { useUserData } from "../../context/useUserData";

interface PropsType {
  projectId: string;
  state: () => void;
  projectInvitations?: {
    requests: any[];
    invites: any[];
  };
}

const ViewRequests = ({ projectId, state, projectInvitations }: PropsType) => {
  const { user } = useUserData();
  const [activeTab, setActiveTab] = useState<"requests" | "invites">(
    "requests"
  );

  const items =
    activeTab === "requests"
      ? projectInvitations?.requests || []
      : projectInvitations?.invites || [];

      useEffect(() => {
        console.log(items)
      }, [])

  return (
    <Overlay>
      <div className="h-[500px] w-[450px] rounded-[20px] bg-white">
        <div className="h-[76px] flex justify-between items-center px-6 border-b border-gray200">
          <h2 className="text-xl font-semibold text-[#2A2A33] leading-7">
            Requests & invites
          </h2>
          <button onClick={state}>
            <img src="/assets/X.svg" alt="Close" />
          </button>
        </div>

        <div className="py-3">
          <div className="flex gap-4 mb-6 border-b border-gray200 px-6">
            <div
              onClick={() => setActiveTab("requests")}
              className={`${activeTab === "requests" ? "border-brand600 border-b-2 text-[#2A2A33]" : "border-none text-[#73737F]"} p-3 font-medium text-[14px] `}
            >
              Requests ({projectInvitations?.requests.length || 0})
            </div>
            <div
              onClick={() => setActiveTab("invites")}
              // active={activeTab === "invites"}
              className={`${activeTab === "invites" ? "border-brand600 border-b-2 text-[#2A2A33]" : "border-none text-[#73737F]"} p-3 font-medium text-[14px]`}
            >
              Invites ({projectInvitations?.invites.length || 0})
            </div>
          </div>

          {/* List of items */}
          <div className="space-y-4 max-h-[400px] overflow-y-auto px-3">
            <div>
              <div className="flex items-center justify-between px-3 pb-3 border-b-[0.5px] border-[#E6E6F0]">
                <div className="flex gap-1 items-center">
                  <small className="text-[#73737F] text-[14px] leading-5">
                    {activeTab === "requests" ? "Requests" : "Invites"}
                  </small>
                  <small className="h-1 w-1 rounded-full bg-[#73737F]" />
                  <small className="text-[#73737F] font-medium text-[14px] leading-5">
                    {activeTab === "requests"
                      ? projectInvitations?.requests.length
                      : projectInvitations?.invites.length}
                  </small>
                </div>
                <div className="">
                  <small className="text-brand600 font-medium leading-5 text-[14px]">
                    all
                  </small>
                </div>
              </div>
            </div>
            {items.length === 0 && (
              <p className="text-center text-gray500 py-4">
                Nothing to show at this time.
              </p>
            )}
            {items.map((item) => (
              <InvitationItem
                key={item.id}
                invitation={item}
                projectId={projectId}
                type={activeTab}
                user={activeTab === "requests" ? item.user : item.receiver}
                currentUserId={user.id}
              />
            ))}
          </div>
        </div>
      </div>
    </Overlay>
  );
};

export default ViewRequests;
