import React, { useState, useEffect, useRef } from 'react';
import { User, Briefcase, Terminal, Code, X, ArrowUpRight, Github, ChevronRight, ChevronLeft, Star, Cpu, Users, Info, Home as HomeIcon, Lock, Clock, Lightbulb, Activity } from 'lucide-react';

// --- Data Section ---
const portfolioData = {
  name: "藤井琢也",
  title: "大学院生 / エンジニア / 技術的PM",
  catchphrase: {
    main: "技術で、\nビジネス価値を創出する。",
    sub: "緻密な戦略と粘り強い実装力で、\n難題を突破するエンジニア"
  },
  social: {
    github: "https://github.com/takutaku14/portforio-app",
    email: "mailto:your-email@example.com"
  },
  about: {
    summary: "大学院でのHCI（人とコンピュータの相互作用）研究と長期インターンでのPM経験を活かし、単なる機能実装ではなく「コスト削減」や「業務効率化」といったビジネスインパクトにコミットするエンジニアです。複雑な要件を整理する「計画性」と、泥臭い課題解決も厭わない「没頭力」で、価値あるプロダクトを創出します。",
    introduction: "私の原動力は、困難な課題に対する「没頭力」と、ゴールへ確実に到達するための「緻密な計画性」です。大学院での「視線解析」の研究や長期インターンシップでの開発リーダー経験を通じて、技術的な難題に直面しても、泥臭い仮説検証と論理的な戦略立てで解決策を導き出してきました。「コスト70%削減」や「精度85%達成」といった結果は、そのプロセスの結晶です。技術とビジネスの両利きの視点を持ち、チームを巻き込みながら価値あるプロダクトを生み出します。",
    story: [
      {
        heading: "「没頭力」の原体験：音楽との出会い",
        content: "幼少期から音楽に親しみ、4歳でピアノ、16歳でホルンを始めました。一つのフレーズを納得いくまで数百回練習するなど、時間を忘れて物事にのめり込む「没頭力」と、目標達成のために数年単位で努力を続ける「継続力」はこの経験から育まれました。"
      },
      {
        heading: "「緻密な計画」で挑む：研究への探求",
        content: "大学院では、「VR空間における目の疲れ」をテーマに研究しています。学部時代、瞳孔（黒目）の開き具合で疲れを測ろうとしましたが、光の明るさで数値が変わってしまい、失敗しました。そこで、単なる試行錯誤ではなく失敗データを詳細に分析。「生理反応ではなく、目の動き方に着目すべき」という仮説を導き出し、研究の方針を大きく転換（ピボット）しました。この「データに基づく意思決定」と「柔軟な軌道修正」は、エンジニアリングにおいても私の最大の武器です。"
      },
      {
        heading: "「伝達力」とリーダーシップ",
        content: "4年間の塾講師経験と、100人超のオーケストラ指揮者の経験は、専門外の人に技術を伝える「翻訳力」と、多様なメンバーを一つのゴールへ導く「統率力」を養いました。開発現場でも、PMとして曖昧な要件を具体的な仕様に落とし込んだり、メンバーの強みを活かしたタスク配分を行ったりと、チームの最大化に貢献しています。"
      }
    ],
    timeline: [
      { year: "2025", event: "東京理科大学 創域理工学研究科 情報計算科学専攻 入学" },
      { year: "2025", event: "IT企業にて長期インターンシップ (リードエンジニア/PM)" },
      { year: "2023", event: "大学オーケストラで学生指揮者を務める" },
      { year: "2021", event: "学習塾にて講師のアルバイト（4年間）" },
      { year: "2021", event: "東京理科大学 理工学部 情報科学科 入学" },
    ],
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
    ]
  },
  skills: [
    {
      category: "AI / Backend",
      items: [
        { name: "Python (FastAPI / Pandas)", level: 5, experience: "4年" },
        { name: "Dify / RAG構築", level: 4, experience: "1年" },
        { name: "Java", level: 5, experience: "4年" },
      ]
    },
    {
      category: "Frontend / Mobile / XR",
      items: [
        { name: "React / TypeScript", level: 4, experience: "2年" },
        { name: "Unity (C#)", level: 4, experience: "2年" },
        { name: "Next.js", level: 3, experience: "2年" },
      ]
    },
    {
      category: "Cloud / Infra / Research Tools",
      items: [
        { name: "AWS", level: 3, experience: "1年" },
        { name: "Docker", level: 3, experience: "1年" },
        { name: "Git / GitHub", level: 4, experience: "3年" },
      ]
    }
  ],
  works: [
    {
      id: 1,
      category: "長期インターンシップ",
      title: "社内向け独自AIエージェント基盤「思考のパートナー」",
      thumbnail: `https://placehold.co/800x500/2563EB/FFFFFF?text=AI+Agent+Platform`,
      description: "年間2,000万円のコスト課題を内製化で70%削減。SSO（一括ログイン）による堅牢なセキュリティと、誰もが使える直感的なUIを兼ね備えた全社共通AI基盤。",
      tags: ["コスト削減", "React", "Dify", "Azure OpenAI", "RAG", "Entra ID", "PM", "要件定義"],
      role: "PM & Lead Engineer",
      isPrivate: true,
      repoUrl: "#",
      team: "3名",
      duration: "6ヶ月",
      focusPoint: "「コスト削減（-70%）」と「セキュリティ」を両立させつつ、ITリテラシーを問わず誰もが使える「直感的な操作画面」を実現した点。",
      overview: "ChatGPT Enterprise版の全社導入にかかる莫大なコスト（年間約2,000万円）と、社内情報の散在による検索非効率を解決するために立ち上げられたプロジェクト。私はPM兼リードエンジニアとして、要件定義から設計、実装までを一貫して主導しました。単なるチャットボットではなく、社内ドキュメントを検索して回答する「RAG機能」や、社員の思考をガイドする画面を実装し、コストを約600万円に圧縮（70%削減）しつつ、業務効率を劇的に向上させました。",
      siteUrl: null,
      screenshots: [
        {
          src: './images/ai-agent-1.png',
          label: 'メインチャット画面：直感的なUIと参照元の明示機能'
        },
      ],
      stack: {
        "Role": "PM & Lead Engineer",
        "Frontend": "React, Vite, CSS Modules",
        "Backend": "Dify (AIアプリ開発基盤)",
        "AI / Search": "Azure OpenAI (GPT-4), Perplexity API",
        "Auth": "Microsoft Entra ID (SSO認証)",
        "Key Tech": "Server-Sent Events, RAG"
      },
      points: [
        "ビジネスインパクトの創出（コスト削減）：既存製品の導入ではなく、使った分だけ支払う方式（API従量課金）とオープンソース基盤(Dify)を組み合わせた内製化を選択。必要な機能を満たしつつ、年間約1,400万円（70%）のコスト削減見込みを立証しました。",
        "企業基準のセキュリティ：全社員が利用するMicrosoftアカウントを用いたシングルサインオン(SSO)を実装。社内規定に準拠した安全なログインの仕組みを構築し、全社導入への障壁を取り除きました。",
        "「AIの民主化」を加速する直感的な画面：ITに詳しくない社員でも使えるよう、ドラッグ＆ドロップでのファイル操作や「議事録要約」などのテンプレート機能を実装。複雑な指示（プロンプト）の入力なしで高度なAI活用を可能にしました。",
        "信頼性の担保（AIの嘘対策）：業務利用における「AIの嘘」への不安を払拭するため、回答の根拠となる社内資料の参照元を脚注形式で厳密に表示する機能を実装し、情報の信頼性を可視化しました。",
        "技術的な壁の突破（没頭力）：開発ツール(Dify API)の仕様による日本語文字化け問題に直面した際、バイナリデータ処理の独自プログラムを実装するために数日間没頭して検証を実施。結果、AIの思考過程がリアルタイムに見える滑らかな操作体験を実現しました。"
      ]
    },
    {
      id: 2,
      category: "長期インターンシップ",
      title: "業務効率を50倍にした画像処理プラットフォーム",
      thumbnail: `https://placehold.co/800x500/A5B4FC/FFFFFF?text=Image+Processing+PF`,
      description: "複数部署の手作業（月160時間）を自動化する統合Web基盤。特定業務において処理時間を10分→12秒に短縮。",
      tags: ["業務改善", "Webプラットフォーム", "React", "Python", "AWS", "Canvas API", "技術リード"],
      role: "Full-stack Engineer",
      isPrivate: true,
      repoUrl: "#", // NDAあり
      team: "2名",
      duration: "3ヶ月",
      focusPoint: "現場ヒアリングに基づく「ツール選択型」の設計と、ブラウザ上での高速処理によるサーバー負荷軽減。",
      overview: "各部署でバラバラに行われていた画像加工業務（リサイズ、トリミング、ロゴ配置など）を統合・効率化するためのWebプラットフォーム。私は技術リーダーとして、拡張性の高い「ツール選択型アーキテクチャ」を設計しました。LINEアイコン生成ツールやリネームツールなど、部署ごとの細かい要望に応えるツール群をこの基盤上で展開し、全社的な生産性向上に貢献しました。",
      siteUrl: null,
      screenshots: [
        {
          src: './images/platform.png',
          label: 'ツール選択画面：部署ごとのニーズに合わせた機能一覧'
        }
      ],
      stack: {
        "Role": "Tech Lead",
        "Frontend": "React, TypeScript",
        "Backend": "Python, FastAPI, AWS Lambda",
        "Core Tech": "Canvas API (ブラウザ描画技術), Web Workers"
      },
      points: [
        "徹底した現場ヒアリングと課題抽出：開発前に3部署へヒアリングを行い、「画一的な自動化では対応できない（部署ごとにルールが違う）」という本質的な課題を発見。それに基づき、柔軟にツールを選べるプラットフォーム構成を提案しました。",
        "ブラウザ完結処理による高速化：サーバー負荷とセキュリティリスクを低減するため、Canvas API等を用いてブラウザ内（利用者のPC側）で画像処理を完結させる設計を採用。大量枚数の処理でも画面が固まらない快適な動作を実現しました。",
        "50倍の生産性向上：特に手間の掛かっていたLINEミニアプリアイコン作成業務において、1件10分の作業を12秒に短縮。月間160時間の工数削減を達成しました。"
      ]
    },
    {
      id: 3,
      category: "研究 (M1 / HCI)",
      title: "視線の『ズレ』を解析し、VRの「目の疲れ」をリアルタイム検知するシステム",
      thumbnail: `https://placehold.co/800x500/FCA5A5/FFFFFF?text=Eye+Fatigue+Detection`,
      description: "従来の測定法の限界（光によるノイズ）を、視線の「正確さ」を測る新手法で解決。AIサーバーを使わず、VRゴーグル単体で動く軽量システム。",
      tags: ["HCI", "信号処理", "Unity", "C#", "視線追跡", "FQlS", "研究"],
      role: "Researcher & Lead Developer",
      isPrivate: false,
      repoUrl: null, // リポジトリなし
      team: "個人研究",
      duration: "継続中",
      focusPoint: "光の影響を受けやすい「瞳孔」ではなく、疲れが直接動作に現れる「視線のズレ」に着目し、精度と安定性を劇的に改善した点。",
      overview: "VR利用者の安全を守るため、目の疲れ（眼精疲労）を自動検知するシステムの研究です。学部時代は「瞳孔（黒目）の大きさ」の変化を用いていましたが、光の明るさで数値が変わってしまうなど、精度が60%程度で頭打ちになる課題に直面しました。そこで大学院ではアプローチを刷新し、「疲れがたまると、見たい場所から視線がわずかにズレる」という現象（運動制御能力の低下）に着目。先行研究の『FQlS（視線のズレ具合を数値化した指標）』をVRに応用することで、周囲の明るさに左右されない安定した検知を実現しました。高価なAIサーバーに頼らず、計算資源の限られたVRゴーグル単体でも動く、軽量な設計にこだわっています。",
      siteUrl: null,
      screenshots: [
        {
          src: './images/re2.png',
          label: 'FQlSの概念図：ターゲット（白）と実際の視線（青）の空間的ズレを解析'
        },
        {
          src: './images/re3.png',
          label: 'VR実験環境：HMD装着時の視線データ取得イメージ'
        }
      ],
      stack: {
        "Theme": "眼球運動解析 (Oculomotor Behavior Analysis)",
        "Algorithm": "FQlS (視線のズレ指標), I-VT Filter (速度による分類)",
        "Metric": "空間的正確性 (Spatial Accuracy)",
        "Platform": "Unity (C#), VIVE Pro Eye",
        "Key Theory": "Abdulin et al. (CHI 2015), Lohr et al. (ETRA 2016)"
      },
      points: [
        "課題の再定義と方針転換（ピボット）：瞳孔は自律神経（副交感神経）の影響を受けるため、自分の意思で制御できず、ノイズが多いことをデータから確認。対して、眼球運動は「筋肉の制御」であるため、疲れが直接「動きの鈍さ」として現れる点に着目し、より確実な指標へ切り替えました。",
        "理論の実用化：先行研究(Lohr et al., 2016)で定義された「FQlS = ターゲットと視線の距離の平均」を採用。これをVR空間の3次元計算に変換し、ゴーグルの装着ズレを補正するプログラムを組み込むことで、実用的な精度を確保しています。",
        "省エネ・軽量設計：ディープラーニング等の重いAI処理を使わず、目の動きの「速さ」と「位置」を用いたシンプルな計算のみで実装。これにより、将来的にスマホVRやスタンドアロンVR（PC不要のVR）でも動く軽量設計を実現しています。"
      ]
    },
    {
      id: 4,
      category: "学内プロジェクト",
      title: "VR脱出ゲーム（オープンキャンパス展示）",
      thumbnail: `https://placehold.co/800x500/D8B4FE/FFFFFF?text=VR+Escape+Game`,
      description: "Unityで開発した没入型VRゲーム。VR酔い対策などユーザー体験（UX）にこだわり、来場者へ「ワクワク」を提供。",
      tags: ["Unity", "VR", "C#", "XR Interaction Toolkit", "チーム開発", "UXデザイン"],
      role: "Visuals / Performance Optimization",
      isPrivate: false,
      repoUrl: "https://github.com/takutaku14/VRGame-OC", // 公開中
      team: "3名",
      duration: "2ヶ月",
      focusPoint: "VR酔いを防ぐための移動方式の実装と、Quest単体で動作させるための処理の軽量化。",
      overview: "オープンキャンパス来場者にVRの楽しさを伝えるために開発した脱出ゲーム。3名チームで、私はビジュアル演出とパフォーマンス最適化（処理落ち対策）を担当しました。",
      siteUrl: null,
      screenshots: [
        { src: './images/oc1.png', label: 'ゲーム内世界の場面例' },
        { src: './images/oc2.png', label: '4桁の番号を手に入れることでゲームを進める' },
        { src: './images/oc3.png', label: '謎解きの例' }
      ],
      stack: {
        "Engine": "Unity",
        "Language": "C#",
        "Device": "Meta Quest",
        "Role": "Visuals (Assets, Lighting, Animation)"
      },
      points: [
        "見た目の良さと軽さの両立：3Dモデルの配置に加え、光と影の事前計算（ベイク処理）やエフェクト調整を担当。スマホ並みの処理能力しかないVR機器（Meta Quest）でも快適に動くよう、徹底的な軽量化を行いました。",
        "体験へのこだわり（UX）：多くの来場者がVR初体験であることを考慮し、VR酔いを防ぐ移動方式（テレポート）の採用や、直感的に操作できる仕掛け作りに注力しました。"
      ]
    },
    {
      id: 5,
      category: "その他の活動",
      title: "大学オーケストラ 学生指揮者",
      thumbnail: `https://placehold.co/800x500/93C5FD/FFFFFF?text=Orchestra`,
      description: "100人超の団員を率い、武道館での演奏を指揮。多様な個性を一つのハーモニーにまとめる統率力を発揮。",
      tags: ["リーダーシップ", "マネジメント", "チームビルディング", "コミュニケーション"],
      role: "Conductor",
      isPrivate: false,
      repoUrl: null, // リポジトリなし
      team: "100名超",
      duration: "1年",
      focusPoint: "100人以上の組織をまとめるための「対話」重視のリーダーシップと、本番から逆算した練習計画のマネジメント。",
      overview: "100名を超える団員の学生指揮者として、定期演奏会や武道館での卒業式での演奏を指揮。技術レベルやモチベーションの異なるメンバーをまとめ上げました。",
      siteUrl: null,
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

// --- Reusable Components ---

const AnimateOnScroll = ({ children, delay = 0, threshold = 0.1, className = '' }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible) return;

    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: '50px' }
    );

    observer.observe(currentRef);

    return () => observer.disconnect();
  }, [isVisible, threshold]);

  return (
    <div
      ref={ref}
      className={`will-change-transform transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const SectionHeader = ({ icon: Icon, title }) => (
  <div className="flex items-center gap-3 mb-8 md:mb-10">
    <div className="p-3 bg-blue-50 rounded-xl text-blue-600 shadow-sm">
      <Icon size={24} strokeWidth={2.5} />
    </div>
    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">{title}</h2>
  </div>
);

const Card = ({ children, className = "", hover = true, onClick }) => (
  <div
    onClick={onClick}
    className={`bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 
    ${hover ? 'hover:shadow-md hover:border-blue-300 hover:ring-2 hover:ring-blue-100 transition-all duration-300 cursor-pointer' : ''} 
    ${className}`}
  >
    {children}
  </div>
);

const Badge = ({ children, color = "blue" }) => {
  const styles = {
    blue: "bg-blue-50 text-blue-700 border-blue-100",
    gray: "bg-gray-50 text-gray-600 border-gray-200",
    dark: "bg-gray-800 text-white border-gray-800",
  };
  return (
    <span className={`text-xs font-semibold px-2.5 py-1 rounded-lg border ${styles[color]}`}>
      {children}
    </span>
  );
};

const SkillDots = ({ level }) => {
  return (
    <div className="flex gap-1.5" aria-label={`Level ${level} of 5`}>
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className={`w-2 h-2 rounded-full transition-colors duration-300 ${i < level ? 'bg-blue-500' : 'bg-gray-200'
            }`}
        />
      ))}
    </div>
  );
};

const ImageCarousel = ({ images, title, autoPlayInterval = 4000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // 画像データが「文字列」か「オブジェクト」かを判定して統一するヘルパー
  const getImageData = (item) => {
    return typeof item === 'string'
      ? { src: item, label: null }
      : item;
  };

  const currentImage = getImageData(images[currentIndex]);

  // 自動スライドショー機能
  useEffect(() => {
    if (!images || images.length <= 1 || isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [images, isPaused, autoPlayInterval]);

  if (!images || images.length === 0) return null;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const isSingle = images.length <= 1;

  return (
    <div className="flex flex-col gap-3">
      {/* 画像エリア */}
      <div
        className="relative w-full bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 group shadow-sm transition-shadow duration-300 hover:shadow-md"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="aspect-video w-full flex items-center justify-center bg-gray-100/50">
          <img
            src={currentImage.src}
            alt={`${title} - slide ${currentIndex + 1}`}
            className="max-h-full max-w-full object-contain transition-transform duration-500 ease-out"
          />
        </div>

        {!isSingle && (
          <>
            {/* ナビゲーションボタン */}
            <button
              onClick={(e) => { e.stopPropagation(); prevSlide(); }}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 bg-white/80 hover:bg-white text-gray-700 rounded-full shadow-sm backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <ChevronLeft size={20} strokeWidth={2.5} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextSlide(); }}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 bg-white/80 hover:bg-white text-gray-700 rounded-full shadow-sm backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <ChevronRight size={20} strokeWidth={2.5} />
            </button>

            {/* インジケーター */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 px-3 py-1.5 bg-gray-900/20 backdrop-blur-md rounded-full">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-white w-4' : 'bg-white/60 hover:bg-white/80'
                    }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* キャプションエリア */}
      <div className="px-4 min-h-[1.5rem] flex items-center justify-center">
        <p
          key={currentIndex}
          className="text-sm text-gray-600 font-normal leading-relaxed text-center animate-fade-in transition-opacity duration-300"
        >
          {currentImage.label || ""}
        </p>
      </div>
    </div>
  );
};

// --- Main Sections ---

const Home = ({ data, onWorkClick, onChangeView }) => {
  const focusAreas = [
    {
      title: "ビジネス価値の創出",
      description: "技術は手段。コスト削減や効率化など、目に見える成果にコミットします。",
      icon: Briefcase,
      workId: 1,
    },
    {
      title: "研究と技術的探求",
      description: "HCI/VR研究において、失敗から学び論理的にピボットする探究心を持っています。",
      icon: Activity,
      workId: 3,
    },
    {
      title: "組織を導く統率力",
      description: "多様な個性を尊重し、納得感のある合意形成でチームを導きます。",
      icon: Users,
      workId: 5,
    }
  ];

  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col justify-center py-12 md:py-20">
      <div className="max-w-5xl mx-auto w-full px-4 md:px-8">
        <AnimateOnScroll>
          <div className="mb-6">
            <span className="inline-block py-1.5 px-4 rounded-full bg-blue-50 text-blue-700 font-bold text-sm mb-4 border border-blue-100">
              Strategic Engineer / Project Manager
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-[1.15] whitespace-pre-line mb-6">
            {data.catchphrase.main}
          </h1>
          <div className="flex flex-col md:flex-row gap-6 items-start mb-8">
            <div className="w-12 h-1 bg-blue-500 mt-3 rounded-full flex-shrink-0"></div>
            <p className="text-lg md:text-xl text-gray-500 font-medium leading-relaxed max-w-2xl">
              {data.catchphrase.sub}
            </p>
          </div>

          <p className="text-gray-600 leading-loose max-w-3xl text-base mb-10">
            {data.about.summary}
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => onChangeView('Works')}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-1 flex items-center gap-2"
            >
              <Briefcase size={20} />
              View Works
            </button>
            {data.social.github && (
              <a
                href={data.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white border border-gray-200 text-gray-800 font-bold rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all flex items-center gap-2 shadow-sm"
              >
                <Github size={20} />
                Portfolio Source
              </a>
            )}
          </div>
        </AnimateOnScroll>

        <div className="mt-20">
          <AnimateOnScroll delay={200}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Core Strengths</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {focusAreas.map((area, index) => {
                const work = data.works.find(w => w.id === area.workId);
                return (
                  <Card key={index} onClick={() => work && onWorkClick(work)} className="h-full flex flex-col group relative overflow-hidden">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      <area.icon size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{area.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">{area.description}</p>

                    <div className="flex items-center text-blue-600 text-sm font-bold mt-auto pt-4 border-t border-gray-50 group-hover:border-gray-100 transition-colors">
                      <span className="group-hover:mr-2 transition-all">View Project</span>
                      <ArrowUpRight size={16} className="ml-1 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    </div>
                  </Card>
                );
              })}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </div>
  );
};

const About = ({ data }) => {
  const { about } = data;

  return (
    <div className="py-20 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <SectionHeader icon={User} title="About Me" />

        <AnimateOnScroll className="mb-12">
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-200 shadow-sm flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0 relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-lg overflow-hidden bg-gray-100">
                <img
                  src="./images/avatar.jpg"
                  alt={data.name}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
              <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 border-2 border-white rounded-full" title="Open to work"></div>
            </div>
            <div className="text-center md:text-left flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{data.name}</h3>
              <p className="text-blue-600 font-medium mb-4">{data.title}</p>

              <p className="text-gray-600 leading-relaxed text-sm md:text-base whitespace-pre-line">
                {about.introduction}
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-12 gap-8 md:gap-12">
          <div className="lg:col-span-7 space-y-8">
            <AnimateOnScroll delay={100}>
              <div className="mb-10">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Star className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" /> Values & Strengths
                </h3>
                <div className="space-y-6">
                  {about.values.map((value, idx) => (
                    <Card key={idx} hover={false} className="border-l-4 border-l-blue-500 pl-6">
                      <h4 className="font-bold text-lg text-gray-900 mb-3">{value.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Briefcase className="w-5 h-5 text-blue-500 mr-2" /> My Story
                </h3>
                <div className="space-y-8 pl-2">
                  {about.story.map((s, idx) => (
                    <div key={idx} className="pl-6 border-l-2 border-gray-100 hover:border-blue-200 transition-colors">
                      <h4 className="font-bold text-gray-900 mb-2 text-lg">{s.heading}</h4>
                      <p className="text-gray-600 leading-relaxed">{s.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          <div className="lg:col-span-5 space-y-8">
            <AnimateOnScroll delay={200} className="lg:sticky lg:top-8">
              <Card hover={false} className="bg-gray-50/50 border-gray-200/60">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Biography</h3>
                <div className="space-y-8 relative">
                  <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-gray-200"></div>

                  {about.timeline.map((item, idx) => (
                    <div key={idx} className="relative pl-8 group">
                      <div className="absolute left-0 top-1.5 w-4 h-4 bg-white border-4 border-gray-300 group-hover:border-blue-500 transition-colors rounded-full z-10"></div>
                      <span className="text-sm font-bold text-blue-600 block mb-1 opacity-80">{item.year}</span>
                      <p className="text-gray-700 text-sm font-medium leading-snug">{item.event}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </div>
  );
};

const Skills = ({ data }) => {
  return (
    <div className="py-20 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <SectionHeader icon={Terminal} title="Technical Skills" />

        <AnimateOnScroll>
          <div className="mb-8 flex items-start gap-3 bg-gray-100/60 p-4 rounded-xl border border-gray-200/50">
            <Info className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-gray-500 leading-snug">
              ドット（<span className="text-blue-500 font-bold">●</span>）の数は自己評価によるスキル習熟度を表しており、経験年数とは独立した指標です。
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((category, index) => (
            <AnimateOnScroll key={index} delay={index * 50} className="h-full">
              <Card hover={false} className="h-full">
                <h3 className="text-lg font-bold text-gray-900 mb-6 pb-4 border-b border-gray-100">
                  {category.category}
                </h3>
                <div className="flex flex-col gap-0">
                  {category.items.map((skill, i) => (
                    <div key={i} className="flex items-center justify-between py-4 border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors -mx-2 px-2 rounded-lg">
                      <div>
                        <div className="font-bold text-gray-800 text-sm mb-1">{skill.name}</div>
                        <div className="text-xs text-gray-400 font-medium">経験年数: {skill.experience}</div>
                      </div>
                      <SkillDots level={skill.level} />
                    </div>
                  ))}
                </div>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
};

const Works = ({ data, onWorkClick }) => {
  // データを「インターン（Featured）」と「その他（Standard）」に分離
  const featuredWorks = data.filter(w => w.category === "長期インターンシップ");
  const standardWorks = data.filter(w => w.category !== "長期インターンシップ");

  // サムネイル画像を取得するヘルパー関数
  // 優先順位: screenshots[0] > thumbnail > null
  const getThumbnailSrc = (work) => {
    // 1. screenshotsの1枚目があればそれを使用
    if (work.screenshots && work.screenshots.length > 0) {
      const firstItem = work.screenshots[0];
      // データがオブジェクト形式なら.src、文字列ならそのまま使用
      return typeof firstItem === 'object' ? firstItem.src : firstItem;
    }
    // 2. screenshotsがない場合、従来のthumbnailプロパティを使用（フォールバック）
    if (work.thumbnail) return work.thumbnail;

    // 3. 画像なし
    return null;
  };

  return (
    <div className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeader icon={Code} title="Works & Projects" />

        <AnimateOnScroll className="mb-12">
          <div className="flex items-start gap-3 bg-gray-100/60 p-4 rounded-xl border border-gray-200/50">
            <Info className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-900 font-bold mb-1">ソースコードの公開について</p>
              <p className="text-xs text-gray-600 leading-relaxed">
                一部のプロジェクト（主にインターンシップ実績）は、守秘義務契約（NDA）によりソースコードを公開しておりません。
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        {/* --- Featured Section (長期インターンシップ) --- */}
        {featuredWorks.length > 0 && (
          <div className="mb-16">
            <AnimateOnScroll>
              <div className="flex items-center gap-3 mb-6">
                <Star className="w-6 h-6 text-blue-500" fill="currentColor" />
                <h3 className="text-xl font-bold text-gray-900">Featured Projects</h3>
              </div>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 gap-8">
              {featuredWorks.map((work, idx) => {
                const thumbSrc = getThumbnailSrc(work);

                return (
                  <AnimateOnScroll key={work.id} delay={idx * 100}>
                    <div
                      onClick={() => onWorkClick(work)}
                      className="group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col md:flex-row md:h-80"
                    >
                      {/* サムネイルエリア */}
                      <div className="overflow-hidden bg-gray-100 relative h-56 md:h-full md:w-5/12">
                        {thumbSrc ? (
                          <img
                            src={thumbSrc}
                            alt={work.title}
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        ) : (
                          // 画像がない場合のフォールバック（アイコン表示）
                          <div className="w-full h-full flex items-center justify-center text-gray-300 bg-gray-50">
                            <Code size={48} />
                          </div>
                        )}

                        {/* Private Repo バッジ */}
                        {work.repoUrl === '#' && work.isPrivate && (
                          <div className="absolute top-3 right-3 bg-gray-900/80 text-white p-1.5 rounded-full backdrop-blur-sm shadow-sm" title="Private Repository">
                            <Lock size={14} />
                          </div>
                        )}
                      </div>

                      <div className="p-6 md:p-8 flex flex-col justify-between flex-grow md:w-7/12">
                        <div>
                          <div className="flex flex-wrap gap-2 mb-3">
                            <Badge color="blue">Featured</Badge>
                            <Badge color="gray">{work.category}</Badge>
                            {work.role && <Badge color="dark">{work.role}</Badge>}
                          </div>
                          <h4 className="font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors text-2xl">
                            {work.title}
                          </h4>
                          <p className="text-gray-600 text-base leading-relaxed mb-6 line-clamp-3">
                            {work.description}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-auto">
                          {work.tags.slice(0, 5).map(tag => (
                            <span key={tag} className="text-xs font-medium text-gray-500 bg-gray-50 px-2.5 py-1 rounded border border-gray-100">
                              #{tag}
                            </span>
                          ))}
                          {work.tags.length > 5 && (
                            <span className="text-xs font-bold text-gray-400 flex items-center px-1">
                              +{work.tags.length - 5}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </AnimateOnScroll>
                );
              })}
            </div>
          </div>
        )}

        {/* --- Standard Section (その他の活動・研究) --- */}
        {standardWorks.length > 0 && (
          <div>
            <AnimateOnScroll>
              <div className="flex items-center gap-3 mb-6">
                <Code className="w-6 h-6 text-gray-400" />
                <h3 className="text-xl font-bold text-gray-900">Other Works & Research</h3>
              </div>
            </AnimateOnScroll>

            {/* Bento Grid形式で配置 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {standardWorks.map((work, idx) => {
                const thumbSrc = getThumbnailSrc(work);

                return (
                  <AnimateOnScroll key={work.id} delay={idx * 50}>
                    <div
                      onClick={() => onWorkClick(work)}
                      className="group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300 cursor-pointer overflow-hidden h-full flex flex-col"
                    >
                      {/* サムネイルエリア */}
                      <div className="overflow-hidden bg-gray-100 relative h-48 w-full">
                        {thumbSrc ? (
                          <img
                            src={thumbSrc}
                            alt={work.title}
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        ) : (
                          // 画像がない場合のフォールバック
                          <div className="w-full h-full flex items-center justify-center text-gray-300 bg-gray-50">
                            <Code size={48} />
                          </div>
                        )}

                        {/* Private Repo バッジ */}
                        {work.repoUrl === '#' && work.isPrivate && (
                          <div className="absolute top-3 right-3 bg-gray-900/80 text-white p-1.5 rounded-full backdrop-blur-sm shadow-sm" title="Private Repository">
                            <Lock size={14} />
                          </div>
                        )}
                      </div>

                      <div className="p-6 flex flex-col justify-between flex-grow">
                        <div>
                          <div className="flex flex-wrap gap-2 mb-2">
                            <Badge color="gray">{work.category}</Badge>
                          </div>
                          <h4 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors text-lg">
                            {work.title}
                          </h4>
                          <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                            {work.description}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-auto">
                          {work.tags.slice(0, 3).map(tag => (
                            <span key={tag} className="text-xs font-medium text-gray-500 bg-gray-50 px-2 py-1 rounded border border-gray-100">
                              #{tag}
                            </span>
                          ))}
                          {work.tags.length > 3 && (
                            <span className="text-xs font-bold text-gray-400 flex items-center px-1">
                              +{work.tags.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </AnimateOnScroll>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const WorkDetailModal = ({ work, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (work) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      setIsVisible(false);
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [work]);

  if (!work) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 md:p-6 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm" onClick={onClose}></div>

      <div
        className={`bg-white w-full h-full sm:h-auto sm:max-w-5xl sm:max-h-[90vh] sm:rounded-3xl shadow-2xl flex flex-col relative transform transition-all duration-300 overflow-hidden ${isVisible ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'}`}
      >
        <div className="px-6 py-4 md:px-8 md:py-6 border-b border-gray-100 flex justify-between items-start bg-white z-10 flex-shrink-0 sm:rounded-t-3xl">
          <div>
            <div className="flex gap-2 mb-2">
              <Badge color="blue">{work.category}</Badge>
              {work.repoUrl === '#' && work.isPrivate && (
                <span className="flex items-center gap-1 text-xs font-bold text-gray-500 bg-gray-100 px-2 py-1 rounded-lg border border-gray-200">
                  <Lock size={12} /> NDA Protected
                </span>
              )}
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">{work.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-500 transition-colors ml-4"
          >
            <X size={24} />
          </button>
        </div>

        <div className="overflow-y-auto flex-1 custom-scrollbar bg-white">
          {work.screenshots && work.screenshots.length > 0 && (
            <div className="w-full bg-gray-50 border-b border-gray-100 p-4 md:p-8 flex justify-center">
              <div className="w-full max-w-3xl">
                <ImageCarousel images={work.screenshots} title={work.title} />
              </div>
            </div>
          )}

          <div className="p-6 md:p-10 grid lg:grid-cols-3 gap-8 md:gap-10 pb-24 sm:pb-10">
            <div className="lg:col-span-2 space-y-8 md:space-y-10">

              {work.focusPoint && (
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-3 items-start">
                  <Lightbulb className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" fill="currentColor" />
                  <div>
                    <h4 className="font-bold text-amber-800 text-sm mb-1">Focus Point</h4>
                    <p className="text-sm text-amber-900 leading-relaxed">{work.focusPoint}</p>
                  </div>
                </div>
              )}

              <section>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Briefcase size={20} className="text-blue-500" /> 概要
                </h3>
                <p className="text-gray-700 leading-loose whitespace-pre-wrap text-sm md:text-base">
                  {work.overview}
                </p>
              </section>

              <section>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Star size={20} className="text-blue-500" /> 工夫した点・プロセス
                </h3>
                <ul className="space-y-4">
                  {work.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
                      <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                        {i + 1}
                      </div>
                      <p className="text-gray-700 leading-relaxed text-sm md:text-base">{point}</p>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <div className="lg:col-span-1 space-y-6 md:space-y-8">
              <div className="grid grid-cols-1 gap-3">
                {work.role && (
                  <div className="bg-blue-50 border border-blue-100 rounded-xl p-3 flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                      <User size={18} />
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 font-bold uppercase block">Role</span>
                      <span className="text-sm font-bold text-gray-900">{work.role}</span>
                    </div>
                  </div>
                )}

                {(work.team || work.duration) && (
                  <div className="grid grid-cols-2 gap-3">
                    {work.team && (
                      <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 flex flex-col items-center text-center">
                        <Users size={20} className="text-gray-400 mb-1" />
                        <span className="text-xs text-gray-500 font-bold uppercase">Team</span>
                        <span className="text-sm font-bold text-gray-900">{work.team}</span>
                      </div>
                    )}
                    {work.duration && (
                      <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 flex flex-col items-center text-center">
                        <Clock size={20} className="text-gray-400 mb-1" />
                        <span className="text-xs text-gray-500 font-bold uppercase">Duration</span>
                        <span className="text-sm font-bold text-gray-900">{work.duration}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Code size={18} /> Tech Stack
                </h3>
                <div className="space-y-4">
                  {work.stack && Object.entries(work.stack).map(([key, value]) => (
                    <div key={key} className="border-b border-gray-100 last:border-0 pb-2 last:pb-0">
                      <dt className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">{key}</dt>
                      <dd className="text-sm font-semibold text-gray-800">{value}</dd>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-3 text-sm">All Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {work.tags.map(tag => (
                    <span key={tag} className="text-xs text-gray-600 bg-white border border-gray-200 px-2 py-1 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {work.repoUrl && (
                <div className="flex flex-col gap-3 hidden sm:flex">
                  {work.repoUrl === '#' ? (
                    <button disabled className="w-full flex items-center justify-center gap-2 bg-gray-100 text-gray-400 font-bold py-3.5 rounded-xl cursor-not-allowed border border-gray-200">
                      <Lock size={18} /> Private Repo (NDA)
                    </button>
                  ) : (
                    <a href={work.repoUrl} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white font-bold py-3.5 rounded-xl hover:bg-black transition-colors shadow-sm hover:shadow-lg">
                      <Github size={18} /> View on GitHub
                    </a>
                  )}

                  {work.siteUrl && (
                    <a href={work.siteUrl} className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white font-bold py-3.5 rounded-xl hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">
                      <ArrowUpRight size={18} /> Visit Site
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="sm:hidden p-4 border-t border-gray-100 bg-white sticky bottom-0 z-20 flex gap-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
          <button onClick={onClose} className="flex-1 bg-gray-100 text-gray-800 font-bold py-3 rounded-xl">
            閉じる
          </button>

          {work.repoUrl && (
            work.repoUrl === '#' ? (
              <button disabled className="flex-1 flex items-center justify-center bg-gray-100 text-gray-400 font-bold py-3 rounded-xl border border-gray-200 text-sm">
                <Lock size={16} className="mr-1" /> Private
              </button>
            ) : (
              <a href={work.repoUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center bg-gray-900 text-white font-bold py-3 rounded-xl">
                <Github size={18} className="mr-2" /> GitHub
              </a>
            )
          )}
        </div>

      </div>
    </div>
  );
};

// --- Dock Navigation ---

const Dock = ({ activeView, setActiveView }) => {
  const items = [
    { id: 'Home', icon: HomeIcon, label: 'Home' },
    { id: 'About', icon: User, label: 'Profile' },
    { id: 'Skills', icon: Terminal, label: 'Skills' },
    { id: 'Works', icon: Code, label: 'Works' },
  ];

  return (
    <div className="fixed bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-40 safe-area-pb w-full max-w-xs sm:max-w-md px-4">
      <nav className="flex items-center justify-between px-4 py-3 bg-white/90 backdrop-blur-md border border-gray-200 shadow-2xl rounded-2xl ring-1 ring-black/5">
        {items.map((item) => {
          const isActive = activeView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveView(item.id)}
              className={`flex flex-col items-center justify-center w-14 transition-all duration-300 ease-out group`}
            >
              <div className={`p-2 rounded-xl mb-1 transition-all duration-300 ${isActive
                ? 'bg-blue-500 text-white shadow-md shadow-blue-500/30 -translate-y-1'
                : 'text-gray-400 group-hover:bg-gray-100 group-hover:text-gray-900'
                }`}>
                <item.icon size={22} strokeWidth={isActive ? 2.5 : 2} />
              </div>
              <span className={`text-[10px] font-bold tracking-wide transition-colors duration-300 ${isActive ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-600'
                }`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default function App() {
  const [activeView, setActiveView] = useState('Home');
  const [selectedWork, setSelectedWork] = useState(null);

  useEffect(() => {
    const main = document.getElementById('main-content');
    if (main) main.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeView]);

  return (
    <div className="font-sans bg-gray-50 text-gray-900 h-screen w-full overflow-hidden flex flex-col relative">
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:32px_32px]">
      </div>

      <main id="main-content" className="flex-1 overflow-y-auto relative z-10 pb-32 custom-scrollbar scroll-smooth">
        {activeView === 'Home' && <Home data={portfolioData} onWorkClick={setSelectedWork} onChangeView={setActiveView} />}
        {activeView === 'About' && <About data={portfolioData} />}
        {activeView === 'Skills' && <Skills data={portfolioData.skills} />}
        {activeView === 'Works' && <Works data={portfolioData.works} onWorkClick={setSelectedWork} />}
      </main>

      <Dock activeView={activeView} setActiveView={setActiveView} />
      <WorkDetailModal work={selectedWork} onClose={() => setSelectedWork(null)} />
    </div>
  );
}