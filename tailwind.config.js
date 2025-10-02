/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors: {
        bg: '#0D1117',
        primary: '#1F6FEB',
        accent: '#58A6FF',
        textMain: '#F0F6FC',
        textMuted: '#8B949E',
      },
      animation: {
        marqueeRight: 'marqueeRight 40s linear infinite',
      },
      keyframes: {
         marqueeRight: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      
      },
      fontFamily: {
        primary: ['Inter', 'sans-serif'],
        heading: ['Oswald', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      oswald: ['Oswald', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

