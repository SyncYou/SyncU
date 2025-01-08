import { supabase } from "../supabase/client";

export async function ProjectCabins() {
  const { data, error } = await supabase.from("Projects").select("*");
  if (error) {
    console.log(error);
    throw new Error("Cabins could not be loaded ");
  }

  return data;
}
