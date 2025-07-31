import React, { useState, useMemo } from 'react';
import { FileText, User, Star, Briefcase, X, ArrowUpRight, Github, Linkedin, Twitter, Code } from 'lucide-react';

// --- データセクション ---
// ポートフォリオのコンテンツをここに集約します。ご自身の情報に合わせて編集してください。
const portfolioData = {
  name: "YOUR NAME", // あなたの名前に変更してください
  title: "ソフトウェアエンジニア",
  catchphrase: "アイデアを形にする",
  about: {
    introduction: "Web技術とモバイルアプリ開発に情熱を注いでいます。ユーザーの課題を解決し、優れた体験を提供できるプロダクト開発を目指しています。チームでの開発経験を通じて、品質と効率を両立させることを得意としています。",
    story: "〇〇大学大学院で情報科学を専攻しています。学業の傍ら、スタートアップでのインターンシップを通じて実務的なWeb開発スキルを習得しました。特に、ユーザー中心の設計とクリーンなコードを書くことにこだわりを持っています。",
    imageUrl: `https://placehold.co/128x128/EFEFEF/333333?text=Avatar`, // あなたの顔写真やアバターのURLに差し替えてください
    timeline: [
      { year: "20XX年〜現在", event: "〇〇大学大学院 〇〇研究科" },
      { year: "20XX年〜20XX年", event: "〇〇大学 〇〇学部" },
      { year: "20XX年〜20XX年", event: "株式会社〇〇にてインターンシップ (Web開発)" },
    ],
    values: [
      { title: "ユーザー中心設計", description: "ユーザーの課題解決を最優先に考え、直感的で使いやすいUI/UXの設計を心がけています。" },
      { title: "コードの品質", description: "可読性・保守性の高いコードは、将来の機能追加やチーム開発を円滑にすると信じています。" },
      { title: "継続的な学習", description: "技術の進化に追いつくため、常に新しい知識やスキルを学び続ける姿勢を大切にしています。" },
    ],
    socials: {
      github: "https://github.com/",
      linkedin: "https://linkedin.com/",
      twitter: "https://twitter.com/",
    }
  },
  skills: [
    { 
      category: "Languages", 
      items: [
        { name: "TypeScript", level: 4, experience: "2年" },
        { name: "JavaScript (ES6+)", level: 5, experience: "3年" },
        { name: "Python", level: 4, experience: "3年" },
        { name: "Go", level: 2, experience: "半年" },
      ]
    },
    { 
      category: "Frameworks / Libraries",
      items: [
        { name: "React", level: 5, experience: "2年" },
        { name: "Next.js", level: 4, experience: "1.5年" },
        { name: "Vue.js", level: 3, experience: "1年" },
        { name: "Django", level: 3, experience: "1年" },
      ]
    },
    {
      category: "Cloud / Infra",
      items: [
        { name: "AWS (EC2, S3, Lambda)", level: 3, experience: "1年" },
        { name: "GCP (Firebase)", level: 3, experience: "1年" },
        { name: "Docker", level: 4, experience: "2年" },
        { name: "Vercel", level: 5, experience: "2年" },
      ]
    },
    {
      category: "Tools / Others",
      items: [
        { name: "Git / GitHub", level: 5, experience: "4年" },
        { name: "Figma", level: 3, experience: "1年" },
        { name: "Jira", level: 4, experience: "2年" },
      ]
    }
  ],
  works: [
    {
      id: 1,
      title: "プロジェクトA: タスク管理アプリ",
      thumbnail: `https://placehold.co/600x400/A5B4FC/FFFFFF?text=Project+A`,
      description: "チームの生産性を向上させるための直感的なタスク管理アプリケーション。",
      tags: ["React", "Next.js", "TypeScript", "Firebase"],
      overview: "このプロジェクトは、小規模チームが日々のタスクを効率的に管理し、進捗を可視化することを目的としています。カンバンボード形式のUIを採用し、ドラッグ＆ドロップで直感的に操作できます。",
      siteUrl: "#",
      repoUrl: "#",
      screenshots: [
        `https://placehold.co/800x500/A5B4FC/FFFFFF?text=Screenshot+1`,
        `https://placehold.co/800x500/C7D2FE/FFFFFF?text=Screenshot+2`,
      ],
      stack: {
        Frontend: "React, Next.js, TypeScript, Tailwind CSS",
        Backend: "Firebase (Firestore, Authentication)",
        Infra: "Vercel",
      },
      points: [
        "リアルタイムなデータ同期: Firebaseのリアルタイムリスナーを利用し、複数ユーザーが同時に更新しても即座にUIに反映される機能を実装しました。",
        "パフォーマンス最適化: Next.jsのSSGとISRを活用し、初期表示速度を高速化。また、画像の最適化によりLighthouseスコアを向上させました。",
        "アクセシビリティ: キーボード操作やスクリーンリーダーへの対応を意識し、セマンティックなHTMLを記述しました。"
      ]
    },
    {
      id: 2,
      title: "プロジェクトB: ポートフォリオジェネレーター",
      thumbnail: `https://placehold.co/600x400/FCA5A5/FFFFFF?text=Project+B`,
      description: "簡単な入力でモダンなポートフォリオサイトを自動生成するWebサービス。",
      tags: ["Python", "Django", "AWS"],
      overview: "非エンジニアでも簡単に自身のポートフォリオサイトを作成できるサービスです。テンプレートを選択し、情報を入力するだけで静的サイトが生成・デプロイされます。",
      siteUrl: "#",
      repoUrl: "#",
      screenshots: [
        `https://placehold.co/800x500/FCA5A5/FFFFFF?text=Screenshot+1`,
      ],
      stack: {
        Frontend: "HTML, CSS, JavaScript",
        Backend: "Python, Django",
        Infra: "AWS (EC2, S3)",
      },
      points: [
        "Celeryによる非同期処理: サイト生成という時間のかかる処理を非同期化し、ユーザーを待たせないUI/UXを実現しました。",
        "動的なOGP生成: シェアされた際に適切な情報が表示されるよう、ユーザーの入力内容に応じて動的にOGP画像を生成する機能を実装しました。"
      ]
    },
    {
      id: 3,
      title: "プロジェクトC: Go言語製APIサーバー",
      thumbnail: `https://placehold.co/600x400/93C5FD/FFFFFF?text=Project+C`,
      description: "高パフォーマンスなマイクロサービスアーキテクチャのためのAPIサーバー。",
      tags: ["Go", "Docker", "GCP"],
      overview: "大量のリクエストを高速に処理することを目的としたRESTful APIサーバーです。クリーンアーキテクチャを採用し、テスト容易性と保守性を高めています。",
      siteUrl: null,
      repoUrl: "#",
      screenshots: [],
      stack: {
        Backend: "Go (Gin)",
        Infra: "GCP (Cloud Run), Docker",
      },
      points: [
        "パフォーマンスチューニング: Goの並行処理機能を活かし、ボトルネックとなっていた処理を特定・改善することで、従来比300%のパフォーマンス向上を達成しました。",
        "コンテナ化: Dockerを利用して開発環境と本番環境を統一し、デプロイの再現性と効率性を高めました。"
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
const Home = ({ data, onWorkClick }) => (
  <div className="p-8 md:p-12 h-full overflow-y-auto animate-fade-in">
    <div className="text-center flex flex-col justify-center items-center h-full">
      <main className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 tracking-tighter">
          {data.catchphrase}
        </h1>
        <h2 className="mt-2 text-4xl md:text-6xl font-bold text-gray-800 tracking-tighter">
          {data.title}
        </h2>
        <p className="mt-4 text-2xl text-gray-600">{data.name}</p>
        <p className="mt-8 max-w-xl mx-auto text-lg text-gray-500">{data.about.introduction}</p>
        
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-700 mb-6">注目の制作実績</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.works.slice(0, 3).map(work => (
              <div key={work.id} onClick={() => onWorkClick(work)} className="bg-white/50 border border-gray-200 rounded-lg p-4 cursor-pointer hover:shadow-lg hover:border-blue-400 transition-all duration-300">
                <img src={work.thumbnail} alt={work.title} className="rounded-md w-full h-32 object-cover mb-3" />
                <h4 className="font-bold text-gray-800">{work.title}</h4>
                <p className="text-sm text-gray-500 mt-1">{work.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  </div>
);

// Aboutセクション
const About = ({ data }) => (
  <div className="p-8 md:p-12 h-full overflow-y-auto animate-fade-in">
    <h2 className="text-3xl font-bold text-gray-800 mb-8">About Me</h2>
    <div className="flex flex-col md:flex-row gap-12 items-start">
      <div className="flex-shrink-0 text-center">
        <img src={data.imageUrl} alt={portfolioData.name} className="w-32 h-32 rounded-full mx-auto shadow-lg" />
        <h3 className="text-2xl font-bold mt-4 text-gray-800">{portfolioData.name}</h3>
        <p className="text-gray-500">{portfolioData.title}</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href={data.socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-800"><Github size={24}/></a>
          <a href={data.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-800"><Linkedin size={24}/></a>
          <a href={data.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-800"><Twitter size={24}/></a>
        </div>
      </div>
      <div className="flex-grow">
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
  <div className="p-8 md:p-12 h-full overflow-y-auto animate-fade-in">
    <h2 className="text-3xl font-bold text-gray-800 mb-8">Skills</h2>
    <div className="space-y-10">
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
  <div className="p-8 md:p-12 h-full overflow-y-auto animate-fade-in">
    <h2 className="text-3xl font-bold text-gray-800 mb-8">Works</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4 animate-fade-in-fast" onClick={onClose}>
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
    <nav className="absolute bottom-4 left-1/2 -translate-x-1/2">
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
    <div className="bg-gray-200 font-sans w-full h-screen p-4 md:p-8 flex items-center justify-center" style={{ background: 'linear-gradient(to bottom right, #E0E7FF, #F3E8FF)'}}>
      <div className="w-full h-full max-w-7xl mx-auto bg-gray-100/50 backdrop-blur-xl border border-gray-200/50 rounded-2xl shadow-2xl flex flex-col relative overflow-hidden">
        {/* Mac風ウィンドウのタイトルバー */}
        <header className="flex-shrink-0 border-b border-gray-200/80 h-11 flex items-center px-4">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex-grow text-center text-sm font-medium text-gray-600">
            {portfolioData.name} - {activeView}
          </div>
        </header>

        {/* コンテンツエリア */}
        <div className="flex-grow relative">
          {CurrentView}
        </div>

        {/* Dock */}
        <Dock activeView={activeView} setActiveView={setActiveView} />
      </div>

      {/* モーダル */}
      <WorkDetailModal work={selectedWork} onClose={handleCloseModal} />
      
      {/* CSS for animations */}
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
