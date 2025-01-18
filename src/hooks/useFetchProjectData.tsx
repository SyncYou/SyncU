import { supabase } from "../supabase/client";

// Fetch Projects Data
const useFetchProjectData = async () => {
  const { data, error } = await supabase.from("Projects").select("*");
  if (error) {
    console.log(error);
    throw new Error("Cabins could not be loaded ");
  }

  return data;
};

export default useFetchProjectData;
