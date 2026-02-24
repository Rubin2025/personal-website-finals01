import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://ssypdoiufelzcmgdlklc.supabase.co"
const supabaseAnonKey = "sb_publishable_sTNYhldXIiQgcF49lv78Ig_YQp4cbLn"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)