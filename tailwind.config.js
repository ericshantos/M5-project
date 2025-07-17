/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#60A5FA', // Blue-400
          DEFAULT: '#3B82F6', // Blue-500
          dark: '#2563EB', // Blue-600
        },
        secondary: {
          light: '#A78BFA', // Purple-400
          DEFAULT: '#8B5CF6', // Purple-500
          dark: '#7C3AED', // Purple-600
        },
        background: {
          light: '#F9FAFB', // Gray-50
          DEFAULT: '#FFFFFF', // White
          dark: '#1F2937', // Gray-800
          darker: '#111827', // Gray-900
        },
        text: {
          light: '#1F2937', // Gray-800
          DEFAULT: '#374151', // Gray-700
          dark: '#F9FAFB', // Gray-50
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'custom-light': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'custom-dark': '0 4px 6px rgba(255, 255, 255, 0.05)',
      },
    },
  },
  plugins: [],
};
