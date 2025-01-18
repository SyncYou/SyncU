import { supabase } from "../supabase/client";

export const useFetchProjectCabins = async () => {
  const { data, error } = await supabase.from("Projects").select("*");
  if (error) {
    throw new Error("Cabins could not be loaded ");
  }

  console.log("Fetched Projects:", data);
  return data;
};
