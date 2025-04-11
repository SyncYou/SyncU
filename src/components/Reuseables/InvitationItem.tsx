import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "../../utils/queries/fetch";
import { Loading } from "../Reuseables/Loading";
import { acceptInvitation, rejectInvitation } from "../../utils/SupabaseRequest";
import { Alert } from "../../utils/types/Types";

interface InvitationItemProps {
  invitation: Alert;
  projectId: string;
  type: "requests" | "invites";
}

const InvitationItem = ({ invitation, projectId, type }: InvitationItemProps) => {
  const userId = type === "requests" 
    ? invitation.action_data.sender 
    : invitation.action_data.creatorId;
  
  const { data: user } = useQuery({
    queryKey: ["user", userId],
    queryFn: () => fetchUser(userId),
  });

  const handleAction = async (action: "accept" | "reject") => {
    try {
      if (action === "accept") {
        await acceptInvitation(projectId, userId);
      } else {
        await rejectInvitation(projectId, userId);
      }
    } catch (error) {
      console.error("Error handling invitation:", error);
    }
  };

  return (
    <div className="flex items-center justify-between p-4 border border-gray200 rounded-lg">
      <div className="flex items-center gap-3">
        <img 
          src={user?.photoUrl} 
          className="w-10 h-10 rounded-full" 
          alt={user?.username}
        />
        <div>
          <p className="font-medium">@{user?.username}</p>
          <p className="text-sm text-gray500">
            {type === "requests" ? "Requested to join" : "Invited to collaborate"}
          </p>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <span className={`text-sm font-medium ${
          invitation.status === "accepted" ? "text-success700" :
          invitation.status === "rejected" ? "text-alert-600" :
          "text-gray700"
        }`}>
          {invitation.status?.toUpperCase() || "PENDING"}
        </span>
        
        {(!invitation.status || invitation.status === "pending") && (
          <>
            <button 
              onClick={() => handleAction("accept")}
              className="p-1 text-success700 hover:bg-success50 rounded"
            >
              Accept
            </button>
            <button 
              onClick={() => handleAction("reject")}
              className="p-1 text-alert-600 hover:bg-alert-50 rounded"
            >
              Reject
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default InvitationItem;