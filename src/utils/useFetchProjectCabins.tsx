import { supabase } from "../supabase/client";
import { CardsData } from "./types/Types";

export const useFetchProjectCabins = async () => {
  const { data, error } = await supabase.from("Projects").select("*");
  if (error) {
    console.log(error);
    throw new Error("Cabins could not be loaded ");
  }

  return data;
};
