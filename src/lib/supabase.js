import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fzrhoywpnlbxjvthnpwi.supabase.co";
const supabaseAnonKey = "sb_publishable_bRNP0aadbK8wWTalTDl5Bw_8JXpxVuU";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);