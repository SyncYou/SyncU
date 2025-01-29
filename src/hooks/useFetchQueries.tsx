import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { NotificationType, UserData } from "../utils/types/Types";
import { supabase } from "../supabase/client";
import { user } from "../utils/queries/fetch";

// Fetch User Data
const useFetchQueries = (): {
  userData: UseQueryResult<UserData | undefined, Error>;
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

  return { userData, notifications };
};

export default useFetchQueries;
