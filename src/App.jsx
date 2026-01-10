import React, { useState, useEffect, useRef } from 'react';
import { User, Briefcase, Terminal, Code, X, ArrowUpRight, Github, ChevronRight, ChevronLeft, Star, Cpu, Users, Info, Home as HomeIcon, Lock, Clock, Lightbulb, Activity } from 'lucide-react';

// --- Data Section ---
const portfolioData = {
  name: "藤井琢也",
  title: "大学院生 / エンジニア / 技術的PM",
  catchphrase: {
    main: "表面的な課題ではなく、\n本質を見抜き、ビジネス価値を創出する。",
    sub: "隠れた需要の発掘と緻密な実装力で、\n新しい価値を創造するエンジニア"
  },
  social: {
    github: "https://github.com/takutaku14/portforio-app",
    email: "mailto:your-email@example.com"
  },
  about: {
    summary: "大学院での研究と長期インターンシップ（社内業務改善エンジニア）でのPM経験を通じて培った、「表面的な課題ではなく、本質を見抜く力」を武器に、隠れた需要を発掘し新しいビジネス価値を創出するエンジニアです。長期インターンシップでは、標本調査により「外部情報の調査」という隠れたニーズを発見し、「社内業務に特化したAIパートナー」という独自解を創出。年間コスト70%削減を実現しました。研究では、VR眼精疲労予測の壁を、専門外のHCIを独学で習得し視線制御へのピボットで突破。精度85%を達成しました。",
    introduction: "私の原動力は、「表面的な課題ではなく、本質を見抜く力」です。大学院での視線解析の研究では、瞳孔計測の精度限界に直面した際、表面的な解決策（精度向上）ではなく本質的な原因（視線制御の劣化）に着目。専門外のHCIを独学で習得し、アプローチを転換して精度85%を達成しました。長期インターンシップでは、標本調査により「外部情報の調査」という隠れたニーズを発掘し、独自解の創出でコスト70%削減を実現しました。異なる分野でも、データに基づく仮説検証と論理的な戦略立てで本質を見抜き、確実に結果を出す「没頭力」と「緻密な計画性」を持ちます。",
    story: [
      {
        heading: "「没頭力」の原体験：音楽との出会い",
        content: "幼少期から音楽に親しみ、4歳でピアノ、16歳でホルンを始めました。一つのフレーズを納得いくまで数百回練習するなど、時間を忘れて物事にのめり込む「没頭力」と、目標達成のために数年単位で努力を続ける「継続力」はこの経験から育まれました。"
      },
      {
        heading: "「緻密な計画」で挑む：研究への探求",
        content: "大学院では、「VR空間における目の疲れ」をテーマに研究しています。学部時代、瞳孔計測による手法で精度が頭打ちになる壁に直面しました。そこで、単なる試行錯誤ではなく失敗データを詳細に分析。「生理反応ではなく、目の動き方に着目すべき」という仮説を導き出し、研究の方針を大きく転換（ピボット）しました。この「データに基づく意思決定」と「柔軟な軌道修正」は、エンジニアリングにおいても私の最大の武器です。"
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
        title: "1. 隠れた需要を発掘する「本質を見抜く力」",
        description: "長期インターンシップでは、標本調査により経営層も現場も気づいていなかった「外部情報の調査」という隠れたニーズを発見。「社内業務に特化したAIパートナー」という独自解を創出しました。研究でも、瞳孔計測という表面的な手法ではなく、視線制御という本質に着目してブレークスルーを達成。異なる分野でも、表面的な課題ではなく本質を見抜く力で、新しい価値を創造します。"
      },
      {
        title: "2. コストと成果にこだわる「ROI視点」",
        description: "技術を自己目的化せず、「その実装はコストに見合うか？」「ユーザーの業務は本当に楽になるか？」を常に問いかけます。技術選定の基準に費用対効果（ROI）を組み込み、定量的なビジネス価値を創出します。"
      },
      {
        title: "3. 納得解を導く「共創型リーダーシップ」",
        description: "一方的な指示ではなく、多様な背景を持つメンバーやステークホルダーの意見を傾聴し、全員が納得できる合意点（納得解）を形成することで、チームのパフォーマンスを最大化します。"
      },
    ]
  },
  skills: [
    {
      category: "AI / Backend",
      items: [
        { name: "Python", level: 5, experience: "4年" },
        { name: "Dify", level: 4, experience: "1年" },
        { name: "Java", level: 5, experience: "4年" },
      ]
    },
    {
      category: "Frontend / Mobile / XR",
      items: [
        { name: "React / TypeScript", level: 4, experience: "2年" },
        { name: "Unity (C#)", level: 4, experience: "2年" },
        { name: "HTML / CSS / JS", level: 4, experience: "3年" },
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
      description: "年間2,000万円のコスト課題を内製化で70%削減。現場要望に即した検索機能と、Apple HIG準拠の直感的なUIを備えた全社共通AI基盤。",
      tags: ["コスト削減", "RAG", "React", "Dify", "Perplexity", "Apple HIG", "UX Design"],
      role: "PM & Lead Engineer",
      isPrivate: true,
      repoUrl: "#",
      team: "3名",
      duration: "6ヶ月",
      focusPoint: "隠れた需要（外部情報の調査ニーズ）を標本調査で発掘し、「社内業務に特化したAIパートナー」という独自解を創出。経営層の反対をデータで突破し、コスト70%削減と現場満足度の両立を実現した点。",
      overview: "「ChatGPT Enterprise版（年間約2,000万円）」の内製化プロジェクトをPMとして立ち上げました。単なる「置き換え」ではなく、より良いソリューションを目指し、営業部門への標本調査を実施。経営層が重視する「内部問い合わせ」だけでなく、「外部情報の調査（競合分析・営業開拓）」という隠れたニーズを発見しました。\n経営層は「社内情報重視」の方針から「Web検索不要」と反対していましたが、私は両者のニーズを満たす「社内業務に特化したAIパートナー」という独自解を導き出し、モックアップで提示。2度のプレゼンを経て承認を得て、α版→β版→本番という3段階リリースで実装し、コスト70%削減と現場定着を実現しました。",
      siteUrl: null,
      screenshots: [
        {
          src: './images/ai (1).png',
          label: 'ホーム画面：時間帯に合わせた挨拶と、次のアクションを直感的に促す「パートナー」としてのUI'
        },
        {
          src: './images/ai (2).png',
          label: '検索モード選択：現場の強い要望を受けて実装した「特定のサイト指定」検索や、「社内データ」などを柔軟に切り替え'
        },
        {
          src: './images/ai (3).png',
          label: '対話画面：単に回答するだけでなく、ユーザーの意図を汲んで次のアクションを能動的に提案する「パートナー」としての振る舞い'
        },
        {
          src: './images/ai (4).png',
          label: 'オンボーディング導入：初めてのユーザーでも迷わせない、教育コストを削減するウィザード形式'
        },
        {
          src: './images/ai (5).png',
          label: 'スタイル設定：「効率重視」か「思考パートナー」か。業務ニーズに合わせてAIの振る舞いをパーソナライズ'
        },
        {
          src: './images/ai (6).png',
          label: 'セットアップ完了：わずか3ステップで設定が完了し、すぐに業務利用を開始できる状態へ'
        }
      ],
      stack: {
        "Role": "PM & Lead Engineer",
        "Frontend": "React, Vite, CSS Modules",
        "Backend": "Dify (OSS基盤), Python",
        "AI / Search": "Azure OpenAI (Security), Perplexity (Real-time)",
        "Design": "Apple Human Interface Guidelines",
        "Key Tech": "RAG, Server-Sent Events"
      },
      points: [
        "ROI最大化とアーキテクチャ設計：高額SaaSを「OSS(Dify) + API従量課金」へ切り替え、機能要件を維持しつつ年間約1,400万円（70%）のコストダウンを実現しました。",
        "データドリブンな機能実装：経営層の「Web検索不要論」に対し、現場アンケートを実施。「競合調査ニーズ」をデータで証明し、Perplexity連携を実装・定着させました。",
        "素早い改善サイクル：完璧を待たず、α版(15名)→β版(50名)→本番という「3段階リリース」を実施。早期フィードバックにより、手戻りのない開発を実現しました。",
        "HCI起点のUX設計：抽象的な「使いやすさ」をApple HIGを用いて言語化。デザインルールを制定し、開発チームの意思決定コストを大幅に削減しました。",
        "技術的深掘りによる品質担保：RAG精度が課題となった際、アルゴリズムレベルで原因を分析。標準機能に固執せず最新のGemini APIを検証・採用するアーキテクチャ見直しを行いました。"
      ]
    },
    {
      id: 2,
      category: "長期インターンシップ",
      title: "業務効率を50倍にした画像処理プラットフォーム",
      thumbnail: `https://placehold.co/800x500/A5B4FC/FFFFFF?text=Image+Processing+PF`,
      description: "複数部署の手作業（月160時間）を自動化する統合Web基盤。クライアントサイド処理の活用でサーバー負荷を最小化。",
      tags: ["業務改善", "スケーラビリティ", "React", "Python", "AWS Lambda", "Canvas API"],
      role: "Full-stack Engineer",
      isPrivate: true,
      repoUrl: "#",
      team: "2名",
      duration: "3ヶ月",
      focusPoint: "現場ヒアリングに基づく「ツール選択型」アーキテクチャと、ブラウザ完結処理による高速化・コスト最適化。",
      overview: "各部署でバラバラに行われていた画像加工業務（リサイズ、トリミング、ロゴ配置など）を統合・効率化するためのWebプラットフォーム。技術リーダーとして、拡張性の高い「ツール選択型アーキテクチャ」を設計。サーバーレス技術とクライアントサイド処理を適切に使い分けることで、運用コストを抑えつつ大量処理に耐えうる基盤を構築しました。",
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
        "徹底した現場ヒアリング：開発前に3部署へヒアリングを行い、「画一的な自動化では対応できない（部署ごとにルールが違う）」という課題を発見。柔軟にツールを選べるプラットフォーム構成を提案し、各部署のニーズに最適化しました。",
        "ブラウザ完結処理による最適化：サーバー負荷とセキュリティリスクを低減するため、Canvas API等を用いてブラウザ内（クライアントサイド）で画像処理を完結させる設計を採用。大量枚数の処理でもサーバーコストがかさまず、かつ高速な動作を実現しました。",
        "50倍の生産性向上：特に手間の掛かっていたアイコン作成業務において、1件10分の作業を12秒に短縮。月間160時間の工数削減を達成し、事業へのインパクトを創出しました。"
      ]
    },
    {
      id: 3,
      category: "研究 (M1 / HCI)",
      title: "視線の『ズレ』を解析し、VRの「目の疲れ」をリアルタイム検知するシステム",
      thumbnail: `https://placehold.co/800x500/FCA5A5/FFFFFF?text=Eye+Fatigue+Detection`,
      description: "従来の測定法の限界（光によるノイズ）を、視線の「正確さ」を測る新手法で解決。AIサーバーを使わずHMD単体で動く軽量設計。",
      tags: ["HCI", "データ分析", "Unity", "C#", "視線追跡", "仮説検証", "研究"],
      role: "Researcher & Lead Developer",
      isPrivate: false,
      repoUrl: null,
      team: "個人研究",
      duration: "継続中",
      focusPoint: "表面的な解決策（瞳孔の精度向上）ではなく、本質的な原因（視線制御の劣化）に着目してアプローチを転換した論理的プロセス。HCIを独学で習得し、異分野の知見で壁を突破した学習転移能力。",
      overview: "VR利用者の安全を守るため、目の疲れ（眼精疲労）を自動検知するシステムの研究です。当初の「瞳孔解析」では光の影響によるノイズで精度が伸び悩むという課題に直面。そこで失敗データを徹底的に分析し、「疲れは自律神経（瞳孔）だけでなく、運動制御（視線）の低下に現れるはずだ」という仮説を立案。アプローチを刷新し、実用的な精度と軽量性を両立させました。",
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
        "データドリブンな意思決定と学習：瞳孔計測の失敗原因を「光によるノイズ（自律神経の影響）」と特定。失敗データを分析し、「眼球運動は筋肉の制御である」という生理学的な知見と結びつけ、より確実な指標へピボットしました。",
        "理論の実用化と実装力：先行研究の指標（FQlS）をVR空間の3次元計算に変換し、ゴーグルの装着ズレを補正するアルゴリズムを独自に実装。理論をプロダクトとして動く形に落とし込みました。",
        "エッジコンピューティング（軽量設計）：重いAI処理を使わず、幾何学的な計算のみで実装。これにより、計算資源の限られたスタンドアロンVR機器でも遅延なく動作する軽量性を実現しています。"
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
      repoUrl: "https://github.com/takutaku14/VRGame-OC",
      team: "3名",
      duration: "2ヶ月",
      focusPoint: "VR酔いを防ぐための移動方式の実装と、Quest単体で動作させるためのパフォーマンス最適化。",
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
      repoUrl: null,
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
  <div className="flex items-center gap-4 mb-10">
    <div className="p-3.5 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-500 text-white shadow-lg shadow-violet-500/25">
      <Icon size={24} strokeWidth={2.5} />
    </div>
    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">{title}</h2>
  </div>
);

const Card = ({ children, className = "", hover = true, onClick }) => (
  <div
    onClick={onClick}
    tabIndex={hover && onClick ? 0 : undefined}
    role={hover && onClick ? "button" : undefined}
    onKeyDown={hover && onClick ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(); } } : undefined}
    className={`glass-strong rounded-2xl p-6 md:p-8 
    ${hover ? 'hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2' : ''} 
    ${className}`}
  >
    {children}
  </div>
);

