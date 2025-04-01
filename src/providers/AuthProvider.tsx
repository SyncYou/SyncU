import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { supabase } from "../supabase/client";
import { User } from "@supabase/supabase-js";
import { errorToast } from "oasis-toast";
import { useAuthStore } from "../store/useAuthStore";
import { useUserStore } from "../store/UseUserStore";
import { UserDetails } from "../store/UseUserStore";

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, loading, setUser, setLoading, clearAuth } = useAuthStore();
  const { userDetails, setUserDetails, clearUserDetails } = useUserStore();

  // Fetch user profile from Supabase and sync with stores
  const fetchUserProfile = async (user: User): Promise<UserDetails | null> => {
    try {
      const { data: userProfile, error } = await supabase
        .from("Users")
        .select("*")
        .eq("id", user.id)
        .single();

      if (error || !userProfile) {
        throw new Error("User profile not found");
      }

      // Map Supabase user profile to your UserDetails type
      const mappedDetails: UserDetails = {
        firstName: userProfile.first_name || "",
        lastName: userProfile.last_name || "",
        email: userProfile.email || user.email || "",
        username: userProfile.username || "",
        countryOfResidence: userProfile.country_of_residence || "Nigeria",
        photoUrl: userProfile.photo_url || "",
        areaOfExpertise: userProfile.area_of_expertise || "",
        stacks: userProfile.stacks || ["N/A", "N/A", "N/A"],
        onboardingComplete: userProfile.onboardingComplete || false
      };

      // Set all user details at once to minimize renders
      setUserDetails("onboardingComplete", mappedDetails.onboardingComplete);
      // Set other user details if needed
      Object.entries(mappedDetails).forEach(([key, value]) => {
        if (key !== "onboardingComplete") {
          setUserDetails(key as keyof UserDetails, value);
        }
      });

      return mappedDetails;
    } catch (error) {
      console.error("Error fetching user profile:", error);
      errorToast("Authorization Error", "Could not fetch user profile");
      return null;
    }
  };

  // Initialize auth state
  const initializeAuth = async () => {
    setLoading(true);
    try {
      const { data: { user }, error } = await supabase.auth.getUser();

      if (error || !user) {
        throw new Error("Not authenticated");
      }

      setUser(user);
      await fetchUserProfile(user);
    } catch (error) {
      clearAuth();
      clearUserDetails();
    } finally {
      setLoading(false);
    }
  };

  // Handle auth state changes
  useEffect(() => {
    initializeAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log(`Auth event: ${event}`, session);
        if (session?.user) {
          setUser(session.user);
          await fetchUserProfile(session.user);
        } else {
          clearAuth();
          clearUserDetails();
        }
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  // Handle routing based on auth state
  useEffect(() => {
    if (loading) return;

    const currentPath = location.pathname;
    const isAuthRoute = currentPath.startsWith("/auth");
    const isOnboardingRoute = currentPath.startsWith("/onboarding");

    if (!user) {
      if (!isAuthRoute) {
        navigate("/auth/signup", { replace: true });
      }
    } else if (userDetails.onboardingComplete === false) {
      if (!isOnboardingRoute) {
        navigate("/onboarding/tell-us-about-yourself", { replace: true });
      }
    } else if (userDetails.onboardingComplete === true && isAuthRoute) {
      navigate("/", { replace: true });
    }
  }, [user, loading, userDetails.onboardingComplete, navigate, location]);

  return <>{children}</>;
};