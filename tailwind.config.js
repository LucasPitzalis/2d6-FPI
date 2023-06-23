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
    },
  },
  plugins: [],
}

