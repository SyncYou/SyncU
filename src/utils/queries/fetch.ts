import { supabase } from "../../supabase/client";

export const user = await supabase.auth.getUser();

export async function fetchUserData() {
  try {
    const { data, error } = await supabase
      .from("Users")
      .select()
      .eq("id", user.data.user?.id)
      .single();

    if (error) {
      throw new Error(error.message);
    }
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchUserCreatedProject() {
  try {
    const { data, error } = await supabase
      .from("Projects")
      .select()
      .eq("created_by", "9fe69c1c-5cac-4d49-b470-5f69559b03a3");

    if (error) {
      throw new Error(error.message);
    }
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchUserRequestedProject() {
  try {
    const { data, error } = await supabase.from("Projects").select();

    if (error) {
      throw new Error(error.message);
    }

    const filteredProjects = data?.filter((project) =>
      project.requests?.filter((req) => (req.id = ""))
    );

    return filteredProjects;
  } catch (error) {
    console.error(error);
  }
}
