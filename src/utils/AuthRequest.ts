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
      redirectTo: `http://localhost:5173/onboarding/tell-us-about-yourself`,
    },
  });
  return { data, error };
};

export const signInWithGoogle = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `http://localhost:5173/onboarding/tell-us-about-yourself`,
    },
  });
  return { data, error };
};

export const getLoggedInUser = async () => {
  const { data: { user: loggedInUser } } = await supabase.auth.getUser()
return loggedInUser
}

export const getUserById = async (userId: string) => {
  const { data, error } = await supabase
  .from('Users') 
  .select() 
  .eq('id', userId) 
  .single();

  if(error) throw new Error()

  return data
}