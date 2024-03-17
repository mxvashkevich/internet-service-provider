/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontSize: {
        '2.5xl': '1.75rem',
      },
      height: {
        section1: '800px',
        section2: '1000px',
        section3: '900px',
        section4: '700px',
        section5: '750px',
        'tariff-card': '42.1875rem',
        footer: '115px',
      },
    },
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
    },
  },
  plugins: [],
};
