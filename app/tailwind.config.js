/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          // Agora você tem classes utilitárias personalizadas
          roboto: ['var(--font-roboto)', 'sans-serif'],
          montserrat: ['var(--font-montserrat)', 'sans-serif'],
          poppins: ['var(--font-poppins)', 'sans-serif'],
          openSans: ['var(--font-open-sans)', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }
  