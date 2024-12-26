import { supabase } from "../supabase/client";

const user = localStorage.getItem("newUser");
let userId: string | undefined;

if (user) {
  try {
    const parsedUser = JSON.parse(user);
    if (parsedUser && parsedUser.id) {
      userId = parsedUser.id as string;
    }
  } catch (error) {
    console.error("Failed to parse user data:", error);
  }
}

// console.log(userId);

export const sendUserDetails = async (data: any) => {
  const { data: response, error } = await supabase
    .from("Users")
    .upsert({
      id: userId,
      ...data,
    })
    .eq("id", userId);

  if (error) {
    throw new Error(error.message);
  }
  console.log(response);
  return response;
};

export const updateUserDetails = async (data: any) => {
  const { data: response, error } = await supabase
    .from("Users")
    .upsert(data)
    .select();

  if (error) {
    throw new Error(error.message);
  }
  console.log(response);
  return response;
};
