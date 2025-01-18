import { useQuery } from "@tanstack/react-query";
import { UserData } from "../utils/types/Types";
import { supabase } from "../supabase/client";
import { user } from "../utils/queries/fetch";

// Fetch User Data
const useFetchUserData = (): { data: UserData | null; error: any } => {
  const { data, error } = useQuery({
    queryKey: ["users", user.data.user?.id],
    queryFn: async () => {
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

  return { data, error };
};

export default useFetchUserData;
