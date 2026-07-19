module.exports = {
    /** @type {import('tailwindcss').Config} */
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            light: '#9B59D0',
            DEFAULT: '#7B2FBE',
            dark: '#5A1F8A',
          },
          secondary: {
            light: '#f8f9fa',
            DEFAULT: '#e9ecef',
            dark: '#dee2e6',
          },
          gold: {
            DEFAULT: '#F59E0B',
            light: '#FCD34D',
          },
          green: {
            download: '#22C55E',
          },
        },
        fontFamily: {
          vazir: ['Vazirmatn', 'Tahoma', 'Arial', 'sans-serif'],
        },
      },
    },
    plugins: [],
  };
  