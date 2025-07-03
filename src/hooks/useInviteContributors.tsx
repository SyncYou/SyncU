// Create a new hook useInviteContributors.ts
import { useMutation } from "@tanstack/react-query";
import { supabase } from "../supabase/client";
import { useUserData } from "../context/useUserData";
import { sendNotification } from "../utils/SupabaseRequest";

const useInviteContributors = (projectId: string) => {
  const { user } = useUserData();
  
  const { mutateAsync, status } = useMutation({
    mutationKey: ["invite-contributors"],
    mutationFn: async (contributors: string[]) => {
      if (!projectId) throw new Error("No project ID");
      
      
      const invitations = contributors.map(email => ({
        project_id: projectId,
        sender_id: user?.id,
        receiver_email: email,
        type: "invite",
        status: "pending"
      }));
      
      const { error } = await supabase
        .from("Project_Invitations")
        .insert(invitations);
        
      if (error) throw error;
      
      
      const notifications = contributors.map(email => ({
        to: email, // This assumes email is the user ID - adjust based on your auth system
        message: `You've been invited to join a project by ${user?.username}`,
        is_read: false,
        action_data: { 
          projectId,
          type: "invite" 
        }
      }));
      
      await sendNotification(notifications);
    }
  });
  
  return { inviteContributors: mutateAsync, status };
};

export default useInviteContributors;