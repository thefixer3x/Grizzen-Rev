/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2A2859',
          orange: '#FF7748',
          gold: '#FFB649'
        },
        secondary: {
          offwhite: '#F9F8F6',
          gray: '#F4F4F4'
        }
      },
      fontFamily: {
        display: ['Clash Display', 'sans-serif'],
        body: ['DM Sans', 'sans-serif']
      },
      fontSize: {
        base: '16px',
        'scale-ratio': '1.25'
      },
      borderRadius: {
        DEFAULT: '12px'
      },
      boxShadow: {
        card: '0 4px 12px rgba(0,0,0,0.08)'
      },
      maxWidth: {
        content: '1200px'
      },
      spacing: {
        section: '32px'
      }
    }
  },
  plugins: []
};