const Badge = ({ children, color = "blue" }) => {
  const styles = {
    blue: "bg-gradient-to-r from-blue-500/10 to-violet-500/10 text-blue-700 border-blue-200/50",
    gray: "bg-gray-100/80 text-gray-600 border-gray-200/50",
    dark: "bg-gradient-to-r from-gray-800 to-gray-900 text-white border-gray-700",
  };
  return (
    <span className={`text-xs font-semibold px-3 py-1.5 rounded-full border backdrop-blur-sm ${styles[color]}`}>
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
    <div className="min-h-[calc(100vh-80px)] flex flex-col justify-center py-12 md:py-20 relative overflow-hidden">
      {/* Gradient Mesh Background */}
      <div className="mesh-gradient">
        <div className="mesh-orb"></div>
      </div>

      <div className="max-w-5xl mx-auto w-full px-4 md:px-8 relative z-10">
        <AnimateOnScroll>
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 py-2 px-5 rounded-full glass text-sm font-semibold text-gray-700 border-0">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 animate-pulse"></span>
              Strategic Engineer / Project Manager
            </span>
          </div>

          {/* Gradient Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] whitespace-pre-line mb-6">
            <span className="gradient-text">{data.catchphrase.main.split('\n')[0]}</span>
            <br />
            <span className="text-gray-900">{data.catchphrase.main.split('\n')[1]}</span>
          </h1>

          <div className="flex flex-col md:flex-row gap-6 items-start mb-8">
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 mt-3 rounded-full flex-shrink-0"></div>
            <p className="text-lg md:text-xl text-gray-500 font-medium leading-relaxed max-w-2xl">
              {data.catchphrase.sub}
            </p>
          </div>

          <p className="text-gray-600 leading-loose max-w-3xl text-base mb-10">
            {data.about.summary}
          </p>

          {/* Premium CTAs */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => onChangeView('Works')}
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 active:scale-[0.98]"
            >
              <Briefcase size={20} />
              <span>View Works</span>
            </button>
            {data.social.github && (
              <a
                href={data.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 glass text-gray-800 font-bold rounded-2xl hover:bg-white/90 transition-all flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 hover:-translate-y-1 hover:shadow-lg"
              >
                <Github size={20} />
                Portfolio Source
              </a>
            )}
          </div>
        </AnimateOnScroll>

        <div className="mt-24">
          <AnimateOnScroll delay={200}>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">Core Strengths</h3>
              <div className="h-px flex-1 ml-6 bg-gradient-to-r from-gray-200 to-transparent"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {focusAreas.map((area, index) => {
                const work = data.works.find(w => w.id === area.workId);
                return (
                  <Card key={index} onClick={() => work && onWorkClick(work)} className="h-full flex flex-col group relative overflow-hidden">
                    {/* Gradient accent on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-violet-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br from-blue-50 to-violet-50 text-blue-600 group-hover:from-blue-500 group-hover:to-violet-500 group-hover:text-white transition-all duration-300 group-hover:shadow-lg group-hover:shadow-violet-500/25">
                        <area.icon size={26} />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3">{area.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">{area.description}</p>

                      <div className="flex items-center text-sm font-bold mt-auto pt-4 border-t border-gray-100 group-hover:border-violet-100 transition-colors">
                        <span className="gradient-text group-hover:mr-2 transition-all">View Project</span>
                        <ArrowUpRight size={16} className="ml-1 text-violet-500 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                      </div>
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
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 text-white">
                  <Star className="w-5 h-5" fill="currentColor" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Featured Projects</h3>
                <div className="h-px flex-1 ml-4 bg-gradient-to-r from-gray-200 to-transparent"></div>
              </div>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 gap-8">
              {featuredWorks.map((work, idx) => {
                const thumbSrc = getThumbnailSrc(work);

                return (
                  <AnimateOnScroll key={work.id} delay={idx * 100}>
                    <div
                      onClick={() => onWorkClick(work)}
                      className="group glass-strong rounded-2xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 cursor-pointer overflow-hidden flex flex-col md:flex-row md:h-80 relative"
                    >
                      {/* Gradient accent bar */}
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-violet-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      {/* サムネイルエリア */}
                      <div className="overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50 relative h-56 md:h-full md:w-5/12">
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                        {thumbSrc ? (
                          <img
                            src={thumbSrc}
                            alt={work.title}
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-gray-300 bg-gradient-to-br from-gray-50 to-gray-100">
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
                            <span key={tag} className="text-xs font-medium text-gray-600 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full border border-gray-200/50">
                              #{tag}
                            </span>
                          ))}
                          {work.tags.length > 5 && (
                            <span className="text-xs font-bold gradient-text flex items-center px-1">
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
      className={`fixed inset-0 z-[300] flex items-center justify-center p-0 sm:p-4 md:p-6 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
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
            className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-500 transition-colors ml-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
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
                    <a href={work.repoUrl} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white font-bold py-3.5 rounded-xl hover:bg-black transition-colors shadow-sm hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                      <Github size={18} /> View on GitHub
                    </a>
                  )}

                  {work.siteUrl && (
                    <a href={work.siteUrl} className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white font-bold py-3.5 rounded-xl hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
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
    <div className="fixed bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-[100] safe-area-pb w-full max-w-xs sm:max-w-md px-4">
      <nav className="flex items-center justify-between px-5 py-3 glass-strong rounded-2xl shadow-xl">
        {items.map((item) => {
          const isActive = activeView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveView(item.id)}
              className={`flex flex-col items-center justify-center w-16 transition-all duration-300 ease-out group focus-visible:outline-none`}
            >
              <div className={`p-2.5 rounded-xl mb-1 transition-all duration-300 ${isActive
                ? 'bg-gradient-to-br from-blue-500 to-violet-500 text-white shadow-lg shadow-violet-500/30 -translate-y-1 scale-110'
                : 'text-gray-400 group-hover:bg-gray-100/80 group-hover:text-gray-700 group-focus-visible:ring-2 group-focus-visible:ring-violet-500 group-focus-visible:ring-offset-2'
                }`}>
                <item.icon size={22} strokeWidth={isActive ? 2.5 : 2} />
              </div>
              <span className={`text-[10px] font-bold tracking-wide transition-all duration-300 ${isActive ? 'gradient-text' : 'text-gray-400 group-hover:text-gray-600'
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
    <div className="font-sans bg-[#FAFBFC] text-gray-900 h-screen w-full overflow-hidden flex flex-col relative">
      {/* Subtle grid background */}
      <div className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(rgba(139,92,246,0.15)_1px,transparent_1px)] [background-size:40px_40px]">
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