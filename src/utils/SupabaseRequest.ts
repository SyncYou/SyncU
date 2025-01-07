import { supabase } from "../supabase/client";

const getUserIdFromLocalStorage = () => {
  const user = localStorage.getItem("newUser");
  let userId: string | undefined;

  if (user) {
    try {
      const parsedUser = JSON.parse(user);
      if (parsedUser && parsedUser.id) {
        userId = parsedUser.id;
        console.log("User ID:", userId);
      }
    } catch (error) {
      console.error("Failed to parse user data:", error);
    }
  }

  return userId;
};



export const sendUserDetails = async (userData: any) => {
  const userId = getUserIdFromLocalStorage();
  const { data, error } = await supabase
    .from("Users")
    .upsert([{ id: userId, ...userData }], { onConflict: "id" });

  if (error) {
    throw new Error(error.message);
  }

  console.log(data);
  return {data, error};
};

// export const updateUserDetails = async (data: any) => {
//   const { data: response, error } = await supabase
//     .from("Users")
//     .upsert(data)
//     .select();

//   if (error) {
//     throw new Error(error.message);
//   }
//   console.log(response);
//   return response;
// };

export async function uploadAvatar(file: File) {
  // Get the file extension
  const fileExt = file.name.split(".").pop();
  // Generate a random file name
  const fileName = `${Math.random()}.${fileExt}`;
  // Define the file path for uploading
  const filePath = `avatar/${fileName}`;

  try {
    // Upload the file to Supabase storage
    const { error: uploadError } = await supabase.storage
      .from("avatar") // Ensure this bucket exists in your Supabase project
      .upload(filePath, file);

    // If there was an error during upload, throw it
    if (uploadError) {
      throw uploadError;
    }

    // Retrieve the public URL of the uploaded file
    const {
      data: { publicUrl },
    } = supabase.storage.from("avatar").getPublicUrl(filePath);

    console.log("Uploaded image URL:", publicUrl); // Log the URL for debugging

    // Return the public URL of the uploaded image
    return publicUrl;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw new Error("Failed to upload avatar.");
  }
}
