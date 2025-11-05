import { createClient } from '@supabase/supabase-js'

// Get from Supabase Dashboard → Settings → API
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY  
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types
export interface BlogPost {
  id: string
  created_at: string
  updated_at: string
  title: string
  slug: string
  description: string
  content: string
  category: string
  tags?: string[]
  image_url?: string
  author: string
  published: boolean
  views: number
}