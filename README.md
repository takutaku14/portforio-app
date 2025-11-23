# Portfolio | 藤井 琢也 (Takuya Fujii)

![React](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/-Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/-Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![Status](https://img.shields.io/badge/Status-Active-success?style=flat-square)

> **「技術で、ビジネス価値を創出する。」**
> 戦略的思考と実装力を兼ね備えたエンジニア、藤井琢也のポートフォリオサイトです。

<br />

<div align="center">
  <a href="https://takutaku14.github.io/portforio-app/">
    <img src="https://img.shields.io/badge/👀_Live_Demo-View_Portfolio-blue?style=for-the-badge&logo=github" alt="View Portfolio" />
  </a>
</div>

<br />

![Portfolio Preview](public/portfolio-preview.png)

<br />

<br />

## 📖 概要 (Overview)
私のエンジニアとしてのスキルセット、経歴、そして「ビジネスインパクト」にこだわったプロジェクト実績を紹介するシングルページアプリケーション（SPA）です。

単なる自己紹介サイトではなく、**読み手（採用担当者様）の体験**を最優先に設計しました。情報のスキャナビリティ（読みやすさ）と、アプリとしての快適な操作性を両立させています。

## 🛠 技術スタック (Tech Stack)

| Category | Technology | Why I chose it |
| :--- | :--- | :--- |
| **Frontend** | React 18 | コンポーネント指向による再利用性と状態管理の効率化のため |
| **Build Tool** | Vite | 高速なHMR（Hot Module Replacement）による開発体験の向上と、ビルド最適化のため |
| **Styling** | Tailwind CSS | クラス名管理のコスト削減と、デザインシステム（Apple風UI）の迅速な構築のため |
| **Icons** | Lucide React | 軽量で統一感のあるSVGアイコンセットを採用し、視認性を確保 |
| **Deploy** | GitHub Pages | CI/CDパイプライン（GitHub Actions）との親和性を考慮 |

## ⚡️ エンジニアリングのこだわり (Key Engineering Highlights)

コードを見る際は、特に以下の実装ポイントにご注目ください。

### 1. パフォーマンス最適化 (Performance)
ユーザー体験を損なわないよう、徹底的な軽量化を行っています。
* **Intersection Observer API:** スクロール連動アニメーションにおいて、監視ロジックを最適化し、要素が表示された瞬間に監視を解除（`disconnect`）することでメモリリークと不要な再レンダリングを防止しています。
* **`will-change` プロパティ:** CSSハードウェアアクセラレーションを適切に有効化し、アニメーション時のGPU負荷を最適化しました。

### 2. コンポーネント設計とUI/UX (Architecture & UX)
* **Apple Human Interface Guidelines** を意識した、清潔感と信頼感のあるデザインシステムを構築。
* **Atomic Design** の思想を取り入れた再利用可能なコンポーネント設計（Card, Badge, SectionHeader等）。
* 実績画像の閲覧体験を向上させるため、**カスタムカルーセル（スライドショー）機能**をモーダル内に実装。

### 3. アクセシビリティ (a11y)
* セマンティックなHTML構造（`<main>`, `<section>`, `aria-label`）を意識。
* 十分なコントラスト比の確保と、キーボード操作への配慮。

## 📂 ディレクトリ構成 (Project Structure)

主要なファイル構成は以下の通りです。

```text
root
├── public/
│   └── images/          # 実績画像（WebP/PNG最適化済み）
├── src/
│   ├── App.jsx          # メインロジックとコンポーネント構成
│   ├── App.css          # グローバルスタイル
│   ├── index.css        # Tailwindディレクティブとカスタムユーティリティ
│   └── main.jsx         # エントリーポイント
├── vite.config.js       # Vite設定
└── tailwind.config.js   # デザインシステム設定
````

## 🚀 ローカルでの実行方法 (Getting Started)

リポジトリをクローンし、以下のコマンドでローカル環境を立ち上げることができます。

```bash
# 1. Clone the repository
git clone [https://github.com/takutaku14/portforio-app.git](https://github.com/takutaku14/portforio-app.git)

# 2. Navigate to the directory
cd portforio-app

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

## 📬 Contact

もし私の経歴や技術に興味を持っていただけましたら、ぜひご連絡ください。

  * **GitHub:** [takutaku14](https://www.google.com/search?q=https://github.com/takutaku14)
  * **Portfolio:** [takutaku14.github.io/portforio-app](https://takutaku14.github.io/portforio-app/)

-----

© 2025 Takuya Fujii. All Rights Reserved.

