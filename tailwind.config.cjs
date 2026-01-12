/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'coffee-deep': '#120806',
        'coffee-dark': '#1b0f0a',
        'coffee-medium': '#3b2416',
        'coffee-soft': '#6a4b33',
        'coffee-gold': '#d4a056',
        'coffee-gold-soft': '#e4b878',
        'cream-light': '#f5e9dd',
        'cream-soft': '#e6d4c2',
        'accent-emerald': '#3bbf9b'
      },
      boxShadow: {
        'glow-gold': '0 0 30px rgba(212,160,86,0.4)'
      },
      fontFamily: {
        display: ['system-ui', 'ui-sans-serif', 'sans-serif'],
        body: ['system-ui', 'ui-sans-serif', 'sans-serif']
      }
    }
  },
  plugins: []
};

