// Ref: https://supabase.com/docs/reference/javascript/auth-signinwithpassword

import {createClient} from '@supabase/supabase-js'

const supabaseUrl = 'https://lytdecmrcglgdghkfpft.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx5dGRlY21yY2dsZ2RnaGtmcGZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY3OTg5MDgsImV4cCI6MTk4MjM3NDkwOH0.hArD9eVE_VtcFcgCMkPvM38gqoELCdNkQbEhOK6G0IE'


// Proper way to access the database in production
// export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Access database with root access using the service key - not good for production
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
