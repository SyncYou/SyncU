import { supabase } from "../../supabase/client";
import { Project } from "../../types/project";
import { getLoggedInUser } from "../AuthRequest";
import { ProjectType } from "../types/Types";

async function getCurrentUserId(): Promise<string | null> {
  const user = await getLoggedInUser();
  return user?.id ?? null;
}


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
  pageParam = 0,
  query = ''
}: { 
  pageParam: number,
  query?: string
}): Promise<{ data: Project[]; nextPage: number | null }> => {
  const PAGE_SIZE = 10;

  try {
    let queryBuilder = supabase
      .from("Projects")
      .select("*", { count: "exact" })
      .order("created_at", { ascending: false });

    
    if (query.trim()) {
      queryBuilder = queryBuilder.or(
        `title.ilike.%${query}%,description.ilike.%${query}%`
      );
    }

    
    queryBuilder = queryBuilder.range(
      pageParam * PAGE_SIZE,
      (pageParam + 1) * PAGE_SIZE - 1
    );

    const { data, error, count } = await queryBuilder;

    if (error) throw error;

    const totalProjects = count || 0;
    const hasMore = totalProjects > (pageParam + 1) * PAGE_SIZE;
    
    return { 
      data: data || [], 
      nextPage: hasMore ? pageParam + 1 : null 
    };
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
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

    const { data: invitations, error: invitationsError } = await supabase
      .from("Project_Invitations")
      .select("project_id")
      .eq("sender_id", userId)
      .eq("type", "request");

    if (invitationsError) throw new Error(invitationsError.message);
    if (!invitations?.length) return [];

    const projectIds = [...new Set(invitations.map(inv => inv.project_id))];


    const { data: projects, error: projectsError } = await supabase
      .from("Projects")
      .select("*")
      .in("id", projectIds);

    if (projectsError) throw new Error(projectsError.message);
    return projects ?? [];
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