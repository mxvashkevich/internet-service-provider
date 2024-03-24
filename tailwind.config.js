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
        bSection1: '750px',
        bSection2: '1300px',
        bSection3: '1400px',
        bSection4: '750px',
        bSection5: '750px',
        aSection1: '500px',
        aSection2: '350px',
        aSection3: '800px',
      },
      colors: {
        'my-blue': '#4285f4',
        'my-red': '#ea4336',
        'my-orange': '#f29900',
        'my-green': '#178038',
        'my-white': '#ffffff',
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
