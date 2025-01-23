import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { NotificationType, ProjectType, UserData } from "../utils/types/Types";
import { supabase } from "../supabase/client";
import { fetchProjects, user } from "../utils/queries/fetch";

// Fetch User Data
const useFetchQueries = (): {
  userData: UseQueryResult<UserData | undefined, Error>;
  projects: UseQueryResult<ProjectType[] | undefined, Error>;
  notifications: UseQueryResult<NotificationType[] | undefined, Error>;
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
        throw new Error(supabaseError.message);
      }

      return data;
    },
  });

  const projects = useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });

  const notifications = useQuery({
    queryKey: ["notification"],
    queryFn: async (): Promise<NotificationType[] | undefined> => {
      const { data, error: supabaseError } = await supabase
        .from("Notifications")
        .select()
        .eq("to", user.data.user?.id);

      if (supabaseError) {
        throw new Error(supabaseError.message);
      }

      return data;
    },
  });

  return { userData, projects, notifications };
};

export default useFetchQueries;
