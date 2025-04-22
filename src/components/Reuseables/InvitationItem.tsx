// import { useQuery } from "@tanstack/react-query";
// import { fetchUser } from "../../utils/queries/fetch";
import { supabase } from "../../supabase/client";
import { handleInviteAction, handleRequestAction } from "../../utils/SupabaseRequest";
// import { Alert } from "../../utils/types/Types";
// import { supabase } from "../../supabase/client";
import { useEffect, useState } from "react";

interface InvitationItemProps {
  invitation: any;
  projectId: string;
  type: "requests" | "invites";
  user: any;
  currentUserId: string; // Add this prop
}

const InvitationItem = ({ 
  invitation, 
  projectId, 
  type, 
  user,
  currentUserId 
}: InvitationItemProps) => {
  const [status, setStatus] = useState(invitation.status || "pending");
  // const [loading, setLoading] = useState(false);


  useEffect(() => {
    const fetchStatus = async () => {
      const { data, error } = await supabase
        .from("Project_Invitations")
        .select("status")
        .eq("id", invitation.id)
        .single();

      if (!error && data?.status) {
        setStatus(data.status);
      }
    };

    fetchStatus();
  }, [invitation.id]);

  const handleAction = async (action: "accept" | "reject") => {
    // setLoading(true);
    try {
      if (type === "requests") {
        await handleRequestAction(projectId, user.id, action);
      } else {
        await handleInviteAction(projectId, currentUserId, action);
      }
      setStatus(action);
      
      // Update the status in the database
      await supabase
        .from("Project_Invitations")
        .update({ status: action })
        .eq("id", invitation.id);
    } catch (error) {
      console.error("Error handling invitation:", error);
    } finally {
      // setLoading(false);
    }
  };

  const showAcceptReject = status === "pending" && (
    type === "requests" 
      ? invitation.receiver_id === currentUserId 
      : invitation.sender_id === currentUserId
  );

  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center gap-3">
        <img 
          src={user?.photoUrl} 
          className="w-10 h-10 rounded-full" 
          alt={user?.username}
        />
        <div>
          <p className="font-medium">@{user?.username}</p>
          <p className="text-sm text-gray500">
            {type === "requests" 
              ? "Requested to join" 
              : "Invited to collaborate"}
          </p>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        {/* <span className={`text-sm font-medium ${
          status === "accepted" ? "text-success700" :
          status === "rejected" ? "text-alert-600" :
          "text-gray700"
        }`}>
          {status.toUpperCase()}
        </span> */}
        
        {showAcceptReject && status === "pending" && (
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