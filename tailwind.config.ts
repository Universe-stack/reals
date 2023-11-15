import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'blue-primary':'#4C56BA',
        'blue-secondary':'#29275F',
        'pink-primary':'#E6A7B3',
        'orange-primary': '#F64B53',
        'gray-primary':'#FAFAFB',
        'gray-mid': '#A9B2C8',
        'gray-secondary': '#929CB7'
       }
    },
  },
  plugins: [require("daisyui")],
}
export default config
