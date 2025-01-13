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

export const requestTojoinProject = async (projectId: any) => {
  // get the project_id to send request to the database
  // update the request column in the project with the loggedInUser(details)
  // Notify the project owner about the request
  // Listen for changes realtime on the table, when the request column changes

  const user = await getLoggedInUser()

  const { error } = await supabase
  .from('Projects')
  .update({ Requests: {
    userId: user?.id,
    status: 'pending'
  } })
 .eq('id', projectId); 

  console.log(error)
  

}



// export const sendNotifications = async (request: any) => {
//   const projectsChannel = supabase
//   .channel('projects_channel')
//   .on('postgres_changes', 
//       { event: 'UPDATE', schema: 'public', table: 'projects', column: 'request' }, 
//       payload => {
//         const project = payload.new;
        
//         // Check if there’s a new request
//         const newRequest = project.request.find(r => r.status === 'pending');
        
//         if (newRequest) {
//           // Notify project owner about the new join request
//           sentEmailNotifications(project.owner_id, newRequest.user_id);
//         }
//       })
//   .subscribe();
// }

// export const sentEmailNotifications = async (ownerId: any, userId: any) => {
//   const { data: ownerData, error: ownerError } = await supabase
//   .from('users')
//   .select('email')
//   .eq('id', ownerId)
//   .single();

// if (ownerData) {
//   const email = ownerData.email;

// }
// }

// export const updateRequestStatus = async () => {
//   const { data, error } = await supabase
//   .from('projects')
//   .update({
//     request: supabase.raw(
//       'array_replace(request, ?, ?)',
//       [{ user_id: 'user-uuid', status: 'pending' }],
//       { user_id: 'user-uuid', status: 'accepted' }
//     )
//   })
//   .eq('id', projectId);
// }