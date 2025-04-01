import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { NotificationType, UserData } from "../utils/types/Types";
import { supabase } from "../supabase/client";
import { errorToast } from "oasis-toast";
import { getLoggedInUser } from "../utils/AuthRequest";

interface UseFetchQueriesResult {
  userData: UseQueryResult<UserData | undefined, Error>;
  notifications: UseQueryResult<NotificationType[] | undefined, Error>;
}

const useFetchQueries = (): UseFetchQueriesResult => {
  const user = getLoggedInUser(); // This remains a Promise

  const userData = useQuery<UserData | undefined, Error>({
    queryKey: ["users"],
    queryFn: async (): Promise<UserData | undefined> => {
      const currentUser = await getLoggedInUser();
      if (!currentUser?.id) {
        throw new Error("User ID is missing.");
      }

      const { data, error } = await supabase
        .from("Users")
        .select()
        .eq("id", currentUser.id)
        .single();

      if (error) {
        errorToast("An error occurred", "Please try again.");
        throw new Error(error.message);
      }

      return data ?? undefined;
    },
    enabled: !!user,
  });

  const notifications = useQuery<NotificationType[] | undefined, Error>({
    queryKey: ["notifications"],
    queryFn: async (): Promise<NotificationType[] | undefined> => {
      const currentUser = await getLoggedInUser();
      if (!currentUser?.id) return [];

      const { data, error } = await supabase
        .from("Notifications")
        .select()
        .eq("to", currentUser.id);

      if (error) {
        errorToast("An error occurred", "Please try again.");
        throw new Error(error.message);
      }

      return data ?? [];
    },
    enabled: !!user,
  });

  return { userData, notifications };
};

export default useFetchQueries;