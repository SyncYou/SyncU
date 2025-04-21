// src/providers/AuthProvider.tsx
import { ReactNode, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { supabase } from "../supabase/client";
import { useQuery } from "@tanstack/react-query";

const PROTECTED_ROUTES = ['/project', '/alert', '/profile'];
const AUTH_ROUTES = ['/auth/signup', '/auth/signin', '/auth/verify-email'];

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const { data: session } = useQuery({
    queryKey: ['session'],
    queryFn: async () => {
      const { data } = await supabase.auth.getSession();
      return data.session;
    }
  });

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'SIGNED_OUT') {
        navigate('/auth/signup');
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  useEffect(() => {
    const currentPath = location.pathname;
    const isProtectedRoute = PROTECTED_ROUTES.some(route => 
      currentPath.startsWith(route)
    );
    const isAuthRoute = AUTH_ROUTES.includes(currentPath);

    if (!session?.user && isProtectedRoute) {
      navigate('/auth/signup', { 
        replace: true,
        state: { from: currentPath }
      });
    }

    if (session?.user && isAuthRoute) {
      navigate('/', { replace: true });
    }
  }, [session, navigate, location]);

  return <>{children}</>;
};