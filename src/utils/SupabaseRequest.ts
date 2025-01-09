import { supabase } from "../supabase/client";
import {getLoggedInUser} from './AuthRequest'

// const getUserIdFromLocalStorage = () => {
//   const user = localStorage.getItem("newUser");
//   let userId: string | undefined;

//   if (user) {
//     try {
//       const parsedUser = JSON.parse(user);
//       if (parsedUser && parsedUser.id) {
//         userId = parsedUser.id;
//         console.log("User ID:", userId);
//       }
//     } catch (error) {
//       console.error("Failed to parse user data:", error);
//     }
//   }

//   return userId;
// };



export const sendUserDetails = async (userData: any) => {
  const user = await getLoggedInUser()
  // const userId = getUserIdFromLocalStorage();
  const { data, error } = await supabase
    .from("Users")
    .upsert([{ id: user?.id, ...userData }], { onConflict: "id" });

  if (error) {
    throw new Error(error.message);
  }

  console.log(data);
  return {data, error};
};



export async function uploadAvatar(file: File) {
  const fileExt = file.name.split(".").pop();
  const fileName = `${Math.random()}.${fileExt}`;
  const filePath = `avatar/${fileName}`;

  try {
    const { error: uploadError } = await supabase.storage
      .from("avatar") 
      .upload(filePath, file);

    if (uploadError) {
      throw uploadError;
    }

    const {
      data: { publicUrl },
    } = supabase.storage.from("avatar").getPublicUrl(filePath);

    console.log("Uploaded image URL:", publicUrl); 

    return publicUrl;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw new Error("Failed to upload avatar.");
  }
}
