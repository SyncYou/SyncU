import { useQuery } from "@tanstack/react-query";
// import { fetchUserData } from "../utils/queries/fetch";
import { UserData } from "../utils/types/Types";
import { supabase } from "../supabase/client";


const useFetchUserData = (): {
  data: UserData;
  error: any;
} => {
  const { data, error } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data, error: supabaseError } = await supabase
        .from("Users")
        .select()
        .eq("id", "5d1a1cf2-3077-4e53-874e-aacfb3d85903")
        .single();

      if (supabaseError) {
        throw new Error(supabaseError?.message);
      }
      return data;
    },
  });

  if (error) console.error(error);

  //   console.log(data, error);
  return { data, error };
};

export default useFetchUserData;
