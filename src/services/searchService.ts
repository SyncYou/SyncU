import { supabase } from "../supabase/client";
import { Project } from "../types/project";


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

    // Apply search filter if query exists
    if (query.trim()) {
      queryBuilder = queryBuilder.or(
        `title.ilike.%${query}%,description.ilike.%${query}%`
      );
    }

    // Apply pagination - REMOVE THE COMMENT HERE
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