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

  const result = await runBatchPipeline()

  if (!result.success) {
    return NextResponse.json(
      { success: false, error: result.error },
      { status: 500 }
    )
  }

  return NextResponse.json({
    success: true,
    article_count: result.articles.length,
    batch_date: result.batchDate,
    mock: result.isMock,
  })
}

// Vercel Cron からの GET リクエストにも対応
export async function GET(request: NextRequest) {
  return POST(request)
}
