import { supabase } from "../../supabase/client";
import { ProjectType } from "../types/Types";

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

export async function fetchProjects(): Promise<ProjectType[] | undefined> {
  try {
    const { data, error } = await supabase.from("Projects").select();

    if (error) {
      throw new Error(error.message);
    }
    return data;
  } catch (error) {
    console.error(error);
  }
}


export async function fetchCreatedProjects(): Promise<
  ProjectType[] | undefined
> {
  try {
    const { data, error } = await supabase
      .from("Projects")
      .select()
      .eq("created_by", user.data.user?.id);

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

