import { AuthResponse } from "@supabase/supabase-js";
import { supabase } from "../supabase/client";

export const signupWithOTP = async (email: string): Promise<AuthResponse> => {
  const { data, error } = await supabase.auth.signInWithOtp({
    email: email,
    options: {
      shouldCreateUser: false,
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
    token: token,
    type: "email",
  });
  return { session, error };
};
