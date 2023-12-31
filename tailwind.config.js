/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      display: ["group-hover"],
      aspectRatio: {
        'avatar': '4 / 3'
      },
      width: {
          a4: '210mm',
      },
      height: {
        a4: '297mm',
      },
      screens: {
        'md': '794px',
        'xs': '550px',
        'xxs': '400px'
      },
      transitionProperty: {
        'height': 'height',
      }
    },
  },
  plugins: [],
}

