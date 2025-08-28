// Test environment variables loading
require('dotenv').config()

console.log('Testing environment vas...')
console.log('NEXT_PUBLIC_SUPABASE_URL:', process.env.NEXT_PUBLIC_SUPABASE_URL ? '✅ Loaded' : '❌ Missing')
console.log('NEXT_PUBLIC_SUPABASE_ANON_KEY:', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? '✅ Loaded' : '❌ Missing')
console.log('NODE_ENV:', process.env.NODE_ENV)
console.log('All env vars:', Object.keys(process.env).filter(key => key.includes('SUPABASE')))
