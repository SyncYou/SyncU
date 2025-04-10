import { supabase } from "../supabase/client";
import { getLoggedInUser } from "./AuthRequest";
import { fetchUserData } from "./queries/fetch";

// Updating the user deatils(onboarding)
export const sendUserDetails = async (userData: any) => {
  const user = await getLoggedInUser();
  const { data, error } = await supabase
    .from("Users")
    .upsert([{ id: user?.id, ...userData }], { onConflict: "id" });

  if (error) {
    throw new Error(error.message);
  }

  console.log(data);

// Check if onboarding is complete
  if (userData.onboardingComplete) {
    // Send notification after onboarding is complete
    const notification = {
      to: user!.id,
      message: "Welcome to Syncu! Your onboarding is complete. 🎉",
      is_read: false,
      action_data: {},
    };

    await sendNotification([notification]);
  }

  return { data, error };
};

// Upload images to supabase bucket
export async function uploadAvatar(file: File) {
  const fileExt = file.name.split('.').pop();
  const fileName = `${Math.random()}.${fileExt}`;
  const filePath = `avatar/${fileName}`;

  try {
    // Upload the file
    const { error: uploadError } = await supabase.storage
      .from('avatar')
      .upload(filePath, file);

    if (uploadError) throw uploadError;

    // Get the public URL
    const { data: { publicUrl } } = supabase.storage
      .from('avatar')
      .getPublicUrl(filePath);

    // Update the user's profile in the database
    const user = await getLoggedInUser();
    if (!user) throw new Error('User not logged in');

    const { error: updateError } = await supabase
      .from('Users')
      .update({ photoUrl: publicUrl })
      .eq('id', user.id);

    if (updateError) throw updateError;

    console.log('Avatar uploaded and user updated successfully');
    return publicUrl;
  } catch (error) {
    console.error('Error uploading avatar:', error);
    throw new Error('Failed to upload avatar.');
  }
}

// Send request to join a project
// export const requestToJoinProject = async (
//   projectId: string,
//   creatorId: string
// ) => {
//   // Get the current user data
//   const user = await fetchUserData();
//   if (!user) {
//     console.error("User is not logged in");
//     return;
//   }

//   //  Fetch the previous data from the database
//   const { data: requests, error: fetchError } = await supabase
//     .from("Projects")
//     .select("requests")
//     .eq("id", projectId)
//     .single();

//   if (fetchError || !requests) {
//     console.error("Error fetching project:", fetchError);
//     return;
//   }

//   // Prepare the new request object
//   const newRequest = {
//     userId: user.id,
//     status: "pending",
//   };

//   const updatedRequests = [...(requests.requests || []), newRequest];

//   // Update the project with the new request
//   const { error: updateError } = await supabase
//     .from("Projects")
//     .update({ requests: updatedRequests })
//     .eq("id", projectId);

//   if (updateError) {
//     console.error("Error updating project with the new request:", updateError);
//     return false;
//   }

//   // Prepare the notification for the project owner (creator)
//   const notificationMessage = `User ${user.firstName} has requested to join your project.`;
//   const notification = {
//     from: user.id,
//     to: creatorId,
//     status: "pending",
//     message: notificationMessage,
//   };

//   // Insert the notification into the 'Notifications' table
//   const { data, error: insertError } = await supabase
//     .from("Notifications")
//     .insert(notification);

//   if (insertError) {
//     // Update the ui with the error toast
//     console.error("Error creating notification:", insertError);
//     return;
//   }

//   // Update the Ui with the success toast
//   console.log("Request sent successfully and notification created:", data);
//   return true;
// };

// Send request to join a project
// export const withdrawToJoinProject = async (
//   projectId: string,
//   creatorId: string
// ) => {
//   // Get the current user data
//   const user = await fetchUserData();
//   if (!user) {
//     console.error("User is not logged in");
//     return;
//   }

//   //  Fetch the previous data from the database
//   const { data: requests, error: fetchError } = await supabase
//     .from("Projects")
//     .select("requests")
//     .eq("id", projectId)
//     .single();

//   if (fetchError || !requests) {
//     console.error("Error fetching project:", fetchError);
//     return;
//   }

//   const updatedRequests = requests.requests.filter(
//     (req: Request) => req.userId != user.id
//   );

//   // Update the project with the new request
//   const { error: updateError } = await supabase
//     .from("Projects")
//     .update({ requests: updatedRequests })
//     .eq("id", projectId);

//   if (updateError) {
//     console.error("Error updating project with the new request:", updateError);
//     return false;
//   }

//   // Prepare the notification for the project owner (creator)
//   const notificationMessage = `User ${user.firstName} has withdrawn the request to join your project.`;
//   const notification = {
//     from: user.id,
//     to: creatorId,
//     status: "pending",
//     message: notificationMessage,
//   };

