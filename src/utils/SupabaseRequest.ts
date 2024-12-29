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

export const sendUserDetails = async (userData: any) => {
  const { data, error } = await supabase
    .from("Users")
    .upsert([{ id: userId, ...userData }], { onConflict: "id" });

  if (error) {
    throw new Error(error.message);
  }

  console.log(data);
  return data;
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

export async function uploadAvatar(
  file: File,
) {

  const fileExt = file.name.split(".").pop();
  const fileName = `${Math.random()}.${fileExt}`;
  const filePath = `avatar/${fileName}`;

  const { error: uploadError } = await supabase.storage
    .from("avatar")
    .upload(filePath, file);

    if (uploadError) {
      throw uploadError;
    }

  const {
    data: { publicUrl },
  } = supabase.storage.from("avatar").getPublicUrl(filePath);

  return publicUrl;
}