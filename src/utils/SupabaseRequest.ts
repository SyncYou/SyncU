import { supabase } from "../supabase/client";

export const sendUserDetails = async (data: any) => {
  const { data: response, error } = await supabase
    .from("Users")
    .insert(data);

  if (error) {
    throw new Error(error.message);
  }
  console.log(response)
  return response;
};
