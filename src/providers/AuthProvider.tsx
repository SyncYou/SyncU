import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useUserStore } from "../store/UseUserStore";
import { supabase } from "../supabase/client";
import { User } from "@supabase/supabase-js";
import { errorToast } from "oasis-toast";

interface AuthContextType {
  user: User | null;
  loading: boolean;
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
  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [loading, setLoading] = useState(true);
  const [redirected, setRedirected] = useState(false);
  const [hasFetchedUser, setHasFetchedUser] = useState(false); 
  const { setUserDetails } = useUserStore();

  // Fetch user details and onboarding status
  const fetchUserAndOnboardingStatus = async () => {
    setLoading(true);

    try {
      // Get the authenticated user from Supabase
      const { data: { user }, error } = await supabase.auth.getUser();

      if (error || !user) {
        errorToast("Authentication failed", "Please login to continue");
        throw new Error("User not found");
      }

      // Fetch onboarding status from the Users table
      const { data: userProfile, error: profileError } = await supabase
        .from("Users")
        .select("*")
        .eq("id", user.id)
        .single();

      if (profileError || !userProfile) {
        errorToast("Unable to authorise", "Please complete your onboarding process");
        throw new Error("User profile not found");
      }

      // Store user and onboarding status in localStorage
      localStorage.setItem("currentUser", JSON.stringify(userProfile));
      localStorage.setItem("onboardingComplete", userProfile.onboardingComplete ? "true" : "false");

      setUser(user);
      setUserDetails("onboardingComplete", userProfile.onboardingComplete);
      // Mark user data as fetched
      setHasFetchedUser(true); 
    } catch (error) {
      console.error("Error fetching user data:", error);
      localStorage.removeItem("currentUser");
      localStorage.removeItem("onboardingComplete");
      setUser(null);
      setUserDetails("onboardingComplete", false);
    } finally {
      setLoading(false);
    }
  };

  // Handle auth state changes
  useEffect(() => {
    // Only fetch user data if it hasn't been fetched yet
    if (!user && !hasFetchedUser) {
      fetchUserAndOnboardingStatus();
    }

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log('event', event);
      if (session?.user) {
        const user = session.user;
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        setUser(user);
        await fetchUserAndOnboardingStatus();
      } else {
        localStorage.removeItem("loggedInUser");
        localStorage.removeItem("onboardingComplete");
        setUser(null);
        setUserDetails("onboardingComplete", false);
      }
    });

    return () => subscription.unsubscribe();
  }, [setUserDetails, hasFetchedUser]);

  // Redirect user based on auth state and onboarding status
  useEffect(() => {
    if (loading || redirected) return;

    const onboardingComplete = localStorage.getItem("onboardingComplete") === "true";
    const currentPath = window.location.pathname;

    if (!user) {
      if (currentPath !== "/auth/signup") {
        setRedirected(true);
        window.location.href = "/auth/signup";
      }
    } else if (!onboardingComplete) {
      if (currentPath !== "/onboarding/tell-us-about-yourself") {
        setRedirected(true);
        window.location.href = "/onboarding/tell-us-about-yourself";
      }
    } else if (currentPath === "/auth/signup" || currentPath === "/auth/login") {
      setRedirected(true);
      window.location.href = "/";
    }
  }, [user, loading, redirected]);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};