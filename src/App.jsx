import React, { useState, useMemo, useEffect } from 'react';
import { User, Star, Briefcase, X, ArrowUpRight, Github, Linkedin, Twitter, Code } from 'lucide-react';

// --- データセクション ---
const portfolioData = {
  name: "藤井琢也",
  title: "大学院生 / エンジニア",
  // --- catchphrase を修正 ---
  catchphrase: "技術への探求心で、新たな価値を創り出す",
  // --- ここまで ---
  about: {
    // --- introduction を修正 ---
    introduction: "技術への強い探求心を原動力に、目に見える「価値」を創り出すことに情熱を注いでいます。大学院でのAI/データサイエンスの研究や、インターンシップでの業務効率化ツール開発を通じて、先端技術を社会実装する経験を積んできました。技術的な課題解決はもちろん、オーケストラ指揮者の経験で培ったリーダーシップを活かし、多様なメンバーとチャレンジし、チームで成果を最大化することも得意としています。",
    // --- ここまで ---
    story: [
      {
        heading: "「継続力」の源泉：音楽との出会い",
        content: "幼少期から音楽に親しみ、4歳でピアノ、16歳でホルンを始めました。一つの楽器に長年向き合う中で、目標達成のために粘り強く努力を続ける姿勢が自然と身につきました。"
      },
      // --- story 内の該当部分を修正 ---
      {
        heading: "技術への「探求心」：学びを価値に変える挑戦", // heading を修正
        content: "大学院ではAIやデータサイエンスを深く学び、「先端技術で社会課題をどう解決できるか」という探求を続けています。研究では、VR利用者の安全性を高めるため、アイトラッキングデータを用いた疲労予測システムを開発。インターンシップでは、画像処理の自動化ツールをゼロから構築し、ある業務の生産性を50倍に向上させるなど、技術で具体的な価値を生み出すことに強いやりがいを感じ、更なる挑戦を求めています。" // content を修正
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
        title: "探求に基づく課題解決力", // title を修正
        description: "表面的な事象に留まらず、データ分析に基づき課題の本質を探求し、技術で根本的な解決策を生み出すことを得意とします。インターンシップでのツール開発では、統計学の知識を応用し、処理時間のボトルネックを特定、勘に頼らない改善で持続的な価値創出に貢献しました。" // description を修正
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
    // --- id: 1 の points を修正 ---
    {
      id: 1,
      category: "長期インターンシップ",
      title: "事例1：社内業務を効率化する画像処理プラットフォーム基盤",
      thumbnail: `https://placehold.co/600x400/A5B4FC/FFFFFF?text=Image+Platform`,
      description: "技術リーダーとして、複数部署の画像加工業務を集約するWebプラットフォームを設計・開発。フロントエンド・バックエンド双方を担当し、業務効率化に貢献。",
      tags: ["業務改善", "Webプラットフォーム", "React", "Python", "AWS", "UI/UX設計", "技術リード", "システム設計"],
      // --- overview を修正 ---
      overview: "長期インターンシップにて、複数部署で仕様の異なる画像加工ツールが乱立し、月間160時間以上の非効率が生じている課題を発見。技術リーダーとして、部署横断で利用可能な共通プラットフォームの構築を決意しました。Reactを用いたフロントエンド設計・実装に加え、Python(FastAPI)でのAPI開発やAWS Lambdaを用いたサーバーレス処理などバックエンド基盤の開発も担当。一方で、各画像処理ツール自体はセキュリティリスク（不要な画像アップロード）を避けるため、原則としてクライアントサイド完結型となるよう設計しました。10名チームにおいてアーキテクチャ設計から実装までを主導しました。",
      // --- ここまで ---
      siteUrl: null,
      repoUrl: "#",
      screenshots: [
        './images/platform.png',
      ],
      // --- stack を修正 ---
      stack: {
        Frontend: "React, TypeScript",
        Backend: "Python, FastAPI, AWS Lambda (Platform Base)", // Backend 詳細化・対象を追記
        Infra: "AWS (Amplify, S3, etc.)",
        "Core Tech (Tools)": "Canvas API, Web Workers (Client-Side)", // ツールの技術を追記
        担当: "技術リーダー (アーキテクチャ設計・フロントエンド・バックエンド基盤開発)" // 担当を更新
      },
      // --- ここまで ---
      // --- points を修正 ---
      points: [
        "多様なニーズを集約する拡張性の高い設計：3部署へのヒアリングから、部署ごとに最適化されたツールが必要と判断。ユーザーが目的に応じてツールを選択できる『ツール選択型』アーキテクチャを採用し、将来的な機能追加も容易なスケーラブルな共通基盤を構築しました。",
        "フロントエンドとバックエンドの役割分担：ReactによるUI/UX構築を担当する一方、プラットフォームの共通機能（例：ユーザー認証、統計データ収集など）はPython(FastAPI)を用いたAPIとして開発。また、一部ツールではAWS Lambdaを活用したサーバーレスなバックエンド処理も実装し、フロントエンドとバックエンド双方の開発経験を積みました。", // ポイント2を修正
        "データ駆動での性能最適化への貢献：プラットフォーム上で動作する各ツールのUXを損なわないよう、クライアントサイドでの画像処理におけるボトルネックを事前に特定。統計学の知識を活かし処理時間への影響が大きい要素を分析し、Canvas APIやWeb Workersの効率的な利用方針を示すなど、データに基づいた最適化に貢献しました。",
        "技術選定におけるリーダーシップ：フロントエンドの実装方針でチーム内の意見が分かれた際、各案のメリット・デメリット（開発速度、保守性、学習コスト）を定量的に比較評価するフレームワークを提示。建設的な議論を促進し、チームとして納得感のある技術選定を支援しました。",
        "セキュリティを考慮したツール設計：各画像処理ツールについては、機密情報を含む可能性のある画像をサーバーにアップロードすることなく処理を完結させるため、Canvas APIやWeb Workers等を活用したクライアントサイド処理を基本方針として設計・実装しました。これにより、セキュリティリスクを低減しつつ、多様な画像加工作業の効率化を実現しました。", // ポイント6(旧5)を追加
        "プラットフォームによる業務効率化への寄与：この共通基盤上に構築された専用ツール群（事例1-1〜1-3）によって、各部署の画像加工作業時間が大幅に短縮され、組織全体の生産性向上に貢献しました。個々のツールが生み出す価値の最大化を、基盤設計の観点から支えました。", // ポイント5(旧4)
        "学びと価値創出への意識：この経験から、ユーザーヒアリングを通じて本質的な課題を発見し、それを最適な技術と拡張性のある設計で解決することが、持続的なビジネス価値を生み出す鍵だと学びました。" // ポイント7(旧6)
      ]
      // --- ここまで ---
    },
    // --- ここまで ---
    {
      id: 2,
      category: "長期インターンシップ",
      title: "事例1-1：LINEミニアプリアイコンメーカー", // タイトルは維持
      thumbnail: `https://placehold.co/600x400/818CF8/FFFFFF?text=LINE+Icon+Maker`,
      // --- description を修正 ---
      description: "画像処理プラットフォーム上の一ツール。LINEの厳格な規定準拠アイコンをブラウザ完結で生成し、制作時間を大幅短縮。",
      // --- ここまで ---
      tags: ["業務効率化", "Vanilla JS", "Canvas", "UI/UX設計", "クライアントサイド", "プラットフォームツール"], // tags に追記
      // --- overview を修正 ---
      overview: "画像処理プラットフォーム (事例1) 上で動作する専用ツールの一つ。LINEミニアプリのアイコンにはピクセルサイズやロゴ占有率など厳格な規定があり、手作業での作成は非効率でした。この課題に対し、誰でも迅速かつ規定に準拠したアイコンを量産できるよう、本ツールを開発。セキュリティを考慮し、画像アップロード不要なクライアントサイド完結型で設計しました。",
      // --- ここまで ---
      siteUrl: null,
      repoUrl: "#",
      screenshots: [
        './images/line-iconmaker-sc (1).png',
        './images/line-iconmaker-sc (2).png',
        './images/line-iconmaker-sc (3).png',
        './images/line-iconmaker-sc (4).png',
      ],
      stack: {
        "Platform": "社内画像処理プラットフォーム (事例1)", // プラットフォームへの言及追加
        "Frontend": "HTML5, CSS3, Vanilla JavaScript",
        "Core Technologies": "Canvas API, File API, Web Storage API",
        "Libraries": "JSZip",
      },
      // --- points を修正 ---
      points: [
        "プラットフォームツールとしての特化：汎用的な画像処理基盤 (事例1) の上で、LINEアイコン生成という特定業務に特化して開発。プラットフォームのアーキテクチャ思想に基づきツールを設計しました。", // プラットフォームへの言及
        "賢い自動認識・調整機能：アップロードされたロゴ画像の余白自動トリミングや、ガイドライン推奨エリアへの最適配置、背景色自動抽出など、ユーザーの手間を最小限にする機能を実装。", // 変更なし
        "直感的でパワフルな編集UI：自動調整が難しい場合でも、手動トリミングやドラッグ＆ドロップ、マウスホイールでの直感的な微調整が可能。リアルタイムプレビューで常に完成形を確認できます。", // 変更なし
        "複数画像の並行編集能：最大10枚の画像をタブ形式で並行編集可能とし、単位時間あたりの生成数を大幅に向上。", // 変更なし
        "セキュリティ重視のクライアントサイド完結設計：画像処理は全てユーザーのブラウザ内で完結。サーバーへの画像アップロードが不要なため、セキュリティリスクを排除しつつ、運用コストも最小限に抑えています。", // セキュリティへの言及を強調
      ]
      // --- ここまで ---
    },
    {
      id: 3,
      category: "長期インターンシップ",
      title: "事例1-2：業種別リネーム＆加工ツール", // タイトルは維持
      thumbnail: `https://placehold.co/600x400/6EE7B7/FFFFFF?text=Rename+Tool`,
      // --- description を修正 ---
      description: "画像処理プラットフォーム上の一ツール。Googleスプレッドシート連携とブラウザ完結処理で、特定部署の画像作業を効率化。",
      // --- ここまで ---
      tags: ["業務改善", "React", "AWS Amplify", "Google Sheets API", "クライアントサイド", "プラットフォームツール"], // tags に追記
      // --- overview を修正 ---
      overview: "画像処理プラットフォーム (事例1) 上で動作する特定部署A向けの専用ツール。毎日発生する大量の手作業による画像リネーム・リサイズ作業の「時間短縮」と「品質標準化」を目的に開発しました。ユーザーは画像ファイルをアップロードするだけで、指定規則へのリネームと規定サイズへのリサイズ（余白追加）を一括実行できます。セキュリティのため画像処理はクライアントサイドで行いつつ、命名規則のマスタデータはバックエンド経由でGoogleスプレッドシートから安全に取得します。",
      // --- ここまで ---
      siteUrl: null,
      repoUrl: "#",
      screenshots: [
        './images/rename-resizer (1).png',
        './images/rename-resizer (2).png',
      ],
      // --- stack を修正 ---
      stack: {
        "Platform": "社内画像処理プラットフォーム (事例1)", // プラットフォームへの言及追加
        Frontend: "React",
        Backend: "AWS Amplify Functions (Sheets API連携用)", // バックエンドの役割を明記
        "Data Source": "Google Sheets API",
        Infrastructure: "AWS Amplify Hosting",
        "Core Tech (Processing)": "Canvas API, File API (Client-Side)" // 画像処理技術を追記
      },
      // --- ここまで ---
      // --- points を修正 ---
      points: [
        "プラットフォームツールとしての特化：共通基盤 (事例1) を活用しつつ、部署Aの特定ワークフロー（Google Sheets連携、余白追加リサイズ）に最適化されたツールとして開発。", // プラットフォームへの言及
        "セキュリティと外部連携の両立：画像自体はクライアントサイドで処理しつつ、業種マスタ（Google Sheets）からのデータ取得はバックエンド(AWS Amplify Functions)経由で行う構成を採用。認証情報をフロントエンドに露出させず、安全な外部連携を実現しました。", // クライアント/サーバーの役割分担を明確化
        "心理的不安を軽減するUXフロー：ユーザーが迷わず操作できるよう、「アップロード→設定→確認→ダウンロード」という明確なステップを常に表示。操作の現在地を常に把握可能にし、心理的な不安を取り除くよう設計しました。", // 変更なし
        "パフォーマンスと堅牢性への配慮：大量画像読み込み時のUI応答性を維持するため軽量なプレビュー用サムネイルを生成。また、スプレッドシート連携に失敗しても初期データで処理を継続できるフォールバック機能を実装しました。" // 表現を微調整
      ]
      // --- ここまで ---
    },
    {
      id: 4,
      category: "長期インターンシップ",
      title: "事例1-3：媒体別リサイズ（トリミング）ツール", // タイトルを調整
      thumbnail: `https://placehold.co/600x400/FBBF24/FFFFFF?text=Resize+Tool`,
      // --- description を修正 ---
      description: "画像処理プラットフォーム上の一ツール。複数媒体の規定サイズへ画像を自動トリミング。ブラウザ完結型で高速処理と安全性を両立。",
      // --- ここまで ---
      tags: ["業務効率化", "React", "UI/UX設計", "クライアントサイド処理", "プラットフォームツール"], // tags を更新
      // --- overview を修正 ---
      overview: "画像処理プラットフォーム (事例1) 上で動作する特定部署B向けの専用ツール。規格の異なる複数媒体ごとに毎日大量の画像リサイズ（トリミング方式）作業が発生していたため、これを『誰でも・すばやく・間違いなく』行えるようにすることを目的に開発。セキュリティを最優先し、画像アップロードが不要なクライアントサイド完結型で設計。Web Workersの活用も検討し、大量処理時のパフォーマンスにも配慮しました。", // Web Workersへの言及を修正
      // --- ここまで ---
      siteUrl: null,
      repoUrl: "#",
      screenshots: [],
      // --- stack を修正 ---
      stack: {
        "Platform": "社内画像処理プラットフォーム (事例1)", // プラットフォームへの言及追加
        Frontend: "React",
        Infrastructure: "AWS Amplify Hosting",
        "Core Technologies": "Canvas API, File API, Web Workers",
        "Key Libraries": "Cropper.js, JSZip"
      },
      // --- ここまで ---
      // --- points を修正 ---
      points: [
        "プラットフォームツールとしての特化：共通基盤 (事例1) 上で、部署Bの主要業務である複数媒体向けトリミング作業に特化。ファイル名からの種別自動判定など、業務効率化に繋がる独自ロジックを実装しました。", // プラットフォームへの言及
        "セキュリティ重視のクライアントサイド設計：画像データをサーバーに送信することなく、全ての処理をユーザーのブラウザ内で完結させるアーキテクチャを採用。情報漏洩リスクを根本から排除しました。", // セキュリティへの言及を強調
        "UI/UX設計：左に「画像一覧」、右に「操作パネル」を配置した2カラムレイアウトで、多数の画像を効率的に扱えるUIを実現。全体設定と個別編集のエリアを明確化し、直感的な操作を支援します。", // 表現を微調整
        "パフォーマンス最適化：UI応答性を維持するためプレビュー用サムネイルを生成。また、重い画像処理はWeb Workerを用いてバックグラウンドで実行し、メインスレッドのフリーズを回避する設計としました。", // Web Workers の役割を明確化
        "高度なトリミング機能と柔軟な自動化：自動の中央トリミングを基本としつつ、手動での最適な表示範囲調整も可能に。ファイル名からの設定自動適用と手動上書きの組み合わせで、効率性と品質・柔軟性を両立させました。" // 表現を微調整
      ]
      // --- ここまで ---
    },
    {
      id: 7,
      category: "長期インターンシップ",
      title: "事例2：部署別進捗状況自動分析システム",
      thumbnail: `https://placehold.co/600x400/BFDBFE/FFFFFF?text=Analytics+System`,
      description: "Notionデータを元に経営層への報告資料を自動生成するツール。Python(Flask, Pandas)によるデータ処理・レポート生成部を開発。", // description を修正
      tags: ["データ分析", "レポート自動化", "Python", "Flask", "Pandas", "PowerPoint", "業務効率化"], // tags を更新
      // --- overview を修正 ---
      overview: "インターン生チームの活動成果を社長へ報告する際、Notionからの手動集計に多大な時間がかかっていたため、この定型業務を自動化する目的で開発しました。CSVをWeb画面からアップロードすると、Python(Flask)サーバーでデータを受け取り、Pandasで集計・分析、最終的にPowerPoint形式の報告レポートを自動生成します。フロントエンドのインターフェース設計に加え、データ処理とレポート生成を行うバックエンド部分の開発を担当しました。",
      // --- ここまで ---
      siteUrl: null,
      repoUrl: "#",
      screenshots: [],
      // --- stack を修正 ---
      stack: {
        "Frontend": "HTML5, CSS3, JavaScript (Papa Parse)",
        "Backend": "Python, Flask", // Backend を明記
        "Data Processing": "Pandas, NumPy",
        "Report Generation": "python-pptx",
        "担当": "バックエンド開発（データ処理、レポート生成）、フロントエンド設計" // 担当を追加
      },
      // --- ここまで ---
      // --- points を修正 ---
      points: [
        "バックエンド主導の自動化：CSVアップロードをトリガーに、Flaskサーバーサイドで進捗ステータスの分類、部署別メトリクス集計、コスト分析までを一気通貫で自動処理するロジックをPythonとPandasで実装。手作業によるミスを排除し、報告準備時間を大幅に短縮しました。", // バックエンドでの処理を強調
        "多様なアウトプット形式：分析結果をWeb画面で確認できるだけでなく、集計CSVやPowerPointレポートといった複数形式での出力をバックエンドで生成。利用シーンに応じた柔軟なデータ活用を可能にしました。", // バックエンドでの生成を追記
        "誰でも使えるUI/UXと起動プロセス：フロントエンドはドラッグ＆ドロップでのアップロードに対応し、処理状況がわかるローディング表示を実装。また、バックエンドの起動もダブルクリックだけで完了するバッチファイルを用意し、専門知識がないユーザーでも容易に利用開始できるよう配慮しました。" // フロントエンドとバックエンドの連携に言及
      ]
      // --- ここまで ---
    },
    // --- id: 5 (研究) のオブジェクト全体を差し替え ---
    {
      id: 5,
      category: "研究",
      title: "事例3：VRを安全に利用するためのリアルタイム疲労予測システム",
      thumbnail: `https://placehold.co/600x400/FCA5A5/FFFFFF?text=VR+Research`,
      description: "アイトラッキングデータと機械学習を用い、VR利用時の眼精疲労をリアルタイムで予測・評価するシステムを開発。",
      tags: ["AI", "機械学習", "データ分析", "Python", "VR/AR", "研究開発"],
      overview: "VR市場拡大の障壁となっている長時間利用時の眼精疲労リスクに対し、客観的かつリアルタイムな評価手法の確立を目指しました。従来は主観的な自己申告に頼らざるを得なかった疲労度を、アイトラッキングデータ（視線の動き）から機械学習（ランダムフォレスト）を用いて自動で予測するシステムを開発。これにより、VR利用者の安全性を高める技術基盤を構築しました。",
      siteUrl: null,
      repoUrl: null,
      screenshots: [],
      stack: {
        "研究テーマ": "VR利用時の眼精疲労リアルタイム予測",
        "課題": "主観的評価の限界（客観性・リアルタイム性の欠如）",
        "データ": "アイトラッキング（瞳孔径、サッケード頻度、瞬き間隔）",
        "手法": "機械学習（ランダムフォレスト）",
        "使用技術": "Python (Scikit-learn, Pandas)"
      },
      points: [
        "客観的・定量的な疲労評価を実現：主観アンケート依存から脱却し、『視線データ』という客観的指標に基づき疲労度を数値化する技術を確立しました。",
        "予測精度の向上（60%→85%）：当初の単一指標（瞳孔径）による分析から、複数指標（サッケード頻度、瞬き間隔など）を統合し、アルゴリズムも改良（線形回帰→ランダムフォレスト）することで、実用レベルの予測精度を達成しました。",
        "リアルタイム処理の実現：特徴量抽出の計算量を削減する前処理アルゴリズムを開発し、VR利用中のリアルタイムな疲労度予測を可能にしました。",
        "幅広い応用可能性：VRゲームの品質管理、医療リハビリテーションでの安全性確保、教育分野でのVR教材利用促進など、様々な産業への貢献が期待できる技術です。"
      ]
    },
    // --- ここまで ---
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
    // --- id: 8 (VRゲーム) のオブジェクト全体を差し替え ---
    {
      id: 8, // IDは既存のものと重複しないように調整してください
      category: "学内プロジェクト",
      title: "事例5：VR脱出ゲーム（オープンキャンパス展示用）",
      thumbnail: `https://placehold.co/600x400/D8B4FE/FFFFFF?text=VR+Escape+Game`, // 仮のサムネイル画像です。適切な画像パスに差し替えてください。
      description: "VR未経験者向けに開発したUnity製の脱出ゲーム。3人チームで制作し、オープンキャンパスで展示しました。",
      tags: ["VR", "Unity", "C#", "XR Interaction Toolkit", "Meta Quest", "チーム開発", "学内展示"],
      overview: "オープンキャンパス来場者、特にVR未経験者にVRの楽しさを伝える目的で、3人チームで開発した脱出ゲームです。私は主にビジュアル（UIデザイン、3Dモデルの配置・調整など）を担当しました。他のメンバーが謎解き制作、環境構築を担当し、協力して完成させました。プレイヤーはMeta Questを装着し、コントローラーを使って2つの部屋を探索しながら3つの謎解きに挑戦します。",
      siteUrl: null,
      repoUrl: "https://github.com/takutaku14/VRGame-OC",
      screenshots: [], // スクリーンショットがあればここに追加してください (例: './images/vr-game-1.png')
      stack: {
        "Engine": "Unity",
        "Language": "C#",
        "VR SDK": "XR Interaction Toolkit",
        "Target Device": "Meta Quest",
        "担当": "ビジュアル（UIデザイン、モデル配置・調整）",
        "チーム構成": "3名（ビジュアル担当、謎解き担当、環境構築担当）",
        "Key Components": "CharacterController, TextMeshPro, Coroutines, Physics",
      },
      points: [
        "チームでの役割分担と連携：私はビジュアル面を担当し、他のメンバー（謎解き担当、環境構築担当）と連携しながらプロジェクトを進めました。",
        "VR未経験者への配慮：VRに慣れていない来場者でも楽しめるよう、XR Interaction Toolkitを用いた直感的な操作とシンプルなゲームルールをチームで探求・実装しました。", // 表現を修正
        "オープンキャンパスでの学び：実際に多くの来場者に体験してもらいフィードバックを得る中で、謎解きの難易度調整や視点高さの考慮など、より良いVR体験を創り出すための改善点を発見できました。", // 表現を修正
        "VR酔いへの課題認識：想定以上にVR酔いを訴える方が多く、快適なVR体験を提供するための移動方法や描画設定など、技術的な課題と向き合う貴重な機会となりました。", // 表現を修正
        "VR体験の提供価値：普段VRに触れる機会のない層からは『新鮮で楽しい』というポジティブな反応が多く、VR技術を用いた体験型コンテンツの導入効果を実感しました。",
      ]
    },
    // --- ここまで ---
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
