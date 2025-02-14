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
      const { data, error: supabaseError } = await supabase
        .from("Users")
        .select()
        .eq("id", user.data.user?.id)
        .single();

      if (supabaseError) {
        errorToast('An error occurred', 'Please try again.');
        throw new Error(supabaseError.message);
      }

      return data;
    },
  });

  const notifications = useQuery({
    queryKey: ["notification"],
    queryFn: async (): Promise<NotificationType[] | undefined> => {
      const { data, error: supabaseError } = await supabase
        .from("Notifications")
        .select()
        .eq("to", user.data.user?.id);

      if (supabaseError) {
        errorToast('An error occurred', 'Please try again.');
        throw new Error(supabaseError.message);
      }

      return data;
    },
  });
  const projects = useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects, // Use fetchProjects function
  });

  return { userData, notifications, projects };
};

export default useFetchQueries;
