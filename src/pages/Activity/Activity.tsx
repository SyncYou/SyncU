import { useEffect, useState } from "react";
import { useAlerts } from "../../context/useUserData";
import { useQuery } from "@tanstack/react-query";
import { fetchProjectDetails, fetchUser } from "../../utils/queries/fetch";
import ProjectAcceptanceModal from "../../components/Projects/ProjectAcceptanceModal";
import { Alert, ProjectType } from "../../utils/types/Types";
import { UserDetails } from "../../store/UseUserStore";

const Activity = () => {
  const { alerts } = useAlerts();
  const [selectedAlert, setSelectedAlert] = useState<Alert | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState<"all" | "requests">("all");

  // Filter alerts based on active tab
  const filteredAlerts = alerts?.filter(alert => {
    if (activeTab === "all") return true;
    return alert.message.includes("has requested to join") || 
           alert.message.includes("request to join");
  });

  // Fetch creator data
  const { data: creatorData } = useQuery<UserDetails | undefined>({
    queryKey: ["creator", selectedAlert?.action_data?.creatorId],
    queryFn: () => fetchUser(selectedAlert?.action_data?.creatorId as string),
    enabled: !!selectedAlert?.action_data?.creatorId && showModal,
  });

  // Fetch sender data
  const { data: senderData } = useQuery<UserDetails | undefined>({
    queryKey: ["sender", selectedAlert?.action_data?.sender],
    queryFn: () => fetchUser(selectedAlert?.action_data?.sender as string),
    enabled: !!selectedAlert?.action_data?.sender && showModal,
  });

  // Fetch project data
  const { data: projectData } = useQuery<ProjectType | undefined>({
    queryKey: ["project", selectedAlert?.action_data?.projectId],
    queryFn: () => fetchProjectDetails(selectedAlert?.action_data?.projectId as string),
    enabled: !!selectedAlert?.action_data?.projectId && showModal,
  });

  const handleAlertClick = (alert: Alert) => {
    if (alert.status === "accepted") {
      setSelectedAlert(alert);
      setShowModal(true);
    }
  };

  useEffect(() => {
    console.log(alerts);
  }, [alerts]);

  return (
    <section className="px-5 pt-5 md:py-6 md:px-[100px] w-full text-gray950">
      <div className="mb-2">
        <div className="mb-2">
          <h1 className="font-semibold text-lg md:text-2xl mb-2">
            Here are updates for you.
          </h1>
          <p className="font-normal text-sm md:text-base text-gray-800">
            Hello there👋! You have {filteredAlerts?.length} unread updates that need
            your attention.
          </p>
        </div>
        <div className="h-[60px] py-4">
          <div className="flex gap-4">
            <button 
              onClick={() => setActiveTab("all")}
              className={`h-7 py-1 px-3 rounded-full border-[1.5px] ${
                activeTab === "all" 
                  ? "border-brand600 text-brand600" 
                  : "border-gray300 text-gray700"
              } text-center cursor-pointer text-xs font-medium min-w-16`}
            >
              All
            </button>
            <button
              onClick={() => setActiveTab("requests")}
              className={`h-7 py-1 px-3 rounded-full border-[1.5px] ${
                activeTab === "requests" 
                  ? "border-brand600 text-brand600" 
                  : "border-gray300 text-gray700"
              } text-center cursor-pointer text-xs font-medium min-w-16`}
            >
              Requests
            </button>
          </div>
        </div>
        <hr />
      </div>
      <div className="py-3">
        <p>Today</p>
        <div className="flex flex-col gap-3">
          {filteredAlerts?.slice().reverse().map((alert, idx) => (
            <div   
              className={`${alert.status === "accepted" ? "cursor-pointer hover:bg-gray100" : "cursor-default"}`}  
              onClick={() => handleAlertClick(alert)} 
              key={idx}
            >
              <div className="p-2 hover:bg-gray100 flex items-center gap-4 relative">
                <div className="w-10 h-10 bg-gray950 block rounded-full"></div>
                <div className="font-normal text-gray700 text-sm">
                  <div className="flex gap-2">
                    <span className="text-base font-semibold text-gray900">
                      {alert.status === "accepted" && "Congratulations🎉 you're in!"}
                      {alert.status === "pending" && "You have a new notification"}
                      {alert.status === "rejected" && "Sorry, you have been rejected"}
                    </span>
                    <span>1h</span>
                  </div>
                  <p className="">{alert.message}</p>
                  {!alert.is_read && (
                    <div className="w-4 h-4 rounded-full bg-brand600 absolute right-2 top-[22px] border border-white"></div>
                  )}
                </div>
              </div>
              <hr />
            </div>
          ))}
        </div>
        <p className="pt-4 text-center text-[#73737F] text-sm">That's all for now</p>
      </div>

      {showModal && selectedAlert && (
        <ProjectAcceptanceModal
          onClose={() => setShowModal(false)}
          creator={creatorData}
          sender={senderData}
          project={projectData}
          alert={selectedAlert}
        />
      )}
    </section>
  );
};

export default Activity;