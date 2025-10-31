import React, { useState, useMemo, useEffect } from 'react';
import { User, Star, Briefcase, X, ArrowUpRight, Github, Linkedin, Twitter, Code } from 'lucide-react';

// --- データセクション ---
const portfolioData = {
  name: "藤井琢也",
  title: "大学院生 / エンジニア",
  // --- catchphrase を修正 ---
  catchphrase: "先端技術 × エンターテインメントで、人の心を動かす価値を創る",
  // --- ここまで ---
  about: {
    // --- introduction を修正 ---
    introduction: "先端技術、特にAIとXRへの強い探求心を原動力に、「人の心を動かす」エンターテインメント体験の創造に情熱を注いでいます。大学院でのAI研究（VR疲労予測）や、IT企業でのエンジニア長期インターンシップ（画像処理プラットフォーム開発リーダー）を通じて、技術で具体的な価値を生み出す経験を積んできました。技術的な課題解決はもちろん、オーケストラ指揮者として培った多様なメンバーを巻き込む力を活かし、チーム一丸となって革新的なものづくりに挑戦することを得意としています。",
    // --- ここまで ---
    story: [
      {
        heading: "「継続力」の源泉：音楽との出会い",
        content: "幼少期から音楽に親しみ、4歳でピアノ、16歳でホルンを始めました。一つの楽器に長年向き合う中で、目標達成のために粘り強く努力を続ける姿勢が自然と身につきました。"
      },
      // --- story 内の該当部分を修正 ---
      {
        heading: "技術への「探求心」：学びを価値に変える挑戦",
        content: "大学院ではAIやデータサイエンスを深く学び、「先端技術で社会課題をどう解決し、人々の体験を豊かにできるか」という探求を続けています。研究ではVR利用者の安全性を高めるためアイトラッキングを用いた疲労予測システムを開発。インターンシップでは画像処理プラットフォームをゼロから設計・開発し、大幅な業務効率化を実現しました。技術で具体的な価値を生み出し、人の体験をより良くすることに強いやりがいを感じ、エンターテインメント分野での更なる挑戦を求めています。"
      },
      // --- ここまで ---
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
      // --- values 内の該当部分を修正 ---
      {
        title: "探求に基づく課題解決力",
        description: "表面的な事象に留まらず、データ分析やヒアリングに基づき課題の本質を探求し、技術で根本的な解決策を生み出すことを得意とします。インターンシップでのプラットフォーム開発では、複数部署へのヒアリングから潜在ニーズを特定。統計学の知識も応用し、勘に頼らないデータ駆動での改善アプローチで、持続的な価値創出に貢献しました。"
      },
      // --- ここまで ---
      {
        title: "継続力と探究心",
        description: "4歳から始めた音楽経験や4年間の塾講師の経験で培った継続力には自信があります。研究や開発においても、常に高みを目指し、粘り強く改善を繰り返すことができます。"
      },
      {
        title: "チームを導くリーダーシップ",
        description: "100人超のオーケストラで学生指揮者を務め、多様なメンバーの強みを引き出し、演奏会を成功に導きました。この経験をチーム開発にも活かします。"
      },
    ],
    socials: {} // SNSリンクは削除済み
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
        { name: "AWS", level: 2, experience: "半年" },
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
    // --- id: 1 のオブジェクト全体を差し替え ---
    {
      id: 1,
      category: "長期インターンシップ",
      title: "事例1：社内業務を50倍効率化した画像処理プラットフォーム", 
      thumbnail: `https://placehold.co/600x400/A5B4FC/FFFFFF?text=Image+Platform`,
      description: "技術リーダーとして設計・開発を主導。複数部署の画像加工業務（月間160時間）を効率化する基盤を構築し、特定業務で50倍の生産性向上を達成。",
      tags: ["業務改善", "Webプラットフォーム", "React", "Python", "AWS", "UI/UX設計", "技術リード", "システム設計"],
      // --- overview を修正 ---
      overview: "長期インターンシップにて、複数部署で仕様の異なる画像加工ツールが乱立し、月間160時間の非効率が生じている課題を発見。PM（進捗管理）、技術リーダー2名（上流/下流）、エンジニア7名（上流3/下流4）で構成される10名のチームにおいて、私は上流技術リーダーとしてアーキテクチャ設計と技術選定を担当し、3名の上流エンジニアを技術的にリードしました。Reactを用いたフロントエンド、Python(FastAPI)/AWS Lambdaを用いたバックエンド基盤の設計・開発に加え、実装フェーズでは下流工程（実装・テスト）の技術的サポートも行い、プロジェクト全体の推進に貢献しました。",
      // --- ここまで ---
      siteUrl: null,
      repoUrl: "#",
      screenshots: [
        './images/platform.png',
      ],
      // --- stack を修正 ---
      stack: {
        Frontend: "React, TypeScript",
        Backend: "Python, FastAPI, AWS Lambda (Platform Base)",
        Infra: "AWS (Amplify, S3, etc.)",
        "Core Tech (Tools)": "Canvas API, Web Workers (Client-Side)",
        担当: "上流技術リーダー (設計・実装リード、下流サポート含む)", // 担当を更新
        チーム体制: "10名 (PM, 技術リーダーx2, 上流Engx3, 下流Engx4)" // チーム体制を詳細化
      },
      // --- ここまで ---
      // --- points を修正 ---
      points: [
          "複数部署ヒアリングに基づく『ツール選択型』アーキテクチャ設計：3部署へのヒアリングで、リサイズ要件（余白追加 vs トリミング）など部署ごとに異なるニーズを特定。拡張性と保守性を考慮し、ユーザーがツールを選択できる共通基盤アーキテクチャを設計しました。",
          "データ駆動での性能最適化と技術的意思決定：統計学の知識を活かし、処理時間と相関の高いパラメータを特定、クライアントサイド処理の最適化方針を策定。また、実装方針が割れた際は、処理速度と保守性を定量評価する指標を提示し、チームの合意形成を支援しました。",
          "技術リーダーシップと実装への貢献：上流工程の技術選定や設計を主導するだけでなく、実装フェーズではフロントエンド基盤の開発や下流チームの技術的な課題解決（コードレビュー、デバッグ支援など）もサポート。ReactでのUI/UX構築からPython/FastAPIでのAPI開発、AWS Lambdaでのサーバーレス処理実装まで、幅広い技術領域でプロジェクト推進に貢献しました。", // ポイント3を修正
          "50倍の生産性向上という成果：開発したプラットフォームとツール群により、特定業務の処理時間を10分から12秒に短縮し、月間160時間の工数削減を達成。技術による具体的な価値創出を実証しました。",
          "学びと今後の展望：この経験から「課題の本質を見抜き、最適な技術と設計で持続的な価値を創出する」重要性と、チーム全体を俯瞰し技術的に牽引するリーダーシップの難しさとやりがいを学びました。培った課題分析力・技術選択力・チーム牽引力を、貴社のエンターテインメント技術開発で活かしたいです。" // ポイント5を修正
      ]
      // --- ここまで ---
    },
    // --- ここまで ---

    // --- id: 2 のオブジェクト全体を差し替え ---
    {
      id: 2,
      category: "長期インターンシップ",
      title: "事例1-1：LINEミニアプリアイコンメーカー",
      thumbnail: `https://placehold.co/600x400/818CF8/FFFFFF?text=LINE+Icon+Maker`,
      description: "画像処理プラットフォーム上の一ツール。LINEの厳格な規定準拠アイコンをブラウザ完結で生成し、制作時間を大幅短縮。",
      tags: ["業務効率化", "Vanilla JS", "Canvas", "UI/UX設計", "クライアントサイド", "プラットフォームツール"],
      overview: "画像処理プラットフォーム (事例1) 上で動作する専用ツールの一つ。LINEミニアプリのアイコンにはピクセルサイズやロゴ占有率など厳格な規定があり、手作業での作成は非効率でした。この課題に対し、誰でも迅速かつ規定に準拠したアイコンを量産できるよう、本ツールを開発。セキュリティを考慮し、画像アップロード不要なクライアントサイド完結型で設計しました。",
      siteUrl: null,
      repoUrl: "#",
      screenshots: [
        './images/line-iconmaker-sc (1).png',
        './images/line-iconmaker-sc (2).png',
        './images/line-iconmaker-sc (3).png',
        './images/line-iconmaker-sc (4).png',
      ],
      stack: {
        "Platform": "社内画像処理プラットフォーム (事例1)",
        "Frontend": "HTML5, CSS3, Vanilla JavaScript",
        "Core Technologies": "Canvas API, File API, Web Storage API",
        "Libraries": "JSZip",
      },
      points: [
        "プラットフォームツールとしての特化：汎用的な画像処理基盤 (事例1) の上で、LINEアイコン生成という特定業務に特化して開発。プラットフォームのアーキテクチャ思想に基づきツールを設計しました。",
        "賢い自動認識・調整機能：アップロードされたロゴ画像の余白自動トリミングや、ガイドライン推奨エリアへの最適配置、背景色自動抽出など、ユーザーの手間を最小限にする機能を実装。",
        "直感的でパワフルな編集UI：自動調整が難しい場合でも、手動トリミングやドラッグ＆ドロップ、マウスホイールでの直感的な微調整が可能。リアルタイムプレビューで常に完成形を確認できます。",
        "複数画像の並行編集能：最大10枚の画像をタブ形式で並行編集可能とし、単位時間あたりの生成数を大幅に向上。",
        "セキュリティ重視のクライアントサイド完結設計：画像処理は全てユーザーのブラウザ内で完結。サーバーへの画像アップロードが不要なため、セキュリティリスクを排除しつつ、運用コストも最小限に抑えています。",
      ]
    },
    // --- ここまで ---

    // --- id: 3 のオブジェクト全体を差し替え ---
    {
      id: 3,
      category: "長期インターンシップ",
      title: "事例1-2：業種別リネーム＆加工ツール",
      thumbnail: `https://placehold.co/600x400/6EE7B7/FFFFFF?text=Rename+Tool`,
      description: "画像処理プラットフォーム上の一ツール。Googleスプレッドシート連携とブラウザ完結処理で、特定部署の画像作業を効率化。",
      tags: ["業務改善", "React", "AWS Amplify", "Google Sheets API", "クライアントサイド", "プラットフォームツール"],
      overview: "画像処理プラットフォーム (事例1) 上で動作する特定部署A向けの専用ツール。毎日発生する大量の手作業による画像リネーム・リサイズ作業の「時間短縮」と「品質標準化」を目的に開発しました。ユーザーは画像ファイルをアップロードするだけで、指定規則へのリネームと規定サイズへのリサイズ（余白追加）を一括実行できます。セキュリティのため画像処理はクライアントサイドで行いつつ、命名規則のマスタデータはバックエンド経由でGoogleスプレッドシートから安全に取得します。",
      siteUrl: null,
      repoUrl: "#",
      screenshots: [
        './images/rename-resizer (1).png',
        './images/rename-resizer (2).png',
      ],
      stack: {
        "Platform": "社内画像処理プラットフォーム (事例1)",
        Frontend: "React",
        Backend: "AWS Amplify Functions (Sheets API連携用)",
        "Data Source": "Google Sheets API",
        Infrastructure: "AWS Amplify Hosting",
        "Core Tech (Processing)": "Canvas API, File API (Client-Side)"
      },
      points: [
        "プラットフォームツールとしての特化：共通基盤 (事例1) を活用しつつ、部署Aの特定ワークフロー（Google Sheets連携、余白追加リサイズ）に最適化されたツールとして開発。",
        "セキュリティと外部連携の両立：画像自体はクライアントサイドで処理しつつ、業種マスタ（Google Sheets）からのデータ取得はバックエンド(AWS Amplify Functions)経由で行う構成を採用。認証情報をフロントエンドに露出させず、安全な外部連携を実現しました。",
        "心理的不安を軽減するUXフロー：ユーザーが迷わず操作できるよう、「アップロード→設定→確認→ダウンロード」という明確なステップを常に表示。操作の現在地を常に把握可能にし、心理的な不安を取り除くよう設計しました。",
        "パフォーマンスと堅牢性への配慮：大量画像読み込み時のUI応答性を維持するため軽量なプレビュー用サムネイルを生成。また、スプレッドシート連携に失敗しても初期データで処理を継続できるフォールバック機能を実装しました。"
      ]
    },
    // --- ここまで ---

    // --- id: 4 のオブジェクト全体を差し替え ---
    {
      id: 4,
      category: "長期インターンシップ",
      title: "事例1-3：媒体別リサイズ（トリミング）ツール",
      thumbnail: `https://placehold.co/600x400/FBBF24/FFFFFF?text=Resize+Tool`,
      description: "画像処理プラットフォーム上の一ツール。複数媒体の規定サイズへ画像を自動トリミング。ブラウザ完結型で高速処理と安全性を両立。",
      tags: ["業務効率化", "React", "UI/UX設計", "クライアントサイド処理", "プラットフォームツール"],
      overview: "画像処理プラットフォーム (事例1) 上で動作する特定部署B向けの専用ツール。規格の異なる複数媒体ごとに毎日大量の画像リサイズ（トリミング方式）作業が発生していたため、これを『誰でも・すばやく・間違いなく』行えるようにすることを目的に開発。セキュリティを最優先し、画像アップロードが不要なクライアントサイド完結型で設計。Web Workersの活用も検討し、大量処理時のパフォーマンスにも配慮しました。",
      siteUrl: null,
      repoUrl: "#",
      screenshots: [],
      stack: {
        "Platform": "社内画像処理プラットフォーム (事例1)",
        Frontend: "React",
        Infrastructure: "AWS Amplify Hosting",
        "Core Technologies": "Canvas API, File API, Web Workers",
        "Key Libraries": "Cropper.js, JSZip"
      },
      points: [
        "プラットフォームツールとしての特化：共通基盤 (事例1) 上で、部署Bの主要業務である複数媒体向けトリミング作業に特化。ファイル名からの種別自動判定など、業務効率化に繋がる独自ロジックを実装しました。",
        "セキュリティ重視のクライアントサイド設計：画像データをサーバーに送信することなく、全ての処理をユーザーのブラウザ内で完結させるアーキテクチャを採用。情報漏洩リスクを根本から排除しました。",
        "UI/UX設計：左に「画像一覧」、右に「操作パネル」を配置した2カラムレイアウトで、多数の画像を効率的に扱えるUIを実現。全体設定と個別編集のエリアを明確化し、直感的な操作を支援します。",
        "パフォーマンス最適化：UI応答性を維持するためプレビュー用サムネイルを生成。また、重い画像処理はWeb Workerを用いてバックグラウンドで実行し、メインスレッドのフリーズを回避する設計としました。",
        "高度なトリミング機能と柔軟な自動化：自動の中央トリミングを基本としつつ、手動での最適な表示範囲調整も可能に。ファイル名からの設定自動適用と手動上書きの組み合わせで、効率性と品質・柔軟性を両立させました。"
      ]
    },
    // --- ここまで ---

    // --- id: 7 のオブジェクト全体を差し替え ---
    {
      id: 7,
      category: "長期インターンシップ",
      title: "事例2：部署別進捗状況自動分析システム",
      thumbnail: `https://placehold.co/600x400/BFDBFE/FFFFFF?text=Analytics+System`,
      description: "Notionデータを元に経営層への報告資料を自動生成するツール。Python(Flask, Pandas)によるデータ処理・レポート生成部を開発。",
      tags: ["データ分析", "レポート自動化", "Python", "Flask", "Pandas", "PowerPoint", "業務効率化"],
      // --- overview を修正 ---
      overview: "インターン生チームの活動成果を社長へ報告する際の手動集計の非効率を解消するため、PM1名、リードエンジニア1名（フロント/バック兼任）、そしてバックエンド担当の私、という3名体制で開発した自動化ツールです。CSVをWeb画面からアップロードすると、Python(Flask)サーバーでデータを受け取り、Pandasで集計・分析、最終的にPowerPointレポートを自動生成します。私は主に、リードエンジニアと協力しながらデータ処理とレポート生成を行うバックエンド部分の開発を担当しました。",
      // --- ここまで ---
      siteUrl: null,
      repoUrl: "#",
      screenshots: [],
      // --- stack を修正 ---
      stack: {
        "Frontend": "HTML5, CSS3, JavaScript (Papa Parse)",
        "Backend": "Python, Flask",
        "Data Processing": "Pandas, NumPy",
        "Report Generation": "python-pptx",
        "担当": "バックエンド開発（データ処理、レポート生成）", // 担当を更新
        "チーム体制": "3名 (PM, リードEng(F/B), バックエンドEng(私))" // チーム体制を追加
      },
      // --- ここまで ---
      // --- points を修正 ---
      points: [
        "バックエンド開発による自動化実現：リードエンジニアと連携し、CSVアップロードをトリガーとしたFlaskサーバーサイドでのデータ処理フロー（進捗分類、メトリクス集計、コスト分析）をPythonとPandasで実装。手作業によるミスを排除し、報告準備時間を大幅に短縮するコア機能開発に貢献しました。", // ポイント1を修正
        "多様なアウトプット形式：分析結果をWeb画面で確認できるだけでなく、集計CSVやPowerPointレポートといった複数形式での出力をバックエンドで生成。利用シーンに応じた柔軟なデータ活用を可能にしました。",
        "誰でも使えるUI/UXと起動プロセス：フロントエンドはドラッグ＆ドロップでのアップロードに対応し、処理状況がわかるローディング表示を実装。また、バックエンドの起動もダブルクリックだけで完了するバッチファイルを用意し、専門知識がないユーザーでも容易に利用開始できるよう配慮しました。"
      ]
      // --- ここまで ---
    },
    // --- ここまで ---

    // --- id: 5 (研究) のオブジェクト全体を差し替え ---
    {
      id: 5,
      category: "研究",
      title: "事例3：アイトラッキングを用いたVR眼精疲労のリアルタイム予測システム", 
      thumbnail: `https://placehold.co/600x400/FCA5A5/FFFFFF?text=VR+Research`,
      description: "VR利用時の眼精疲労を客観的指標（視線データ）と機械学習でリアルタイム予測。精度85%を達成し、安全性向上に貢献。", 
      tags: ["AI", "機械学習", "データ分析", "Python", "VR/AR", "研究開発", "HCI"], // tags を更新
      overview: "VR市場拡大の障壁である眼精疲労に対し、従来の主観評価の限界（客観性・リアルタイム性欠如）を解決するため、アイトラッキング技術を用いた定量的な疲労予測システムを開発。視線データから疲労度を自動予測し、「疲れる前に休憩を促す」などVR体験の安全性と快適性向上を目指す研究です。", 
      siteUrl: null,
      repoUrl: null,
      screenshots: [],
      stack: {
        研究テーマ: "VR利用時の眼精疲労リアルタイム予測",
        課題: "主観評価の限界、客観的・リアルタイム評価技術の確立",
        データ: "アイトラッキング（瞳孔径、サッケード頻度、瞬き間隔）",
        手法: "機械学習（ランダムフォレスト）",
        使用技術: "Python (Scikit-learn, Pandas), アイトラッカー(Tobii)",
        実験規模: "被験者20名、計120データポイント"
      },
      points: [
        "客観的・定量的な疲労評価手法の確立：主観アンケート依存から脱却し、『視線データ』という客観的指標と機械学習で疲労度を数値化・予測する技術を開発しました。",
        "複数特徴量とモデル改良による精度向上：当初の単一指標（瞳孔径）では精度60%でしたが、サッケード頻度・瞬き間隔など複数特徴量を統合し、ランダムフォレストモデルを採用することで予測精度を85%まで向上させました。",
        "リアルタイム処理の実現：特徴量抽出の計算量を削減する前処理アルゴリズムを開発し、VR利用中のリアルタイムな疲労度フィードバックを可能にしました。",
        "学術的貢献への意欲：本研究成果は現在、指導教員と相談の上、ヒューマンコンピュータインタラクション分野の国際会議への論文投稿準備を進めています。", 
        "幅広い応用可能性：VRゲーム開発での品質管理、医療リハビリでの安全性確保、教育分野でのVR教材利用促進など、多様な産業への貢献が期待できます。"
      ]
    },
    // --- ここまで ---

    {
      id: 6,
      category: "その他の活動",
      title: "事例4：大学オーケストラ 学生指揮者",
      thumbnail: `https://placehold.co/600x400/93C5FD/FFFFFF?text=Orchestra`,
      description: "大学オーケストラで学生指揮者を務め、100人超の団員を統率。演奏会や武道館での卒業式を成功に導き、リーダーシップと課題解決力を培いました。", // 資料に合わせて修正
      tags: ["リーダーシップ", "マネジメント", "課題解決", "コミュニケーション", "チームビルディング"], // tags を更新
      overview: "大学オーケストラでは、音楽への探求心から学生指揮者に推薦され、100人を超える多様なバックグラウンドを持つ団員を一つの音楽目標に向けて導きました。技術レベルや意識の異なるメンバーのパフォーマンスを最大化することに注力し、定期演奏会に加え、特に重要度の高い武道館での卒業式など、多数の場で指揮を執る経験を積みました。", // 資料に合わせて修正
      siteUrl: null,
      repoUrl: null,
      screenshots: [],
      stack: {
        役割: "学生指揮者、ホルン奏者",
        規模: "団員100名以上 (多様な楽器・学年・専攻)", 
        担当イベント: "定期演奏会 (最大1000人超動員), 卒業式 (日本武道館)", 
        主な挑戦: "多様なメンバーの統率、大規模イベントの計画・実行" 
      },
      points: [
        "多様なメンバーのポテンシャル最大化：異なる楽器、学年、専攻、そして技術レベルや意欲も様々な100人超の団員一人ひとりと向き合い、個々の特性を理解。練習管理や技術指導にも関わり、全体の調和を生み出しながらチーム全体の演奏レベル向上に貢献しました。", // 資料に基づき具体化
        "大規模イベントにおける計画性と課題解決力：特に武道館での卒業式(約1万人規模)では、式典のスムーズな進行と音楽的完成度の両立が求められました。起こりうるトラブル（例：進行遅延、機材トラブル）を事前に予測し、綿密な計画とリハーサル、代替案の準備を行うことで、当日の円滑な進行を実現しました。", // 資料に基づき具体例と規模を追加
        "目標達成に向けたリーダーシップ：単に指示を出すだけでなく、各パートリーダーとの連携、団員への動機付けを通じて、演奏会成功という共通目標への意識を高め、チーム全体の力を結集させるプロセスを主導しました。", // 資料に基づき行動を記述
        "学びとIT分野への応用：この経験から、多様な個人の強みを引き出し、一つの目標に向かってチームを導くコミュニケーション能力とリーダーシップを学びました。この「個々に寄り添い、チーム全体のパフォーマンスを最大化する力」は、IT分野でのチーム開発にも不可欠であり、貢献できると確信しています。" // 資料に基づき学びと応用を記述
      ]
    },
    {
      id: 8,
      category: "学内プロジェクト",
      title: "事例5：VR脱出ゲーム（オープンキャンパス展示用）",
      thumbnail: `https://placehold.co/600x400/D8B4FE/FFFFFF?text=VR+Escape+Game`,
      description: "UnityとXR Interaction Toolkitを用い、3人チームで開発したVR脱出ゲーム。大学オープンキャンパスで展示し、没入型体験を提供。",
      tags: ["VR", "Unity", "C#", "XR Interaction Toolkit", "Meta Quest", "チーム開発", "学内展示", "UXデザイン", "パフォーマンス最適化"], // tags を更新
      overview: "オープンキャンパス来場者、特にVR未経験者にVR技術の可能性と「没入型体験」の楽しさを伝える目的で、3人チームで開発した脱出ゲームです。私は主にビジュアル（UIデザイン、3Dモデル配置・調整、パフォーマンス最適化、環境演出）を担当。Meta Quest向けにXR Interaction Toolkitを活用し、コントローラーでの直感的な操作を通じて謎解きを進める、短いながらも没入感のある体験を提供しました。", 
      siteUrl: null,
      repoUrl: "https://github.com/takutaku14/VRGame-OC",
      screenshots: [
        './images/oc1.png',
        './images/oc2.png',
        './images/oc3.png',
      ],
      stack: {
        "Engine": "Unity",
        "Language": "C#",
        "VR SDK": "XR Interaction Toolkit",
        "Target Device": "Meta Quest",
        "担当": "ビジュアル（UI, モデル配置, 最適化, 環境演出）", 
        "チーム構成": "3名（ビジュアル担当, 謎解き担当, 環境構築担当）",
        "Key Components": "CharacterController, TextMeshPro, Coroutines, Physics",
      },
      points: [
        "Meta Questでの安定動作のためのパフォーマンス最適化：モバイルVR環境での快適な体験を実現するため、3Dモデルのポリゴン数削減やテクスチャ圧縮、不要な描画負荷（影の描画設定、ライトの数や種類）の削減などを担当。フレームレートの安定化に貢献しました。", 
        "没入感を高める環境・雰囲気作り：脱出ゲームの世界観を演出するため、限られたリソース内で照明の配置や色味、強弱を調整し、探索意欲を掻き立てるような視覚的な雰囲気作りを行いました。", 
        "チームでの役割分担と連携：私は上記を含むビジュアル面全般を担当し、他のメンバー（謎解き担当、環境構築担当）と連携しながらプロジェクトを進めました。", 
        "VR未経験者への配慮と没入体験の提供：XR Interaction Toolkitを用いた直感的な操作に加え、上記の最適化や雰囲気作りによって、初めてVRに触れる方でもスムーズに楽しめる「没入型体験」の提供を目指しました。", 
        "オープンキャンパスでの実践と学び：多くの来場者への展示を通じて、難易度調整の重要性や視点高さの個人差に加え、最適化の効果や改善点など、より良いVR体験デザインのための実践的な知見を得ました。", 
        "VR酔いへの課題認識：想定以上にVR酔いを訴える方が多く（約7割）、快適なVR体験を提供するための移動方法や描画設定など、技術的な課題と向き合う貴重な機会となりました。", 
        "VR体験の提供価値：普段VRに触れる機会のない層からは『新鮮で楽しい』というポジティブな反応が多く、VR技術を用いた体験型コンテンツの導入効果を実感しました。" 
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
  const sideBySideCategories = ["研究", "学内プロジェクト", "その他の活動"];

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
          
          {/* --- GitHubボタンとコード非公開理由の表示 --- */}
          <div className="flex gap-4 mb-6"> 
            {work.siteUrl && (
              <a href={work.siteUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                <ArrowUpRight size={16}/> サイトを見る
              </a>
            )}
            {work.repoUrl && work.repoUrl !== '#' && (
              <a href={work.repoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors text-sm font-medium">
                <Github size={16}/> GitHub
              </a>
            )}
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
