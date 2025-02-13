import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useUserStore } from "../store/UseUserStore";
import { supabase } from "../supabase/client";
import { User } from '@supabase/supabase-js';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  // completeOnboarding: () => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [redirected, setRedirected] = useState(false); 
  const { setUserDetails } = useUserStore();

  // Fetch user details and onboarding status
  const fetchUserAndOnboardingStatus = async () => {
    setLoading(true);

    // Check localStorage first
    const storedUser = localStorage.getItem('loggedInUser');
    const storedOnboardingStatus = localStorage.getItem('onboardingComplete');

    if (storedUser) {
      const user = JSON.parse(storedUser);
      setUser(user);
      setUserDetails('onboardingComplete', storedOnboardingStatus === 'true');
      setLoading(false);
      return;
    }

    // If not in localStorage, fetch from Supabase
    try {
      const { data: { user }, error } = await supabase.auth.getUser();

      if (error || !user) {
        throw new Error("User not found");
      }

      // Fetch onboarding status from Supabase user table
      const { data: userProfile, error: profileError } = await supabase
        .from('Users')
        .select('onboardingComplete')
        .eq('id', user.id)
        .single();

      if (profileError || !userProfile) {
        throw new Error("Failed to fetch user profile");
      }

      // Update localStorage and state
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      localStorage.setItem('onboardingComplete', userProfile.onboardingComplete ? 'true' : 'false');
      setUser(user);
      setUserDetails('onboardingComplete', userProfile.onboardingComplete);
    } catch (error) {
      console.error("Error fetching user data:", error);
      localStorage.removeItem('loggedInUser');
      localStorage.removeItem('onboardingComplete');
      setUser(null);
      setUserDetails('onboardingComplete', 'false');
    } finally {
      setLoading(false);
    }
  };

  // Handle auth state changes
  useEffect(() => {
    fetchUserAndOnboardingStatus();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log('event', event)
      if (session?.user) {
        const user = session.user;
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        setUser(user);
        await fetchUserAndOnboardingStatus();
      } else {
        localStorage.removeItem('loggedInUser');
        localStorage.removeItem('onboardingComplete');
        setUser(null);
        setUserDetails('onboardingComplete', 'false');
      }
    });

    return () => subscription.unsubscribe();
  }, [setUserDetails]);

  // Redirect user based on auth state and onboarding status
  useEffect(() => {
    if (loading || redirected) return; 

    const onboardingComplete = localStorage.getItem('onboardingComplete') === 'true';
    const currentPath = window.location.pathname;

    if (!user) {
      if (currentPath !== '/auth/signup') {
        setRedirected(true);
        window.location.href = '/auth/signup';
      }
    } else if (!onboardingComplete) {
      if (currentPath !== '/onboarding/tell-us-about-yourself') {
        setRedirected(true);
        window.location.href = '/onboarding/tell-us-about-yourself';
      }
    } else if (currentPath === '/auth/signup' || currentPath === '/auth/login') {
      setRedirected(true);
      window.location.href = '/';
    }
  }, [user, loading, redirected]);

  // Mark onboarding as complete
  // const completeOnboarding = async () => {
  //   if (!user) return;

  //   try {
  //     // Update Supabase user table
  //     const { error } = await supabase
  //       .from('user')
  //       .update({ onboardingComplete: 'true' })
  //       .eq('id', user.id);

  //     if (error) {
  //       throw new Error("Failed to update onboarding status");
  //     }

  //     // Update localStorage and state
  //     localStorage.setItem('onboardingComplete', 'true');
  //     setUserDetails('onboardingComplete', 'true');
  //     window.location.href = '/';
  //   } catch (error) {
  //     console.error("Error completing onboarding:", error);
  //   }
  // };

  const value = {
    user,
    loading,
    // completeOnboarding,
  };

  return (
    <AuthContext.Provider value={value}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};