import React, { useState, useMemo } from 'react';
import { User, Star, Briefcase, X, ArrowUpRight, Github, Linkedin, Twitter, Code } from 'lucide-react';

// --- データセクション ---
// このオブジェクト内の情報をあなた自身のものに書き換えてください。
const portfolioData = {
  name: "藤井琢也",
  title: "AIエンジニア / データサイエンティスト",
  catchphrase: "技術で、ビジネス価値を創出する",
  about: {
    introduction: "AIとデータサイエンスの力で社会課題を解決し、ビジネス価値を創出することに強い関心を持っています。大学院での研究やIT企業でのインターンシップ経験に加え、100人規模のオーケストラで学生指揮者を務めた経験から、多様なメンバーをまとめるリーダーシップも強みです。",
    story: "4歳からピアノ、16歳からホルンを始め、音楽を通じて継続的に物事に取り組む姿勢を養いました。大学では情報計算科学を専攻し、AIとデータサイエンスを学んでいます。研究ではVR利用時の安全性を高める機械学習システムを構築し、長期インターンシップではAIで社内業務を50倍効率化するなど、技術で課題を解決することに情熱を注いでいます。また、大学生活を通じて4年間続けた塾講師のアルバイトでは、複雑な事柄を分かりやすく伝える力を培いました。音楽と技術、そして教育の経験から得た多角的な視点を大切にしています。",
    imageUrl: `https://placehold.co/128x128/EFEFEF/333333?text=Avatar`, // あなたの顔写真やアバターのURLに差し替えてください
    timeline: [
      { year: "20XX年〜現在", event: "東京理科大学 創域理工学研究科 情報計算科学専攻" },
      { year: "20XX年〜20XX年", event: "大学オーケストラで学生指揮者を務める" },
      { year: "20XX年〜20XX年", event: "IT企業にて長期インターンシップ (AIエンジニア)" },
      { year: "20XX年〜20XX年", event: "学習塾にて講師のアルバイト（4年間）" },
      { year: "20XX年〜20XX年", event: "東京理科大学 創域理工学部 (例)" },
    ],
    values: [
      { title: "課題の本質を見抜く分析力", description: "表面的な問題ではなく根本的な課題を発見し、持続的な価値を創出します。インターンシップでは、単なる作業自動化に留まらず、部署横断的な業務改善基盤を構築しました。" },
      { title: "継続力と探究心", description: "4歳から始めた音楽経験や4年間の塾講師の経験で培った継続力には自信があります。研究や開発においても、常に高みを目指し、粘り強く改善を繰り返すことができます。" },
      { title: "チームを導くリーダーシップ", description: "100人超のオーケストラで学生指揮者を務め、多様なメンバーの強みを引き出し、演奏会を成功に導きました。この経験をチーム開発にも活かします。" },
    ],
    socials: {
      github: "https://github.com/", // ご自身のURLに変更してください
      linkedin: "https://linkedin.com/", // ご自身のURLに変更してください
      twitter: "https://twitter.com/", // ご自身のURLに変更してください
    }
  },
  skills: [
    {
      category: "Languages",
      items: [
        { name: "Java", level: 5, experience: "4年" },
        { name: "Python", level: 5, experience: "4年" },
        { name: "C / Linux", level: 4, experience: "3年" },
        { name: "C#", level: 3, experience: "2年" },
        { name: "HTML / CSS", level: 3, experience: "2年" },
        { name: "JavaScript", level: 3, experience: "2年" },
        { name: "SQL", level: 2, experience: "半年" },
        { name: "MATLAB", level: 2, experience: "半年" },
      ]
    },
    {
      category: "Frameworks / Libraries",
      items: [
        { name: "Unity", level: 3, experience: "2年" },
        { name: "React / Next.js", level: 3, experience: "2年" },
        { name: "Scikit-learn / Pandas", level: 5, experience: "4年" },
      ]
    },
    {
      category: "Cloud / Infra",
      items: [
        { name: "AWS", level: 3, experience: "1年" },
        { name: "Docker", level: 3, experience: "2年" },
      ]
    },
    {
      category: "Tools / Others",
      items: [
        { name: "Git / GitHub", level: 4, experience: "3年" },
        { name: "Figma", level: 3, experience: "1年" },
      ]
    }
  ],
  works: [
    {
      id: 1,
      title: "社内業務効率化AI画像処理システム",
      thumbnail: `https://placehold.co/600x400/A5B4FC/FFFFFF?text=AI+System`,
      description: "手作業で行われていた画像加工業務を自動化し、生産性を50倍に向上させたWebアプリケーション。",
      tags: ["業務改善", "AI", "Webアプリ", "AWS"],
      overview: "IT企業のインターンシップにて、複数部署で行われていた月間160時間の画像加工業務を自動化するプロジェクトを主導。単なる自動化ではなく、部署毎のニーズに対応できる汎用的なプラットフォームとして設計・開発。AWS上で安定稼働するWebアプリとして全社に導入しました。",
      siteUrl: null,
      repoUrl: "#",
      screenshots: [
        `https://placehold.co/800x500/A5B4FC/FFFFFF?text=Screenshot+1`,
      ],
      stack: {
        Frontend: "React, etc.",
        Backend: "Python, 機械学習 (ロゴ自動認識)",
        Infra: "AWS",
      },
      points: [
        "50倍の生産性向上：画像加工の処理時間を1件あたり10分から12秒に短縮し、月間160時間の工数を削減しました。",
        "本質的な課題解決：5部署へのヒアリングを通じて真の課題を発見し、「汎用的な画像処理プラットフォーム」という根本的な解決策を提案・実装しました。",
        "技術リーダーシップ：6名のインターンチームで技術リーダーを務め、機械学習モデルの設計からWeb I/F、API設計、AWSへのデプロイまでを主導しました。",
      ]
    },
    {
      id: 2,
      title: "VR眼精疲労 リアルタイム予測システム",
      thumbnail: `https://placehold.co/600x400/FCA5A5/FFFFFF?text=VR+Research`,
      description: "機械学習を用いてVR利用時の眼精疲労をリアルタイムで監視・予測する研究開発プロジェクト。",
      tags: ["機械学習", "Python", "データ分析"],
      overview: "VR市場の普及課題である長時間利用による眼精疲労に着目。アイトラッキングデータを基に、機械学習モデルを構築し、ユーザーの疲労度を客観的に評価するシステムです。VRコンテンツの安全性向上や、医療・教育分野での応用を目指します。",
      siteUrl: null,
      repoUrl: "#",
      screenshots: [],
      stack: {
        Analysis: "アイトラッキングデータ分析",
        Backend: "Python, Scikit-learn (Random Forest), Pandas",
      },
      points: [
        "客観的評価の実現：従来は主観的なアンケートに頼っていた疲労度評価を、アイトラッキングデータを用いて定量的に測定する手法を確立しました。",
        "幅広い応用可能性：VRゲームの品質管理、医療リハビリ、教育分野など、様々な産業での安全性向上に貢献できる技術です。",
      ]
    },
    {
      id: 3,
      title: "大学オーケストラ 学生指揮者",
      thumbnail: `https://placehold.co/600x400/93C5FD/FFFFFF?text=Orchestra`,
      description: "100人超の楽団を率い、演奏会や武道館での卒業式を成功に導いたリーダーシップ経験。",
      tags: ["リーダーシップ", "マネジメント", "課題解決"],
      overview: "大学オーケストラで学生指揮者を務め、100人を超える多様なバックグラウンドを持つ団員を一つの音楽目標に向けて導きました。技術レベルや意識の異なるメンバーのパフォーマンスを最大化することに注力し、武道館での卒業式など、重要な場での指揮を多数経験しました。",
      siteUrl: null,
      repoUrl: null,
      screenshots: [],
      stack: {
        役割: "学生指揮者、ホルン奏者",
        規模: "団員100名以上",
        担当イベント: "定期演奏会、卒業式 (日本武道館) など",
      },
      points: [
        "多様なメンバーの統率：異なる楽器、学年、専攻の団員一人ひとりと向き合い、全体の調和を生み出すコミュニケーションを実践しました。",
        "課題解決力：演奏会本番で起こりうるトラブルを事前に予測し、綿密な計画と準備で対処することで、円滑なイベント進行を実現しました。",
        "パフォーマンスの最大化：団員の練習管理や技術指導にも関わり、チーム全体の演奏レベル向上に貢献。個々の力を結集し、大きな成果を出すプロセスを学びました。",
      ]
    },
  ]
};

