/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#001F3F',
          800: '#003366',
          700: '#004080',
        },
      },
    },
  },
  plugins: [],
};
