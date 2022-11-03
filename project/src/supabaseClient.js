// Ref: https://supabase.com/docs/reference/javascript/auth-signinwithpassword

import {createClient} from '@supabase/supabase-js'

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY


// Proper way to access the database in production
// export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Access database with root access using the service key - not good for production
export const supabase = createClient(supabaseUrl, process.env.REACT_APP_SERVICE_KEY);
