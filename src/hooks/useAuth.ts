// hooks/useAuth.ts
import { useAuthStore } from '../store/useAuthStore';
import { useUserStore } from '../store/UseUserStore';

export const useAuth = () => {
  const user = useAuthStore((state) => state.user);
  const loading = useAuthStore((state) => state.loading);
  const userDetails = useUserStore((state) => state.userDetails);

  return {
    user,
    loading,
    isAuthenticated: !!user,
    onboardingComplete: userDetails.onboardingComplete,
    userProfile: userDetails,
    isOnboarded: userDetails.onboardingComplete === true,
  };
};