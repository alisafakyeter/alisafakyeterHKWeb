import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

export const supabase = createClient(
  'https://czjpfrdyjdrpupuwqgcx.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN6anBmcmR5amRycHVwdXdxZ2N4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAyMTg4MDcsImV4cCI6MjA5NTc5NDgwN30.03YdNo-3BrAnq6XDVQmMy0jPqEvffuCd7ORYhhchus4'
)