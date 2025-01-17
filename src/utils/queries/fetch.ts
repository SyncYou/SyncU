import { supabase } from "../../supabase/client";
import { ProjectType } from "../types/Types";

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

export const fetchProject = async (
  projectId: string
): Promise<ProjectType | undefined> => {
  try {
    const { data, error } = await supabase
      .from("Projects")
      .select()
      .eq("id", projectId)
      .single();

    return data;
  } catch (error) {}
};
