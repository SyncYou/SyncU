import { supabase } from "../../supabase/client";
import { Links, BiodataFormData } from "../types/Types";


// Update the username
export const updateUsername = async (username: string) => {
  const user = await supabase.auth.getUser();
  try {
    const { data, error } = await supabase
      .from("Users")
      .update({ username })
      .eq("id", user.data.user?.id);

    console.log(data, error);
  } catch (error) {
    throw error;
  }
};

// Update the stack
export const updateStacks = async (stacks: string[]) => {
  const user = await supabase.auth.getUser();
  try {
    await supabase
      .from("Users")
      .update({ stacks })
      .eq("id", user.data.user?.id);
  } catch (error) {
    throw error;
  }
};

// Update the portfolio links
export const updateLinks = async (links: Links[]) => {
  const user = await supabase.auth.getUser();
  try {
    await supabase.from("Users").update({ links }).eq("id", user.data.user?.id);
  } catch (error) {
    throw error;
  }
};

// Update the biodata
export const updateBiodata = async ({
  firstName,
  lastName,
  aboutMe,
}: BiodataFormData) => {
  const user = await supabase.auth.getUser();
  try {
    await supabase
      .from("Users")
      .update({ firstName, lastName, description: aboutMe })
      .eq("id", user.data.user?.id);
  } catch (error) {
    throw error;
  }
};
