import { supabase } from "../../supabase/client";
import { Links, BiodataFormData } from "../types/Types";

const user = await supabase.auth.getUser();

export const updateUsername = async (username: string) => {
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

export const updateStacks = async (stacks: string[]) => {
  try {
    await supabase
      .from("Users")
      .update({ stacks })
      .eq("id", user.data.user?.id);
  } catch (error) {
    throw error;
  }
};

export const updateLinks = async (links: Links[]) => {
  try {
    await supabase.from("Users").update({ links }).eq("id", user.data.user?.id);
  } catch (error) {
    throw error;
  }
};

export const updateBiodata = async ({
  firstName,
  lastName,
  aboutMe,
}: BiodataFormData) => {
  try {
    await supabase
      .from("Users")
      .update({ firstName, lastName, description: aboutMe })
      .eq("id", user.data.user?.id);
  } catch (error) {
    throw error;
  }
};
