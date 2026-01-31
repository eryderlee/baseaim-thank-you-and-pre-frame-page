import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        'dm-serif': ['DM Serif Display', 'serif'],
        'work-sans': ['Work Sans', 'sans-serif'],
      },
      screens: {
        xs: '475px',
      },
      colors: {
        'primary-blue': '#2563eb',
        'sky-blue': '#87CEEB',
        'deep-blue': '#0A2E6E',
        'medium-blue': '#0052CC',
        'bright-blue': '#0066FF',
        'azure-blue': '#4FC3F7',
        'light-blue': '#6BB6FF',
        'powder-blue': '#B0E0E6',
        'brand-red': '#E11D48',
        'brand-orange': '#F97316',
        'brand-yellow': '#EAB308',
        'ice-blue': '#F8FCFF',
        'sky-tint': '#E1F5FE',
        'cloud-white': '#E3F2FD',
      },
    },
  },
  plugins: [],
}
export default config