// --- コンポーネントセクション ---

// 星評価コンポーネント
const StarRating = ({ level }) => (
  <div className="flex items-center">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < level ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
    ))}
  </div>
);

// Homeセクション
const Home = ({ data, onWorkClick }) => {
  const focusAreas = [
    {
      title: "AIによる課題解決",
      description: "IT企業のインターンシップにて、AI画像処理システムを開発し、月間の業務を50倍効率化しました。ビジネス課題の本質を捉え、技術で具体的な価値を創出します。",
      icon: Code,
      workId: 1,
    },
    {
      title: "先進技術の研究開発",
      description: "大学院では、VR利用時の安全性を高めるため、機械学習を用いた生体情報の分析に取り組んでいます。技術の社会実装を通じて、人々の生活を豊かにすることを目指します。",
      icon: Star,
      workId: 2,
    },
    {
      title: "チームビルディングとリーダーシップ",
      description: "100人規模の大学オーケストラで学生指揮者を務めました。多様なメンバーの力を引き出し、一つの目標を達成するチームワークを大切にしています。",
      icon: User,
      workId: 3,
    }
  ];

  const keySkills = ["Java", "Python", "AWS", "Unity", "C#", "React", "Linux"];

  return (
    <div className="p-8 md:p-12 animate-fade-in">
      <main className="max-w-4xl mx-auto">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight">
            {data.catchphrase}
          </h1>
          <p className="mt-4 text-2xl text-gray-600">{data.name}</p>
        </section>
        <section className="mb-16">
          <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
            {data.about.introduction}
            <br />
            4歳から始めた音楽や4年間の塾講師経験で培った継続力・伝達力と、AIやVRといった先端技術への探求心を掛け合わせ、新しい価値を創造することを目指しています。
          </p>
        </section>
        <section>
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">私が取り組んでいること</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {focusAreas.map(area => {
              const work = data.works.find(w => w.id === area.workId);
              return (
                <div key={area.title} 
                     onClick={() => work && onWorkClick(work)} 
                     className="bg-white/60 border border-gray-200 rounded-lg p-6 text-center cursor-pointer hover:shadow-xl hover:border-blue-400 transform hover:-translate-y-1 transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <area.icon className="w-8 h-8 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{area.title}</h3>
                  <p className="text-gray-600 text-sm">{area.description}</p>
                </div>
              );
            })}
          </div>
        </section>
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">主な使用技術</h2>
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-3">
            {keySkills.map(skill => (
              <span key={skill} className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full font-medium">
                {skill}
              </span>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

// Aboutセクション
const About = ({ data }) => (
  <div className="p-8 md:p-12 animate-fade-in">
    <h2 className="text-3xl font-bold text-gray-800 mb-8 max-w-5xl mx-auto">About Me</h2>
    <div className="flex flex-col md:flex-row gap-12 items-start max-w-5xl mx-auto">
      <div className="flex-shrink-0 text-center md:w-1/4">
        <img src={data.imageUrl} alt={portfolioData.name} className="w-32 h-32 rounded-full mx-auto shadow-lg" />
        <h3 className="text-2xl font-bold mt-4 text-gray-800">{portfolioData.name}</h3>
        <p className="text-gray-500">{portfolioData.title}</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href={data.socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-800"><Github size={24}/></a>
          <a href={data.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-800"><Linkedin size={24}/></a>
          <a href={data.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-800"><Twitter size={24}/></a>
        </div>
      </div>
      <div className="flex-grow md:w-3/4">
        <p className="text-lg text-gray-600 leading-relaxed">{data.story}</p>
        <div className="mt-10">
          <h4 className="text-xl font-bold text-gray-700 mb-4">経歴</h4>
          <div className="border-l-2 border-blue-200 pl-6 space-y-6">
            {data.timeline.map(item => (
              <div key={item.event} className="relative">
                <div className="absolute -left-[34px] top-1.5 w-4 h-4 bg-blue-500 rounded-full border-4 border-white"></div>
                <p className="font-semibold text-gray-700">{item.event}</p>
                <p className="text-sm text-gray-500">{item.year}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10">
          <h4 className="text-xl font-bold text-gray-700 mb-4">価値観・強み</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.values.map(value => (
              <div key={value.title} className="bg-white/50 border border-gray-200 rounded-lg p-4">
                <h5 className="font-bold text-gray-800">{value.title}</h5>
                <p className="text-sm text-gray-600 mt-2">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Skillsセクション
const Skills = ({ data }) => (
  <div className="p-8 md:p-12 animate-fade-in">
    <h2 className="text-3xl font-bold text-gray-800 mb-8 max-w-5xl mx-auto">Skills</h2>
    <div className="space-y-10 max-w-5xl mx-auto">
      {data.map(category => (
        <div key={category.category}>
          <h3 className="text-xl font-bold text-gray-700 mb-4 border-b-2 border-gray-200 pb-2">{category.category}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
            {category.items.map(skill => (
              <div key={skill.name} className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-800">{skill.name}</p>
                  <p className="text-sm text-gray-500">{skill.experience}</p>
                </div>
                <StarRating level={skill.level} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Worksセクション
const Works = ({ data, onWorkClick }) => (
  <div className="p-8 md:p-12 animate-fade-in">
    <h2 className="text-3xl font-bold text-gray-800 mb-8 max-w-6xl mx-auto">Works</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {data.map(work => (
        <div key={work.id} 
             className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
             onClick={() => onWorkClick(work)}>
          <div className="overflow-hidden h-48">
            <img src={work.thumbnail} alt={work.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="p-5">
            <h3 className="text-lg font-bold text-gray-800">{work.title}</h3>
            <p className="text-sm text-gray-600 mt-2 h-10">{work.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {work.tags.map(tag => (
                <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// 制作実績詳細モーダル
const WorkDetailModal = ({ work, onClose }) => {
  if (!work) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4 animate-fade-in-fast" onClick={onClose}>
      <div className="bg-gray-50 rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col" onClick={e => e.stopPropagation()}>
        <header className="p-4 border-b border-gray-200 flex justify-between items-center flex-shrink-0">
          <h3 className="font-bold text-lg text-gray-800">{work.title}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
            <X size={24} />
          </button>
        </header>
        <main className="p-6 overflow-y-auto">
          {work.screenshots && work.screenshots.length > 0 && (
            <img src={work.screenshots[0]} alt={`${work.title} screenshot`} className="w-full rounded-lg mb-6 shadow-md" />
          )}
          <div className="flex gap-4 mb-6">
            {work.siteUrl && <a href={work.siteUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">サイトを見る <ArrowUpRight size={16}/></a>}
            {work.repoUrl && <a href={work.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors">GitHubでコードを見る <Github size={16}/></a>}
          </div>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-gray-700 mb-2">概要</h4>
              <p className="text-gray-600 leading-relaxed">{work.overview}</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-700 mb-2">技術スタック</h4>
              <div className="text-sm text-gray-600 space-y-1">
                {Object.entries(work.stack).map(([key, value]) => (
                  <p key={key}><strong className="font-semibold text-gray-700">{key}:</strong> {value}</p>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold text-gray-700 mb-2">工夫した点・課題解決</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                {work.points.map((point, i) => <li key={i}>{point}</li>)}
              </ul>
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
    { id: 'Home', label: 'Home', icon: Briefcase },
    { id: 'About', label: 'About', icon: User },
    { id: 'Skills', label: 'Skills', icon: Star },
    { id: 'Works', label: 'Works', icon: Code },
  ];

  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40">
      <ul className="flex items-end gap-3 bg-white/40 backdrop-blur-md p-2 rounded-xl border border-gray-200 shadow-lg">
        {navItems.map(item => (
          <li key={item.id}>
            <button 
              onClick={() => setActiveView(item.id)}
              className={`relative flex flex-col items-center justify-center w-16 h-16 rounded-lg transition-all duration-300 ease-in-out group
                          ${activeView === item.id ? 'bg-blue-100 text-blue-600 scale-110 -translate-y-2' : 'text-gray-600 hover:bg-gray-100 hover:-translate-y-1'}`}
            >
              <item.icon size={28} />
              <span className={`absolute -top-8 text-xs bg-gray-800 text-white px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300
                               ${activeView === item.id ? 'opacity-100' : ''}`}>
                {item.label}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

// メインアプリケーション
export default function App() {
  const [activeView, setActiveView] = useState('Home');
  const [selectedWork, setSelectedWork] = useState(null);

  const handleWorkClick = (work) => {
    setSelectedWork(work);
  };

  const handleCloseModal = () => {
    setSelectedWork(null);
  };

  const CurrentView = useMemo(() => {
    switch (activeView) {
      case 'About':
        return <About data={portfolioData.about} />;
      case 'Skills':
        return <Skills data={portfolioData.skills} />;
      case 'Works':
        return <Works data={portfolioData.works} onWorkClick={handleWorkClick} />;
      case 'Home':
      default:
        return <Home data={portfolioData} onWorkClick={handleWorkClick} />;
    }
  }, [activeView]);

  return (
    <div className="font-sans w-full h-screen" style={{ background: 'linear-gradient(to bottom right, #E0E7FF, #F3E8FF)'}}>
      
      {/* メインのスクロールエリア */}
      <main className="w-full h-full overflow-y-auto pb-28">
        {CurrentView}
      </main>

      {/* 画面下部に固定されるDock */}
      <Dock activeView={activeView} setActiveView={setActiveView} />

      {/* モーダル */}
      <WorkDetailModal work={selectedWork} onClose={handleCloseModal} />
      
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
        @keyframes fade-in-fast {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in-fast {
          animation: fade-in-fast 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
