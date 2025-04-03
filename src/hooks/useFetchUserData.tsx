import { useQuery } from "@tanstack/react-query";
import { UserData } from "../utils/types/Types";
import { supabase } from "../supabase/client";
import { errorToast } from "oasis-toast";
import { getLoggedInUser } from "../utils/AuthRequest";

const useFetchUserData = () => {
  const { data, error } = useQuery({
    queryKey: ["user-data"],
    queryFn: async () => {
      const authUser = await getLoggedInUser();
      
      if (!authUser) {
        throw new Error("No authenticated user");
      }

      const { data: userData, error: supabaseError } = await supabase
        .from("Users")
        .select("*")
        .eq("id", authUser.id)
        .single();

      if (supabaseError) {
        errorToast('Error', 'Failed to fetch user data');
        throw new Error(supabaseError.message);
      }

      return userData as UserData;
    },
  });

  return { 
    userData: data, 
    error,
    isLoading: !data && !error 
  };
};

export default useFetchUserData;