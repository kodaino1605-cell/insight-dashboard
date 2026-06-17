import { createClient, SupabaseClient } from '@supabase/supabase-js'

let _anonClient: SupabaseClient | null = null
let _serviceClient: SupabaseClient | null = null

// フロントエンド・サーバーコンポーネント用（anon key）
export function getAnonClient(): SupabaseClient {
  if (!_anonClient) {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    if (!url || !key) throw new Error('Supabase env vars not set')
    _anonClient = createClient(url, key)
  }
  return _anonClient
}

// バッチ処理専用（service_role key、RLSバイパス）
export function getServiceClient(): SupabaseClient {
  if (!_serviceClient) {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY
    if (!url || !key) throw new Error('SUPABASE_SERVICE_ROLE_KEY is not set')
    _serviceClient = createClient(url, key, { auth: { persistSession: false } })
  }
  return _serviceClient
}
