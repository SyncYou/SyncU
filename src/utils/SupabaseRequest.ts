import { supabase } from "../supabase/client";
import { getLoggedInUser } from "./AuthRequest";
import { fetchUserData } from "./queries/fetch";
import { Request } from "./types/Types";

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
  return { data, error };
};

// Upload images to supabase bucket
export async function uploadAvatar(file: File) {
  const fileExt = file.name.split(".").pop();
  const fileName = `${Math.random()}.${fileExt}`;
  const filePath = `avatar/${fileName}`;

  try {
    const { error: uploadError } = await supabase.storage
      .from("avatar")
      .upload(filePath, file);

    if (uploadError) {
      throw uploadError;
    }

    const {
      data: { publicUrl },
    } = supabase.storage.from("avatar").getPublicUrl(filePath);

    console.log("Uploaded image URL:", publicUrl);

    return publicUrl;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw new Error("Failed to upload avatar.");
  }
}

// Send request to join a project
export const requestToJoinProject = async (
  projectId: string,
  creatorId: string
) => {
  // Get the current user data
  const user = await fetchUserData();
  if (!user) {
    console.error("User is not logged in");
    return;
  }

  //  Fetch the previous data from the database
  const { data: requests, error: fetchError } = await supabase
    .from("Projects")
    .select("requests")
    .eq("id", projectId)
    .single();

  if (fetchError || !requests) {
    console.error("Error fetching project:", fetchError);
    return;
  }

  // Prepare the new request object
  const newRequest = {
    userId: user.id,
    status: "pending",
  };

  const updatedRequests = [...(requests.requests || []), newRequest];

  // Update the project with the new request
  const { error: updateError } = await supabase
    .from("Projects")
    .update({ requests: updatedRequests })
    .eq("id", projectId);

  if (updateError) {
    console.error("Error updating project with the new request:", updateError);
    return false;
  }

  // Prepare the notification for the project owner (creator)
  const notificationMessage = `User ${user.firstName} has requested to join your project.`;
  const notification = {
    from: user.id,
    to: creatorId,
    status: "pending",
    message: notificationMessage,
  };

  // Insert the notification into the 'Notifications' table
  const { data, error: insertError } = await supabase
    .from("Notifications")
    .insert(notification);

  if (insertError) {
    // Update the ui with the error toast
    console.error("Error creating notification:", insertError);
    return;
  }

  // Update the Ui with the success toast
  console.log("Request sent successfully and notification created:", data);
  return true;
};

// Send request to join a project
export const withdrawToJoinProject = async (
  projectId: string,
  creatorId: string
) => {
  // Get the current user data
  const user = await fetchUserData();
  if (!user) {
    console.error("User is not logged in");
    return;
  }

  //  Fetch the previous data from the database
  const { data: requests, error: fetchError } = await supabase
    .from("Projects")
    .select("requests")
    .eq("id", projectId)
    .single();

  if (fetchError || !requests) {
    console.error("Error fetching project:", fetchError);
    return;
  }

  const updatedRequests = requests.requests.filter(
    (req: Request) => req.userId != user.id
  );

  // Update the project with the new request
  const { error: updateError } = await supabase
    .from("Projects")
    .update({ requests: updatedRequests })
    .eq("id", projectId);

  if (updateError) {
    console.error("Error updating project with the new request:", updateError);
    return false;
  }

  // Prepare the notification for the project owner (creator)
  const notificationMessage = `User ${user.firstName} has withdrawen the request to join your project.`;
  const notification = {
    from: user.id,
    to: creatorId,
    status: "pending",
    message: notificationMessage,
  };

  // Insert the notification into the 'Notifications' table
  const { data, error: insertError } = await supabase
    .from("Notifications")
    .insert(notification);

  if (insertError) {
    // Update the ui with the error toast
    console.error("Error creating notification:", insertError);
    return;
  }

  // Update the Ui with the success toast
  console.log("Request sent successfully and notification created:", data);
  return true;
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
export const sendNotification = async (
  from: string,
  to: string,
  message: string
) => {
  const notification = {
    from: from,
    to: to,
    status: "pending",
    message: message,
  };

  // Insert the notification into the 'notifications' table
  const { data, error: insertError } = await supabase
    .from("Notifications")
    .insert(notification);

  if (insertError) {
    console.error("Error sending notification:", insertError);
    return;
  }

  console.log("Notification sent successfully:", data);
  return data;
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
