import React, { useState, useMemo, useEffect } from 'react';
import { User, Star, Briefcase, X, ArrowUpRight, Github, Linkedin, Twitter, Code } from 'lucide-react';

// --- データセクション ---
const portfolioData = {
  name: "藤井琢也",
  title: "大学院生 / エンジニア",
  catchphrase: "技術で、ビジネス価値を創出する",
  about: {
    introduction: "技術の力で、目に見える「価値」を生み出すことにこだわっています。AIやデータサイエンスの知識を活かし、企業の業務を効率化するツール開発などを経験してきました。技術的な課題解決だけでなく、100人規模のオーケストラで指揮者として多様なメンバーをまとめ上げた経験を活かし、チーム全体の力を最大化させることも得意です。",
    story: [
      {
        heading: "「継続力」の源泉：音楽との出会い",
        content: "幼少期から音楽に親しみ、4歳でピアノ、16歳でホルンを始めました。一つの楽器に長年向き合う中で、目標達成のために粘り強く努力を続ける姿勢が自然と身につきました。"
      },
      {
        heading: "「探究心」の実践：学びを価値に変える",
        content: "大学ではAIやデータサイエンスを学び、「社会の課題を技術でどう解決できるか」を探求しています。研究では、VR利用者の『目の疲れ』をAIが自動検知して安全性を高めるシステムを開発。インターンシップでは、手作業だった画像処理などを自動化するツールを作り、ある業務の生産性を50倍に向上させるなど、学んだ技術で具体的なビジネス価値を創出することに大きなやりがいを感じています。"
      },
      {
        heading: "「伝達力」の育成：相手の「わかった！」を引き出す工夫",
        content: "4年間続けた塾講師の経験も、私の大きな糧です。中学生に数学や理科を教える中で、複雑な概念も相手の目線で身近な例に置き換えて説明し、「わかった！」を引き出す工夫を重ねました。この経験は、専門外の方へ技術的な内容を分かりやすく伝える上で、強力な土台となっています。"
      },
      {
        heading: "3つの経験を掛け合わせ、未来へ",
        content: "音楽で培った『継続力』、技術で課題を解決する『探究心』、そして教育で学んだ『伝達力』。これらの異なる分野での経験を掛け合わせ、多角的な視点から新しい価値を生み出していきたいと考えています。"
      }
    ],
    imageUrl: `./images/avatar.jpg`,
    timeline: [
      { year: "2025年", event: "東京理科大学 創域理工学研究科 情報計算科学専攻 入学" },
      { year: "2025年", event: "IT企業にて長期インターンシップ (エンジニア)" },
      { year: "2023年", event: "大学オーケストラで学生指揮者を務める" },
      { year: "2021年", event: "学習塾にて講師のアルバイト（4年間）" },
      { year: "2021年", event: "東京理科大学 理工学部 情報科学科 入学" },
    ],
    values: [
      { title: "課題の本質を見抜く分析力", description: "表面的な問題ではなく根本的な課題を発見し、持続的な価値を創出します。インターンシップで開発したツールでは、大学で学んだ統計学を活かして処理時間に相関性の高い要素をデータから特定するなど、勘に頼らない根拠に基づいた改善を得意としています。" },
      { title: "継続力と探究心", description: "4歳から始めた音楽経験や4年間の塾講師の経験で培った継続力には自信があります。研究や開発においても、常に高みを目指し、粘り強く改善を繰り返すことができます。" },
      { title: "チームを導くリーダーシップ", description: "100人超のオーケストラで学生指揮者を務め、多様なメンバーの強みを引き出し、演奏会を成功に導きました。この経験をチーム開発にも活かします。" },
    ],
    // SNSリンクは削除
    socials: {}
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
        { name: "AWS / GCP", level: 2, experience: "半年" },
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
      repoUrl: "#", // このキーの存在でコード非公開のメッセージを表示
      screenshots: [
        './images/platform.png',
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
        "データ駆動での改善サイクル確立：ユーザー行動を統計的に分析する仕組みを導入し、利用頻度の高い機能やUI上のボトルネックを特定。データに基づいた改善サイクルを確立し、継続的なUX向上を実現しました。",
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
      repoUrl: "#", // このキーの存在でコード非公開のメッセージを表示
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
      overview: "特定の部署Aにおいて、毎日発生する大量の画像加工作業が手作業で行われ、大きな業務負担となっていました。この「作業時間の短縮」と「品質の標準化」を目的とし、ブラウザ上で動作する本ツールを開発しました。ユーザーは画像ファイルをアップロードするだけで、指定の命名規則へのリネームと、規定サイズへのリサイズ（余白追加方式）を一括で実行できます。",
      siteUrl: null,
      repoUrl: "#", // このキーの存在でコード非公開のメッセージを表示
      screenshots: [
        './images/rename-resizer (1).png',
        './images/rename-resizer (2).png',
      ],
      stack: {
        Frontend: "React",
        Backend: "AWS Amplify Functions",
        "Data Source": "Google Sheets API",
        Infrastructure: "AWS Amplify Hosting"
      },
      points: [
        "セキュリティと保守性を両立したシステム設計：業種マスタとなるGoogleスプレッドシートからのデータ取得方法として、バックエンド(AWS Amplify Functions)でAPIを呼び出す構成を採用しました。これにより、スプレッドシートを非公開に保ち、認証情報をフロントエンドに露出させることなく安全な連携を実現しています。",
        "心理的不安を軽減するUXフロー：ユーザーが迷わず操作できるよう、「1. アップロード」 「2. ファイル名設定」 「3. 確認」 「4. ダウンロード」という明確なステップを常に画面に表示。今どの段階にいるのかを常に把握できるようにすることで、『次に何をすればいいか分からない』という心理的な不安を取り除くよう設計しました。",
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
      overview: "特定の部署Bにおいて、規格の異なる複数の掲載媒体ごとに毎日大量の画像リサイズ作業が発生し、大きな時間的コストとなっていました。この作業を『誰でも・すばやく・間違いなく』行える状態にし、業務を抜本的に効率化することを目的に、ブラウザ上ですべての処理が完結する本ツールを開発しました。",
      siteUrl: null,
      repoUrl: "#", // このキーの存在でコード非公開のメッセージを表示
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
      title: "事例2：部署別進捗状況自動分析システム",
      thumbnail: `https://placehold.co/600x400/BFDBFE/FFFFFF?text=Analytics+System`,
      description: "NotionからエクスポートしたCSVを元に、経営層への報告資料を自動生成する業務効率化ツール。",
      tags: ["データ分析", "レポート自動化", "Python", "Flask", "Pandas", "PowerPoint"],
      overview: "インターン生チームの活動成果を社長へ報告する際、Notionからの手動集計に多大な時間がかかっていたため、この定型業務を自動化する目的で開発しました。CSVをアップロードするだけで、煩雑な集集計作業から解放され、管理者が本来のマネジメント業務に集中できる環境を目指しました。",
      siteUrl: null,
      repoUrl: "#", // このキーの存在でコード非公開のメッセージを表示
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
      title: "事例3：VRを安全に利用するためのリアルタイム疲労予測システム",
      thumbnail: `https://placehold.co/600x400/FCA5A5/FFFFFF?text=VR+Research`,
      description: "AI技術を活用し、VR利用中の「目の疲れ」をリアルタイムに検知・予測することで、VRの安全性を高める研究開発です。",
      tags: ["AI", "データ分析", "Python", "VR/AR"],
      overview: "長時間VRを使うと目が疲れてしまう、という課題の解決を目指しました。VRゴーグル内のセンサーで『視線の動き』を追い、そのデータからAIが『疲れ具合』を自動で判断します。これにより、これまでは自己申告でしか分からなかった疲労度を、客観的なデータで測れるようになります。VRゲームなどをより安全にしたり、医療や教育の分野で活用したりすることを目指しています。",
      siteUrl: null,
      repoUrl: null, // repoUrlがないのでメッセージは表示されない
      screenshots: [],
      stack: {
        分析対象: "VR利用時の視線データ",
        使用技術: "Python, Scikit-learn (AIライブラリ), Pandas",
      },
      points: [
        "勘や感覚に頼らない評価を実現：これまで『疲れた気がする』といった自己申告に頼っていましたが、本研究では『視線の動き』という客観的なデータから、疲れ具合を数値で評価する技術を確立しました。",
        "幅広い応用可能性：VRゲームの品質管理、医療リハビリ、教育分野など、様々な産業での安全性向上に貢献できる技術です。",
      ]
    },
    {
      id: 6,
      category: "その他の活動",
      title: "事例4：大学オーケストラ 学生指揮者",
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
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
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

// 星評価コンポーネント
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
    // "animate-fade-in" を削除
    <div className="p-8 md:p-12">
      <main className="max-w-4xl mx-auto">
        <AnimateOnScroll className="text-center mb-16">
          <section>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight">
              {data.catchphrase}
            </h1>
            <p className="mt-4 text-2xl text-gray-600">{data.name}</p>
          </section>
        </AnimateOnScroll>

        <AnimateOnScroll className="mb-16" delay={100}>
          <section>
            <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
              {data.about.introduction}
            </p>
          </section>
        </AnimateOnScroll>

        <section>
          <AnimateOnScroll>
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">私が取り組んでいること</h2>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-8">
            {focusAreas.map((area, index) => {
              const work = area.workId ? data.works.find(w => w.id === area.workId) : null;
              const isClickable = area.workId || area.isInternshipCard;
              return (
                <AnimateOnScroll key={area.title} delay={150 * index}>
                  <div
                       onClick={() => isClickable && (area.isInternshipCard ? onInternshipCardClick() : onWorkClick(work))}
                       className={`bg-white/60 border border-gray-200 rounded-lg p-6 text-center transition-all duration-300 h-full ${isClickable ? 'cursor-pointer hover:shadow-lg hover:-translate-y-1' : ''}`}>
                    <div className="flex justify-center mb-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <area.icon className="w-8 h-8 text-blue-600" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{area.title}</h3>
                    <p className="text-gray-600 text-sm">{area.description}</p>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </section>

        <AnimateOnScroll className="mt-16" delay={200}>
          <section>
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">主な使用技術</h2>
            <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-3">
              {keySkills.map(skill => (
                <span key={skill} className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </AnimateOnScroll>
      </main>
    </div>
  );
};

// Aboutセクション
const About = ({ data }) => (
  // "animate-fade-in" を削除
  <div className="p-8 md:p-12">
    <div className="max-w-5xl mx-auto">
      <AnimateOnScroll>
        <h2 className="text-3xl font-bold text-gray-800 mb-8">About Me</h2>
      </AnimateOnScroll>
      <div className="flex flex-col md:flex-row gap-12 items-start">
        <AnimateOnScroll className="flex-shrink-0 text-center md:w-1/4" delay={100}>
          <img src={data.imageUrl} alt={portfolioData.name} className="w-32 h-32 rounded-full mx-auto shadow-lg" />
          <h3 className="text-2xl font-bold mt-4 text-gray-800">{portfolioData.name}</h3>
          <p className="text-gray-500">{portfolioData.title}</p>
        </AnimateOnScroll>
        <div className="flex-grow md:w-3/4">
          <AnimateOnScroll className="space-y-8" delay={200}>
            {data.story.map((section, index) => (
              <div key={index}>
                <h4 className="text-xl font-bold text-gray-800 mb-2">{section.heading}</h4>
                <p className="text-lg text-gray-600 leading-relaxed whitespace-pre-line">{section.content}</p>
              </div>
            ))}
          </AnimateOnScroll>
          <AnimateOnScroll className="mt-10" delay={300}>
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
          </AnimateOnScroll>
          <AnimateOnScroll className="mt-10" delay={400}>
            <h4 className="text-xl font-bold text-gray-700 mb-4">価値観・強み</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.values.map(value => (
                <div key={value.title} className="bg-white/50 border border-gray-200 rounded-lg p-4">
                  <h5 className="font-bold text-gray-800">{value.title}</h5>
                  <p className="text-sm text-gray-600 mt-2">{value.description}</p>
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
  // "animate-fade-in" を削除
  <div className="p-8 md:p-12">
    <div className="max-w-5xl mx-auto">
      <AnimateOnScroll>
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Skills</h2>
      </AnimateOnScroll>
      <div className="space-y-10">
        {data.map((category, index) => (
          <AnimateOnScroll key={category.category} delay={150 * index}>
            <div>
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
          </AnimateOnScroll>
        ))}
      </div>
    </div>
  </div>
);

// Worksセクション
const Works = ({ data, onWorkClick }) => {
  // ... (内部の `groupedWorks` と `WorkCard` コンポーネントは変更なし)
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
    // "animate-fade-in" を削除
    <div className="p-8 md:p-12">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Works</h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <div className="bg-gray-100 border-l-4 border-gray-400 text-gray-800 p-4 mb-8 rounded-r-lg" role="alert">
            <p className="font-bold text-sm">注記</p>
            <ul className="list-disc list-inside text-sm mt-1 space-y-1">
              <li>インターンシップ先の都合上、リポジトリやコードを公開できない制作物が含まれます。</li>
              <li>守秘義務の観点から、一部スクリーンショットを掲載していない、または汎用的な画像に差し替えている制作物があります。</li>
            </ul>
          </div>
        </AnimateOnScroll>
        
        {groupedWorks[fullWidthCategory] && (
          <section className="mb-12">
            <AnimateOnScroll delay={200}>
              <h3 className="text-2xl font-bold text-gray-700 border-b-2 border-blue-200 pb-2 mb-6">
                {fullWidthCategory}
              </h3>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {groupedWorks[fullWidthCategory].map((work, index) => (
                <AnimateOnScroll key={work.id} delay={150 * index}>
                  <WorkCard work={work} />
                </AnimateOnScroll>
              ))}
            </div>
          </section>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sideBySideCategories.map(category => (
            groupedWorks[category] && (
              <section key={category} className="min-w-0">
                <AnimateOnScroll delay={200}>
                  <h3 className="text-2xl font-bold text-gray-700 border-b-2 border-blue-200 pb-2 mb-6">
                    {category}
                  </h3>
                </AnimateOnScroll>
                {groupedWorks[category].map((work, index) => (
                  <AnimateOnScroll key={work.id} delay={150 * index}>
                     <WorkCard work={work} />
                  </AnimateOnScroll>
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
          
          {/* --- GitHubボタンとコード非公開理由の表示を修正 --- */}
          <div className="flex gap-4 mb-2">
            {work.siteUrl && <a href={work.siteUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">サイトを見る <ArrowUpRight size={16}/></a>}
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
  }, [activeView, handleWorkClick, handleInternshipCardClick]);

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
        /* Google FontsからNoto Sans JPを読み込み */
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap');

        /* font-sansクラスにNoto Sans JPを適用 */
        .font-sans {
          font-family: 'Noto Sans JP', sans-serif;
        }

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

        @keyframes star-appear {
          0% {
            transform: scale(0) rotate(-180deg);
            opacity: 0;
          }
          60% {
            transform: scale(1.2) rotate(10deg);
            opacity: 1;
          }
          100% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
        }
        .animate-star-appear {
          opacity: 0; /* アニメーション開始前は非表示 */
          transform-origin: center;
          animation: star-appear 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .scroll-fade-in {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(0.165, 0.84, 0.44, 1), transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        .scroll-fade-in.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}
