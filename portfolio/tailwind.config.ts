
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'black': '#000000',
        'main': '#EFEFE9',
        'primary': '#324B5A',
        'secondary': '#959FAD',
        'accent': '#024580',
      },
    },
  },
  plugins: [],
} 
export default config

