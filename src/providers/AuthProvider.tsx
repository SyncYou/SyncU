// components/AuthProvider.tsx
import { ReactNode, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { supabase } from '../supabase/client';
import { useCurrentUser } from '../hooks/useCurrentUser';


export const AuthProvider = ({ children }: {children: ReactNode}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { 
    initializeAuth,
    clearUser,
    user: authUser,
    profile: userDetails,
    loading 
  } = useCurrentUser();

  // Handle auth state changes
  useEffect(() => {
    initializeAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        if (session?.user) {
          await initializeAuth();
        } else {
          clearUser();
        }
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (loading) return;

    const currentPath = location.pathname;
    const isAuthRoute = currentPath.startsWith('/auth');
    const isOnboardingRoute = currentPath.startsWith('/onboarding');

    if (!authUser) {
      if (!isAuthRoute) navigate('/auth/signup', { replace: true });
    } else if (!userDetails?.onboardingComplete) {
      if (!isOnboardingRoute) navigate('/onboarding/tell-us-about-yourself', { replace: true });
    } else if (userDetails?.onboardingComplete && isAuthRoute) {
      navigate('/', { replace: true });
    }
  }, [authUser, loading, userDetails?.onboardingComplete, navigate, location]);

  return <>{children}</>;
};