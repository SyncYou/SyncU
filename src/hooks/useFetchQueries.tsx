import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { NotificationType, UserData } from "../utils/types/Types";
import { supabase } from "../supabase/client";
import { fetchProjects, user } from "../utils/queries/fetch";
import { Project } from "../types/project";
import { errorToast } from "oasis-toast";

// Fetch User Data
const useFetchQueries = (): {
  userData: UseQueryResult<UserData | undefined, Error>;
  notifications: UseQueryResult<NotificationType[] | undefined, Error>;
  projects: UseQueryResult<Project[] | undefined, Error>;
} => {
  const userData = useQuery({
    queryKey: ["users", user.data.user?.id],
    queryFn: async (): Promise<UserData | undefined> => {
      if (!user.data.user?.id) {
        throw new Error("User ID is missing.");
      }

      const { data, error: supabaseError } = await supabase
        .from("Users")
        .select()
        .eq("id", user.data.user?.id)
        .single();

      if (supabaseError) {
        errorToast("An error occurred", "Please try again.");
        throw new Error(supabaseError.message);
      }

      if (!data) {
        // Handle the case where no user data was found
        errorToast("No user found", "Please check your user ID.");
        throw new Error("No user found.");
      }

      return data;
    },
    enabled: user.data.user?.id !== undefined,
  });

  const notifications = useQuery({
    queryKey: ["notifications", user.data.user?.id],
    queryFn: async (): Promise<NotificationType[] | undefined> => {
      if (!user.data.user?.id) return []; 

      const { data, error: supabaseError } = await supabase
        .from("Notifications")
        .select()
        .eq("to", user.data.user?.id);

      if (supabaseError) {
        errorToast("An error occurred", "Please try again.");
        throw new Error(supabaseError.message);
      }

      return data;
    },
    enabled: user.data.user?.id !== undefined,
  });

  const projects = useQuery({
    queryKey: ["projects", user.data.user?.id],
    queryFn: fetchProjects, 
    enabled: user.data.user?.id !== undefined, 
  });

  return { userData, notifications, projects };
};

export default useFetchQueries;
