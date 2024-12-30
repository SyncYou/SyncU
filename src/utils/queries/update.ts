import supabase from "../../config/Supabase";

export const updateUsername = async (newUsername: string) => {
  try {
    await supabase.from("User").update({ username: newUsername }).eq("id", "");
  } catch (error) {
    throw error;
  }
};

export const updateStacks = async (newStacks: string[]) => {
  try {
    await supabase.from("User").update({ stacks: newStacks }).eq("id", "");
  } catch (error) {
    throw error;
  }
};

export const updateLinks = async (newLinks: string[]) => {
  try {
    await supabase.from("User").update({ links: newLinks }).eq("id", "");
  } catch (error) {
    throw error;
  }
};
