import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#4661E6',
        'blue-light': '#62BCFA',
        'purple': '#AD1FEA',
        'pastel-orange': '#F49F85',
        'navy': '#373F68',
        'gray-dark': '#647196',
        'gray': '#F2F4FF',
        'gray-light': '#F7F8FD',
        'indigo': '#3A4374',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
