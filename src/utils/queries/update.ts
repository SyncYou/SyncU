import supabase from "../../config/Supabase";
import { Links } from "../types/Types";

export const updateUsername = async (username: string) => {
  try {
    const { data, error } = await supabase
      .from("Users")
      .update({ username })
      .eq("id", "5d1a1cf2-3077-4e53-874e-aacfb3d85903");

    console.log(data, error);
  } catch (error) {
    throw error;
  }
};

export const updateStacks = async (stacks: string[]) => {
  try {
    await supabase
      .from("Users")
      .update({ stacks })
      .eq("id", "5d1a1cf2-3077-4e53-874e-aacfb3d85903");
  } catch (error) {
    throw error;
  }
};

export const updateLinks = async (links: Links[]) => {
  try {
    await supabase
      .from("Users")
      .update({ links })
      .eq("id", "5d1a1cf2-3077-4e53-874e-aacfb3d85903");
  } catch (error) {
    throw error;
  }
};
