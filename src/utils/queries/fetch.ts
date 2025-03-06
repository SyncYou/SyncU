import { supabase } from "../../supabase/client";
import { Project } from "../../types/project";
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

export const fetchProjects = async ({ pageParam = 0 }): Promise<{ data: Project[]; nextPage: number | null }> => {
  const PAGE_SIZE = 10; 

  try {
    const { data, error } = await supabase
      .from("Projects")
      .select("*")
      .order("created_at", { ascending: false }) 
      .range(pageParam * PAGE_SIZE, (pageParam + 1) * PAGE_SIZE - 1); 

    if (error) {
      throw new Error(error.message);
    }

    return { 
      data: data || [], 
      nextPage: data.length === PAGE_SIZE ? pageParam + 1 : null 
    };
  } catch (error) {
    console.error("Error fetching projects:", error);
    return { data: [], nextPage: null };
  }
};


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

