import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://srqhvrlyjeqvpyhkzvmx.supabase.co/";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNycWh2cmx5amVxdnB5aGt6dm14Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgzOTI0MzUsImV4cCI6MjAxMzk2ODQzNX0.h0c0FsalwULfMtc1m0KoZLd7JvVMcwrYdgeojYTjCK4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
