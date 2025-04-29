import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://oumzpzfchyeoocfxckty.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im91bXpwemZjaHllb29jZnhja3R5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ1MzE5MzUsImV4cCI6MjA2MDEwNzkzNX0.Tf6KDer1Y2MwMZHJTGHAXVeVVL9w6adQ3tgmdIPw9Sg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
