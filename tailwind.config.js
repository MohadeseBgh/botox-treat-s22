/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        'color0': '#E2E2EA',
        'color1': '#FAFAFB',
        'color2': '#92929D',
        'color3': '#FC5A5A',
        'color4': '#F1F1F5',
        'color5': '#82C43C',
        'color6': '#696974',
      },
    },
  },
  plugins: [],
}
