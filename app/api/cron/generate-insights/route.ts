import { NextRequest, NextResponse } from 'next/server'
import { runBatchPipeline } from '@/lib/batch/pipeline'

export async function POST(request: NextRequest) {
  const cronSecret = process.env.CRON_SECRET

  if (cronSecret) {
    const authHeader = request.headers.get('authorization')
    if (authHeader !== `Bearer ${cronSecret}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
  }

  try {
    const result = await runBatchPipeline()

    if (!result.success) {
      console.error('[cron] pipeline failed:', result.error)
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 500 }
      )
    }

    console.log('[cron] success', {
      article_count: result.articles.length,
      batch_date: result.batchDate,
      mock: result.isMock,
    })

    return NextResponse.json({
      success: true,
      article_count: result.articles.length,
      batch_date: result.batchDate,
      mock: result.isMock,
    })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    console.error('[cron] uncaught error:', message, error)
    return NextResponse.json({ success: false, error: message }, { status: 500 })
  }
}

// Vercel Cron からの GET リクエストにも対応
export async function GET(request: NextRequest) {
  return POST(request)
}
