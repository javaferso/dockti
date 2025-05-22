//tailwind.config.js

module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': {
          400: '#60A5FA',
          600: '#2563EB',
          700: '#1D4ED8',
          900: '#1E3A8A',
        }
      },
    },
  },
  plugins: [],
};

