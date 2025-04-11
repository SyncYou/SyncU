import { supabase } from "../../supabase/client";
import { Project } from "../../types/project";
import { getLoggedInUser } from "../AuthRequest";
import { ProjectType } from "../types/Types";

// Helper function to get current user ID
async function getCurrentUserId(): Promise<string | null> {
  const user = await getLoggedInUser();
  return user?.id ?? null;
}

// Fetch user details
export async function fetchUserData(){
  try {
    const userId = await getCurrentUserId();
    if (!userId) return undefined;

    const { data, error } = await supabase
      .from("Users")
      .select()
      .eq("id", userId)
      .single();

    if (error) throw new Error(error.message);
    return data ?? undefined;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return undefined;
  }
}

export const fetchProjects = async ({ 
  pageParam = 0 
}: { 
  pageParam: number 
}): Promise<{ data: Project[]; nextPage: number | null }> => {
  const PAGE_SIZE = 10;

  console.log('Fetching projects with pageParam:', pageParam);
  
  try {
    const { data, error, count } = await supabase
      .from("Projects")
      .select("*", { count: "exact" })
      .order("created_at", { ascending: false })
      // .range(pageParam * PAGE_SIZE, (pageParam + 1) * PAGE_SIZE - 1);

    console.log('Supabase response:', { data, error, count });

    if (error) throw error;

    const totalProjects = count || 0;
    const hasMore = totalProjects > (pageParam + 1) * PAGE_SIZE;
    
    return { 
      data: data || [], 
      nextPage: hasMore ? pageParam + 1 : null 
    };
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error; // Important: rethrow to let react-query handle it
  }
};

export async function fetchCreatedProjects(): Promise<ProjectType[] | undefined> {
  try {
    const userId = await getCurrentUserId();
    if (!userId) return undefined;

    const { data, error } = await supabase
      .from("Projects")
      .select()
      .eq("created_by", userId);

    if (error) throw new Error(error.message);
    return data ?? undefined;
  } catch (error) {
    console.error("Error fetching created projects:", error);
    return undefined;
  }
}

export async function fetchUserRequestedProject(): Promise<ProjectType[] | undefined> {
  try {
    const userId = await getCurrentUserId();
    if (!userId) return undefined;

    const { data: requestsData, error: requestsError } = await supabase
      .from("Requests")
      .select("project_id")
      .eq("user_id", userId);

    if (requestsError) throw new Error(requestsError.message);
    if (!requestsData?.length) return [];

    const projectIds = requestsData.map(req => req.project_id);
    const { data: projectsData, error: projectsError } = await supabase
      .from("Projects")
      .select()
      .in("id", projectIds);

    if (projectsError) throw new Error(projectsError.message);
    return projectsData ?? undefined;
  } catch (error) {
    console.error("Error fetching requested projects:", error);
    return undefined;
  }
}

export async function fetchProjectDetails(projectId: string) {
  try {
    const { data, error } = await supabase
      .from("Projects")
      .select("*")
      .eq("id", projectId)
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Error fetching project details:", error);
    return null;
  }
}

export async function fetchUser(id: string) {
  try {
    const { data, error } = await supabase
      .from("Users")
      .select()
      .eq("id", id)
      .single();

    if (error) throw new Error(error.message);
    return data ?? undefined;
  } catch (error) {
    console.error(`Error fetching user ${id}:`, error);
    return undefined;
  }
}