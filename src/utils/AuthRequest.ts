import { AuthResponse } from "@supabase/supabase-js";
import { supabase } from "../supabase/client";

export const signupWithOTP = async (email: string): Promise<AuthResponse> => {
  const { data, error } = await supabase.auth.signInWithOtp({
    email: email,
    options: {
      // shouldCreateUser: true,
    },
  });
  return { data, error };
};

export const verifyEmail = async (email: string, token: string) => {
  const {
    data: { session },
    error,
  } = await supabase.auth.verifyOtp({
    email,
    token,
    type: "email",
  });
  return { session, error };
};

export const signInWithGithub = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: `https://sync-u-staging.vercel.app/onboarding/tell-us-about-yourself`,
    },
  });
  return { data, error };
};

export const signInWithGoogle = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `https://sync-u-staging.vercel.app/onboarding/tell-us-about-yourself`,
    },
  });
  return { data, error };
};
