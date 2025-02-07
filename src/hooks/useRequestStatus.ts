import { errorToast } from "oasis-toast";
import { supabase } from "../supabase/client";
import { Requests } from "../types/project";

const useRequestStatus = () => {
  const acceptRequest = async (
    projectId: string,
    requesterId: string | undefined
  ) => {
    //  Fetch the project from the database
    const { data: project, error: fetchError } = await supabase
      .from("Projects")
      .select("*")
      .eq("id", projectId)
      .single();

    if (fetchError || !project) {
      console.error("Error fetching project:", fetchError);
      return;
    }

    const newRequest = project.requests?.filter(
      (req: Requests) => req.userId != requesterId
    );

    // Prepare the new request object
    const updatedRequest = [
      ...newRequest,
      {
        userId: requesterId,
        status: "accepted",
      },
    ];

    // Update the participant with the new user
    const { error: updateRequestError } = await supabase
      .from("Projects")
      .update({ requests: updatedRequest })
      .eq("id", projectId);

    if (updateRequestError) {
      errorToast('Error updating request with the new request', 'Please try again.');
      console.error(
        "Error updating request with the new request:",
        updateRequestError
      );
      return false;
    }

    const updatedParticipants = [...project.participants, requesterId];

    // Update the participant with the new user
    const { error: updateError } = await supabase
      .from("Projects")
      .update({ participants: updatedParticipants })
      .eq("id", projectId);

    if (updateError) {
      errorToast('Error updating participants with the new user', 'Please try again.');
      console.error(
        "Error updating participants with the new user:",
        updateError
      );
      return false;
    }

    // Prepare the notification for the project owner (creator)
    const notificationMessage = `Your request to join project ${project.title} has been accepted`;
    const notification = {
      from: project.created_by,
      to: requesterId,
      status: "accepted",
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

  const rejectRequest = async (
    projectId: string,
    requesterId: string | undefined
  ) => {
    //  Fetch the project from the database
    const { data: project, error: fetchError } = await supabase
      .from("Projects")
      .select("*")
      .eq("id", projectId)
      .single();

    if (fetchError || !project) {
      console.error("Error fetching project:", fetchError);
      return;
    }

    const newRequest = project.requests?.filter(
      (req: Requests) => req.userId != requesterId
    );

    // Prepare the new request object
    const updatedRequest = [
      ...newRequest,
      {
        userId: requesterId,
        status: "rejected",
      },
    ];

    // Update the requets column
    const { error: updateRequestError } = await supabase
      .from("Projects")
      .update({ requests: updatedRequest })
      .eq("id", projectId);

    if (updateRequestError) {
      console.error(
        "Error updating request with the new request:",
        updateRequestError
      );
      return false;
    }

    // Prepare the notification for the project owner (creator)
    const notificationMessage = `Your request to join project ${project.title} has been rejected`;
    const notification = {
      from: project.created_by,
      to: requesterId,
      status: "rejected",
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

  return { acceptRequest, rejectRequest };
};

export default useRequestStatus;
