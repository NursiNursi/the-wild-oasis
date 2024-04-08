import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hbphsuqmqzjcjquhppfk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhicGhzdXFtcXpqY2pxdWhwcGZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI1NDQzMDUsImV4cCI6MjAyODEyMDMwNX0.4ounw0-OZvAzyltghhx4Ao9dovjVlyMtJ6cvieR83Ww";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
