import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Validate environment variables
if (!supabaseUrl || !supabaseAnonKey) {
  console.error(
    "Missing Supabase environment variables. Please check your .env file."
  );
}

// Ensure URL is properly formatted
const formattedUrl = supabaseUrl?.replace(/\/$/, "");

export const supabase = createClient(formattedUrl, supabaseAnonKey);
