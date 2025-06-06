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
        // Vos couleurs personnalisées
        'elynor': {
          'orange': '#FF7700',
          'rose': '#FF3366',
          'pink': '#FF4883',
          'blue-light': '#E9ECF5',
          'red': '#FF0055',
          'red-star': '#FF0033',
        }
      },
    },
  },
  plugins: [],
}
export default config