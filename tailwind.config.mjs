/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        body: ['system-ui']
      },
      backgroundImage: {
        'text-gradient': 'linear-gradient(to right, #c1e1ff, #76b6ff, #3f9eff)'
      }
    },
  },
  plugins: [],
};
