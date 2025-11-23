import React, { useState, useMemo, useEffect } from 'react';
import { User, Star, Briefcase, X, ArrowUpRight, Github, Code, Cpu, Database, Terminal, Music, Users, CheckCircle } from 'lucide-react';

// --- データセクション ---
const portfolioData = {
  name: "藤井琢也",
  title: "大学院生 / エンジニア / 技術的PM",
  // 変更点: キャッチコピーを「技術×ビジネス価値」と「性格（戦略・粘り強さ）」を強調するものへ
  catchphrase: "技術で、ビジネス価値を創出する。\n―― 緻密な戦略と粘り強い実装力で、\n難題を突破するエンジニア",
  about: {
    // 変更点: 自己紹介文に「没頭力」「計画性」を追加
    introduction: "私の原動力は、困難な課題に対する「没頭力」と、ゴールへ確実に到達するための「緻密な計画性」です。大学院でのAI研究や長期インターンシップでの開発リーダー経験を通じて、技術的な難題に直面しても、泥臭い仮説検証と論理的な戦略立てで解決策を導き出してきました。「コスト70%削減」や「精度85%達成」といった結果は、そのプロセスの結晶です。技術とビジネスの両利きの視点を持ち、チームを巻き込みながら価値あるプロダクトを生み出します。",
    story: [
      {
        heading: "「没頭力」の原体験：音楽との出会い",
        content: "幼少期から音楽に親しみ、4歳でピアノ、16歳でホルンを始めました。一つのフレーズを納得いくまで数百回練習するなど、時間を忘れて物事にのめり込む「没頭力」と、目標達成のために数年単位で努力を続ける「継続力」はこの経験から育まれました。"
      },
      {
        heading: "「緻密な計画」で挑む：AI・技術への探求",
        content: "大学・大学院では、単なる知的好奇心を超え、「社会課題をどう技術で解決するか」というテーマに没頭しています。研究では精度が出ない壁にぶつかった際も、闇雲な試行錯誤ではなく、失敗データを分析して検証計画を立て直すプロセスを徹底し、精度を85%まで引き上げました。この「計画に基づいた粘り強さ」は、エンジニアリングにおいても私の最大の武器です。"
      },
      {
        heading: "「伝達力」とリーダーシップ",
        content: "4年間の塾講師経験と、100人超のオーケストラ指揮者の経験は、専門外の人に技術を伝える「翻訳力」と、多様なメンバーを一つのゴールへ導く「統率力」を養いました。開発現場でも、PMとして曖昧な要件を具体的な仕様に落とし込んだり、メンバーの強みを活かしたタスク配分を行ったりと、チームの最大化に貢献しています。"
      }
    ],
    imageUrl: `./images/avatar.jpg`, // ユーザー環境に合わせて適宜変更してください
    timeline: [
      { year: "2025年", event: "東京理科大学 創域理工学研究科 情報計算科学専攻 入学" },
      { year: "2025年", event: "IT企業にて長期インターンシップ (リードエンジニア/PM)" },
      { year: "2023年", event: "大学オーケストラで学生指揮者を務める" },
      { year: "2021年", event: "学習塾にて講師のアルバイト（4年間）" },
      { year: "2021年", event: "東京理理科大学 理工学部 情報科学科 入学" },
    ],
    // 変更点: Valuesを「性格・プロセス」重視の内容へ刷新
    values: [
      {
        title: "緻密な計画性と没頭力による「突破力」",
        description: "難しい課題に対し、時間を忘れて取り組む「没頭力」と、ゴールから逆算してステップを刻む「計画性」を兼ね備えています。AI開発での原因不明のエラーや、研究での精度の壁に対しても、諦めずに仮説検証を回し続け、必ず突破口を見つけ出します。"
      },
      {
        title: "ビジネス視点での課題解決",
        description: "技術を自己目的化せず、「それはコストに見合うか？」「本当に業務が楽になるか？」というビジネス視点を常に持っています。インターンでは、技術選定の基準に「コスト対効果」を組み込み、年間2,000万円規模のコスト削減を実現しました。"
      },
      {
        title: "多様性を束ねるリーダーシップ",
        description: "100人超のオーケストラや開発チームなど、多様な背景を持つメンバーをまとめることが得意です。一方的な指示ではなく、個々の強みや意見を引き出し（傾聴）、納得感のある合意形成（納得解）を導くことで、チームのパフォーマンスを最大化します。"
      },
    ],
    socials: {}
  },
  skills: [
    {
      category: "AI / Backend",
      items: [
        { name: "Python (FastAPI)", level: 5, experience: "4年" },
        { name: "Azure OpenAI / LLM", level: 4, experience: "1年" },
        { name: "Dify / RAG構築", level: 4, experience: "1年" },
        { name: "Java", level: 5, experience: "4年" },
      ]
    },
    {
      category: "Frontend / Mobile",
      items: [
        { name: "React / TypeScript", level: 4, experience: "2年" },
        { name: "Next.js", level: 3, experience: "2年" },
        { name: "Unity (C#)", level: 3, experience: "2年" },
        { name: "XR Interaction Toolkit", level: 3, experience: "1年" },
      ]
    },
    {
      category: "Cloud / Infra / Security",
      items: [
        { name: "AWS", level: 3, experience: "1年" },
        { name: "Entra ID (SSO)", level: 3, experience: "半年" },
        { name: "Docker", level: 3, experience: "1年" },
        { name: "Git / GitHub", level: 4, experience: "3年" },
      ]
    }
  ],
  works: [
    // 変更点: 以下のNo.1を新規追加（メイン実績）
    {
      id: 1,
      category: "長期インターンシップ",
      title: "社内向け独自AIエージェント基盤「思考のパートナー」",
      thumbnail: `https://placehold.co/600x400/2563EB/FFFFFF?text=AI+Agent+Platform`,
      description: "年間2,000万円のコスト課題に対し、内製開発で約70%の削減を実現。RAGやSSOを実装し、全社導入されたセキュアなAI基盤。",
      tags: ["コスト削減", "React", "Dify", "Azure OpenAI", "RAG", "Entra ID", "PM", "要件定義"],
      overview: "ChatGPT Enterprise版の全社導入にかかる莫大なコスト（年間約2,000万円）と、社内情報の散在による検索非効率を解決するために立ち上げられたプロジェクト。私はPM兼リードエンジニアとして、要件定義からアーキテクチャ設計、実装までを一貫して主導しました。単なるチャットボットではなく、社内ドキュメントを知識として持つ「RAG機能」や、社員の思考をガイドするUIを実装し、コストを約600万円に圧縮（70%削減）しつつ、業務効率を劇的に向上させました。",
      siteUrl: null,
      repoUrl: "#", // 社外秘のため非公開
      screenshots: [
        './images/ai-agent-1.png', // 仮のパス
      ],
      stack: {
        "Role": "PM & Lead Engineer",
        "Frontend": "React, Vite, CSS Modules",
        "Backend (BaaS)": "Dify (Workflow Mode)",
        "AI / Search": "Azure OpenAI (GPT-4), Perplexity API",
        "Auth": "Microsoft Entra ID (SSO)",
        "Key Tech": "Server-Sent Events (Streaming), RAG (Vector Search)"
      },
      points: [
        "ビジネスインパクトの創出：既存製品の導入ではなく、API従量課金とOSS基盤(Dify)を組み合わせた内製化を選択し、機能要件を満たしつつ年間約1,400万円のコスト削減見込みを立証しました。",
        "緻密な計画によるアジャイル開発：曖昧な要望に対し、いきなり完成品を作らず「ファイル要約機能」→「検索機能」と段階的にリリースする計画を策定。フィードバックを即座に反映するサイクルを回し、手戻りを最小限に抑えました。",
        "技術的な壁の突破（没頭力）：Dify APIの特殊なストリーミング仕様による日本語文字化け問題に直面した際、バイナリ処理の独自デコーダーを実装するために数日間没頭して検証を実施。結果、AIの思考過程がリアルタイムに見える滑らかなUXを実現しました。",
        "セキュリティと利便性の両立：全社員が利用するMicrosoftアカウント（Entra ID）を用いたシングルサインオン(SSO)を設計・実装し、セキュアかつログインの手間がない環境を構築しました。"
      ]
    },
    // 変更点: 既存の画像処理PFをNo.2として配置（サブ実績・基盤としてのアピール）
    {
      id: 2,
      category: "長期インターンシップ",
      title: "業務効率を50倍にした画像処理プラットフォーム",
      thumbnail: `https://placehold.co/600x400/A5B4FC/FFFFFF?text=Image+Processing+PF`,
      description: "複数部署の手作業（月160時間）を自動化する統合Web基盤。特定業務において処理時間を10分→12秒に短縮。",
      tags: ["業務改善", "Webプラットフォーム", "React", "Python", "AWS", "Canvas API", "技術リード"],
      overview: "各部署でバラバラに行われていた画像加工業務（リサイズ、トリミング、ロゴ配置など）を統合・効率化するためのWebプラットフォーム。私は技術リーダーとして、拡張性の高い「ツール選択型アーキテクチャ」を設計しました。LINEアイコン生成ツールやリネームツールなど、部署ごとのニッチな要望に応えるツール群をこの基盤上で展開し、全社的な生産性向上に貢献しました。",
      siteUrl: null,
      repoUrl: "#",
      screenshots: [
        './images/platform.png',
      ],
      stack: {
        "Role": "Tech Lead (Architecture & Frontend)",
        "Frontend": "React, TypeScript",
        "Backend": "Python, FastAPI, AWS Lambda",
        "Core Tech": "Canvas API, Web Workers (Client-Side Processing)",
        "Team": "10名 (PM1, Tech Lead2, Member7)"
      },
      points: [
        "徹底した現場ヒアリングと課題抽出：開発前に3部署へヒアリングを行い、「画一的な自動化では対応できない（部署ごとにルールが違う）」という本質的な課題を発見。それに基づき、柔軟にツールを選べるプラットフォーム構成を提案しました。",
        "クライアントサイド処理による高速化：サーバー負荷とセキュリティリスクを低減するため、Canvas APIとWeb Workersを用いてブラウザ内で画像処理を完結させる設計を採用。大量枚数の処理でもUIが固まらない快適な動作を実現しました。",
        "50倍の生産性向上：特に手間の掛かっていたLINEミニアプリアイコン作成業務において、1件10分の作業を12秒に短縮。月間160時間の工数削減を達成し、社員がより創造的な業務に時間を使えるようにしました。"
      ]
    },
    // 変更点: 研究実績（没頭力・継続力アピール）
    {
      id: 3,
      category: "研究",
      title: "VR眼精疲労のリアルタイム予測システム",
      thumbnail: `https://placehold.co/600x400/FCA5A5/FFFFFF?text=VR+Research`,
      description: "アイトラッキングによりVRの「目の疲れ」を可視化。60%の精度停滞から、粘り強い仮説検証で85%まで向上。",
      tags: ["機械学習", "Python", "データ分析", "VR/AR", "HCI", "研究発表"],
      overview: "VR普及の壁である「眼精疲労」を、主観（アンケート）ではなく、視線の動きから客観的に検知するシステムの構築。VR利用者の安全性を守るための研究です。",
      siteUrl: null,
      repoUrl: null,
      screenshots: [],
      stack: {
        "Theme": "VR眼精疲労のリアルタイム検知",
        "Data": "Eye Tracking (瞳孔径, サッケード, 瞬き)",
        "Model": "Random Forest",
        "Tech": "Python (Scikit-learn, Pandas)",
        "Accuracy": "85% (F1-score)"
      },
      points: [
        "粘り強い改善プロセス（継続力）：当初、瞳孔径のみを用いたモデルでは精度が60%程度で頭打ちになりました。そこで諦めず、「眼球の急速運動（サッケード）も疲労に関係するのではないか？」という仮説を立て、関連論文を読み込み実装。複数の指標を組み合わせることで、精度を85%まで引き上げました。",
        "リアルタイム性の追求：実用化を見据え、処理の軽い特徴量抽出アルゴリズムを選定。VR体験を阻害せずにバックグラウンドで疲労判定を行うシステムを実現しました。",
        "社会実装への視点：VRゲームの品質管理や医療リハビリの安全確保など、具体的な利用シーンを想定して研究を進めています。"
      ]
    },
    // 変更点: オープンキャンパス実績（UX・エンタメ）
    {
      id: 4,
      category: "学内プロジェクト",
      title: "VR脱出ゲーム（オープンキャンパス展示）",
      thumbnail: `https://placehold.co/600x400/D8B4FE/FFFFFF?text=VR+Escape+Game`,
      description: "Unityで開発した没入型VRゲーム。VR酔い対策などユーザー体験（UX）にこだわり、来場者へ「ワクワク」を提供。",
      tags: ["Unity", "VR", "C#", "XR Interaction Toolkit", "チーム開発", "UXデザイン"],
      overview: "オープンキャンパス来場者にVRの楽しさを伝えるために開発した脱出ゲーム。3名チームで、私はビジュアル演出とパフォーマンス最適化を担当しました。",
      siteUrl: null,
      repoUrl: "https://github.com/takutaku14/VRGame-OC",
      screenshots: [
        './images/oc1.png',
      ],
      stack: {
        "Engine": "Unity",
        "Language": "C#",
        "Device": "Meta Quest",
        "Role": "Visual & Performance Optimization"
      },
      points: [
        "UXへの徹底したこだわり：多くの来場者がVR初体験であることを考慮し、VR酔いを防ぐ移動方式の採用や、直感的に操作できるインタラクション設計に注力しました。",
        "没入感を高めるパフォーマンス調整：モバイルVRであるMeta Questでも快適に動作するよう、ポリゴン数削減やライティングのベイク処理などを徹底。フレームレートを維持しつつ、リッチな世界観を表現しました。"
      ]
    },
    // 変更点: リーダーシップ実績
    {
      id: 5,
      category: "その他の活動",
      title: "大学オーケストラ 学生指揮者",
      thumbnail: `https://placehold.co/600x400/93C5FD/FFFFFF?text=Orchestra`,
      description: "100人超の団員を率い、武道館での演奏を指揮。多様な個性を一つのハーモニーにまとめる統率力を発揮。",
      tags: ["リーダーシップ", "マネジメント", "チームビルディング", "コミュニケーション"],
      overview: "100名を超える団員の学生指揮者として、定期演奏会や武道館での卒業式での演奏を指揮。技術レベルやモチベーションの異なるメンバーをまとめ上げました。",
      siteUrl: null,
      repoUrl: null,
      screenshots: [],
      stack: {
        "Role": "Conductor",
        "Scale": "100+ Members",
        "Event": "日本武道館での卒業式演奏 等"
      },
      points: [
        "個に向き合うリーダーシップ：一方的に指示するのではなく、各パートのリーダーと対話を重ね、団員一人ひとりの課題や要望を汲み上げることで、全員が納得して練習に取り組める環境を作りました。",
        "本番へ向けた計画的な運営：演奏会までの数ヶ月間の練習計画を逆算して策定。進捗が遅れているパートには個別にフォローを入れるなど、全体を俯瞰しながらプロジェクト（練習）を推進しました。"
      ]
    }
  ]
};

