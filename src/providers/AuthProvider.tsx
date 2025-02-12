import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../store/UseUserStore";
import { supabase } from "../supabase/client";
import { User } from '@supabase/supabase-js';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  completeOnboarding: () => void;
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
  const navigate = useNavigate();
  const { setUserDetails } = useUserStore();

  // Fetch user details and onboarding status
  const fetchUserAndOnboardingStatus = async (userId: string) => {
    const { data, error } = await supabase
      .from('Users')
      .select('onboardingComplete')
      .eq('id', userId)
      .limit(1);  
  
    if (error) {
      console.error('Error fetching onboarding status:', error);
    } else if (data && data.length > 0) {
      const user = data[0];
      setUserDetails('onboardingComplete', user.onboardingComplete);
      if (!user.onboardingComplete) {
        navigate('/onboarding/tell-us-about-yourself');
      } else {
        navigate('/');
      }
    } else {
      console.error('No user found with the provided ID');
    }
  };
  
  // Check authentication state on initial load
  useEffect(() => {
    const checkAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUser(user);
        await fetchUserAndOnboardingStatus(user.id);
      } else {
        setUser(null);
        setUserDetails('onboardingComplete', false);
      }
      setLoading(false);
    };

    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log(event);
      if (session?.user) {
        setUser(session.user as User);
        await fetchUserAndOnboardingStatus(session.user.id);
      } else {
        setUser(null);
        setUserDetails('onboardingComplete', false);
        navigate('/auth/signup');
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate, setUserDetails]);

  // Mark onboarding as complete
  const completeOnboarding = async () => {
    if (user) {
      const { error } = await supabase
        .from('Users')
        .update({ onboardingComplete: true })
        .eq('id', user.id);

      if (error) {
        console.error('Error updating onboarding status:', error);
      } else {
        setUserDetails('onboardingComplete', true);
        // navigate('/');
      }
    }
  };

  useEffect(() => {
    const checkAndNavigate = () => {
      if (loading) return;
  
      if (!user) {
        // If no user, navigate to signup page
        navigate('/auth/signup');
      } else {
        // If user exists, navigate to homepage
        if (window.location.pathname === '/auth/signup' || window.location.pathname === '/auth/login') {
          navigate('/');
        }
      }
    };
  
    checkAndNavigate();
  }, [user, loading, navigate]);
  

  const value = {
    user,
    loading,
    completeOnboarding,
  };

  // Make sure to always return a ReactNode
  return (
    <AuthContext.Provider value={value}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
