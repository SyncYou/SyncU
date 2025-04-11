import { ReactNode, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { supabase } from "../supabase/client";
import { useCurrentUser } from "../hooks/useCurrentUser";

const PROTECTED_ROUTES = ['/project', '/alert', '/profile'];
const AUTH_ROUTES = ['/auth/signup', '/auth/signin', '/auth/verify-email'];

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    initializeAuth,
    clearUser,
    user: authUser,
    loading,
    profile
  } = useCurrentUser();
  
  const initializedRef = useRef(false);

  useEffect(() => {
    if (initializedRef.current) return;
    
    const initAuth = async () => {
      initializedRef.current = true;
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        await initializeAuth();
      } else {
        clearUser();
      }
    };

    initAuth();

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
    if (loading || !initializedRef.current) return;

    const currentPath = location.pathname;
    const isProtectedRoute = PROTECTED_ROUTES.some(route => 
      currentPath.startsWith(route)
    );
    const isAuthRoute = AUTH_ROUTES.includes(currentPath);

    if (!authUser) {
      if (isProtectedRoute) {
        navigate('/auth/signup', { 
          replace: true,
          state: { from: currentPath }
        });
      }
    } else {
      if (isAuthRoute) {
        navigate(profile?.onboardingComplete ? '/' : '/auth/set-up-your-profile', { 
          replace: true 
        });
      }
      
    }
  }, [authUser, loading, navigate, location, profile]);

  return <>{children}</>;
};