// --- コンポーネントセクション ---
// (コンポーネントの構造は基本的に維持しつつ、デザイン調整)

const AnimateOnScroll = ({ children, delay = 0, threshold = 0.1, className = '' }) => {
  const ref = React.useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );
    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);
    return () => { if (currentRef) observer.unobserve(currentRef); };
  }, [ref, threshold]);

  return (
    <div
      ref={ref}
      className={`scroll-fade-in ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const StarRating = ({ level }) => (
  <div className="flex items-center">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 animate-star-appear ${i < level ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
        style={{ animationDelay: `${i * 80}ms` }}
      />
    ))}
  </div>
);

// Homeセクション
const Home = ({ data, onWorkClick }) => {
  // 変更点: Focus Areasを「今回の戦略」に合わせて更新
  const focusAreas = [
    {
      title: "ビジネス価値の創出",
      description: "技術を手段として捉え、コスト削減や業務効率化といった「目に見える成果」にコミットします。インターンでは年間2,000万円のコスト削減を実現しました。",
      icon: Briefcase,
      workId: 1, // AI Agent
    },
    {
      title: "技術への没頭と探求",
      description: "VRやAIなどの先端技術に対し、時間を忘れて没頭する熱量を持っています。壁にぶつかっても緻密な計画と粘り強さで乗り越えます。",
      icon: Cpu,
      workId: 3, // VR Research
    },
    {
      title: "組織を導くリーダーシップ",
      description: "100人規模のオーケストラ指揮経験で培った、多様なメンバーを尊重し、一つのゴールへ導く「統率力」があります。",
      icon: Users,
      workId: 5, // Orchestra
    }
  ];

  const keySkills = ["Python", "React", "Azure OpenAI", "Dify", "AWS", "Unity", "TypeScript"];

  return (
    <div className="p-8 md:p-12">
      <main className="max-w-4xl mx-auto">
        <AnimateOnScroll className="text-center mb-16">
          <section>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 tracking-tight whitespace-pre-line leading-tight">
              {data.catchphrase}
            </h1>
            <p className="mt-6 text-xl text-gray-600 font-medium">{data.name} | {data.title}</p>
          </section>
        </AnimateOnScroll>

        <AnimateOnScroll className="mb-16" delay={100}>
          <section className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-blue-100">
            <h2 className="text-lg font-bold text-blue-800 mb-3 flex items-center gap-2">
              <User size={20}/> Introduction
            </h2>
            <p className="text-md text-gray-700 leading-relaxed">
              {data.about.introduction}
            </p>
          </section>
        </AnimateOnScroll>

        <section>
          <AnimateOnScroll>
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">Core Strengths</h2>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-6">
            {focusAreas.map((area, index) => {
              const work = area.workId ? data.works.find(w => w.id === area.workId) : null;
              return (
                <AnimateOnScroll key={area.title} delay={150 * index} className="h-full">
                  <div
                       onClick={() => work && onWorkClick(work)}
                       className={`bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 h-full flex flex-col items-center text-center
                         ${work ? 'cursor-pointer hover:shadow-lg hover:border-blue-300 hover:-translate-y-1' : ''}`}>
                    <div className="bg-blue-50 p-4 rounded-full mb-4 text-blue-600">
                      <area.icon size={32} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-3">{area.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{area.description}</p>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </section>

        <AnimateOnScroll className="mt-16 text-center" delay={200}>
          <h2 className="text-xl font-bold text-gray-800 mb-6">Main Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {keySkills.map(skill => (
              <span key={skill} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium border border-gray-200">
                {skill}
              </span>
            ))}
          </div>
        </AnimateOnScroll>
      </main>
    </div>
  );
};

// Aboutセクション
const About = ({ data }) => (
  <div className="p-8 md:p-12">
    <div className="max-w-5xl mx-auto">
      <AnimateOnScroll>
        <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
          <User className="text-blue-600"/> About Me
        </h2>
      </AnimateOnScroll>
      
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Column: Values */}
        <div className="lg:w-1/2 space-y-8">
           <AnimateOnScroll delay={100}>
            <h3 className="text-xl font-bold text-gray-700 mb-4 border-l-4 border-blue-500 pl-3">Values & Strengths</h3>
            <div className="space-y-4">
              {data.values.map((value, idx) => (
                <div key={idx} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="font-bold text-blue-900 mb-2">{value.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll delay={200}>
             <h3 className="text-xl font-bold text-gray-700 mb-4 border-l-4 border-blue-500 pl-3">Timeline</h3>
             <div className="border-l-2 border-gray-200 ml-3 space-y-6 py-2">
              {data.timeline.map((item, idx) => (
                <div key={idx} className="relative pl-8">
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-white border-4 border-blue-400 rounded-full"></div>
                  <p className="font-bold text-gray-800 text-sm">{item.year}</p>
                  <p className="text-gray-600 text-sm mt-1">{item.event}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>

        {/* Right Column: Story */}
        <div className="lg:w-1/2">
           <AnimateOnScroll delay={300}>
            <h3 className="text-xl font-bold text-gray-700 mb-6 border-l-4 border-blue-500 pl-3">My Story</h3>
            <div className="space-y-8">
              {data.story.map((section, index) => (
                <div key={index}>
                  <h4 className="text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <CheckCircle size={16} className="text-blue-400"/>
                    {section.heading}
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-sm">{section.content}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </div>
  </div>
);

// Skillsセクション
const Skills = ({ data }) => (
  <div className="p-8 md:p-12">
    <div className="max-w-5xl mx-auto">
      <AnimateOnScroll>
        <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
          <Terminal className="text-blue-600"/> Skills
        </h2>
      </AnimateOnScroll>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((category, index) => (
          <AnimateOnScroll key={category.category} delay={150 * index} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-lg font-bold text-blue-800 mb-4 pb-2 border-b border-gray-100">{category.category}</h3>
            <div className="space-y-4">
              {category.items.map(skill => (
                <div key={skill.name}>
                  <div className="flex justify-between items-end mb-1">
                    <span className="font-semibold text-gray-700 text-sm">{skill.name}</span>
                    <span className="text-xs text-gray-400">{skill.experience}</span>
                  </div>
                  <StarRating level={skill.level} />
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </div>
  </div>
);

// Worksセクション
const Works = ({ data, onWorkClick }) => {
  // 変更点: カテゴリ順序の制御
  const categoryOrder = ["長期インターンシップ", "研究", "学内プロジェクト", "その他の活動"];
  
  const groupedWorks = data.reduce((acc, work) => {
    const cat = work.category || "その他";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(work);
    return acc;
  }, {});

  const WorkCard = ({ work, isLarge = false }) => (
    <div 
      onClick={() => onWorkClick(work)}
      className={`bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group flex flex-col
        ${isLarge ? 'md:flex-row md:h-64' : 'h-[420px]'}`}
    >
      <div className={`overflow-hidden flex-shrink-0 ${isLarge ? 'md:w-2/5 h-48 md:h-full' : 'h-48 w-full'}`}>
        <img src={work.thumbnail} alt={work.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-5 flex flex-col flex-grow justify-between">
        <div>
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">{work.category}</span>
          </div>
          <h3 className={`font-bold text-gray-800 mb-2 ${isLarge ? 'text-xl' : 'text-lg'}`}>{work.title}</h3>
          <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">{work.description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {work.tags.slice(0, isLarge ? 6 : 4).map(tag => (
            <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded border border-gray-200">#{tag}</span>
          ))}
          {work.tags.length > (isLarge ? 6 : 4) && <span className="text-xs text-gray-400 self-center">...</span>}
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-8 md:p-12">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll>
          <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
            <Briefcase className="text-blue-600"/> Works
          </h2>
        </AnimateOnScroll>

        {categoryOrder.map((catName) => {
          const works = groupedWorks[catName];
          if (!works) return null;

          // インターンシップ（ビジネス実績）は目立たせる
          const isHighlight = catName === "長期インターンシップ";

          return (
            <section key={catName} className="mb-12">
              <AnimateOnScroll>
                <h3 className="text-xl font-bold text-gray-700 border-l-4 border-blue-500 pl-3 mb-6">
                  {catName === "長期インターンシップ" ? "Business Projects (Internship)" : 
                   catName === "研究" ? "Academic Research" : 
                   catName === "学内プロジェクト" ? "Creative Projects" : "Leadership & Others"}
                </h3>
              </AnimateOnScroll>
              
              <div className={`grid gap-6 ${isHighlight ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
                {works.map((work, idx) => (
                  <AnimateOnScroll key={work.id} delay={idx * 100}>
                    {/* インターンシップの項目は横長カード(isLarge)で強調表示 */}
                    <WorkCard work={work} isLarge={isHighlight} />
                  </AnimateOnScroll>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

// 詳細モーダル (デザイン微調整)
const WorkDetailModal = ({ work, onClose }) => {
  if (!work) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex justify-center items-center p-4 animate-fade-in-fast" onClick={onClose}>
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden" onClick={e => e.stopPropagation()}>
        <header className="p-5 border-b border-gray-100 flex justify-between items-center bg-gray-50">
          <div>
            <span className="text-xs font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded mb-1 inline-block">{work.category}</span>
            <h3 className="font-bold text-xl text-gray-800">{work.title}</h3>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-200 rounded-full transition-colors">
            <X size={24} className="text-gray-500" />
          </button>
        </header>
        
        <main className="p-6 overflow-y-auto custom-scrollbar">
          {/* 画像表示エリア (簡易版) */}
          {work.screenshots && work.screenshots.length > 0 && (
             <div className="mb-8 rounded-lg overflow-hidden border border-gray-200 shadow-sm bg-gray-100">
               <img src={work.screenshots[0]} alt="Screenshot" className="w-full h-auto max-h-[400px] object-contain mx-auto" />
             </div>
          )}

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              <section>
                <h4 className="font-bold text-gray-800 mb-3 text-lg border-b border-gray-200 pb-1">概要</h4>
                <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">{work.overview}</p>
              </section>

              <section>
                <h4 className="font-bold text-gray-800 mb-3 text-lg border-b border-gray-200 pb-1">工夫した点・プロセス</h4>
                <ul className="space-y-3">
                  {work.points.map((point, i) => (
                    <li key={i} className="flex gap-3 text-gray-600 leading-relaxed">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold mt-0.5">{i + 1}</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <div className="md:col-span-1 space-y-6">
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Code size={18}/> Tech Stack
                </h4>
                <div className="space-y-3 text-sm">
                  {work.stack && Object.entries(work.stack).map(([key, value]) => (
                    <div key={key}>
                      <dt className="text-gray-500 font-medium text-xs uppercase tracking-wider">{key}</dt>
                      <dd className="text-gray-800 font-semibold mt-0.5">{value}</dd>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                {work.siteUrl && (
                  <a href={work.siteUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition font-bold shadow-sm">
                    <ArrowUpRight size={18}/> サイトを見る
                  </a>
                )}
                {work.repoUrl && work.repoUrl !== '#' && (
                  <a href={work.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-gray-800 text-white px-4 py-3 rounded-lg hover:bg-gray-900 transition font-bold shadow-sm">
                    <Github size={18}/> GitHubを見る
                  </a>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

// Dock (ナビゲーション)
const Dock = ({ activeView, setActiveView }) => {
  const navItems = [
    { id: 'Home', label: 'Home', icon: User }, // HomeアイコンをUserに変更(Profile的な意味合い)
    { id: 'About', label: 'About', icon: Briefcase }, // Aboutアイコン変更
    { id: 'Skills', label: 'Skills', icon: Terminal },
    { id: 'Works', label: 'Works', icon: Code },
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
      <ul className="flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/50 shadow-xl ring-1 ring-gray-900/5">
        {navItems.map(item => (
          <li key={item.id}>
            <button
              onClick={() => setActiveView(item.id)}
              className={`relative flex flex-col items-center justify-center w-14 h-14 rounded-xl transition-all duration-300 ease-out
                          ${activeView === item.id 
                            ? 'bg-blue-600 text-white shadow-md scale-110 -translate-y-2' 
                            : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'}`}
            >
              <item.icon size={24} strokeWidth={activeView === item.id ? 2.5 : 2} />
              {activeView === item.id && (
                <span className="absolute -bottom-6 text-[10px] font-bold text-gray-600 tracking-wide animate-fade-in-fast">
                  {item.label}
                </span>
              )}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default function App() {
  const [activeView, setActiveView] = useState('Home');
  const [selectedWork, setSelectedWork] = useState(null);

  return (
    <div className="font-sans w-full h-screen bg-slate-50 text-slate-800">
      <div className="fixed inset-0 pointer-events-none opacity-40" 
           style={{ background: 'radial-gradient(circle at 50% 0%, #E0F2FE, transparent 70%), radial-gradient(circle at 80% 80%, #F3E8FF, transparent 50%)' }} />
      
      <main className="w-full h-full overflow-y-auto pb-32 relative z-10 custom-scrollbar">
        {activeView === 'Home' && <Home data={portfolioData} onWorkClick={setSelectedWork} />}
        {activeView === 'About' && <About data={portfolioData.about} />}
        {activeView === 'Skills' && <Skills data={portfolioData.skills} />}
        {activeView === 'Works' && <Works data={portfolioData.works} onWorkClick={setSelectedWork} />}
      </main>

      <Dock activeView={activeView} setActiveView={setActiveView} />
      <WorkDetailModal work={selectedWork} onClose={() => setSelectedWork(null)} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap');
        .font-sans { font-family: 'Noto Sans JP', sans-serif; }
        
        .custom-scrollbar::-webkit-scrollbar { width: 8px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background-color: #cbd5e1; border-radius: 20px; border: 3px solid transparent; background-clip: content-box; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background-color: #94a3b8; }

        .scroll-fade-in { opacity: 0; transform: translateY(20px); transition: opacity 0.6s ease-out, transform 0.6s ease-out; }
        .scroll-fade-in.is-visible { opacity: 1; transform: translateY(0); }
        
        @keyframes star-appear {
          0% { transform: scale(0) rotate(-180deg); opacity: 0; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        .animate-star-appear { animation: star-appear 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; opacity: 0; }
        
        @keyframes fade-in-fast { from { opacity: 0; } to { opacity: 1; } }
        .animate-fade-in-fast { animation: fade-in-fast 0.2s ease-out forwards; }
      `}</style>
    </div>
  );
}