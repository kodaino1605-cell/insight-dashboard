import { NewsArticle } from '@/lib/types/news'

const TODAY = new Date().toISOString().split('T')[0]

export const MOCK_ARTICLES: NewsArticle[] = [
  // ─── ビッグニュース ───
  {
    id: 'big-001',
    title: '日銀、追加利上げを決定―政策金利を0.75%に引き上げ',
    summary:
      '日本銀行は金融政策決定会合で追加利上げを決定し、政策金利を0.75%とした。円高と物価安定を目指す方針を示し、住宅ローン金利の上昇が家計に影響する可能性が指摘されている。',
    background_emotion:
      'インフレへの不安と資産運用の見直しを迫られる焦りが国民に広がっており、「自分の生活はどう変わるのか」という切実な問いが渦巻いている。',
    desire: '安定した生活費と将来への安心感を確保したい。',
    trend_direction:
      'ゼロ金利時代の終焉とともに「お金の置き場所」の最適解が変化しており、預金・投資・借入のすべてを再設計する時代が到来しつつある。',
    marketing_insight:
      '資産運用・住宅ローン・節約系サービスへの関心が急増するタイミング。金利上昇に伴う「生活防衛」訴求が響く。',
    generation_tags: ['gen_millennial', 'gen_x', 'gen_bubble_dankai_jr'],
    category: 'big_news',
    source_name: '日本経済新聞',
    source_url: 'https://www.nikkei.com/',
    published_at: `${TODAY}T08:00:00+09:00`,
    analyzed_at: `${TODAY}T08:05:00+09:00`,
    batch_date: TODAY,
    rank: 1,
    is_fallback: false,
    source_type: 'rss',
  },
  {
    id: 'big-002',
    title: 'AI活用による労働市場の変化、ホワイトカラー職の3割が転換期に',
    summary:
      '経済産業省の調査によると、生成AIの普及によりホワイトカラー職の約3割が今後5年以内に業務内容の大幅な変化を迎えると試算された。リスキリング支援の強化が課題として浮上している。',
    background_emotion:
      '「自分の仕事がなくなるかもしれない」という漠然とした恐れと、うまく乗り越えれば飛躍できるという期待感が混在している。',
    desire: 'AIに代替されない自分だけのスキルと価値を身につけたい。',
    trend_direction:
      '職種の境界が溶け、「何ができるか」より「何を生み出せるか」が問われる時代へ移行している。',
    marketing_insight:
      'スキルアップ・資格・オンライン学習サービスへの需要が急増。「AI時代に生き残る○○」訴求が刺さる。',
    generation_tags: ['gen_z', 'gen_millennial', 'gen_x'],
    category: 'big_news',
    source_name: 'NHK',
    source_url: 'https://www.nhk.or.jp/',
    published_at: `${TODAY}T07:30:00+09:00`,
    analyzed_at: `${TODAY}T08:05:00+09:00`,
    batch_date: TODAY,
    rank: 2,
    is_fallback: false,
    source_type: 'rss',
  },
  {
    id: 'big-003',
    title: '少子化対策法改正案、児童手当の高校生への拡充で合意',
    summary:
      '国会で審議中の少子化対策強化法案について与野党が修正協議を経て合意し、児童手当の支給対象を高校生まで延長することが確定した。2026年度末からの施行を目指す。',
    background_emotion:
      '子育て世代の「やっと動いた」という安堵感と、「まだ足りない」という不満が同居している。',
    desire: '経済的不安なく子どもを育てられる社会環境が欲しい。',
    trend_direction:
      '少子化への政策対応が「給付」から「継続投資」へシフトし、子育てインフラの整備が国家的課題として定着しつつある。',
    marketing_insight:
      '子育て関連サービス・教育・保険商品への需要が喚起される。「18歳まで安心」という訴求ポイントが有効。',
    generation_tags: ['gen_millennial', 'gen_z'],
    category: 'big_news',
    source_name: 'NHK',
    source_url: 'https://www.nhk.or.jp/',
    published_at: `${TODAY}T07:00:00+09:00`,
    analyzed_at: `${TODAY}T08:05:00+09:00`,
    batch_date: TODAY,
    rank: 3,
    is_fallback: false,
    source_type: 'rss',
  },

  // ─── α世代 ───
  {
    id: 'alpha-001',
    title: '小学生のプログラミング教育、AIツール活用が全国標準へ',
    summary:
      '文部科学省はプログラミング教育の新指針を発表し、AIツールを活用した創造的な問題解決学習を全国の小学校で標準化する方針を示した。2027年度から順次導入される。',
    background_emotion:
      '親世代の「子どもに最新の教育を受けさせたい」という強い願望が、学校現場の準備不足への不安と交差している。',
    desire: 'デジタルネイティブとして将来に役立つスキルを自然に習得したい。',
    trend_direction: 'コードを「書く」から「設計・評価する」時代へ。人間の役割がクリエイティブ側にシフトしている。',
    marketing_insight:
      '子ども向けAI学習ツール・ロボット教材・プログラミング教室の需要が急拡大。「未来の子どもへの投資」訴求が有効。',
    generation_tags: ['gen_alpha'],
    category: 'gen_alpha',
    source_name: 'ITmedia',
    source_url: 'https://www.itmedia.co.jp/',
    published_at: `${TODAY}T06:00:00+09:00`,
    analyzed_at: `${TODAY}T08:05:00+09:00`,
    batch_date: TODAY,
    rank: 1,
    is_fallback: false,
    source_type: 'rss',
  },
  {
    id: 'alpha-002',
    title: 'YouTubeキッズ視聴者、ショート動画から「長尺学習コンテンツ」へシフト',
    summary:
      '子ども向け動画プラットフォームの視聴データ分析により、α世代を中心に30分超の学習・工作系コンテンツへの滞在時間が増加していることが判明した。',
    background_emotion:
      '「スクリーンタイム」を気にする親から「どうせ見るなら意味のあるものを」という選択への移行が起きている。',
    desire: '楽しみながら本物の知識やスキルを身につけたい。',
    trend_direction: '「消費する子ども」から「学びながら楽しむ子ども」へ。エンタメと教育の境界が溶けている。',
    marketing_insight:
      '教育系コンテンツ・サブスク型学習サービスは「親への安心感」と「子どもへの楽しさ」の両軸で訴求するのが効果的。',
    generation_tags: ['gen_alpha'],
    category: 'gen_alpha',
    source_name: 'ITmedia',
    source_url: 'https://www.itmedia.co.jp/',
    published_at: `${TODAY}T06:30:00+09:00`,
    analyzed_at: `${TODAY}T08:05:00+09:00`,
    batch_date: TODAY,
    rank: 2,
    is_fallback: false,
    source_type: 'rss',
  },
  {
    id: 'alpha-003',
    title: 'メタバース内の「子ども専用空間」に企業参入相次ぐ',
    summary:
      '教育・エンターテインメント企業が子ども向けに安全性を担保したメタバース空間の提供を開始。保護者の監視機能と創造性を両立させた新形態の遊び場として注目されている。',
    background_emotion:
      '「現実の外遊びが減った世代」に対し、親世代が罪悪感を感じながらも代替手段を模索している。',
    desire: '仲間と自由に創造できる「自分たちだけの世界」が欲しい。',
    trend_direction: '遊びのデジタル化が次段階へ。「安全なバーチャル広場」が現実の公園を代替する時代が近づいている。',
    marketing_insight:
      'α世代向けサービスは「親の安心・子どもの楽しさ」の両面設計が必須。保護者向けダッシュボード機能が差別化になる。',
    generation_tags: ['gen_alpha'],
    category: 'gen_alpha',
    source_name: 'TechCrunch Japan',
    source_url: 'https://jp.techcrunch.com/',
    published_at: `${TODAY}T05:00:00+09:00`,
    analyzed_at: `${TODAY}T08:05:00+09:00`,
    batch_date: TODAY,
    rank: 3,
    is_fallback: false,
    source_type: 'rss',
  },

  // ─── Z世代 ───
  {
    id: 'genz-001',
    title: 'Z世代の「副業ファースト」志向、本業収入への依存度が過去最低に',
    summary:
      '20代の就労意識調査で、副業・フリーランス収入を主軸に置く「副業ファースト」志向が急増し、単一企業への依存を避けるポートフォリオ型キャリアが標準化しつつある。',
    background_emotion:
      '「会社に依存すること自体がリスク」という静かな不信感と、自律したい欲求が混在している。',
    desire: '自分の力で稼ぎ、どこにいても生き延びられる経済的自立を得たい。',
    trend_direction:
      '「就職」の意味が「雇用される」から「活動拠点を置く」へ変容。組織への帰属意識よりスキルの移植性が重視される。',
    marketing_insight:
      'Z世代向けサービスは「自律」「自分らしさ」「リスク分散」の文脈で訴求すると響く。副業支援・スキル収益化ツールに好機。',
    generation_tags: ['gen_z'],
    category: 'gen_z',
    source_name: '日本経済新聞',
    source_url: 'https://www.nikkei.com/',
    published_at: `${TODAY}T07:00:00+09:00`,
    analyzed_at: `${TODAY}T08:05:00+09:00`,
    batch_date: TODAY,
    rank: 1,
    is_fallback: false,
    source_type: 'rss',
  },
  {
    id: 'genz-002',
    title: 'SNS断ち「デジタルデトックス」が20代に浸透、専用サービスも登場',
    summary:
      'スマートフォンの過剰使用による精神的疲弊を受け、20代のあいだでSNSアカウントを一時停止する「デジタルデトックス」実践者が増加。意識的なオフライン時間の確保を支援するサービスが注目されている。',
    background_emotion:
      '「いいね」疲れと比較疲れからの解放願望が高まる一方、情報から切り離される不安（FOMO）との葛藤が続いている。',
    desire: 'SNSに振り回されず、自分軸で生きることへの渇望。',
    trend_direction:
      '「つながり」の質への回帰。量的な繋がりから少数の深い関係性へのシフトが進んでいる。',
    marketing_insight:
      'Z世代への過度なSNS広告投下は逆効果になりつつある。「本物の体験」「オフライン価値」を訴求するブランドが差別化できる。',
    generation_tags: ['gen_z'],
    category: 'gen_z',
    source_name: 'Yahoo!ニュース',
    source_url: 'https://news.yahoo.co.jp/',
    published_at: `${TODAY}T06:00:00+09:00`,
    analyzed_at: `${TODAY}T08:05:00+09:00`,
    batch_date: TODAY,
    rank: 2,
    is_fallback: false,
    source_type: 'rss',
  },
  {
    id: 'genz-003',
    title: 'Z世代の「推し活」消費、年間支出が平均30万円超に拡大',
    summary:
      '20代を中心とする「推し活」関連消費の実態調査で、年間支出平均が初めて30万円を超えた。ライブ・グッズにとどまらず「体験型コンテンツ」への支出が急増している。',
    background_emotion:
      '「推し」への貢献が自己存在の肯定感につながる。感情的投資の対象を持つことが精神的安定をもたらしている。',
    desire: '推しを応援することで自分も輝き、同じ価値観の仲間とつながりたい。',
    trend_direction:
      '消費が「モノの所有」から「感情的体験の共有」へ。応援消費という新しい経済圏が確立されつつある。',
    marketing_insight:
      '推し活市場は「参加できる仕掛け」と「コミュニティ」がセットで機能する。ファンダムを作れるブランドが次の勝者。',
    generation_tags: ['gen_z', 'gen_alpha'],
    category: 'gen_z',
    source_name: 'ITmedia',
    source_url: 'https://www.itmedia.co.jp/',
    published_at: `${TODAY}T05:30:00+09:00`,
    analyzed_at: `${TODAY}T08:05:00+09:00`,
    batch_date: TODAY,
    rank: 3,
    is_fallback: false,
    source_type: 'rss',
  },

  // ─── ミレニアル世代 ───
  {
    id: 'millennial-001',
    title: 'ミレニアル世代の「親の介護」問題、30代後半から顕在化が加速',
    summary:
      '30代後半〜40代のミレニアル世代において、親の介護問題に直面する割合が急増している。仕事・育児・介護の「トリプルケア」状態に陥るリスクが社会問題として浮上した。',
    background_emotion:
      '「自分の人生なのに誰かのために潰されていく」焦燥感と、「でも親を見捨てられない」という罪悪感が同時に押し寄せている。',
    desire: '家族のケアと自分らしいキャリアを両立できる社会の仕組みが欲しい。',
    trend_direction: '「ケアの担い手」問題が家族問題から社会インフラ問題へ格上げされるフェーズに入った。',
    marketing_insight:
      '介護×仕事両立支援サービス・遠隔介護ツール・フレキシブル就労への需要が急増。感情に寄り添う訴求が必須。',
    generation_tags: ['gen_millennial'],
    category: 'gen_millennial',
    source_name: 'NHK',
    source_url: 'https://www.nhk.or.jp/',
    published_at: `${TODAY}T07:00:00+09:00`,
    analyzed_at: `${TODAY}T08:05:00+09:00`,
    batch_date: TODAY,
    rank: 1,
    is_fallback: false,
    source_type: 'rss',
  },
  {
    id: 'millennial-002',
    title: 'FIRE達成後の「燃え尽き症候群」、30〜40代に増加傾向',
    summary:
      '早期リタイア（FIRE）を達成した30〜40代の一部が、目標達成後に目的喪失感と孤立感を訴える事例が増えている。「次の生きがい」を模索する動きが注目されている。',
    background_emotion:
      '「お金の問題は解決したのに、なぜ満たされないのか」という戸惑いと、意味への渇望が静かに広がっている。',
    desire: '経済的自由を超えた「意味のある存在であること」の確認。',
    trend_direction: '豊かさの定義が「資産額」から「関係性と貢献感」へ書き換えられつつある。',
    marketing_insight:
      '富裕層・FIRE層向けには「お金の先にある人生」訴求が差別化になる。コミュニティ・社会貢献・スキル活用サービスに商機。',
    generation_tags: ['gen_millennial', 'gen_x'],
    category: 'gen_millennial',
    source_name: '日本経済新聞',
    source_url: 'https://www.nikkei.com/',
    published_at: `${TODAY}T06:00:00+09:00`,
    analyzed_at: `${TODAY}T08:05:00+09:00`,
    batch_date: TODAY,
    rank: 2,
    is_fallback: false,
    source_type: 'rss',
  },
  {
    id: 'millennial-003',
    title: '「地方移住2.0」、週3日リモートで都市収入を維持しながら移住が増加',
    summary:
      'リモートワーク定着を背景に、都市部の収入を維持しながら地方に拠点を持つ「デュアルライフ」実践者が増加。自治体の移住支援策との組み合わせが注目されている。',
    background_emotion:
      '都市の便利さへの執着と、「このまま東京で消耗し続けていいのか」という問い直しが同時に動いている。',
    desire: '都市の機会と地方の豊かさを両取りしたい。',
    trend_direction:
      '「住む場所の最適化」がライフデザインの主要課題に。移住は逃避ではなく能動的選択として再定義された。',
    marketing_insight:
      '地方移住関連サービスは「都市収入維持との両立」を前面に出すと30〜40代に刺さる。地方自治体との連携商品に好機。',
    generation_tags: ['gen_millennial', 'gen_z'],
    category: 'gen_millennial',
    source_name: 'Yahoo!ニュース',
    source_url: 'https://news.yahoo.co.jp/',
    published_at: `${TODAY}T05:00:00+09:00`,
    analyzed_at: `${TODAY}T08:05:00+09:00`,
    batch_date: TODAY,
    rank: 3,
    is_fallback: false,
    source_type: 'rss',
  },

  // ─── X世代 ───
  {
    id: 'genx-001',
    title: 'X世代管理職、部下のZ世代への指導スタイル転換に苦慮',
    summary:
      '40〜50代の管理職を対象にした調査で、Z世代部下とのコミュニケーションスタイルのギャップに悩む割合が7割に達した。「叱らない指導」への切り替えに戸惑いを感じる声が多数上がっている。',
    background_emotion:
      '「自分たちはそうやって育ってきた」という誇りと、「時代が変わった」という認識の間で揺れている。',
    desire: 'チームを動かしながら、自分も時代に合ったリーダーとして認められたい。',
    trend_direction:
      '「権威型リーダーシップ」の終焉。支援型・コーチング型への移行が管理職に求められている。',
    marketing_insight:
      'X世代向けリーダーシップ研修・世代間コミュニケーション指南サービスに需要。「若者を動かす」訴求が響く。',
    generation_tags: ['gen_x'],
    category: 'gen_x',
    source_name: 'ITmedia',
    source_url: 'https://www.itmedia.co.jp/',
    published_at: `${TODAY}T07:00:00+09:00`,
    analyzed_at: `${TODAY}T08:05:00+09:00`,
    batch_date: TODAY,
    rank: 1,
    is_fallback: false,
    source_type: 'rss',
  },
  {
    id: 'genx-002',
    title: '50代の「学び直し」需要急増、大学院社会人入学が過去最多に',
    summary:
      '2026年度の社会人大学院入学者数が過去最多を更新。50代の入学割合が全体の15%を超え、セカンドキャリアへの備えとして高度な専門資格・学位取得を目指す動きが活発化している。',
    background_emotion:
      '定年延長と老後不安を前に「このままで終わりたくない」という抵抗感と、まだ間に合うという希望が共存している。',
    desire: '第二の人生で専門性を持ったプロとして活躍したい。',
    trend_direction: '「定年」概念の解体が進み、50代は「後半戦の助走期」として積極的に再設計される時代になった。',
    marketing_insight:
      '50代向けリカレント教育・資格取得支援・副業ストック型キャリアサービスに大きな商機。「遅くない」という訴求が刺さる。',
    generation_tags: ['gen_x', 'gen_bubble_dankai_jr'],
    category: 'gen_x',
    source_name: '日本経済新聞',
    source_url: 'https://www.nikkei.com/',
    published_at: `${TODAY}T06:00:00+09:00`,
    analyzed_at: `${TODAY}T08:05:00+09:00`,
    batch_date: TODAY,
    rank: 2,
    is_fallback: false,
    source_type: 'rss',
  },
  {
    id: 'genx-003',
    title: 'X世代の「健康投資」急増、予防医療・ウェアラブル市場が拡大',
    summary:
      '40〜50代を中心に健康診断の自費オプション追加や最新ウェアラブル端末の購入が急増。「病気になってから治す」ではなく「なる前に防ぐ」予防医療への意識変化が顕著だ。',
    background_emotion:
      '「体の衰えを感じ始めた」という現実認識と、「まだ若くいられる・いたい」という抵抗感が健康消費を駆動している。',
    desire: '老いを遅らせ、パフォーマンスを維持し続けたい。',
    trend_direction:
      '健康は「義務」から「投資・自己最適化」へ。ウェルネス産業の主役が高齢者からアクティブ中年に移行している。',
    marketing_insight:
      '40〜50代向け予防医療・フィットネス・サプリ市場は「データ・科学・実感」の三拍子で訴求するのが効果的。',
    generation_tags: ['gen_x'],
    category: 'gen_x',
    source_name: 'ITmedia',
    source_url: 'https://www.itmedia.co.jp/',
    published_at: `${TODAY}T05:30:00+09:00`,
    analyzed_at: `${TODAY}T08:05:00+09:00`,
    batch_date: TODAY,
    rank: 3,
    is_fallback: false,
    source_type: 'rss',
  },

  // ─── バブル・団塊Jr世代 ───
  {
    id: 'bubble-001',
    title: '「バブル世代」の定年退職ラッシュ、シニア人材活用が企業課題に',
    summary:
      '1960年代生まれのバブル世代が65歳前後に差し掛かり、大量定年退職期を迎えている。豊富な経験と人脈を持つ人材をどう活用するかが企業の急務として浮上している。',
    background_emotion:
      '「まだやれる、もっとできる」という活力と、社会から必要とされなくなる不安が混在している。',
    desire: '現役時代の経験と知識を活かして、引き続き社会に貢献したい。',
    trend_direction:
      '「引退」の概念が崩れ、65歳以降も価値を発揮し続ける「生涯現役」型キャリアが標準化されつつある。',
    marketing_insight:
      'バブル世代向けの「第二のキャリア」「顧問・メンター型就業」サービスに需要が急増。経験を「商品化」する視点が鍵。',
    generation_tags: ['gen_bubble_dankai_jr'],
    category: 'gen_bubble_dankai_jr',
    source_name: '日本経済新聞',
    source_url: 'https://www.nikkei.com/',
    published_at: `${TODAY}T07:00:00+09:00`,
    analyzed_at: `${TODAY}T08:05:00+09:00`,
    batch_date: TODAY,
    rank: 1,
    is_fallback: false,
    source_type: 'rss',
  },
  {
    id: 'bubble-002',
    title: '団塊Jr世代の「老後資金不足」、2000万円問題が現実問題に',
    summary:
      '1971年前後生まれの団塊Jr世代が50代半ばを迎え、老後資金の不足問題が現実的な課題として顕在化。NISAや確定拠出年金の見直しに動く人が急増している。',
    background_emotion:
      '「もっと早く動いていれば」という後悔と「今からでも間に合うか」という焦りが入り混じっている。',
    desire: '老後の経済的安心を確保し、子どもに迷惑をかけずに生きたい。',
    trend_direction:
      '老後資産形成の「ラストチャンス期」に入った層が本格的に動き始め、金融市場・保険市場が活性化している。',
    marketing_insight:
      '50代向け資産運用・保険見直し・老後設計サービスは「今からでも遅くない」と「具体的な数字」で訴求するのが効果的。',
    generation_tags: ['gen_bubble_dankai_jr'],
    category: 'gen_bubble_dankai_jr',
    source_name: 'Yahoo!ニュース',
    source_url: 'https://news.yahoo.co.jp/',
    published_at: `${TODAY}T06:30:00+09:00`,
    analyzed_at: `${TODAY}T08:05:00+09:00`,
    batch_date: TODAY,
    rank: 2,
    is_fallback: false,
    source_type: 'rss',
  },
  {
    id: 'bubble-003',
    title: 'バブル世代の「おひとりさま老後」増加、終活サービスが需要急増',
    summary:
      '離婚・未婚・死別などで単身となるバブル世代が増加傾向にあり、おひとりさま向けの老後支援・終活サービスへの需要が急拡大している。',
    background_emotion:
      '孤独への恐怖と、「自分らしく最後まで生きたい」という意志が複雑に絡み合っている。',
    desire: '誰にも迷惑をかけず、尊厳を持って自分の最期を設計したい。',
    trend_direction:
      '老後の「家族依存モデル」が崩れ、専門サービスと地域コミュニティが家族機能を代替する時代へ移行している。',
    marketing_insight:
      '終活・見守り・法律相談サービスは「迷惑をかけない」「自分らしく」の価値観に寄り添う訴求で需要を掘り起こせる。',
    generation_tags: ['gen_bubble_dankai_jr', 'gen_senior'],
    category: 'gen_bubble_dankai_jr',
    source_name: 'NHK',
    source_url: 'https://www.nhk.or.jp/',
    published_at: `${TODAY}T05:00:00+09:00`,
    analyzed_at: `${TODAY}T08:05:00+09:00`,
    batch_date: TODAY,
    rank: 3,
    is_fallback: false,
    source_type: 'rss',
  },

  // ─── シニア世代 ───
  {
    id: 'senior-001',
    title: '70代のスマホ活用率が初めて80%超え、デジタル格差が縮小',
    summary:
      '総務省の通信利用動向調査で70代のスマートフォン利用率が初めて80%を超えた。動画通話による家族との交流と、キャッシュレス決済の活用が普及を後押ししている。',
    background_emotion:
      '「難しそう」という先入観が崩れ、「使えた喜び」と「繋がれる安心感」が次の一歩を促している。',
    desire: '家族や社会と繋がり続け、時代から取り残されたくない。',
    trend_direction:
      'デジタルの「使えるシニア」と「使えないシニア」の格差が生活の質の格差に直結する時代が到来した。',
    marketing_insight:
      'シニア向けデジタルサービスは「接続性」と「安心感」が最優先。UI設計に加え、サポート体制の訴求が購入決定を左右する。',
    generation_tags: ['gen_senior'],
    category: 'gen_senior',
    source_name: 'NHK',
    source_url: 'https://www.nhk.or.jp/',
    published_at: `${TODAY}T07:00:00+09:00`,
    analyzed_at: `${TODAY}T08:05:00+09:00`,
    batch_date: TODAY,
    rank: 1,
    is_fallback: false,
    source_type: 'rss',
  },
  {
    id: 'senior-002',
    title: 'シニアの「社会参加」が健康寿命を延ばす、ボランティア活動との相関判明',
    summary:
      '65歳以上のボランティア活動参加者と非参加者を比較した10年間の追跡調査で、継続的な社会参加が要介護状態への移行を平均3年遅らせる効果があることが明らかになった。',
    background_emotion:
      '「役に立てている」という実感が生きる張り合いを生み、心身の健康を保つ強力な動機になっている。',
    desire: '誰かに必要とされ、社会の一員として活躍し続けたい。',
    trend_direction:
      '「高齢者は守られる存在」から「社会を支える担い手」へ。アクティブシニアの社会的価値が再評価されている。',
    marketing_insight:
      'シニア向けサービスは「守る」より「活躍を支える」訴求へシフトすると需要を掘り起こせる。地域連携型サービスに商機。',
    generation_tags: ['gen_senior'],
    category: 'gen_senior',
    source_name: 'NHK',
    source_url: 'https://www.nhk.or.jp/',
    published_at: `${TODAY}T06:00:00+09:00`,
    analyzed_at: `${TODAY}T08:05:00+09:00`,
    batch_date: TODAY,
    rank: 2,
    is_fallback: false,
    source_type: 'rss',
  },
  {
    id: 'senior-003',
    title: '「孫育て」参加のシニア世代、祖父母の役割再定義が進む',
    summary:
      '共働き家庭の増加に伴い、孫の保育・送迎に積極関与する祖父母世代が増加。「孫育て」を通じた世代間交流が健康増進効果をもたらすとして、自治体も支援策を拡充している。',
    background_emotion:
      '「家族の役に立てる喜び」と「自分の時間も大切にしたい」というバランス感覚の模索が続いている。',
    desire: '孫との絆を深めながら、自分らしいシニアライフも謳歌したい。',
    trend_direction: '孫育ては「義務」から「生きがいの選択肢」へ。関与度合いを自分で設計する時代になった。',
    marketing_insight:
      '祖父母×孫向けの体験型商品・旅行・学習サービスは「思い出を共に作る」という感情訴求が刺さる。',
    generation_tags: ['gen_senior', 'gen_bubble_dankai_jr'],
    category: 'gen_senior',
    source_name: 'Yahoo!ニュース',
    source_url: 'https://news.yahoo.co.jp/',
    published_at: `${TODAY}T05:30:00+09:00`,
    analyzed_at: `${TODAY}T08:05:00+09:00`,
    batch_date: TODAY,
    rank: 3,
    is_fallback: false,
    source_type: 'rss',
  },

  // ─── ビジネスマン向け ───
  {
    id: 'biz-001',
    title: '国内スタートアップ投資額、過去最高の1.2兆円に―AI・気候テックが牽引',
    summary:
      '2026年上半期の国内スタートアップへの投資総額が過去最高の1.2兆円に達した。生成AI関連とカーボンニュートラル関連が投資の柱となり、グローバル競争に向けた資金調達が活発化している。',
    background_emotion:
      '「日本からユニコーンが出るかもしれない」という高揚感と、「乗り遅れたくない」という焦りが投資家心理を動かしている。',
    desire: '時代を変えるビジネスを先読みし、次の波に乗りたい。',
    trend_direction:
      'AI×サステナビリティという複合テーマが投資の新軸になり、スタートアップへの期待値が産業構造を変えつつある。',
    marketing_insight:
      'AI・気候テック周辺のB2Bサービス・SaaS・ツール市場が爆発的拡大期に入った。早期参入コストが急上昇する前の好機。',
    generation_tags: ['gen_millennial', 'gen_x'],
    category: 'businessman',
    source_name: '日本経済新聞',
    source_url: 'https://www.nikkei.com/',
    published_at: `${TODAY}T07:30:00+09:00`,
    analyzed_at: `${TODAY}T08:05:00+09:00`,
    batch_date: TODAY,
    rank: 1,
    is_fallback: false,
    source_type: 'rss',
  },
  {
    id: 'biz-002',
    title: '人的資本経営の開示義務化、中堅企業への適用範囲が拡大',
    summary:
      '金融庁が人的資本に関する情報開示の義務対象を中堅企業にも拡大する方針を固めた。従業員エンゲージメント・研修投資額・離職率などの開示が求められ、採用市場への影響も予測される。',
    background_emotion:
      '「人が資本」という言葉は浸透しているが、「どう数字で示すか」という実務的焦りが人事・経営者を動かしている。',
    desire: '人材への投資を可視化し、優秀な人材を惹きつけ続けたい。',
    trend_direction:
      '「人を大切にする会社」の証明が競争優位になる時代。人的資本開示は採用・調達・投資のすべてに影響する。',
    marketing_insight:
      '人的資本開示支援・HRテック・エンゲージメント測定ツールへの企業需要が急増。中堅企業向けに「手軽に始められる」ソリューションに大きな商機。',
    generation_tags: ['gen_x', 'gen_millennial'],
    category: 'businessman',
    source_name: '日本経済新聞',
    source_url: 'https://www.nikkei.com/',
    published_at: `${TODAY}T07:00:00+09:00`,
    analyzed_at: `${TODAY}T08:05:00+09:00`,
    batch_date: TODAY,
    rank: 2,
    is_fallback: false,
    source_type: 'rss',
  },
  {
    id: 'biz-003',
    title: '越境EC市場、日本製品への海外需要が3年で2倍に拡大',
    summary:
      '経産省の調査で日本の越境EC市場規模が3年前比2倍に達し、食品・化粧品・伝統工芸品のカテゴリーで特に海外需要が高まっていることが明らかになった。中小企業の海外展開機会として注目されている。',
    background_emotion:
      '「日本のものが世界に評価されている」という誇りと、「うちの商品も売れるかもしれない」という期待感が広がっている。',
    desire: '国内市場の縮小を海外需要で補い、ビジネスをスケールさせたい。',
    trend_direction:
      '「メイドインジャパン」ブランドの再評価が、中小製造業・農業・伝統産業にグローバル市場への窓口を開きつつある。',
    marketing_insight:
      '越境EC支援・多言語対応・物流代行サービスへの需要が中小企業から急増。「最初の一歩を簡単に」するサービスが差別化になる。',
    generation_tags: ['gen_millennial', 'gen_x', 'gen_bubble_dankai_jr'],
    category: 'businessman',
    source_name: 'ITmedia',
    source_url: 'https://www.itmedia.co.jp/',
    published_at: `${TODAY}T06:30:00+09:00`,
    analyzed_at: `${TODAY}T08:05:00+09:00`,
    batch_date: TODAY,
    rank: 3,
    is_fallback: false,
    source_type: 'rss',
  },

  // ─── JKトレンド ───
  {
    id: 'jk-001',
    title: '女子高生の間で「静かな趣味」がトレンド、読書・刺繍・陶芸に人気',
    summary:
      'SNSで映える派手な活動よりも、集中して没頭できる「静かな趣味」が女子高生の間でひそかなブームになっている。読書会・刺繍クラブ・陶芸体験への参加者が増加している。',
    background_emotion:
      '情報過多な日常のなかで「頭を空にできる時間」への渇望が高まり、ゆっくり手を動かすことへの癒しを求めている。',
    desire: 'SNSから離れた、自分だけの本物の「好き」を見つけたい。',
    trend_direction:
      '若年層の「スロー志向」が表面化。「映える」より「満たされる」体験への転換が次の消費トレンドを形成しつつある。',
    marketing_insight:
      '10〜20代向け体験型・ハンドメイド・マインドフルネスサービスに波が来ている。「インスタ映えしない良さ」の訴求が逆に刺さる。',
    generation_tags: ['gen_z', 'gen_alpha'],
    category: 'jk_trend',
    source_name: 'Yahoo!ニュース',
    source_url: 'https://news.yahoo.co.jp/',
    published_at: `${TODAY}T06:00:00+09:00`,
    analyzed_at: `${TODAY}T08:05:00+09:00`,
    batch_date: TODAY,
    rank: 1,
    is_fallback: false,
    source_type: 'manual',
  },
  {
    id: 'jk-002',
    title: '「推し活×勉強」の両立スタイル、受験生の間でムーブメントに',
    summary:
      '推しのライブに向けて勉強のモチベーションを高める「推し勉」スタイルが受験生を中心に広がり、学習計画と推し活スケジュールを連動させる手帳やアプリへの需要が高まっている。',
    background_emotion:
      '「やりたいことをやりながら目標も達成したい」というZ世代らしいハイブリッド志向が根底にある。',
    desire: '好きなことを原動力に、自分の可能性を最大限に引き出したい。',
    trend_direction:
      '「犠牲と努力」型の受験文化が崩れ、「楽しさと目標達成」を両立する新しい勉強スタイルが主流化しつつある。',
    marketing_insight:
      '教育サービスは「好きなこととの連動」という切り口で設計すると10〜20代に訴求できる。推し活との親和性が高いサービスに商機。',
    generation_tags: ['gen_z', 'gen_alpha'],
    category: 'jk_trend',
    source_name: 'Yahoo!ニュース',
    source_url: 'https://news.yahoo.co.jp/',
    published_at: `${TODAY}T05:30:00+09:00`,
    analyzed_at: `${TODAY}T08:05:00+09:00`,
    batch_date: TODAY,
    rank: 2,
    is_fallback: false,
    source_type: 'manual',
  },
  {
    id: 'jk-003',
    title: 'JKの「タイパ重視」消費、ファッション・メイクでの時短志向が鮮明に',
    summary:
      '女子高生のファッション・コスメ消費において「タイムパフォーマンス」志向が強まり、「10分で完成するメイク」「着回し最大化できる服」が人気カテゴリとして台頭している。',
    background_emotion:
      '限られた時間でやりたいことすべてを詰め込もうとする充実志向と、「手を抜きたいわけじゃない」というこだわりが共存している。',
    desire: '少ない時間とお金でも、自分らしくかわいくいたい。',
    trend_direction:
      '若年層消費のキーワードが「コスパ」から「タイパ」へ進化。時間効率が品質評価の新たな軸になっている。',
    marketing_insight:
      '「時短・シンプル・高効率」は若年層向け商品の必須要件になった。「何分でできるか」を前面に出すコミュニケーションが有効。',
    generation_tags: ['gen_z', 'gen_alpha'],
    category: 'jk_trend',
    source_name: 'Yahoo!ニュース',
    source_url: 'https://news.yahoo.co.jp/',
    published_at: `${TODAY}T05:00:00+09:00`,
    analyzed_at: `${TODAY}T08:05:00+09:00`,
    batch_date: TODAY,
    rank: 3,
    is_fallback: false,
    source_type: 'manual',
  },
]
