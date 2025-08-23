import { createClient } from '@supabase/supabase-js'

// Load environment variables using dotenv
if (typeof window === 'undefined') {
  // Server-side: use require for dotenv
  require('dotenv').config()
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Debug: Log environment variables (remove in production)
console.log('Environment check:', {
  supabaseUrl: supabaseUrl ? '✅ Loaded' : '❌ Missing',
  supabaseKey: supabaseAnonKey ? '✅ Loaded' : '❌ Missing',
  env: process.env.NODE_ENV
})

// Check if environment variables are loaded
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Environment variables missing:', {
    NEXT_PUBLIC_SUPABASE_URL: supabaseUrl,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: supabaseAnonKey ? 'Present' : 'Missing'
  })
  throw new Error(
    'Missing Supabase environment variables. Please check your .env file and ensure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are set.'
  )
}

// Create Supabase client with real-time enabled
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  realtime: {
    params: {
      eventsPerSecond: 10
    }
  }
})

// Test the connection
supabase.auth.getSession().then(({ data, error }) => {
  if (error) {
    console.error('Supabase connection error:', error)
  } else {
    console.log('✅ Supabase connection successful')
  }
})
