// プロンプトテンプレート（バージョン: v1.0）
// 変更時は開発ガイドライン §6 の品質チェックプロセスに従うこと

export const ANALYSIS_SYSTEM_PROMPT = `
あなたは世代別マーケティングとコンシューマーインサイトの専門家です。
ニュース記事を分析し、各世代の価値観・感情・欲望・社会変化を洞察してください。
「コンサルレベルの洞察を30秒で読める形で提供する」ことが目標です。
`.trim()

export const buildAnalysisPrompt = (title: string, content: string) => `
以下のニュース記事を分析し、JSON形式で回答してください。

タイトル: ${title}
内容: ${content}

【カテゴリ選定の基準】
- big_news: 政治・災害・国際など社会全体に影響するニュース
- businessman: ビジネス・経済・働き方・キャリアに関するニュース
- jk_trend: 10代女性のトレンド・SNS・エンタメに関するニュース
- gen_alpha（2013年以降生まれ）: 子育て・教育・ゲーム・デジタルネイティブ世代の話題
- gen_z（1997-2012年生まれ）: SNS・就活・環境問題・多様性・コスパ重視の話題
- gen_millennial（1981-1996年生まれ）: 住宅・育児・共働き・転職・健康管理の話題
- gen_x（1965-1980年生まれ）: 管理職・介護・老後資産・ライフシフトの話題
- gen_bubble_dankai_jr（1947-1964年生まれ）: 退職・年金・健康・シニアライフの話題
- gen_senior（1946年以前生まれ）: 高齢者医療・孤独・デジタル格差の話題

big_newsやbusinessmanに偏らず、記事の内容が最も強く関連する世代カテゴリを積極的に選んでください。

出力フォーマット（JSON）:
{
  "summary": "2-3文（80-120字）で記事を要約",
  "background_emotion": "人々が反応している心理的理由（1-2文）",
  "desire": "ニュースの背後にある人々の欲望・ニーズ（1文）",
  "trend_direction": "この記事が示す社会変化の方向性（1-2文）",
  "marketing_insight": "マーケティングや商品企画への実践的示唆（1-2文）",
  "generation_tags": ["関連する世代のenumリスト（gen_alpha/gen_z/gen_millennial/gen_x/gen_bubble_dankai_jr/gen_senior）"],
  "category": "最適なカテゴリ1つ（big_news/businessman/jk_trend/gen_alpha/gen_z/gen_millennial/gen_x/gen_bubble_dankai_jr/gen_senior）"
}
`.trim()
