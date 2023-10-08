import colors from 'tailwindcss/colors.js'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/index.html",
    "./src/**/*.js",
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      fontFamily: {
        'open-sans': ['"Open Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'logo-backdrop': 'url(/images/logo-bg.png)',
        'promo-backdrop': 'url(/images/promo.jpg)',
      },
      backgroundSize: {
        fill: '100% 100%',
      },
      colors: {
        primary: '#fff',
        secondary: colors.gray[400],
        app: {
          body: '#333',
          primary: '#80bf55',
        },
      },
    },
  },
  plugins: [],
}

