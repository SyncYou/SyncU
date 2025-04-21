// // hooks/useCurrentUser.ts

// import { useUserStore } from "../store/UseUserStore";


// export const useCurrentUser = () => {
//   const { 
//     authUser, 
//     userDetails, 
//     loading, 
//     error,
//     initializeAuth,
//     fetchUserProfile,
//     clearUser,
//     ...actions
//   } = useUserStore();

//   return {
//     user: authUser,
//     profile: userDetails,
//     loading,
//     error,
//     isAuthenticated: !!authUser,
//     isOnboarded: userDetails?.onboardingComplete,
//     initializeAuth,
//     fetchUserProfile,
//     clearUser,
//     ...actions
//   };
// };