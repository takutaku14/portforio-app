export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}", // App.jsx対応
  ],
  theme: {
    extend: {
      // z-index戦略 (DSIGN_BASE.md Section 7.2)
      zIndex: {
        'floating': 'var(--z-floating)',
        'fixed': 'var(--z-fixed)',
        'dropdown': 'var(--z-dropdown)',
        'modal': 'var(--z-modal)',
        'toast': 'var(--z-toast)',
        'top': 'var(--z-top)',
      },
      // カラートークン (Section 3.1)
      colors: {
        'surface': 'var(--bg-surface)',
        'surface-elevated': 'var(--bg-surface-elevated)',
        'primary': 'var(--color-primary)',
        'primary-hover': 'var(--color-primary-hover)',
      },
      // 角丸 (Section 5.1)
      borderRadius: {
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)',
        'xl': 'var(--radius-xl)',
      },
      // アニメーション (Section 6.1)
      transitionTimingFunction: {
        'spring': 'var(--ease-spring)',
      },
      transitionDuration: {
        'fast': 'var(--duration-fast)',
        'normal': 'var(--duration-normal)',
        'slow': 'var(--duration-slow)',
      },
    },
  },
  plugins: [],
}

