// hooks/useCurrentUser.ts

import { useUserStore } from "../store/UseUserStore";


export const useCurrentUser = () => {
  const { 
    authUser, 
    userDetails, 
    loading, 
    error,
    initializeAuth,
    fetchUserProfile,
    clearUser,
    ...actions
  } = useUserStore();

  return {
    // State
    user: authUser,
    profile: userDetails,
    loading,
    error,
    
    // Derived state
    isAuthenticated: !!authUser,
    isOnboarded: userDetails?.onboardingComplete || false,
    
    // Actions
    initializeAuth,
    fetchUserProfile,
    clearUser,
    ...actions
  };
};