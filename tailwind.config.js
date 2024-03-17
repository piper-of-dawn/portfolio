/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}","./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridAutoRows: {
        '2fr': 'minmax(0, 2fr)',
      }
  },
  fontFamily: {
    'sans': ['Supreme'],
    'mono': ['var(--font-geist-mono)','JetBrains Mono','Consolas', 'sans-serif'],
    'switzer': ['Source Serif 4','Switzer'],
    serif: ['var(--font-serif)'],
},

  fontWeight: {
    'light': 300,
    'normal': 400,
    'medium': 500,
    'mediumx': 550, 
    'semibold': 600, // 'bold' is aliased to '700
    'bold': 700,
    'black': 900,
  },

  fontSize: {
    'subtitle':'0.75rem',
    'small': '0.6rem',
    '14px': '0.875rem',
    'normal': '14px',
    'read': '20px',  
    'huge': '5rem',
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