//   // Insert the notification into the 'Notifications' table
//   const { data, error: insertError } = await supabase
//     .from("Notifications")
//     .insert(notification);

//   if (insertError) {
//     // Update the ui with the error toast
//     console.error("Error creating notification:", insertError);
//     return;
//   }

//   // Update the Ui with the success toast
//   console.log("Request sent successfully and notification created:", data);
//   return true;
// };

export const requestToJoinProject = async (projectId: string, creatorId: string, project_name: string) => {
  const user = await fetchUserData();
  if (!user) {
    console.error("User is not logged in");
    return;
  }

  // Insert request into project_invitations table
  const { data, error } = await supabase.from("Project_Invitations").insert([
    {
      project_id: projectId,
      sender_id: user.id,
      receiver_id: creatorId,
      type: "request",
    },
  ]);

  if (error) {
    console.error("Error sending request to join project:", error);
    return false;
  }

  console.log("Request sent successfully:", data);
  const notifications = [
    {
      to: creatorId,
      message: `${user.firstName} has requested to join your project.`,
      is_read: false,
      action_data: { projectId, sender: user.id, creatorId },
    },
    {
      to: user.id,
      message: `Your request to join ${project_name} has been sent.`,
      is_read: false,
      action_data: { projectId, sender: user.id, creatorId },
    },
  ];

  sendNotification(notifications);
  return true;
};
export const withdrawProjectRequest = async (projectId: string, creatorId: string) => {
  const user = await fetchUserData();
  if (!user) {
    console.error("User is not logged in");
    return;
  }

  // Delete the request from project_invitations
  const { error } = await supabase
    .from("Project_Invitations")
    .delete()
    .match({ project_id: projectId, sender_id: user.id, type: "request" });

  if (error) {
    console.error("Error withdrawing request:", error);
    return false;
  }

  console.log("Request withdrawn successfully");
  // Send notification after withdrawing the request
  const notification = {
    to: creatorId,
    message: `${user.firstName} has withdrawn the request to join your project.`,
    is_read: false,
    action_data: { projectId, sender: user.id, creatorId },
  };

  await sendNotification([notification]);
  return true;
};

export const fetchProjectInvitations = async (projectId: string, userId: string) => {
  console.log('Fetching invitations for:', { projectId, userId });
  
  const { data, error, status } = await supabase
    .from("Project_Invitations")
    .select("*")
    .eq("project_id", projectId)
    .eq("sender_id", userId)
    .eq("type", "request");

  console.log('Query status:', status);
  console.log('Query error:', error);
  console.log('Query data:', data);

  if (error) {
    console.error("Error fetching project invitations:", error);
    return [];
  }

  return data || [];
};


// Callback function to handle real-time updates
const handleNotificationUpdate = async (payload: any) => {
  // Payload contains the new notification data
  const { from, to, status, message } = payload.new;
  console.log("New Notification:", message);

  if (status === "pending") {
    // Handle pending notifications (e.g., user requesting to join)
    console.log(`Notification from ${from} to ${to}: ${message}`);
  }
};

// Realtime subscription to notifications table
const notificationChannel = supabase
  .channel("notifications")
  .on(
    "postgres_changes",
    { event: "INSERT", schema: "public", table: "notifications" },
    handleNotificationUpdate
  )
  .subscribe();

// Unsubscribe from the channel when no longer needed (e.g., component unmounts)
export const unsubscribeFromNotifications = async () => {
  await supabase.removeChannel(notificationChannel);
};

// Function to send notification to project owner (this is called within `requestToJoinProject`)
export const sendNotification = async (notifications: { to: string; message: string; action_data: any }[]) => {
  const { data, error } = await supabase.from("Notifications").insert(notifications);

  if (error) {
    console.error("Error sending notifications:", error);
    return false;
  }

  console.log("Notifications sent successfully:", data);
  return true;
};


// Check if there's a username in the database
export const checkUsername = async (newUsername: string) => {
  try{
    const { data, error } = await supabase
    .from('Users')
    .select('username')
    .eq('username', newUsername)
    .limit(1);
  
    if (error) throw new Error(error.message);
    if (data && data.length > 0) {  // Check if there are any results
      return { status: "unavailable", message: "Username is already taken." };
    } else {
      return { status: "available", message: "This username is available." };
    }
  }catch(error){
    console.error("Error checking username availability:", error);
    return { status: "error", message: "An unexpected error occurred." };
  }
}

// TO-DO
// Fetch the creator of each project
// Add action key to the notifiations and the needed data for the notifications
// Notifications: is_read,action_type, action_data, type(new message, new request, new project),type(request, message, project)
// Work on the request tab later