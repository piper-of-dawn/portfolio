/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'polar-night': '#292E39',
        'polar-snow': '#ECEFF4',
        'frost-teal': '#A3BE8C',
        'slate-gray': '#657B83',
        'frost-azure': '#6CA1C1',
        'aurora-green': '#A3BE8C',
        'aurora-purple': '#A78EA2',
        'frost-aqua': '#88B3B3',
        'aurora-red': '#BF616A'
      },
      gridAutoRows: {
        '2fr': 'minmax(0, 2fr)',
      },

    },
    fontFamily: {
      'sans': ['-apple-system', 'BlinkMacSystemFont', 'Supreme', 'Arial'],      
      'mono': ['var(--font-geist-mono)', 'JetBrains Mono', 'Consolas', 'sans-serif'],
      'serif': ['var(--font-serif)','NewComputerModern10', 'Cambria', 'Times New Roman', 'Times', 'serif'],
    },

    fontWeight: {
      'thin': 200,
      'light': 300,
      'normal': 400,
      'medium': 500,
      'mediumx': 550,
      'semibold': 600, // 'bold' is aliased to '700
      'bold': 700,
      'black': 900,
    },


    fontSize: {
      'subtitle': '0.75rem',
      'small': '0.6rem',
      '10px': '10px',
      '12px': '12px',
      '14px': '0.875rem',
      'normal': '14px',
      'read': '19px',
      'huge': '3rem',
      'large': '1rem',
      'verylarge': '1.5rem',
      'big': '2rem',
      'verybig': '3rem',
      'tiny': '0.4rem',

    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}