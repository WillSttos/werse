/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#050505',
          blue: '#0040c1',
          background: '#050505',
          secondary: '#2E2157',
          tertiary: '#E80074',
          text: '#F5F5F5',
          secondary_text:'#FF932B',
          accent: '#FF932B' // Roxo original para detalhes específicos
        }
      },
      fontFamily: {
        display: ['Poppins', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        'glow': '0 0 20px rgba(255, 145, 0, 0.5)',
        'glow-secondary': '0 0 20px rgba(81, 11, 128, 0.5)',
        'glow-tertiary': '0 0 20px rgba(232, 0, 116, 0.3)',
        'glass': '0 8px 32px rgba(21, 21, 21, 0.19)'
      },
      backdropBlur: {
        'xs': '2px'
      },
      animation: {
        'fadeInUp': 'fadeInUp 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)'
          },
          '50%': {
            transform: 'translateY(-20px)'
          }
        }
      }
    },
  },
  plugins: [],
};