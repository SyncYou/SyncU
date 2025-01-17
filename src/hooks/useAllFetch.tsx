import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { UserData } from "../utils/types/Types";
import { supabase } from "../supabase/client";
import { fetchProjects, user } from "../utils/queries/fetch";

const useAllFetch = (): {
  data: UserData;
  error: any;
  projects: UseQueryResult<any[] | undefined, Error>;
} => {
  const { data, error } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data, error: supabaseError } = await supabase
        .from("Users")
        .select()
        .eq("id", user.data.user?.id)
        .single();

      if (supabaseError) {
        throw new Error(supabaseError?.message);
      }
      return data;
    },
  });

  const projects = useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });

  return { data, error, projects };
};

export default useAllFetch;
