import { RealtimePostgresUpdatePayload } from "@supabase/supabase-js";
import { supabase } from "../supabase/client";
import { getLoggedInUser, getUserById } from "./AuthRequest";

// const getUserIdFromLocalStorage = () => {
//   const user = localStorage.getItem("newUser");
//   let userId: string | undefined;

//   if (user) {
//     try {
//       const parsedUser = JSON.parse(user);
//       if (parsedUser && parsedUser.id) {
//         userId = parsedUser.id;
//         console.log("User ID:", userId);
//       }
//     } catch (error) {
//       console.error("Failed to parse user data:", error);
//     }
//   }

//   return userId;
// };

export const sendUserDetails = async (userData: any) => {
  const user = await getLoggedInUser();
  // const userId = getUserIdFromLocalStorage();
  const { data, error } = await supabase
    .from("Users")
    .upsert([{ id: user?.id, ...userData }], { onConflict: "id" });

  if (error) {
    throw new Error(error.message);
  }

  console.log(data);
  return { data, error };
};

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

export const requestTojoinProject = async (projectId: any) => {
  // get the project_id to send request to the database
  // update the request column in the project with the loggedInUser(details)
  // Notify the project owner about the request
  // Listen for changes realtime on the table, when the request column changes

  const user = await getLoggedInUser();

  const { data, error: fetchError } = await supabase
    .from("Projects")
    .select("requests")
    .eq("id", projectId)
    .single();

  if (fetchError) {
    console.error("Error fetching project data:", fetchError);
    return;
  }

  let updatedRequests = data?.requests || [];

  updatedRequests.push({
    userId: user?.id,
    status: "pending",
  });

  const { error } = await supabase
    .from("Projects")
    .update({ requests: updatedRequests })
    .eq("id", projectId);

  if (error) {
    console.error("Error updating project data:", error);
    return false;
  } else {
    console.log("Successfully updated the project with the new request");
    return true;
  }
};

const handleUpdates = (
  payload: RealtimePostgresUpdatePayload<{
    [key: string]: any;
  }>
) => {
  // replace with creatorId later
  sendNotification(payload, payload.new?.created_by);
  console.log("Change received!", payload);
};

const notificationChannel = supabase
  .channel("notifications")
  .on(
    "postgres_changes",
    { event: "UPDATE", schema: "public", table: "Projects" },
    handleUpdates
  )
  .subscribe();

// supabase.removeChannel(notificationChannel);

export const sendNotification = async (
  payload: RealtimePostgresUpdatePayload<{
    [key: string]: any;
  }>,
  id: string
) => {
  console.log(payload);
  // replace the id with the id in the payload
  const user = await getUserById(id);
  // Send notification to the project owner with the user name

  const { data, error: fetchError } = await supabase
    .from("Users")
    .select("notifications")
    .eq("id", id)
    .single();

  if (fetchError) {
    console.error("Error fetching project data:", fetchError);
    return;
  }

  let updateNotifications = data?.notifications || [];

  updateNotifications.push({
    user: user,
    status: "pending",
  });

  const { error } = await supabase
    .from("Users")
    .update({ notifications: updateNotifications })
    .eq("id", id);

  if (error) {
    console.error("Error updating project data:", error);
  } else {
    console.log("Successfully updated the project with the new request");
  }
};
