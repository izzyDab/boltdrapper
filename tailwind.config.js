/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#0066FF',
          dark: '#0055CC',
          light: '#4D94FF',
        },
        background: {
          dark: '#0D0D1F',
          darker: '#0A0A19',
          card: '#111130',
        },
      },
    },
  },
  plugins: [
    function({ addBase }) {
      addBase({
        'h1, h2, h3, h4, h5, h6': { fontFamily: 'Space Grotesk, sans-serif' },
      });
    },
  ],
};