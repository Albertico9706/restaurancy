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
      animation:{
        "slideinright": 'slideinright 2s linear infinite'
      },
      keyframes: {
        slideinright:{
          "0%":{transform: "translateX(-20vw)"},
          "100":{transform: "translateX(-20vw)"}
        }
      }
    },
  },
  darkMode: "class",
  plugins: [],
}
export default config
