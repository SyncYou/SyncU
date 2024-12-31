import supabase from "../../config/Supabase";

export async function fetchUserData(): Promise<T> {
  try {
    const { data, error } = await supabase
      .from("Users")
      .select()
      .eq("id", "5d1a1cf2-3077-4e53-874e-aacfb3d85903")
      .single();

    if (error) {
      throw new Error(error.message);
    }
    return data;
  } catch (error) {
    console.error(error);
  }
}
