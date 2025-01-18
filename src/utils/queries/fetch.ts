import { supabase } from "../../supabase/client";

export const user = await supabase.auth.getUser();

// Fetch user details
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

// Fetch projects created by the user
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

// Fetch projects the user requested to join
export async function fetchUserRequestedProject() {
  try {
    const { data, error } = await supabase.from("Projects").select();

    if (error) {
      throw new Error(error.message);
    }

    // const filteredProjects = data?.filter((project) =>
    //   project.requests?.filter((req) => (req.id = ""))
    // );

    return data;
  } catch (error) {
    console.error(error);
  }
}
