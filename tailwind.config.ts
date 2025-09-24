import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      transitionDuration: {
        'custom': '700ms',
      },
      colors: {
        primary: {
          DEFAULT: '#18181b',
          light: '#27272a',
          dark: '#09090b',
        },
        secondary: {
          DEFAULT: '#71717a',
          light: '#a1a1aa',
        },
        dark: '#18181b',
        light: '#fafafa',    // zinc-50
        
        bg: {
          light: '#f4f4f5',  // zinc-50
          dark: '#18181b',   // zinc-900
          'light-sof': '#f1f1f1', //zinc-100
          'dark-sof': 'rgba(24, 24, 27, 0.95)',
        },
        background: '#fafafa',
        surface: '#ffffff',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
