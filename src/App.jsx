import React, { useState, useMemo, useEffect } from 'react';
import { User, Star, Briefcase, X, ArrowUpRight, Github, Linkedin, Twitter, Code } from 'lucide-react';

// --- データセクション ---
const portfolioData = {
  name: "藤井琢也",
  title: "AIエンジニア / データサイエンティスト",
  catchphrase: "技術で、ビジネス価値を創出する",
  about: {
    introduction: "AIとデータサイエンスの力で社会課題を解決し、ビジネス価値を創出することに強い関心を持っています。大学院での研究やIT企業でのインターンシップ経験に加え、100人規模のオーケストラで学生指揮者を務めた経験から、多様なメンバーをまとめるリーダーシップも強みです。",
    story: "4歳からピアノ、16歳からホルンを始め、音楽を通じて継続的に物事に取り組む姿勢を養いました。大学では情報計算科学を専攻し、AIとデータサイエンスを学んでいます。研究ではVR利用時の安全性を高める機械学習システムを構築し、長期インターンシップではAIで社内業務を50倍効率化するなど、技術で課題を解決することに情熱を注いでいます。また、大学生活を通じて4年間続けた塾講師のアルバイトでは、複雑な事柄を分かりやすく伝える力を培いました。音楽と技術、そして教育の経験から得た多角的な視点を大切にしています。",
    imageUrl: `https://placehold.co/128x128/EFEFEF/333333?text=Avatar`,
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
      github: "https://github.com/",
      linkedin: "https://linkedin.com/",
      twitter: "https://twitter.com/",
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
      ]
    },
    {
      category: "Frameworks / Libraries",
      items: [
        { name: "Unity", level: 3, experience: "2年" },
        { name: "React / Next.js", level: 3, experience: "2年" },
      ]
    },
    {
      category: "Cloud / Infra",
      items: [
        { name: "AWS", level: 2, experience: "1年" },
      ]
    },
    {
      category: "Tools / Others",
      items: [
        { name: "Git / GitHub", level: 4, experience: "3年" },
      ]
    }
  ],
  works: [
    {
      id: 1,
      category: "長期インターンシップ",
      title: "事例1：社内業務自動化のための画像処理プラットフォーム",
      thumbnail: `https://placehold.co/600x400/A5B4FC/FFFFFF?text=Image+Platform`,
      description: "仕様の異なる複数の画像加工ツールを統合し、全社的な生産性向上を実現したWebプラットフォーム。",
      tags: ["業務改善", "Webプラットフォーム", "React", "AWS", "UI/UX設計"],
      overview: "社内では、部署や目的ごとに仕様の異なる様々な画像加工作業が手作業で行われ、非効率と品質のばらつきが課題でした。リサイズ一つをとっても『余白を追加する』ツールと『トリミングする』ツール、ファイル名を『強制的に変更する』ツールと『維持する』ツールなど、要件が根本的に異なり、単一の万能ツールでは解決できませんでした。そこで、これらの多様なニーズにそれぞれ特化した専用ツール群を、一つの共通基盤上で提供する『画像処理プラットフォーム』を構想・設計しました。",
      siteUrl: null,
      repoUrl: "#",
      screenshots: [
        `https://placehold.co/800x500/A5B4FC/FFFFFF?text=Platform+Dashboard`,
      ],
      stack: {
        Frontend: "React, TypeScript",
        Backend: "Python, FastAPI",
        Infra: "AWS (Amplify, S3, Lambda, etc.)",
        "Core Tech": "Canvas API, Web Workers"
      },
      points: [
        "拡張性の高い『ツール選択型』アーキテクチャ：iLovePDFのように、ユーザーが目的に応じて最適なツールを選択できるUIを採用。将来的な機能追加も、新たなツールとして容易に統合できる設計にしました。",
        "多様な業務要件への対応：『厳格なルールを適用する自動化ツール』から『ユーザーの裁量を許容する半自動ツール』まで、各部署のワークフローに最適化された、性質の異なるツール群を開発・統合しました。",
        "共通の技術基盤とUI/UX：全てのツールをクライアントサイド完結型で統一し、セキュリティを確保。また、ドラッグ＆ドロップによるアップロードやZIP形式での一括ダウンロードなど、基本的な操作感を共通化することで、学習コストを低減しました。",
        "50倍の生産性向上：本プラットフォームのツール導入により、ある画像加工作業の時間を1件あたり10分から12秒に短縮し、月間160時間の工数を削減しました。",
      ]
    },
    {
      id: 2,
      category: "長期インターンシップ",
      title: "事例1-1：LINEミニアプリアイコンメーカー",
      thumbnail: `https://placehold.co/600x400/818CF8/FFFFFF?text=LINE+Icon+Maker`,
      description: "LINEミニアプリの厳格なアイコン規定を手軽にクリアできる、高機能なWebアプリケーション。",
      tags: ["業務効率化", "Vanilla JS", "Canvas", "UI/UX設計", "クライアントサイド"],
      overview: "LINEミニアプリのアイコンにはピクセルサイズやロゴの占有率など厳格な規定があり、従来は非デザイナーが手作業で作成していたため、時間がかかり品質も不安定でした。この課題を解決するため、誰でも・すばやく・規定に準拠したアイコンを量産できるWebアプリケーションとして本ツールを開発しました。",
      siteUrl: null,
      repoUrl: "#",
      screenshots: [
        './images/line-iconmaker-sc (1).png',
        './images/line-iconmaker-sc (2).png',
        './images/line-iconmaker-sc (3).png',
        './images/line-iconmaker-sc (4).png',
      ],
      stack: {
        "Frontend": "HTML5, CSS3, Vanilla JavaScript",
        "Core Technologies": "Canvas API, File API, Web Storage API",
        "Libraries": "JSZip",
      },
      points: [
        "賢い自動認識・調整機能：アップロードされたロゴ画像の余白を自動でトリミングし、LINEのガイドラインで推奨される中央エリアに最適なサイズで配置します。背景色も画像の端から自動で抽出するため、ユーザーは殆どのケースで微調整すら不要です。",
        "直感的でパワフルな編集UI：自動認識が難しい場合でも、手動でのトリミング範囲指定や、ドラッグ＆ドロップ、マウスホイールでの直感的なロゴ位置・サイズの微調整が可能です。リアルタイムプレビューで常に完成形を確認しながら作業できます。",
        "複数画像の並行編集能：最大10枚の画像を一度にアップロードし、タブのように切り替えながら並行で編集作業を進められます。これにより、単位時間当たりのアイコン生成数を大幅に向上させています。",
        "サーバー不要のクライアントサイド完結設計：画像処理はすべてユーザーのブラウザ内で完結します。サーバーへの画像アップロードが不要なため、高いセキュリティを確保し、運用コストも最小限に抑えています。",
      ]
    },
    {
      id: 3,
      category: "長期インターンシップ",
      title: "事例1-2：業種別リネーム＆加工ツール",
      thumbnail: `https://placehold.co/600x400/6EE7B7/FFFFFF?text=Rename+Tool`,
      description: "Googleスプレッドシートをマスタとして連携できる、Webベースの画像一括リネーム・リサイズツール。",
      tags: ["業務改善", "React", "AWS Amplify", "Google Sheets API", "クライアントサイド"],
      overview: "ペットライフ事業において、毎日発生する大量の画像加工作業が手作業で行われ、大きな業務負担となっていました。この「作業時間の短縮」と「品質の標準化」を目的とし、ブラウザ上で動作する本ツールを開発しました。ユーザーは画像ファイルをアップロードするだけで、指定の命名規則へのリネームと、規定サイズへのリサイズ（余白追加方式）を一括で実行できます。",
      siteUrl: null,
      repoUrl: "#",
      screenshots: [],
      stack: {
        Frontend: "React",
        Backend: "AWS Amplify Functions",
        "Data Source": "Google Sheets API",
        Infrastructure: "AWS Amplify Hosting"
      },
      points: [
        "セキュリティと保守性を両立したシステム設計：業種マスタとなるGoogleスプレッドシートからのデータ取得方法として、バックエンド(AWS Amplify Functions)でAPIを呼び出す構成を採用しました。これにより、スプレッドシートを非公開に保ち、認証情報をフロントエンドに露出させることなく安全な連携を実現しています。",
        "直感的なUXフローの設計：ユーザーが迷わず操作できるよう、「アップロード」「一括設定」「確認・個別編集」「ダウンロード」という4ステップの明確な画面フローを設計しました。",
        "パフォーマンスへの配慮：大量の画像を読み込む際のUI応答性を維持するため、ファイル読み込み時に軽量なプレビュー用サムネイルを生成する処理を実装しました。",
        "柔軟な操作性と堅牢性の両立：基本は一括設定で効率化しつつ、画像ごとに設定を上書きできる個別編集機能も提供しました。また、スプレッドシート連携に失敗しても、初期データで処理を継続できるフォールバック機能を実装しています。",
      ]
    },
    {
      id: 4,
      category: "長期インターンシップ",
      title: "事例1-3：媒体別リサイズツール",
      thumbnail: `https://placehold.co/600x400/FBBF24/FFFFFF?text=Resize+Tool`,
      description: "複数媒体の規定サイズに合わせて、一括で画像をトリミング・最適化するクライアントサイド完結型のWebアプリケーション。",
      tags: ["業務効率化", "React", "UI/UX設計", "クライアントサイド処理", "AWS"],
      overview: "リラクアンドエステ事業部では、EPARKやピークマネージャーといった複数の掲載媒体ごとに、毎日大量の画像リサイズ作業が発生し、大きな時間的コストとなっていました。この作業を『誰でも・すばやく・間違いなく』行える状態にし、業務を抜本的に効率化することを目的に、ブラウザ上ですべての処理が完結する本ツールを開発しました。",
      siteUrl: null,
      repoUrl: "#",
      screenshots: [],
      stack: {
        Frontend: "React",
        Infrastructure: "AWS Amplify Hosting",
        "Core Technologies": "Canvas API, File API, Web Workers",
        "Key Libraries": "Cropper.js, JSZip"
      },
      points: [
        "UI/UX設計：ユーザーが直感的に操作できるよう、左に「画像一覧」、右に「操作パネル」を配置した2カラムレイアウトを採用しました。全体設定と個別編集のエリアを明確に分けることで、多数の画像を効率的に扱えるUIを実現しています。",
        "パフォーマンス最適化：UIの応答性を損なわないよう、画像アップロード時にプレビュー用の軽量なサムネイルを別途生成します。また、重い画像処理はWeb Workerを用いてバックグラウンドで実行することを検討し、メインスレッドのフリーズを回避する設計としました。",
        "高度なトリミング機能：自動の中央トリミングを基本としつつ、モーダル上で高画質の元画像を直接操作し、最適な表示範囲を手動で調整できる機能を提供しました。これにより、自動化の速さと手動調整による品質を両立させています。",
        "柔軟な自動化ロジック：ファイル名（例: 'staff', 'logo'）から写真の種別を自動で判定し、媒体ごとに定められたリサイズ設定を適用する機能を実装しました。もちろん手動での上書きも可能とし、柔軟性と効率化を両立しています。",
      ]
    },
    {
      id: 7,
      category: "長期インターンシップ",
      title: "事例1-4：部署別進捗状況自動分析システム",
      thumbnail: `https://placehold.co/600x400/BFDBFE/FFFFFF?text=Analytics+System`,
      description: "NotionからエクスポートしたCSVを元に、経営層への報告資料を自動生成する業務効率化ツール。",
      tags: ["データ分析", "レポート自動化", "Python", "Flask", "Pandas", "PowerPoint"],
      overview: "インターン生チームの活動成果を社長へ報告する際、Notionからの手動集計に多大な時間がかかっていたため、この定型業務を自動化する目的で開発しました。CSVをアップロードするだけで、煩雑な集集計作業から解放され、管理者が本来のマネジメント業務に集中できる環境を目指しました。",
      siteUrl: null,
      repoUrl: "#",
      screenshots: [],
      stack: {
        "Frontend": "HTML5, CSS3, JavaScript (Papa Parse)",
        "Backend": "Python, Flask",
        "Data Processing": "Pandas, NumPy",
        "Report Generation": "python-pptx"
      },
      points: [
        "徹底したプロセスの自動化：CSVをアップロードするだけで、進捗ステータスの自動分類、部署ごとのメトリクス集計、コスト分析までをワンクリックで実行します。手作業による集計ミスをなくし、報告準備の時間を大幅に短縮しました。",
        "多様なアウトプット形式：Web画面での確認に加え、3種類のCSV（集計結果、全データ、デプロイ日順）と、そのまま報告に使えるPowerPointレポートを自動生成します。用途に応じて最適な形式を選べるため、資料作成の手間を削減できます。",
        "誰でも使えるUI/UXと起動プロセス：専門知識がなくても使えるよう、ドラッグ＆ドロップでのアップロードや、処理状況がわかるローディング表示など、直感的なUIを設計しました。また、ダブルクリックだけで環境構築からサーバー起動まで完了するバッチファイルを用意し、誰でも簡単に利用開始できるようにしました。",
      ]
    },
    {
      id: 5,
      category: "研究",
      title: "事例2：VR眼精疲労 リアルタイム予測システム",
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
      id: 6,
      category: "その他の活動",
      title: "事例3：大学オーケストラ 学生指揮者",
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
const Home = ({ data, onWorkClick, onInternshipCardClick }) => {
  const focusAreas = [
    {
      title: "ビジネス価値を創出する開発",
      description: "長期インターンシップでは、複数部署の業務課題に対し、本質的な改善提案から設計、実装まで一貫して担当。仕様の異なる画像処理ツール群を統合するWebプラットフォームや、経営層への報告を自動化するデータ分析システムなどを構築しました。",
      icon: Code,
      isInternshipCard: true,
    },
    {
      title: "先進技術の研究開発",
      description: "大学院では、VR利用時の安全性を高めるため、機械学習を用いた生体情報の分析に取り組んでいます。技術の社会実装を通じて、人々の生活を豊かにすることを目指します。",
      icon: Star,
      workId: 5,
    },
    {
      title: "チームビルディングとリーダーシップ",
      description: "100人規模の大学オーケストラで学生指揮者を務めました。多様なメンバーの力を引き出し、一つの目標を達成するチームワークを大切にしています。",
      icon: User,
      workId: 6,
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
              // const work = area.workId ? data.works.find(w => w.id === area.workId) : null; // この行は不要になります
              return (
                <div key={area.title}
                     // onClick属性を削除し、classNameからカーソルとホバーエフェクトを削除します
                     className="bg-white/60 border border-gray-200 rounded-lg p-6 text-center transition-all duration-300">
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
const Works = ({ data, onWorkClick }) => {
  const groupedWorks = data.reduce((acc, work) => {
    const category = work.category || "その他";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(work);
    return acc;
  }, {});

  const fullWidthCategory = "長期インターンシップ";
  const sideBySideCategories = ["研究", "その他の活動"];

  const WorkCard = ({ work }) => (
    <div key={work.id}
         className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer group flex flex-col h-[440px]"
         onClick={() => onWorkClick(work)}>
      <div className="overflow-hidden h-48 flex-shrink-0">
        <img src={work.thumbnail} alt={work.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-gray-800">{work.title}</h3>
        <p className="text-sm text-gray-600 mt-2">{work.description}</p>
        <div className="mt-auto pt-4 flex flex-wrap gap-2">
          {work.tags.map(tag => (
            <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-8 md:p-12 animate-fade-in">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Works</h2>
        
        {groupedWorks[fullWidthCategory] && (
          <section className="mb-12">
            <h3 className="text-2xl font-bold text-gray-700 border-b-2 border-blue-200 pb-2 mb-6">
              {fullWidthCategory}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {groupedWorks[fullWidthCategory].map(work => (
                <WorkCard key={work.id} work={work} />
              ))}
            </div>
          </section>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sideBySideCategories.map(category => (
            groupedWorks[category] && (
              <section key={category} className="min-w-0">
                <h3 className="text-2xl font-bold text-gray-700 border-b-2 border-blue-200 pb-2 mb-6">
                  {category}
                </h3>
                {groupedWorks[category].map(work => (
                  <WorkCard key={work.id} work={work} />
                ))}
              </section>
            )
          ))}
        </div>
        
      </div>
    </div>
  );
};


// 制作実績詳細モーダル
const WorkDetailModal = ({ work, onClose }) => {
  if (!work) return null;

  const ImageSlideshow = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      if (!images || images.length <= 1) return;
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
      return () => clearInterval(timer);
    }, [images]);

    if (!images || images.length === 0) {
      return null;
    }

    return (
      <div className="w-full h-80 bg-white flex items-center justify-center overflow-hidden relative rounded-lg mb-6 shadow-md">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slideshow image ${index + 1}`}
            className={`absolute w-full h-full object-contain transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>
    );
  };

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
          {work.screenshots && work.screenshots.length > 0 ? (
            <ImageSlideshow images={work.screenshots} />
          ) : null}
          <div className="flex gap-4 mb-6">
            {work.siteUrl && <a href={work.siteUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">サイトを見る <ArrowUpRight size={16}/></a>}
            {work.repoUrl && <a href={work.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors">GitHubでコードを見る <Github size={16}/></a>}
          </div>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-gray-700 mb-2">概要</h4>
              <p className="text-gray-600 leading-relaxed">{work.overview}</p>
            </div>
            { work.stack &&
              <div>
                <h4 className="font-bold text-gray-700 mb-2">技術スタック</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  {Object.entries(work.stack).map(([key, value]) => (
                    <p key={key}><strong className="font-semibold text-gray-700">{key}:</strong> {value}</p>
                  ))}
                </div>
              </div>
            }
            { work.points &&
              <div>
                <h4 className="font-bold text-gray-700 mb-2">工夫した点・課題解決</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {work.points.map((point, i) => <li key={i}>{point}</li>)}
                </ul>
              </div>
            }
          </div>
        </main>
      </div>
    </div>
  );
};

// インターンシップ概要モーダル
const InternshipDetailModal = ({ isOpen, onClose, onWorkClick, works }) => {
  if (!isOpen) return null;

  const internshipWorks = works.filter(w => w.category === '長期インターンシップ');

  const handleDetailClick = (work) => {
    onClose();
    setTimeout(() => {
      onWorkClick(work);
    }, 150);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4 animate-fade-in-fast" onClick={onClose}>
      <div className="bg-gray-50 rounded-lg shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col" onClick={e => e.stopPropagation()}>
        <header className="p-4 border-b border-gray-200 flex justify-between items-center flex-shrink-0">
          <h3 className="font-bold text-lg text-gray-800">長期インターンシップでの取り組み</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800"><X size={24} /></button>
        </header>
        <main className="p-6 overflow-y-auto space-y-6">
          <p className="text-gray-700 leading-relaxed">
            長期インターンシップでは、複数の部署が抱える課題に対し、技術的なアプローチで本質的な業務改善に取り組んできました。主な成果として以下のプロジェクトを推進しました。各項目の「詳細を見る」から、個別の実績をご確認いただけます。
          </p>
          <div className="space-y-4">
            {internshipWorks.map(work => (
              <div key={work.id} className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
                <h4 className="font-bold text-md text-gray-800">{work.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{work.description}</p>
                <div className="text-right mt-3">
                  <button onClick={() => handleDetailClick(work)} className="text-sm text-blue-600 hover:underline font-semibold flex items-center gap-1 ml-auto">
                    <span>詳細を見る</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            ))}
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
  const [isInternshipModalOpen, setIsInternshipModalOpen] = useState(false);

  const handleWorkClick = (work) => {
    setSelectedWork(work);
  };

  const handleCloseModal = () => {
    setSelectedWork(null);
  };

  const handleInternshipCardClick = () => {
    setIsInternshipModalOpen(true);
  };

  const handleCloseInternshipModal = () => {
    setIsInternshipModalOpen(false);
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
        return <Home data={portfolioData} onWorkClick={handleWorkClick} onInternshipCardClick={handleInternshipCardClick} />;
    }
  }, [activeView]);

  return (
    <div className="font-sans w-full h-screen" style={{ background: 'linear-gradient(to bottom right, #E0E7FF, #F3E8FF)'}}>

      <main className="w-full h-full overflow-y-auto pb-28">
        {CurrentView}
      </main>

      <Dock activeView={activeView} setActiveView={setActiveView} />

      <WorkDetailModal work={selectedWork} onClose={handleCloseModal} />
      <InternshipDetailModal
        isOpen={isInternshipModalOpen}
        onClose={handleCloseInternshipModal}
        onWorkClick={handleWorkClick}
        works={portfolioData.works}
      />

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
